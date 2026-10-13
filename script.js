/* =========================================================
   PHOTOGRAPHY PORTFOLIO - script.js
   Bagian 1 (CONFIG, CATEGORIES, PHOTOS) adalah satu-satunya
   bagian yang perlu Anda edit. Sisanya adalah logika website.
   ========================================================= */

"use strict";

/* ---------------------------------------------------------
   1A. KONFIGURASI UTAMA  (EDIT DI SINI)
   --------------------------------------------------------- */
const CONFIG = {
  // Identitas
  brandName: "BONATUA PARSAORAN SIPAYUNG",                      // nama fotografer / brand
  heroDescription:
    "Photographer based in Indonesia, specialising in portraits, weddings, and everyday street scenes with a quiet, natural light approach.",

  // Kontak
  email: "halo@contoh.com",                        // ganti dengan email Anda
  instagramUsername: "username_anda",              // tanpa tanda @
  whatsappNumber: "6281234567890",                 // kode negara + nomor, tanpa +, spasi, atau 0 di depan
  whatsappDisplay: "+62 812 3456 7890",            // tampilan nomor di halaman
  whatsappMessage: "Hello, I saw your portfolio and would like to book a session.",
  emailSubject: "Photography inquiry",

  // Google Drive: tempel link folder yang sudah dibagikan (Anyone with the link: Viewer)
  driveUrl: "https://drive.google.com/drive/folders/GANTI_DENGAN_ID_FOLDER_ANDA",

  // Jumlah foto di awal (misalnya 12 atau 18) dan tambahan per klik "Load More"
  initialPhotos: 12,
  loadMoreStep: 6,

  // Gambar hero & foto profil (ganti dengan file Anda, misalnya "images/hero.jpg")
  heroImage: "https://picsum.photos/seed/hero-golden-hour/1800/1200",
  profileImage: "https://picsum.photos/seed/profile-photographer/800/1000",

  // Bagian About
  about: {
    bio: [
      "I photograph people and places as they are: unhurried, honest, and lit by whatever the day offers.",
      "Over the years I have worked with couples, families, small brands, and community events, always aiming for images that still feel true a decade later."
    ],
    specialties: ["Portrait", "Wedding", "Event", "Landscape", "Product", "Street Photography"],
    experience: "Eight years of professional work across weddings, editorial portraits, and commercial product shoots.",
    approach: "I meet every client before the shoot, scout the location, and plan around the light so the session itself stays relaxed.",
    philosophy: "A photograph should make someone feel the moment, not just remember that it happened."
  }
};

/* ---------------------------------------------------------
   1B. KATEGORI FILTER  (id harus sama dengan "category" di PHOTOS)
   --------------------------------------------------------- */
const CATEGORIES = [
  { id: "All",       label: "All" },
  { id: "Portrait",  label: "Portrait" },
  { id: "Landscape", label: "Landscape" },
  { id: "Event",     label: "Event" },
  { id: "Wedding",   label: "Wedding" },
  { id: "Product",   label: "Product" },
  { id: "Street",    label: "Street Photography" }
];

/* ---------------------------------------------------------
   1C. DATA FOTO  (EDIT / TAMBAH / HAPUS DI SINI)

   Format satu foto:
   {
     title: "Judul foto",
     category: "Portrait",              // salah satu id di CATEGORIES
     src: "images/foto-01.jpg",         // gambar untuk galeri (disarankan lebar ~900 px)
     full: "images/foto-01-besar.jpg",  // opsional: versi besar untuk lightbox
     width: 800, height: 1000,          // ukuran asli (rasio saja sudah cukup), mencegah layout bergeser
     alt: "Deskripsi singkat foto"      // teks alternatif
   }

   Foto di bawah memakai gambar contoh acak dari picsum.photos
   (hanya placeholder, bukan foto sesuai kategori). Ganti "src" dengan foto Anda.
   --------------------------------------------------------- */
const demo = (seed, title, category, width, height, alt) => ({
  title, category, width, height, alt,
  src:  `https://picsum.photos/seed/${seed}/${width}/${height}`,
  full: `https://picsum.photos/seed/${seed}/${width * 2}/${height * 2}`
});

