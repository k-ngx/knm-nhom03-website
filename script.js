/* ===== Cấu hình thành viên: sửa thông tin & đường dẫn ảnh tại đây ===== */
const MEMBERS = [
  { name: "Nguyễn Đăng Khôi", id: "26127233", birth: "22/04/2008", home: "TP. Hồ Chí Minh",
    role: "Trưởng nhóm", photo: "images/member1.jpg",
    social: [{ type: "facebook", url: "https://facebook.com/nengoilakhoi" }, { type: "instagram", url: "https://www.instagram.com/k.ngx._/" }, { type: "github", url: "https://github.com/k-ngx" }],
    bio: "Chia công việc và quản lý deadline của các sản phẩm trong nhóm. Vẽ MindMap và làm Poster, Website, Prototype sản phẩm phần cứng, biên bản thành lập nhóm, đánh giá thành viên và format cuốn báo cáo.",
    hobby: "Game, Food Art & Baking, DIY, Tháo lắp phần cứng", langs: ["C++", "Pascal", "LuaU"] },
  { name: "Phạm Thanh Hoài An", id: "26127009", birth: "08/03/2008", home: "TP. Hồ Chí Minh",
    role: "Thư ký", photo: "images/member2.jpg",
    social: [{ type: "facebook", url: "https://www.facebook.com/pham.an.988746" }, { type: "instagram", url: "https://www.instagram.com/phxyzan/" }],
    bio: "Giúp quản lý nhóm và nhắc deadline các thành viên, chụp và ghi lại biên bản họp nhóm. Là người lên kịch bản, quay video chính, vẽ MindMap, chụp Poster, làm Gantt Chart, viết cuốn báo cáo, vẽ các giai đoạn của cây trong app.",
    hobby: "Uống trà tắc", langs: ["C++"] },
{ name: "Lâm Quốc Thịnh", id: "26127434", birth: "21/01/2008", home: "TP. Hồ Chí Minh",
    role: "Thành viên", photo: "images/member3.jpg",
    social: [{ type: "facebook", url: "https://www.facebook.com/thinh.lam.826059" }],
    bio: "Là diễn viên và người lồng tiếng chính trong video và poster, tìm hiểu các linh kiện phần cứng và cách thức kết nối, làm mô phỏng 3D của sản phẩm vật lý.",
    hobby: "Đánh cầu lông, ăn vặt", langs: ["C++", "Python"] },
  { name: "Nguyễn Phước Quý Lâm", id: "26127520", birth: "01/02/2008", home: "Huế",
    role: "Thành viên", photo: "images/member4.jpg",
    social: [{ type: "facebook", url: "https://www.facebook.com/nguyen.phuoc.quy.lam" }, { type: "github", url: "https://github.com/quylam2008" }],
    bio: "Người phụ trách chính của phần mềm, tìm hiểu các công cụ làm và quay video giới thiệu app, viết cuốn báo cáo, tổng hợp thông tin các slide trình bày.",
    hobby: "Chơi game, viết code, xem phim, đọc truyện, đi chơi, du lịch, tập thể dục", langs: ["C++", "Pascal", "Python"] },
  { name: "Ngô Bảo Phong", id: "26127350", birth: "27/09/2008", home: "TP. Hồ Chí Minh",
    role: "Thành viên", photo: "images/member5.jpg",
    social: [{ type: "facebook", url: "https://www.facebook.com/phong.ngo.282846" }],
    bio: "Phụ trách chính các design của nhóm, người vẽ logo nhóm, edit hiệu ứng và chèn tiếng video, thiết kế wireframes và vẽ các giai đoạn của cây cho app.",
    hobby: "Không có", langs: ["C++"] }
];

/* Loại mạng xã hội hỗ trợ: facebook, instagram, github, youtube, tiktok, linkedin, x, email (loại khác -> biểu tượng liên kết) */
const ICONS = {
  facebook: ['<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>', 1],
  github: ['<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>', 1],
  linkedin: ['<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>', 1],
  tiktok: ['<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>', 1],
  x: ['<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>', 1],
  instagram: ['<rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/>', 0],
  youtube: ['<rect x="2" y="5" width="20" height="14" rx="4.5"/><path d="M10 9l5 3-5 3z" fill="currentColor"/>', 0],
  email: ['<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7.5l8.5 6 8.5-6"/>', 0],
  link: ['<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>', 0]
};
const socialIcon = x => {
  const [p, filled] = ICONS[x.type] || ICONS.link;
  const name = x.type.charAt(0).toUpperCase() + x.type.slice(1);
  return `<a class="soc" href="${x.url}" target="_blank" rel="noopener" aria-label="${name}" title="${name}"><svg viewBox="0 0 24 24" class="${filled ? "fl" : "st"}" aria-hidden="true">${p}</svg></a>`;
};

