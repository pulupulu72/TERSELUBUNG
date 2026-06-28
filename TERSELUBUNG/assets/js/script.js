/* =============================================================
   TERSELUBUNG GIGS — script.js
   The nav marquees loop purely in CSS (each column carries its
   own duplicated run), so the only behaviour here is the
   subscribe card's inline confirmation.
   ============================================================= */
(function () {
  "use strict";

  /* Kontak kini lewat tombol "Kirim" (mailto) langsung di HTML \u2014
     tak perlu JS untuk form langganan lagi. */

  /* -----------------------------------------------------------
     FEED OTOMATIS — semua konten dari window.TG_ARTICLES.
     Diurut tanggal (terbaru dulu), lalu dibagi 3 lapis:
       • [0]                 -> HEADLINE besar  (#siaran-headline)
       • [1 .. SIARAN_CARDS] -> kartu SIARAN     (#siaran-cards)
       • selebihnya          -> daftar ARSIP     (#arsip-list)
     Cukup edit articles.js; halaman menata dirinya sendiri.
     Aman di halaman artikel (no-op kalau wadahnya tak ada).
     ----------------------------------------------------------- */
  var headlineEl = document.getElementById("siaran-headline");
  var cardsEl    = document.getElementById("siaran-cards");
  var arsipEl    = document.getElementById("arsip-list");

  if ((headlineEl || cardsEl || arsipEl) && Array.isArray(window.TG_ARTICLES) && window.TG_ARTICLES.length) {
    var SIARAN_CARDS = 3;   // jumlah kartu di bawah headline; sisanya jatuh ke Arsip

    var BULAN = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
    var tanggal = function (iso) {
      var p = String(iso).split("-");                 // YYYY-MM-DD
      return parseInt(p[2], 10) + " " + BULAN[parseInt(p[1], 10) - 1] + " " + p[0];
    };
    var esc = function (s) {
      return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
      });
    };

    var headlineHTML = function (t) {
      return '<a class="dept__featured" href="' + esc(t.file) + '" aria-label="Baca: ' + esc(t.title) + '">' +
          '<figure class="plate dept__featured-cover">' +
            '<div class="plate__frame" style="aspect-ratio:1/1; background:#e3dece; background-image:radial-gradient(#0e0e0e 22%,transparent 23%); background-size:9px 9px;">' +
              '<span class="badge badge--' + esc(t.tone) + '">' + esc(t.kategori) + '</span>' +
              '<span class="dept__featured-read">' + esc(t.read) + '</span>' +
              (t.art || "") +
            '</div>' +
          '</figure>' +
          '<div class="dept__featured-body">' +
            '<span class="dept__featured-kicker"><span class="hot">●</span> ' + esc(t.kategori) + ' · ' + tanggal(t.date) + '</span>' +
            '<h3 class="dept__featured-title">' + esc(t.title) + '</h3>' +
            (t.band ? '<p class="dept__featured-band">' + esc(t.band) + '</p>' : "") +
            '<p class="dept__featured-excerpt">' + esc(t.excerpt) + '</p>' +
            '<span class="dept__featured-more">Baca Selengkapnya →</span>' +
          '</div>' +
        '</a>';
    };

    var entryHTML = function (a) {
      return '<a class="dept__entry" href="' + esc(a.file) + '">' +
          '<span class="thumb" aria-hidden="true">' + (a.art || "") + '</span>' +
          '<span>' +
            '<span class="rubric ' + esc(a.tone) + '">' + esc(a.kategori) + '</span>' +
            '<span class="e-title">' + esc(a.title) + '</span>' +
            '<span class="e-meta">' + tanggal(a.date) + ' · ' + esc(a.read) + '</span>' +
          '</span>' +
        '</a>';
    };

    var kosong = function (teks) {
      return '<p style="padding:var(--margin);font-family:var(--f-mono);font-size:.8rem;color:var(--ink-soft)">' + teks + '</p>';
    };

    // urutkan: tanggal terbaru lebih dulu (string ISO aman dibandingkan)
    var list = window.TG_ARTICLES.slice().sort(function (a, b) {
      return a.date < b.date ? 1 : (a.date > b.date ? -1 : 0);
    });

    if (headlineEl) {
      headlineEl.innerHTML = headlineHTML(list[0]);
    }

    var siaran = list.slice(1, 1 + SIARAN_CARDS);
    var arsip  = list.slice(1 + SIARAN_CARDS);

    if (cardsEl) {
      cardsEl.innerHTML = siaran.length ? siaran.map(entryHTML).join("") : "";
    }
    if (arsipEl) {
      arsipEl.innerHTML = arsip.length ? arsip.map(entryHTML).join("") : kosong("Belum ada arsip.");
    }
  }
})();