const PHOTOS = [
  demo("rk-portrait-1",  "Window Light",        "Portrait",  800, 1000, "Portrait lit by soft window light"),
  demo("rk-landscape-1", "Morning Ridge",       "Landscape", 800,  533, "Mountain ridge at sunrise"),
  demo("rk-wedding-1",   "First Look",          "Wedding",   800, 1200, "Couple sharing a quiet first look"),
  demo("rk-street-1",    "Evening Crossing",    "Street",    800,  800, "Pedestrians crossing a city street at dusk"),
  demo("rk-product-1",   "Still Life in Amber", "Product",   800, 1000, "Product still life with warm tones"),
  demo("rk-event-1",     "The Opening Night",   "Event",     800,  533, "Guests mingling at an evening event"),
  demo("rk-portrait-2",  "Quiet Studio",        "Portrait",  800, 1200, "Studio portrait against a plain backdrop"),
  demo("rk-landscape-2", "Low Tide",            "Landscape", 800,  600, "Wide beach at low tide"),
  demo("rk-street-2",    "Market Hours",        "Street",    800, 1000, "Vendor at a morning market"),
  demo("rk-wedding-2",   "Vows",                "Wedding",   800,  533, "Couple exchanging vows outdoors"),
  demo("rk-product-2",   "Morning Ritual",      "Product",   800,  800, "Coffee cup and ceramics on a table"),
  demo("rk-portrait-3",  "Golden Hour",         "Portrait",  800, 1000, "Portrait in golden hour light"),
  demo("rk-event-2",     "Stage Lights",        "Event",     800, 1200, "Performer under stage lights"),
  demo("rk-landscape-3", "Fog Over the Valley", "Landscape", 800,  533, "Valley filled with fog"),
  demo("rk-street-3",    "Rain on Glass",       "Street",    800, 1000, "Street scene seen through a rainy window"),
  demo("rk-wedding-3",   "The Last Dance",      "Wedding",   800, 1000, "Newlyweds dancing at the reception"),
  demo("rk-product-3",   "Linen and Light",     "Product",   800,  600, "Folded linen with soft shadows"),
  demo("rk-portrait-4",  "Laughing Out Loud",   "Portrait",  800,  800, "Candid laughing portrait"),
  demo("rk-landscape-4", "Salt Flats",          "Landscape", 800, 1200, "Vertical view of salt flats at dusk"),
  demo("rk-event-3",     "Community Fair",      "Event",     800,  600, "Crowd at a community fair"),
  demo("rk-street-4",    "Last Train Home",     "Street",    800,  533, "Commuters waiting on a platform"),
  demo("rk-wedding-4",   "Details",             "Wedding",   800, 1000, "Wedding rings and bouquet"),
  demo("rk-portrait-5",  "Hands",               "Portrait",  800, 1200, "Close portrait focused on hands"),
  demo("rk-landscape-5", "Pine Line",           "Landscape", 800,  600, "Line of pine trees against pale sky")
];

/* =========================================================
   2. LOGIKA WEBSITE  (tidak perlu diubah)
   ========================================================= */

/* Ikon SVG (gaya Lucide, tanpa library tambahan agar ringan & bisa offline) */
const ICONS = {
  menu: '<line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="17" y2="17"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  whatsapp: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>',
  folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>'
};

/* Gambar pengganti jika foto gagal dimuat */
const FALLBACK_IMG = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#1a1a1a"/>' +
  '<text x="400" y="305" fill="#8a8478" font-family="sans-serif" font-size="26" text-anchor="middle">Image unavailable</text></svg>'
);

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const state = {
  category: "All",
  list: [],        // foto sesuai filter aktif
  visible: CONFIG.initialPhotos,
  rendered: 0,     // jumlah foto yang sudah tampil di DOM
  colHeights: [],
  cols: [],
  colCount: 0
};

