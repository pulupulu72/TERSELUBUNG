# Cara Update Berita — TERSELUBUNG GIGS

Panduan singkat menambah/mengganti berita. **Tidak perlu menyentuh
`index.html` atau `arsip.html`** — keduanya menata diri sendiri otomatis
dari `assets/js/articles.js`.

---

## Peta folder

```
TERSELUBUNG/
├── index.html              ← JANGAN disentuh (headline + Siaran otomatis)
├── articles/
│   ├── _template.html      ← SALIN ini untuk artikel baru
│   ├── nama-berita.html    ← simpan halaman artikel baru di sini
│   └── arsip.html          ← JANGAN disentuh (daftar Arsip otomatis)
└── assets/
    ├── images/             ← simpan foto/gambar berita di sini
    └── js/articles.js      ← DAFTARKAN berita di sini (1 entri per berita)
```

---

## Menambah berita baru — 3 langkah

### 1. Buat halaman artikel → folder `articles/`
- Salin `articles/_template.html`, ganti nama jadi `articles/nama-berita.html`
- Isi semua bagian bertanda `[ ... ]`
- (Contoh jadi: `articles/ombak-patah.html`)

### 2. (Opsional) Taruh gambar → folder `assets/images/`
- Simpan: `assets/images/nama-berita.jpg`
- Panggil dengan path absolut: `/assets/images/nama-berita.jpg`

### 3. Daftarkan ke feed → `assets/js/articles.js`
Tambah satu blok **di paling atas** daftar:

```js
{
  title:    "Judul Berita",
  band:     "Nama Band · Format",          // opsional
  kategori: "Rilis",                       // label kategori
  tone:     "green",                       // green | yellow | pink
  date:     "2026-07-05",                  // WAJIB, format YYYY-MM-DD
  read:     "5 Menit",
  excerpt:  "Ringkasan singkat berita...",
  file:     "/articles/nama-berita.html",  // path absolut; "#" kalau belum ada halaman
  art:      '<img src="/assets/images/nama-berita.jpg" alt="">'   // atau '<svg>…</svg>'
},
```

Simpan, lalu refresh. Selesai.

---

## Apa yang otomatis terjadi

Diurut berdasarkan `date` (terbaru lebih dulu):

| Posisi | Tampil di |
|--------|-----------|
| Artikel ke-1 (paling baru) | **HEADLINE** besar di halaman utama |
| 3 berikutnya | kartu **SIARAN** di halaman utama |
| Selebihnya | daftar **ARSIP** (halaman `arsip.html`) |

> Jumlah kartu Siaran diatur lewat `SIARAN_CARDS` di `assets/js/script.js`.

Jadi tiap menambah berita baru, yang lama otomatis bergeser turun
(headline → kartu Siaran → Arsip). Tak ada yang perlu dipindah manual.

---

## Aturan penting

- **Selalu path absolut**: `/articles/...` dan `/assets/...` (jangan `../` atau relatif),
  supaya tautan tidak rusak di halaman mana pun.
- **`date` menentukan urutan** — pastikan format `YYYY-MM-DD` dan benar.
- **`tone`** hanya boleh: `green`, `yellow`, atau `pink`.
- Jangan edit `index.html` / `arsip.html` untuk konten berita.

---

## Mengganti / menghapus berita

- **Ganti isi**: edit file `articles/nama-berita.html` + perbarui entri-nya di `articles.js`.
- **Hapus**: hapus blok entri di `articles.js` (dan hapus file `articles/nama-berita.html` bila tak dipakai).

---

## Publish (online)

Setelah file disimpan:
```bash
git add -A
git commit -m "Tambah berita: <judul>"
git push
```
Vercel otomatis deploy ulang dalam beberapa detik.
