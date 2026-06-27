#!/usr/bin/env python3
"""
build.py — bundle each page into a standalone, single-file preview.

Inlines the stylesheet, the script, every self-hosted font, and the logo as
data-URIs so the result renders with no companion files. Cross-links between
pages are rewritten to point at the bundled siblings.

Usage:  python3 build.py
"""
import base64
import pathlib
import re

ROOT = pathlib.Path(__file__).parent

# --- gather shared assets -------------------------------------------------
css = (ROOT / "css/style.css").read_text()
js = (ROOT / "js/script.js").read_text()
fonts = {p.name: base64.b64encode(p.read_bytes()).decode()
         for p in (ROOT / "fonts").glob("*.woff2")}
logo = base64.b64encode((ROOT / "assets/images/terselubung-logo.png").read_bytes()).decode()

# inline @font-face src urls
css = re.sub(
    r'url\("\.\./fonts/([^"]+)"\)\s*format\("woff2"\)',
    lambda m: f'url("data:font/woff2;base64,{fonts[m.group(1)]}") format("woff2")',
    css,
)


def bundle(src_name: str) -> str:
    html = (ROOT / src_name).read_text()
    html = html.replace('src="assets/images/terselubung-logo.png"',
                        f'src="data:image/png;base64,{logo}"')
    html = re.sub(r'\s*<link rel="preload"[^>]*>', '', html)
    html = html.replace('<link rel="stylesheet" href="css/style.css" />',
                        "<style>\n" + css + "\n</style>")
    html = html.replace('<script src="js/script.js"></script>',
                        "<script>\n" + js + "\n</script>")
    return html


# homepage — link the featured card to the bundled article
home = bundle("index.html").replace('href="debu-dengung.html"',
                                    'href="preview-debu-dengung.html"')
(ROOT / "preview.html").write_text(home)

# article — link the back-links to the bundled homepage
art = bundle("debu-dengung.html") \
    .replace('href="index.html#departemen"', 'href="preview.html#departemen"') \
    .replace('href="index.html"', 'href="preview.html"')
(ROOT / "preview-debu-dengung.html").write_text(art)

print("Built: preview.html, preview-debu-dengung.html")