const NAV = [["home","index.html","Home"],["app","app.html","App"],["product","product.html","Product"],["poster","poster.html","Poster"],["video","video.html","Video"],["activities","activities.html","Activities"],["rules","rules.html","Rules"]];

/* Hướng trượt khi vào trang (đặt từ trang trước) */
try { document.documentElement.dataset.enter = sessionStorage.getItem("navDir") || "up"; sessionStorage.removeItem("navDir"); } catch (e) { document.documentElement.dataset.enter = "up"; }

/* Áp dụng giao diện ngay để tránh nháy màn hình */
try { const t = localStorage.getItem("theme"); if (t) document.documentElement.dataset.theme = t; } catch (e) {}

document.addEventListener("DOMContentLoaded", () => {
  const fav = document.createElement("link"); fav.rel = "icon"; fav.href = "images/logo.png"; document.head.appendChild(fav);
  const page = document.body.dataset.page, key = page;
  document.getElementById("site-header").innerHTML =
    `<header class="nav"><a class="logo" href="index.html" aria-label="N03 - Trang chủ"><img src="images/logo.png" alt="N03" onerror="this.replaceWith(document.createTextNode('N03'))"></a>
     <nav><i class="pill"></i>${NAV.map(([k,h,l]) => `<a href="${h}"${k===key?' class="active" aria-current="page"':""}>${l}</a>`).join("")}</nav></header>`;

  document.getElementById("site-footer").innerHTML =
    `<footer class="footer"><p>© 2026 Nhóm 03.</p>
     <button class="theme" id="theme" aria-label="Đổi giao diện sáng/tối"><span class="knob"></span><span id="theme-label"></span></button></footer>`;
  const root = document.documentElement, label = document.getElementById("theme-label");
  const sync = () => label.textContent = root.dataset.theme === "dark" ? "Chế độ tối" : "Chế độ sáng";
  sync();
  document.getElementById("theme").onclick = () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    sync();
  };

  if (page === "home") initMembers();
  initZoom();
  try { setupTransitions(key); } catch (e) { console.error(e); }
});

function initMembers() {
  const car = document.getElementById("carousel"), dots = document.getElementById("dots");
  const N = MEMBERS.length;
  const initials = n => n.split(" ").slice(-2).map(w => w[0]).join("");
  const $ = id => document.getElementById(id);

  /* 3 bản sao của danh sách -> cuộn vô hạn: người cuối nối liền người đầu */
  let html = "";
  for (let k = 0; k < N * 3; k++) {
    const m = MEMBERS[k % N];
    html += `<figure class="slide" data-i="${k % N}"><img src="${m.photo}" alt="${m.name}" loading="lazy"
      onerror="this.remove()"><span class="ph">${initials(m.name)}</span><figcaption>${m.name}</figcaption></figure>`;
  }
  car.innerHTML = html;
  dots.innerHTML = MEMBERS.map((_, i) => `<button aria-label="Thành viên ${i + 1}" data-i="${i}"></button>`).join("");
  const slides = [...car.children], dotEls = [...dots.children];
  let cur = -1, abs = N;

  const centerOf = k => slides[k].offsetLeft + slides[k].offsetWidth / 2;
  const jumpTo = k => {                       // nhảy tức thì, không hiệu ứng
    car.style.scrollSnapType = "none";
    car.scrollLeft = centerOf(k) - car.clientWidth / 2;
    void car.offsetWidth;
    car.style.scrollSnapType = "";
  };

  function show(i) {
    if (i === cur) return; cur = i;
    const m = MEMBERS[i];
    slides.forEach((el, k) => el.classList.toggle("on", k === abs));
    dotEls.forEach((d, k) => d.classList.toggle("on", k === i));
    $("p-name").textContent = m.name; $("p-role").textContent = m.role;
    $("p-id").textContent = m.id; $("p-birth").textContent = m.birth;
    $("p-home").textContent = m.home; $("p-hobby").textContent = m.hobby;
    $("p-bio").textContent = m.bio;
    $("p-langs").innerHTML = m.langs.map(l => `<span>${l}</span>`).join("");
    $("p-social").innerHTML = m.social.map(socialIcon).join("");
    const p = $("profile"); p.classList.remove("swap"); void p.offsetWidth; p.classList.add("swap");
  }

  const goAbs = k => slides[Math.max(0, Math.min(slides.length - 1, k))]
    .scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });

  let tick, settle;
  car.addEventListener("scroll", () => {
    cancelAnimationFrame(tick);
    tick = requestAnimationFrame(() => {
      const mid = car.scrollLeft + car.clientWidth / 2;
      let best = 0, d = Infinity;
      slides.forEach((el, k) => { const x = Math.abs(centerOf(k) - mid); if (x < d) { d = x; best = k; } });
      abs = best;
      slides.forEach((el, k) => el.classList.toggle("on", k === abs));
      show(best % N);
    });
    // khi cuộn dừng lại: nếu đang ở bản sao đầu/cuối thì nhảy về bản giữa
    clearTimeout(settle);
    settle = setTimeout(() => {
      if (abs < N || abs >= N * 2) { const t = abs < N ? abs + N : abs - N; jumpTo(t); abs = t; }
    }, 140);
  }, { passive: true });

  slides.forEach((el, k) => el.onclick = () => goAbs(k));
  dotEls.forEach((d, i) => d.onclick = () => {
    const opts = [i, i + N, i + 2 * N];       // chọn bản sao gần nhất
    goAbs(opts.sort((a, b) => Math.abs(a - abs) - Math.abs(b - abs))[0]);
  });
  $("prev").onclick = () => goAbs(abs - 1);
  $("next").onclick = () => goAbs(abs + 1);
  car.addEventListener("keydown", e => { if (e.key === "ArrowRight") goAbs(abs + 1); if (e.key === "ArrowLeft") goAbs(abs - 1); });

  const start = () => { jumpTo(N); abs = N; show(0); };
  start();
  window.addEventListener("load", start);      // căn lại sau khi ảnh tải xong
  window.addEventListener("resize", () => jumpTo(abs));
}

