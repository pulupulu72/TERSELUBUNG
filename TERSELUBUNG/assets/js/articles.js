/* =============================================================
   TERSELUBUNG GIGS — articles.js  (DAFTAR BERITA / SIARAN)
   -------------------------------------------------------------
   INI SATU-SATUNYA FILE YANG PERLU KAMU EDIT saat ada berita baru.

   Cara menambah berita:
     1. Salin satu blok { ... } di bawah, taruh di paling atas daftar.
     2. Isi datanya. Yang WAJIB: title, kategori, tone, date, read,
        excerpt, file.  (band & art opsional.)
     3. Pastikan "date" formatnya  "YYYY-MM-DD".
     4. Simpan, lalu refresh halaman.

   Otomatis terjadi (berdasarkan TANGGAL, terbaru lebih dulu):
     • Artikel ke-1 (paling baru)  -> HEADLINE besar di SIARAN.
     • 3 berikutnya                -> kartu di SIARAN.
     • Selebihnya                  -> daftar ARSIP.
   Jadi begitu kamu tambah artikel baru, yang sebelumnya jadi
   headline otomatis turun. Tidak perlu utak-atik index.html.
   (Jumlah kartu Siaran diatur lewat SIARAN_CARDS di script.js.)

   Untuk artikel yang punya halaman penuh, salin  _template.html
   jadi  nama-artikel.html  lalu isi  "file"  dengan nama itu.

   Keterangan kolom:
     tone     : "green" | "yellow" | "pink"  (warna label kategori)
     file     : nama berkas artikel, mis. "debu-dengung.html"
                (pakai "#" kalau halamannya belum dibuat)
     art      : potongan <svg> sampul (opsional; boleh dihapus)
   ============================================================= */