/* ---------- Isi teks, ikon, dan tautan dari CONFIG ---------- */
function applyConfig() {
  const values = {
    brandName: CONFIG.brandName,
    heroDescription: CONFIG.heroDescription,
    email: CONFIG.email,
    instagramHandle: "@" + CONFIG.instagramUsername,
    whatsappDisplay: CONFIG.whatsappDisplay || "+" + CONFIG.whatsappNumber
  };
  $$("[data-text]").forEach(el => { el.textContent = values[el.dataset.text] ?? ""; });

  const links = {
    mailto: `mailto:${CONFIG.email}?subject=${encodeURIComponent(CONFIG.emailSubject)}`,
    instagram: `https://instagram.com/${encodeURIComponent(CONFIG.instagramUsername)}`,
    whatsapp: `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`,
    drive: CONFIG.driveUrl
  };
  $$("[data-href]").forEach(a => {
    const key = a.dataset.href;
    a.href = links[key];
    if (key !== "mailto") {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });

  $$("[data-icon]").forEach(el => {
    const path = ICONS[el.dataset.icon];
    if (path) {
      el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${path}</svg>`;
    }
  });

  document.title = `${CONFIG.brandName} | Photography Portfolio`;
  $("#year").textContent = new Date().getFullYear();

  const hero = $("#heroImg");
  hero.addEventListener("error", () => onImageError(hero), { once: true });
  hero.src = CONFIG.heroImage;

  const profile = $("#profileImg");
  profile.addEventListener("error", () => onImageError(profile), { once: true });
  profile.src = CONFIG.profileImage;

  if (CONFIG.driveUrl.includes("GANTI_DENGAN")) {
    console.warn("[Portfolio] driveUrl masih berisi contoh. Ganti dengan link folder Google Drive Anda di script.js.");
  }
}

function renderAbout() {
  const a = CONFIG.about;
  $("#aboutBio").innerHTML = "";
  a.bio.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    $("#aboutBio").appendChild(p);
  });
  a.specialties.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    $("#aboutSpecialties").appendChild(li);
  });
  $("#aboutExperience").textContent = a.experience;
  $("#aboutApproach").textContent = a.approach;
  $("#aboutPhilosophy").textContent = a.philosophy;
}

function onImageError(img) {
  if (img.dataset.failed) return;       // cegah loop jika fallback juga gagal
  img.dataset.failed = "1";
  img.src = FALLBACK_IMG;
  img.classList.add("is-loaded");
}

const categoryLabel = id => (CATEGORIES.find(c => c.id === id) || { label: id }).label;

/* ---------- Galeri masonry ---------- */
function columnCountForWidth() {
  const w = window.innerWidth;
  if (w >= 1000) return 3;
  if (w >= 600) return 2;
  return 1;
}

function buildColumns() {
  const gallery = $("#gallery");
  gallery.innerHTML = "";
  state.colCount = columnCountForWidth();
  state.cols = [];
  state.colHeights = [];
  for (let i = 0; i < state.colCount; i++) {
    const col = document.createElement("div");
    col.className = "gallery__col";
    gallery.appendChild(col);
    state.cols.push(col);
    state.colHeights.push(0);
  }
}

function createTile(photo, index) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "tile";
  btn.dataset.index = index;
  btn.style.aspectRatio = `${photo.width} / ${photo.height}`;
  btn.setAttribute("aria-label", `Open photo: ${photo.title}`);

  const img = new Image();
  img.width = photo.width;
  img.height = photo.height;
  img.alt = photo.alt || photo.title;
  img.loading = "lazy";
  img.decoding = "async";
  img.addEventListener("load", () => img.classList.add("is-loaded"));
  img.addEventListener("error", () => onImageError(img));
  img.src = photo.src;
  if (img.complete && img.naturalWidth) img.classList.add("is-loaded");

  const cap = document.createElement("span");
  cap.className = "tile__cap";
  cap.innerHTML = '<span class="tile__title"></span><span class="tile__cat"></span>';
  $(".tile__title", cap).textContent = photo.title;
  $(".tile__cat", cap).textContent = categoryLabel(photo.category);

  btn.append(img, cap);
  return btn;
}

function appendTile(photo, index) {
  // Letakkan di kolom paling pendek agar susunan tetap seimbang
  let target = 0;
  for (let i = 1; i < state.colHeights.length; i++) {
    if (state.colHeights[i] < state.colHeights[target]) target = i;
  }
  const tile = createTile(photo, index);
  state.cols[target].appendChild(tile);
  state.colHeights[target] += photo.height / photo.width;
  return tile;
}

function renderGallery(reset) {
  if (reset) {
    buildColumns();
    state.rendered = 0;
  }
  const target = Math.min(state.visible, state.list.length);
  let firstNew = null;
  for (let i = state.rendered; i < target; i++) {
    const tile = appendTile(state.list[i], i);
    if (!firstNew) firstNew = tile;
  }
  state.rendered = target;
  updateControls();
  return firstNew;
}

function updateControls() {
  const total = state.list.length;
  const shown = state.rendered;
  const more = $("#loadMore");

  $("#galleryEmpty").hidden = total > 0;
  more.hidden = shown >= total;
  $("#galleryStatus").textContent = total ? `Showing ${shown} of ${total} photos` : "";
}

function renderFilters() {
  const wrap = $("#filters");
  CATEGORIES.forEach(cat => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "filter";
    b.textContent = cat.label;
    b.dataset.category = cat.id;
    b.setAttribute("aria-pressed", cat.id === state.category ? "true" : "false");
    wrap.appendChild(b);
  });

  wrap.addEventListener("click", e => {
    const b = e.target.closest(".filter");
    if (!b) return;
    setCategory(b.dataset.category);
  });
}

function setCategory(id) {
  state.category = id;
  state.list = id === "All" ? PHOTOS.slice() : PHOTOS.filter(p => p.category === id);
  state.visible = CONFIG.initialPhotos;
  $$(".filter").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.category === id)));
  renderGallery(true);
}

function initGallery() {
  renderFilters();
  setCategory("All");

  $("#gallery").addEventListener("click", e => {
    const tile = e.target.closest(".tile");
    if (tile) openLightbox(Number(tile.dataset.index), tile);
  });

  $("#loadMore").addEventListener("click", () => {
    state.visible += CONFIG.loadMoreStep;
    const firstNew = renderGallery(false);
    // Tombol menghilang saat semua foto tampil, jadi pindahkan fokus ke foto baru
    if (state.rendered >= state.list.length && firstNew) firstNew.focus({ preventScroll: true });
  });

  // Susun ulang kolom jika jumlah kolom berubah (rotasi layar / resize)
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (columnCountForWidth() !== state.colCount) renderGallery(true);
    }, 150);
  });
}

/* ---------- Lightbox ---------- */
const lb = {
  el: null, img: null, index: 0, lastFocus: null, touchX: null
};

function lightboxItems() {
  return state.list.slice(0, state.rendered);
}

function showLightboxPhoto(i) {
  const items = lightboxItems();
  if (!items.length) return;
  lb.index = (i + items.length) % items.length;
  const p = items[lb.index];

  lb.img.classList.add("is-loading");
  delete lb.img.dataset.failed;
  lb.img.alt = p.alt || p.title;
  lb.img.src = p.full || p.src;

  $("#lbTitle").textContent = p.title;
  $("#lbMeta").textContent = `${categoryLabel(p.category)}, ${lb.index + 1} of ${items.length}`;

  // Muat foto berikutnya & sebelumnya di latar belakang agar perpindahan cepat
  [lb.index + 1, lb.index - 1].forEach(n => {
    const q = items[(n + items.length) % items.length];
    new Image().src = q.full || q.src;
  });
}

function openLightbox(i, trigger) {
  lb.lastFocus = trigger || document.activeElement;
  lb.el.hidden = false;
  document.body.classList.add("no-scroll");
  showLightboxPhoto(i);
  $("#lbClose").focus();
}

function closeLightbox() {
  lb.el.hidden = true;
  document.body.classList.remove("no-scroll");
  lb.img.removeAttribute("src");
  if (lb.lastFocus && typeof lb.lastFocus.focus === "function") lb.lastFocus.focus({ preventScroll: true });
}

function initLightbox() {
  lb.el = $("#lightbox");
  lb.img = $("#lbImg");

  lb.img.addEventListener("load", () => lb.img.classList.remove("is-loading"));
  lb.img.addEventListener("error", () => {
    if (lb.img.dataset.failed) return;
    lb.img.dataset.failed = "1";
    lb.img.src = FALLBACK_IMG;
    lb.img.classList.remove("is-loading");
  });

  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => showLightboxPhoto(lb.index - 1));
  $("#lbNext").addEventListener("click", () => showLightboxPhoto(lb.index + 1));

  // Klik area gelap di luar foto menutup lightbox
  lb.el.addEventListener("click", e => {
    if (e.target === lb.el || e.target === $("#lbFigure")) closeLightbox();
  });

  document.addEventListener("keydown", e => {
    if (lb.el.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") showLightboxPhoto(lb.index - 1);
    else if (e.key === "ArrowRight") showLightboxPhoto(lb.index + 1);
    else if (e.key === "Tab") {
      // Fokus tetap berada di dalam lightbox
      const focusables = $$("button", lb.el);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Geser jari kiri/kanan di ponsel
  lb.el.addEventListener("touchstart", e => { lb.touchX = e.changedTouches[0].clientX; }, { passive: true });
  lb.el.addEventListener("touchend", e => {
    if (lb.touchX === null) return;
    const dx = e.changedTouches[0].clientX - lb.touchX;
    lb.touchX = null;
    if (Math.abs(dx) > 50) showLightboxPhoto(lb.index + (dx < 0 ? 1 : -1));
  }, { passive: true });
}

/* ---------- Navbar ---------- */
function initNav() {
  const header = $("#siteHeader");
  const toggle = $("#navToggle");
  const menu = $("#menu");

  const setMenu = open => {
    menu.classList.toggle("is-open", open);
    header.classList.toggle("menu-open", open);
    document.body.classList.toggle("no-scroll", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    $("[data-icon]", toggle).innerHTML =
      `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${open ? ICONS.x : ICONS.menu}</svg>`;
  };

  toggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
  $$("a", menu).forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) { setMenu(false); toggle.focus(); }
  });
  window.addEventListener("resize", () => { if (window.innerWidth >= 860) setMenu(false); });

  // Navbar menjadi solid setelah halaman digulir
  const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Tandai menu yang sesuai dengan bagian yang sedang dilihat
  if ("IntersectionObserver" in window) {
    const links = $$(".nav__list a");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(s => observer.observe(s));
  }
}

/* ---------- Mulai ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  renderAbout();
  initNav();
  initGallery();
  initLightbox();
});