/* ===== Hiệu ứng chuyển trang ===== */
function setupTransitions(page) {
  const nav = document.querySelector(".nav nav"), pill = nav.querySelector(".pill");
  const act = nav.querySelector(".active");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const spot = () => ({ l: act.offsetLeft, w: act.offsetWidth });
  const put = p => { pill.style.transform = `translateX(${p.l}px)`; pill.style.width = p.w + "px"; };

  nav.scrollLeft = act.offsetLeft - (nav.clientWidth - act.offsetWidth) / 2;   // menu dài trên điện thoại: cuộn tới mục đang chọn
  // thanh nền menu trượt từ mục cũ sang mục mới
  let from = null;
  try { from = JSON.parse(sessionStorage.getItem("pill")); sessionStorage.removeItem("pill"); } catch (e) {}
  pill.style.transition = "none";
  put(from || spot());
  void pill.offsetWidth;
  pill.style.transition = "";
  requestAnimationFrame(() => requestAnimationFrame(() => put(spot())));
  const snap = () => { pill.style.transition = "none"; put(spot()); void pill.offsetWidth; pill.style.transition = ""; };
  window.addEventListener("resize", snap);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(snap);

  // tải trước các trang khác cho mượt
  const warm = () => NAV.forEach(([k, h]) => {
    if (k === page) return;
    const l = document.createElement("link"); l.rel = "prefetch"; l.href = h; document.head.appendChild(l);
  });
  setTimeout(warm, 800);

  // bấm menu: trang cũ trượt ra rồi mới chuyển
  const idx = NAV.findIndex(n => n[0] === page);
  let busy = false;
  document.addEventListener("click", e => {
    const a = e.target.closest("a[href]");
    if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === "_blank" || a.hasAttribute("download")) return;
    const u = new URL(a.href, location.href);
    if (u.protocol !== location.protocol || u.host !== location.host) return;
    const to = NAV.findIndex(n => u.pathname.endsWith("/" + n[1]) || (n[1] === "index.html" && u.pathname.endsWith("/")));
    if (to < 0) return;
    if (u.hash && u.pathname === location.pathname) return;   // liên kết #neo trong cùng trang
    e.preventDefault();
    if (to === idx || busy) return;
    busy = true;
    const dir = to > idx ? "next" : "prev";
    try { sessionStorage.setItem("navDir", dir); sessionStorage.setItem("pill", JSON.stringify(spot())); } catch (err) {}
    if (reduce) { location.href = a.href; return; }
    document.documentElement.classList.add("leaving-" + dir);
    setTimeout(() => { location.href = a.href; }, 280);
  });
  window.addEventListener("pageshow", e => {
    if (e.persisted) { busy = false; document.documentElement.classList.remove("leaving-next", "leaving-prev"); }
  });
}

/* ===== Ảnh bị thiếu: hiện khung giữ chỗ ===== */
document.addEventListener("error", e => {
  const el = e.target;
  if (el.tagName !== "IMG" || !el.closest("figure")) return;
  el.style.display = "none"; el.closest("figure").classList.add("empty");
}, true);

/* ===== Xem ảnh lớn (lightbox) ===== */
function initZoom() {
  document.addEventListener("click", e => {
    const img = e.target.closest("[data-zoom] figure:not(.empty) img");
    if (!img) return;
    const lb = document.createElement("div");
    lb.className = "lb"; lb.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    const close = () => { lb.remove(); document.removeEventListener("keydown", esc); };
    const esc = ev => { if (ev.key === "Escape") close(); };
    lb.onclick = close; document.addEventListener("keydown", esc);
    document.body.appendChild(lb);
  });
}