window.TG_ARTICLES = [

  {
    title:    "Kebisingan yang Sopan",
    band:     "Selokan Kota · Album ‘Sopan’",
    kategori: "Resensi",
    tone:     "pink",
    date:     "2026-06-26",
    read:     "8 Menit",
    excerpt:  "Setelah lima tahun cuma beredar lewat kaset bajakan dan rekaman gig yang buram, kuartet noise-pop ini melepas album penuh — dan ternyata jauh lebih lembut, lebih pahit, dan lebih jujur dari yang kita kira.",
    file:     "kebisingan-sopan.html",
    art: '<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Sampul album Sopan">\
      <circle cx="39" cy="44" r="29" fill="#1a2bd8" style="mix-blend-mode:multiply"/>\
      <circle cx="62" cy="39" r="29" fill="#ed1a5b" style="mix-blend-mode:multiply"/>\
      <g fill="#0e0e0e">\
        <rect x="8" y="76" width="3.4" height="11"/><rect x="13" y="70" width="3.4" height="17"/><rect x="18" y="79" width="3.4" height="8"/><rect x="23" y="66" width="3.4" height="21"/><rect x="28" y="73" width="3.4" height="14"/><rect x="33" y="62" width="3.4" height="25"/>\
      </g>\
      <circle cx="73" cy="67" r="9" fill="none" stroke="#0e0e0e" stroke-width="1.7"/>\
    </svg>'
  },

  {
    title:    "Debu & Dengung",
    band:     "Luka Senyap · Demo Tape",
    kategori: "Rilisan",
    tone:     "green",
    date:     "2026-06-24",
    read:     "6 Menit",
    excerpt:  "Demo tape pertama Luka Senyap direkam di kamar kos berdebu — satu mikrofon, satu tape recorder warisan, satu amplifier yang dengungnya tak pernah benar-benar mati. Enam lagu yang memeluk desis pita dan cacat rekaman sebagai bagian dari musiknya. Kotor, hangat, dan anehnya jujur.",
    file:     "debu-dengung.html",
    art: '<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Sampul Debu & Dengung">\
      <circle cx="40" cy="46" r="27" fill="#1a2bd8" style="mix-blend-mode:multiply"/>\
      <circle cx="60" cy="40" r="25" fill="#ed1a5b" style="mix-blend-mode:multiply"/>\
      <g fill="none" stroke="#0e0e0e" stroke-width="1.4">\
        <path d="M18 84 A 22 22 0 0 1 62 84"/><path d="M24 84 A 16 16 0 0 1 56 84"/><path d="M30 84 A 10 10 0 0 1 50 84"/>\
      </g>\
      <circle cx="30" cy="28" r="11" fill="none" stroke="#0e0e0e" stroke-width="1.6"/>\
      <circle cx="74" cy="72" r="8" fill="#f4c20d"/>\
      <g fill="#0e0e0e"><circle cx="80" cy="20" r="1.1"/><circle cx="86" cy="28" r="0.8"/><circle cx="76" cy="32" r="0.7"/><circle cx="88" cy="40" r="1"/><circle cx="82" cy="48" r="0.7"/></g>\
    </svg>'
  },

  {
    title:    "Malam yang Menyisakan Deru dan Luka",
    kategori: "Kabar Gig",
    tone:     "pink",
    date:     "2026-06-22",
    read:     "4 Menit",
    excerpt:  "Empat band, satu generator, dan ruang yang lebih kecil dari yang sanggup ditampungnya. Catatan dari malam ketika skena kembali berisik — dan kembali utuh.",
    file:     "#",
    art: '<svg viewBox="0 0 200 125" role="img" aria-label="Panggung gig yang penuh sesak">\
      <rect width="200" height="125" fill="#141414"/>\
      <ellipse cx="100" cy="28" rx="115" ry="35" fill="#3a3a3a" opacity="0.5"/>\
      <g fill="#000" opacity="0.85"><circle cx="18" cy="108" r="9"/><circle cx="40" cy="112" r="10"/><circle cx="160" cy="110" r="10"/><circle cx="184" cy="108" r="9"/><rect x="8" y="112" width="70" height="20"/><rect x="142" y="112" width="70" height="20"/></g>\
      <g fill="#bdbdbd"><path d="M76 60 q6 -11 13 0 l2 32 -17 0 z"/><circle cx="82" cy="52" r="6"/><path d="M104 64 q6 -10 12 0 l2 28 -16 0 z"/><circle cx="110" cy="56" r="5"/><path d="M126 61 q6 -11 13 0 l2 31 -17 0 z"/><circle cx="132" cy="53" r="6"/></g>\
      <line x1="100" y1="46" x2="100" y2="98" stroke="#9a9a9a" stroke-width="2"/><circle cx="100" cy="45" r="3" fill="#dcdcdc"/>\
    </svg>'
  },

  {
    title:    "Bising dari Selatan: Pacitan dan Lagu yang Tumbuh Tanpa Izin",
    kategori: "Liputan",
    tone:     "pink",
    date:     "2026-06-21",
    read:     "9 Menit",
    excerpt:  "Liputan skena musik mandiri di pesisir selatan: kaset, gig garasi, zine, dan kolektif yang membangun musiknya sendiri tanpa menunggu izin siapa pun.",
    file:     "pacitan.html",
    art: '<svg viewBox="0 0 200 200" role="img" aria-label="Pesisir selatan yang bising">\
      <rect width="200" height="200" fill="#1a1a1a"/>\
      <path d="M0 150 q50 -30 100 0 t100 0 v50 H0 Z" fill="#2a2a2a"/>\
      <g fill="none" stroke="#ed1a5b" stroke-width="3"><path d="M20 70 q20 -28 40 0 t40 0 t40 0 t40 0"/></g>\
      <circle cx="158" cy="48" r="16" fill="#f4c20d"/>\
    </svg>'
  },

  {
    title:    "Zein Merilis ‘Mekar’: Antara Bising dan Keheningan",
    kategori: "Rilis",
    tone:     "green",
    date:     "2026-06-20",
    read:     "6 Menit",
    excerpt:  "Single baru Zein menimbang distorsi dan diam dalam takaran yang sama.",
    file:     "#",
    art: '<svg viewBox="0 0 200 200" role="img" aria-label="Poster fotokopi Zein">\
      <rect width="200" height="200" fill="#d9d4c6"/>\
      <path d="M40 40 q60 -34 100 0 q34 36 14 86 q-22 56 -78 56 q-56 0 -72 -52 q-16 -64 36 -90 z" fill="#0e0e0e"/>\
      <ellipse cx="78" cy="92" rx="13" ry="17" fill="#d9d4c6"/><ellipse cx="118" cy="88" rx="13" ry="17" fill="#d9d4c6"/>\
      <circle cx="80" cy="96" r="5" fill="#0e0e0e"/><circle cx="116" cy="92" r="5" fill="#0e0e0e"/>\
      <text x="150" y="70" font-family="Anton,sans-serif" font-size="44" fill="#ed1a5b">Z</text>\
      <text x="150" y="150" font-family="Anton,sans-serif" font-size="44" fill="#0e0e0e">N</text>\
    </svg>'
  },

  {
    title:    "Kompilasi Kaset Terselubung Vol.3 — Suara dari Balkon Kota",
    kategori: "Arsip",
    tone:     "yellow",
    date:     "2026-06-18",
    read:     "5 Menit",
    excerpt:  "Dua belas band, satu pita, satu kota kecil yang menolak diam.",
    file:     "#",
    art: '<svg viewBox="0 0 200 200" role="img" aria-label="Kaset kompilasi">\
      <rect width="200" height="200" fill="#1a1a1a"/>\
      <rect x="22" y="56" width="156" height="92" rx="6" fill="none" stroke="#e8e3d5" stroke-width="3"/>\
      <text x="100" y="84" text-anchor="middle" font-family="Anton,sans-serif" font-size="16" fill="#e8e3d5" letter-spacing="1">TERSELUBONG</text>\
      <g stroke="#e8e3d5" stroke-width="3" fill="none"><circle cx="74" cy="116" r="16"/><circle cx="126" cy="116" r="16"/></g>\
      <g fill="#e8e3d5"><circle cx="74" cy="116" r="4"/><circle cx="126" cy="116" r="4"/></g>\
      <rect x="66" y="134" width="68" height="7" rx="2" fill="#0e0e0e" stroke="#e8e3d5" stroke-width="2"/>\
    </svg>'
  },

  {
    title:    "Bicara dengan Kolektif Dusk: Tentang DIY, Etika, dan Amarah",
    kategori: "Wawancara",
    tone:     "pink",
    date:     "2026-06-17",
    read:     "7 Menit",
    excerpt:  "Tiga orang, satu garasi, dan keyakinan bahwa marah pun bisa jadi gotong royong.",
    file:     "#",
    art: '<svg viewBox="0 0 200 200" role="img" aria-label="Wawancara kolektif">\
      <rect width="200" height="200" fill="#1d1a17"/>\
      <ellipse cx="100" cy="100" rx="100" ry="78" fill="#4a3f33" opacity="0.45"/>\
      <path d="M20 165 L180 165 L160 140 L40 140 Z" fill="#0e0e0e"/>\
      <g fill="#0e0e0e"><path d="M34 140 q16 -36 32 0 z"/><circle cx="50" cy="104" r="13"/><path d="M82 140 q14 -30 28 0 z"/><circle cx="96" cy="110" r="11"/><path d="M134 140 q16 -36 32 0 z"/><circle cx="150" cy="104" r="13"/></g>\
    </svg>'
  }

];
