# TERSELUBUNG GIGS

Platform editorial skena musik bawah tanah — dibangun sebagai *majalah cetak* yang
diterjemahkan ke web. Hitam-krem, tipografi keras, empat aksen cetak (pink, kuning,
hijau, biru), tekstur kertas, dan tata letak bergaya *double-page spread*.

Statis, tanpa framework, tanpa build step. Halaman utama: `index.html` (root).

## Struktur

```
index.html              Halaman utama — Siaran (headline + kartu terbaru)
articles/
  arsip.html            Halaman Arsip (kabar/artikel lama)
  kebisingan-sopan.html
  debu-dengung.html     Halaman artikel
  pacitan.html
  _template.html        Kerangka artikel siap-salin
assets/
  css/style.css         Sistem visual utama (token, tipografi, komponen)
  css/article.css       Tambahan khusus sebagian halaman artikel
  js/articles.js        ★ Daftar konten — SATU sumber data, edit di sini
  js/script.js          Renderer feed Siaran/Arsip + form langganan
  fonts/                Lima font self-hosted (woff2, subset Latin)
  images/               Logo wordmark
```

Semua tautan & aset memakai **path absolut** (`/assets/...`, `/articles/...`), jadi
halaman bekerja sama dari mana pun letaknya tanpa salah resolve.

Lima keluarga font: UnifrakturCook, Anton, Oswald, Inter, IBM Plex Mono — semua
di-*host* sendiri, jadi situs tidak bergantung pada CDN mana pun.

## Menambah berita / artikel

Cukup edit satu file: `assets/js/articles.js`.

1. *(Opsional, untuk halaman penuh)* salin `articles/_template.html` jadi
   `articles/nama-artikel.html`, lalu isi.
2. Tambah satu entri di `assets/js/articles.js` — isi `date` (format `YYYY-MM-DD`)
   dan `file` dengan **path absolut**, mis. `/articles/nama-artikel.html`
   (atau `"#"` kalau halamannya belum dibuat).
3. Simpan, refresh. Otomatis: artikel **terbaru** jadi headline, **3 berikutnya**
   jadi kartu Siaran, **selebihnya** pindah ke halaman Arsip. (Jumlah kartu diatur
   lewat `SIARAN_CARDS` di `assets/js/script.js`.)

## Menjalankan secara lokal

Perlu server statis (path absolut butuh root yang benar; membuka berkas via
`file://` tidak cukup). Dari dalam folder `TERSELUBUNG/`:

```bash
npx serve .              # atau:  python3 -m http.server 8000
```

Lalu buka `http://localhost:<port>/`.

## Deploy

Situs statis — cocok untuk GitHub Pages, Netlify, Vercel, atau hosting statis apa pun.
Halaman masuknya `index.html` di root, jadi URL utama langsung bersih (`/`).

Karena berkas situs ada di subfolder `TERSELUBUNG/` dalam repo, di Vercel setel
**Root Directory = `TERSELUBUNG`** (Framework: Other, tanpa build command).

---

*Bising, jujur, dan mandiri.*
