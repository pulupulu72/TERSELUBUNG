# TERSELUBUNG GIGS

Platform editorial skena musik bawah tanah — dibangun sebagai *majalah cetak* yang
diterjemahkan ke web. Hitam-krem, tipografi keras, empat aksen cetak (pink, kuning,
hijau, biru), tekstur kertas, dan tata letak bergaya *double-page spread*.

Statis, tanpa framework, tanpa build step wajib. Cukup buka `index.html`.

## Struktur

```
index.html              Halaman utama (dateline → nameplate → nav → fitur → departemen/arsip → impresum)
debu-dengung.html       Halaman artikel: "Debu & Dengung — Luka Senyap"
css/style.css           Seluruh sistem visual (token, tipografi, komponen)
js/script.js            Interaksi minimal (form langganan)
fonts/                  Lima font, self-hosted (woff2, subset Latin)
assets/images/          Logo wordmark
build.py                Membuat berkas preview*.html mandiri (opsional)
```

Lima keluarga font: UnifrakturCook, Anton, Oswald, Inter, IBM Plex Mono — semua
di-*host* sendiri, jadi situs tidak bergantung pada CDN mana pun.

## Menjalankan secara lokal

Tidak butuh server. Buka `index.html` langsung di browser, atau jalankan server statis:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Membuat berkas preview mandiri (opsional)

`preview.html` dan `preview-debu-dengung.html` adalah versi satu-berkas (CSS, JS, font,
dan logo ditanam sebagai data-URI) untuk dibagikan/dilihat tanpa berkas pendamping.
Keduanya adalah artefak build dan tidak disertakan di repo. Regenerasi dengan:

```bash
python3 build.py
```

## Deploy

Situs statis — cocok untuk GitHub Pages, Netlify, Vercel, atau hosting statis apa pun.
Untuk GitHub Pages: aktifkan Pages dari branch `main`, folder `/root`.

---

*Bising, jujur, dan mandiri.*
