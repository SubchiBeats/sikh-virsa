/* ============================================================================
   VIRSA — Sikh Heritage & Stories  ·  app.js
   Vanilla JS, no build step. Core content works from a static host or local
   file; optional fonts, maps, audio, and source links use the network.
   ========================================================================== */
(function () {
  "use strict";

  var D = window.VIRSA || {};
  var app = document.getElementById("app");

  /* ------------------------------- helpers ------------------------------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function byId(id) { return document.getElementById(id); }
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  var store = {
    get: function (k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) {} }
  };

  /* -------------------------------- icons -------------------------------- */
  var ICONS = {
    sun:      '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/>',
    khanda:   '<circle cx="12" cy="12.5" r="5.2"/><path d="M12 2.6c.7 1.7.7 3.5 0 5.1-.7-1.6-.7-3.4 0-5.1zM12 7v11"/><path d="M6.6 9c-1.6 1-2.5 2.4-2.5 3.8 0 1.4.9 2.8 2.5 3.8M17.4 9c1.6 1 2.5 2.4 2.5 3.8 0 1.4-.9 2.8-2.5 3.8"/>',
    granth:   '<path d="M5 5.6A2 2 0 0 1 7 4h11v15H7a2 2 0 0 0-2 1.6V5.6z"/><path d="M18 4v15M9 8h6M9 11h5"/>',
    gurmukhi: '<path d="M5 19c6-1 9.4-4.2 12-9 1-2 2-3.6 2-5.2-1.6 0-3.2.9-5.2 2.2C9.6 9.6 6.6 13 5 19z"/><path d="m5 19 2.6-2.6"/>',
    langar:   '<path d="M4 11.2h16a8 8 0 0 1-8 7.3 8 8 0 0 1-8-7.3z"/><path d="M12 11.2V7.4M9.8 8.6c0-1 1-1.6 1-2.7M14.2 8.6c0-1-1-1.6-1-2.7"/>',
    sarovar:  '<path d="M4 19h16M6 19V9.5L12 5l6 4.5V19M9.5 19v-4.5h5V19"/>',
    leaf:     '<path d="M5 19c0-8 6-13.2 14-14 1.1 9.2-5 15.2-14 14z"/><path d="M9 15.2c2-3 4.2-4.7 7-6.2"/>',
    hands:    '<path d="M7 11.2V6.4a1.5 1.5 0 0 1 3 0v3.8M10 10.4V5.2a1.5 1.5 0 0 1 3 0v5M13 10.8V7.4a1.5 1.5 0 0 1 3 0v5.8c0 3.2-2.3 6.3-6 6.3s-5.4-2.6-5.7-5.2l-.7-2.3a1.4 1.4 0 0 1 2.5-1.2l.6 1"/>',
    shield:   '<path d="M12 3 5 6v5.2c0 4.3 3 7.5 7 9.1 4-1.6 7-4.8 7-9.1V6l-7-3z"/><path d="M9 12.2l2 2 4-4.2"/>',
    lotus:    '<path d="M12 20.2c-4.2 0-7.4-2.5-7.4-5.3 2.1.4 3.8 1.5 5.3 3.2M12 20.2c4.2 0 7.4-2.5 7.4-5.3-2.1.4-3.8 1.5-5.3 3.2M12 20.2c-2.1-2.1-3.2-4.2-3.2-6.4 0-2.1 1.1-3.2 3.2-4.2 2.1 1 3.2 2.1 3.2 4.2 0 2.2-1.1 4.3-3.2 6.4z"/>',
    rabab:    '<path d="M14.5 3.8a3 3 0 0 1 4 4l-7.2 7.2a4 4 0 1 1-4-4l7.2-7.2z"/><circle cx="8.6" cy="15.4" r="2.1"/>',
    water:    '<path d="M12 3.2c3.1 4.1 6 7.2 6 10.2a6 6 0 0 1-12 0c0-3 2.9-6.1 6-10.2z"/>',
    book:     '<path d="M5 5.6A2 2 0 0 1 7 4h11v15H7a2 2 0 0 0-2 1.6V5.6z"/><path d="M18 4v15"/>',
    _default: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>'
  };
  function icon(key) {
    var alias = { ikonkar: "sun" };
    var p = ICONS[alias[key] || key] || ICONS._default;
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>";
  }

  /* ---------------------------- date utilities --------------------------- */
  function fmtDate(d) {
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function today() { return fmtDate(new Date()); }
  function addDays(dStr, n) {
    var p = dStr.split("-").map(Number);
    return fmtDate(new Date(p[0], p[1] - 1, p[2] + n));
  }
  function dayOfYear(d) {
    var start = new Date(d.getFullYear(), 0, 0);
    return Math.floor((d - start) / 86400000);
  }

  /* ----------------------- Nitnem streak (testable) ---------------------- */
  var NK = "virsa.nitnem.v1";
  function getNitnem() { return store.get(NK, { days: {}, best: 0 }); }
  function saveNitnem(s) { store.set(NK, s); }
  function dayPracticed(rec) { return !!rec && (rec.complete === true || (rec.paaths && rec.paaths.length > 0)); }
  function completedSet(state) {
    var set = {};
    for (var k in state.days) { if (state.days.hasOwnProperty(k) && dayPracticed(state.days[k])) set[k] = true; }
    return set;
  }
  // PURE: given the completion map + a "today" string, return the streak length.
  // The streak counts back from today (if done) or yesterday (still alive today).
  function computeStreak(state, todayStr) {
    var set = completedSet(state);
    var start;
    if (set[todayStr]) start = todayStr;
    else if (set[addDays(todayStr, -1)]) start = addDays(todayStr, -1);
    else return 0;
    var streak = 0, cur = start;
    while (set[cur]) { streak++; cur = addDays(cur, -1); }
    return streak;
  }
  function todayRec() {
    var s = getNitnem(), t = today();
    return s.days[t] || { paaths: [], complete: false };
  }
  function togglePaath(pid) {
    var s = getNitnem(), t = today();
    if (!s.days[t]) s.days[t] = { paaths: [], complete: false };
    var arr = s.days[t].paaths;
    var i = arr.indexOf(pid);
    if (i >= 0) arr.splice(i, 1); else arr.push(pid);
    if (arr.length === 0) s.days[t].complete = false;
    s.best = Math.max(s.best || 0, computeStreak(s, t));
    saveNitnem(s);
    return s;
  }
  function resetStreak() { store.del(NK); }
  // expose for self-testing in the console / preview
  window.VIRSA_TEST = { computeStreak: computeStreak, addDays: addDays };

  /* ----------------------------- daily Gurbani --------------------------- */
  var gurbaniOverride = null;
  function dailyGurbani() {
    var list = D.gurbani || [];
    if (!list.length) return null;
    if (gurbaniOverride != null) return list[gurbaniOverride % list.length];
    return list[dayOfYear(new Date()) % list.length];
  }
  function gurbaniTypeLabel(t) {
    return {
      ggs: "From Sri Guru Granth Sahib Ji",
      ardas: "From the Ardas (Sikh prayer)",
      principle: "A core Sikh teaching",
      jaikara: "A Sikh jaikara (call of praise)"
    }[t] || "Gurbani";
  }

  /* ------------------------------ kids mode ------------------------------ */
  function kidsOn() { return store.get("virsa.kids", false) === true; }

  /* ------------------------- shared render pieces ------------------------ */
  function gurbaniCard(g, opts) {
    opts = opts || {};
    if (!g) return "";
    var gur = g.gurmukhi
      ? '<p class="gurbani-gurmukhi gurmukhi" lang="pa">' + esc(g.gurmukhi) + "</p>"
      : "";
    var verifyNote = !g.gurmukhi
      ? '<p class="reciter-note">Original Gurmukhi shown at the source link — view it to read the verse as written.</p>'
      : "";
    return (
      '<article class="card gurbani-card">' +
        '<div class="kicker">' + esc(opts.kicker || "Daily reflection") + "</div>" +
        gur +
        '<p class="gurbani-translit">' + esc(g.transliteration) + "</p>" +
        '<p class="gurbani-translation">“' + esc(g.translation) + '”</p>' +
        verifyNote +
        '<div class="gurbani-source">' +
          '<span class="badge badge-time">' + esc(gurbaniTypeLabel(g.type)) + "</span>" +
          "<span>" + esc(g.source) + (g.author ? " · " + esc(g.author) : "") + "</span>" +
        "</div>" +
        '<div class="gurbani-reflection"><strong>Reflect &amp; live it:</strong> ' + esc(g.reflection) + "</div>" +
        '<div class="cluster mt-1">' +
          '<a class="btn btn-sm" href="' + esc(g.verifyUrl) + '" target="_blank" rel="noopener">View source text ↗</a>' +
          (opts.showAnother ? '<button class="btn btn-sm btn-ghost" id="gurbaniAnother" type="button">Show another ↻</button>' : "") +
        "</div>" +
      "</article>"
    );
  }

  function figureTile(f) {
    return (
      '<a class="tile" href="#/figure/' + esc(f.id) + '" data-search="' + esc((f.name + " " + (f.title || "") + " " + (f.tags || []).join(" ")).toLowerCase()) + '" data-type="' + esc(f.type) + '">' +
        (f.order && f.order <= 11 ? '<span class="tile-order">' + (f.order === 11 ? "✦" : f.order) + "</span>" : "") +
        '<span class="tile-emblem">' + icon(f.icon) + "</span>" +
        '<span class="tile-title">' + esc(f.title) + "</span>" +
        "<h3>" + esc(f.name) + "</h3>" +
        '<span class="gurmukhi" lang="pa">' + esc(f.gurmukhi || "") + "</span>" +
        "<p>" + esc(f.relevance) + "</p>" +
      "</a>"
    );
  }

  function storyTile(s) {
    var fig = (D.figures || []).find(function (x) { return x.id === s.figureId; });
    var badge = s.status === "historical"
      ? '<span class="badge badge-doc">Historical event</span>'
      : '<span class="badge badge-trad">Traditional account</span>';
    return (
      '<a class="tile" href="#/story/' + esc(s.id) + '" data-search="' + esc((s.title + " " + (s.tags || []).join(" ") + " " + (fig ? fig.name : "")).toLowerCase()) + '" data-status="' + esc(s.status) + '">' +
        badge +
        "<h3>" + esc(s.title) + "</h3>" +
        '<span class="tile-title">' + esc(s.era || "") + (fig ? " · " + esc(fig.name) : "") + "</span>" +
        "<p>" + esc(s.summary) + "</p>" +
      "</a>"
    );
  }

  /* ================================ VIEWS ================================ */
  function viewHome() {
    var g = dailyGurbani();
    var gurus = (D.figures || []).filter(function (f) { return f.type === "guru"; }).sort(function (a, b) { return a.order - b.order; });
    var st = getNitnem();
    var streak = computeStreak(st, today());
    var practicedToday = dayPracticed(st.days[today()]);

    var miniGurus = gurus.slice(0, 5).map(function (f) {
      return (
        '<a class="mini-row" href="#/figure/' + esc(f.id) + '">' +
          '<span class="num">' + f.order + "</span>" +
          '<span class="mini-main"><span>' + esc(f.name) + "</span><small>" + esc(f.title) + "</small></span>" +
        "</a>"
      );
    }).join("");

    app.innerHTML =
      '<section class="view-enter">' +
        '<div class="hero">' +
          '<span class="ikonkar gurmukhi" aria-hidden="true">ੴ</span>' +
          "<h1>Discover the roots of Sikhi</h1>" +
          "<p>Explore the lives of the Gurus, timeless Sakhis, Gurbani and Sikh teachings, and a Nitnem companion — written for kids and adults with an accuracy-first approach.</p>" +
          '<div class="hero-cta">' +
            '<a class="btn btn-primary" href="#/figures">Meet the Gurus</a>' +
            '<a class="btn" href="#/gurbani">Today’s reflection</a>' +
            '<a class="btn" href="#/nitnem">Start your Nitnem</a>' +
          "</div>" +
        "</div>" +

        '<div class="home-grid">' +
          "<div>" + gurbaniCard(g, { kicker: "Today’s reflection" }) + "</div>" +
          "<div class=\"grid\" style=\"gap:14px\">" +
            '<a class="card streak-pill" href="#/nitnem" style="text-decoration:none;color:inherit">' +
              '<span class="streak-flame" aria-hidden="true">' + (streak > 0 ? "🔥" : "🪔") + "</span>" +
              "<span><span class=\"streak-num\">" + streak + '</span> <span class="streak-sub">day' + (streak === 1 ? "" : "s") + " practice streak " + (practicedToday ? "· logged today ✓" : "· not logged yet") + "</span></span>" +
            "</a>" +
            '<article class="card mini-card">' +
              "<h2>The Ten Gurus</h2>" +
              '<div class="mini-list">' + miniGurus + "</div>" +
              '<a class="text-link" href="#/figures" style="display:inline-block;margin-top:10px">See all Gurus &amp; figures →</a>' +
            "</article>" +
          "</div>" +
        "</div>" +

        '<h3 class="related-head">Explore more</h3>' +
        '<div class="grid grid-cards">' +
          '<a class="tile hub-tile" href="#/festivals"><span class="hub-emoji" aria-hidden="true">🪔</span><h3>Festivals &amp; Gurpurabs</h3><p>The Sikh year of celebration &amp; remembrance</p></a>' +
          '<a class="tile hub-tile" href="#/fives"><span class="hub-emoji" aria-hidden="true">🪯</span><h3>The Five Ks</h3><p>The sacred articles of faith of the Khalsa</p></a>' +
          '<a class="tile hub-tile" href="#/glossary"><span class="hub-emoji" aria-hidden="true">📖</span><h3>Glossary</h3><p>Sikh words, explained simply</p></a>' +
          '<a class="tile hub-tile" href="#/gurdwaras"><span class="hub-emoji" aria-hidden="true">🗺️</span><h3>Historical Gurdwaras</h3><p>A map of sacred places</p></a>' +
        "</div>" +

        '<div class="note-box mt-2">' +
          "<strong>Built with an accuracy-first approach.</strong> Stories distinguish <em>historical events</em> from <em>traditional accounts</em>, disputed dates are marked, and references are provided as starting points for further study. " +
          '<a class="text-link" href="#/about">Read about our sources →</a>' +
        "</div>" +
      "</section>";

    var another = byId("gurbaniAnother");
    if (another) another.addEventListener("click", reshuffleGurbani);
  }

  function viewFigures() {
    var figs = (D.figures || []).slice().sort(function (a, b) { return (a.order || 999) - (b.order || 999); });
    var tiles = figs.map(figureTile).join("");
    app.innerHTML =
      '<section class="view-enter">' +
        '<div class="section-head"><div class="eyebrow">The People of Sikhi</div><h1>Gurus &amp; Historical Figures</h1>' +
          '<p class="lede">The Ten Gurus, the eternal Guru — Sri Guru Granth Sahib Ji — and the devoted souls whose courage and service shaped our history.</p></div>' +
        '<div class="toolbar">' +
          '<label class="search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>' +
            '<input id="figSearch" type="search" placeholder="Search names, themes…" aria-label="Search figures" /></label>' +
          '<div class="filters" id="figFilters">' +
            '<button class="filter-chip" data-f="all" aria-pressed="true" type="button">All</button>' +
            '<button class="filter-chip" data-f="guru" aria-pressed="false" type="button">Gurus</button>' +
            '<button class="filter-chip" data-f="figure" aria-pressed="false" type="button">Devotees &amp; Warriors</button>' +
            '<button class="filter-chip" data-f="scripture" aria-pressed="false" type="button">The Eternal Guru</button>' +
          "</div>" +
        "</div>" +
        '<div class="grid grid-cards" id="figGrid">' + tiles + "</div>" +
        '<div class="empty" id="figEmpty" hidden><div class="big">🔎</div>No matches — try a different search.</div>' +
      "</section>";
    wireListFilter("figSearch", "figFilters", "figGrid", "figEmpty", "type");
  }

  function viewStories() {
    var stories = (D.stories || []).slice();
    var tiles = stories.map(storyTile).join("");
    app.innerHTML =
      '<section class="view-enter">' +
        '<div class="section-head"><div class="eyebrow">Sakhis &amp; History</div><h1>Stories of the Gurus &amp; the Khalsa</h1>' +
          '<p class="lede">Each story is labelled as a <span class="badge badge-doc">Historical event</span> or <span class="badge badge-trad">Traditional account</span>. Historical labels apply to the core event; narrative details can still differ across sources.</p></div>' +
        '<div class="toolbar">' +
          '<label class="search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>' +
            '<input id="stSearch" type="search" placeholder="Search stories, people, themes…" aria-label="Search stories" /></label>' +
          '<div class="filters" id="stFilters">' +
            '<button class="filter-chip" data-f="all" aria-pressed="true" type="button">All</button>' +
            '<button class="filter-chip" data-f="historical" aria-pressed="false" type="button">Historical</button>' +
            '<button class="filter-chip" data-f="traditional" aria-pressed="false" type="button">Traditional</button>' +
          "</div>" +
        "</div>" +
        '<div class="grid grid-cards" id="stGrid">' + tiles + "</div>" +
        '<div class="empty" id="stEmpty" hidden><div class="big">🔎</div>No matches — try a different search.</div>' +
      "</section>";
    wireListFilter("stSearch", "stFilters", "stGrid", "stEmpty", "status");
  }

  function viewFigureDetail(id) {
    var f = (D.figures || []).find(function (x) { return x.id === id; });
    if (!f) return notFound();
    var kids = kidsOn();
    var related = (D.stories || []).filter(function (s) { return s.figureId === id; });

    var body;
    if (kids) {
      body = '<div class="callout kids"><span class="label">Simple version for younger readers</span><p>' + esc(f.forKids) + "</p></div>";
    } else {
      body = '<div class="prose">' + (f.summary || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>";
    }

    var contributions = !kids && f.contributions ?
      '<h3 class="related-head">Why ' + esc(shortName(f)) + " matters</h3><ul class=\"list-clean\">" +
        f.contributions.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul>" : "";

    var gurbaniBlock = !kids && f.gurbani ?
      '<div class="callout gurbani-link"><span class="label">Connection to Gurbani</span><p>' + esc(f.gurbani) + "</p></div>" : "";

    var kidsCallout = !kids && f.forKids ?
      '<div class="callout kids"><span class="label">For younger readers</span><p>' + esc(f.forKids) + "</p></div>" : "";

    var relatedBlock = related.length ?
      '<h3 class="related-head">Stories</h3><div class="grid grid-cards">' + related.map(storyTile).join("") + "</div>" : "";

    app.innerHTML =
      '<section class="view-enter">' +
        '<a class="back-link" href="#/figures">← All Gurus &amp; figures</a>' +
        '<div class="detail-head">' +
          '<span class="detail-emblem">' + icon(f.icon) + "</span>" +
          "<div><h1>" + esc(f.name) + "</h1>" +
            '<div class="detail-gurmukhi gurmukhi" lang="pa">' + esc(f.gurmukhi || "") + "</div>" +
            '<div class="detail-title">' + esc(f.title) + "</div></div>" +
        "</div>" +
        '<div class="meta-row">' +
          (f.born && f.born !== "—" ? '<div class="meta-item"><b>' + esc(bornLabel(f)) + "</b>" + esc(f.born) + "</div>" : "") +
          (f.passed && f.passed !== "—" ? '<div class="meta-item"><b>' + esc(passedLabel(f)) + "</b>" + esc(f.passed) + "</div>" : "") +
          (f.birthplace ? '<div class="meta-item"><b>Place</b>' + esc(f.birthplace) + "</div>" : "") +
        "</div>" +
        '<p class="lede mt-1">' + esc(f.relevance) + "</p>" +
        body +
        contributions +
        gurbaniBlock +
        kidsCallout +
        relatedBlock +
        '<hr class="divider" />' +
        '<div class="cluster"><a class="btn btn-sm" href="' + esc(f.verifyUrl) + '" target="_blank" rel="noopener">Further reading ↗</a>' +
          '<a class="btn btn-sm btn-ghost" href="#/about">About our sources</a></div>' +
      "</section>";
  }

  function viewStoryDetail(id) {
    var s = (D.stories || []).find(function (x) { return x.id === id; });
    if (!s) return notFound();
    var kids = kidsOn();
    var fig = (D.figures || []).find(function (x) { return x.id === s.figureId; });
    var badge = s.status === "historical"
      ? '<span class="badge badge-doc">Historical event</span>'
      : '<span class="badge badge-trad">Traditional account</span>';

    var body = kids
      ? '<div class="callout kids"><span class="label">Simple version for younger readers</span><p>' + esc(s.forKids) + "</p></div>"
      : '<div class="prose">' + (s.body || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>";

    app.innerHTML =
      '<section class="view-enter">' +
        '<a class="back-link" href="#/stories">← All stories</a>' +
        '<div class="cluster" style="margin-bottom:8px">' + badge +
          (s.era ? '<span class="chip">' + esc(s.era) + "</span>" : "") +
          (fig ? '<a class="chip" style="text-decoration:none" href="#/figure/' + esc(fig.id) + '">' + esc(fig.name) + " →</a>" : "") +
        "</div>" +
        "<h1>" + esc(s.title) + "</h1>" +
        '<p class="lede">' + esc(s.summary) + "</p>" +
        body +
        '<div class="callout lesson"><span class="label">The teaching</span><h3 style="margin:.2em 0 .3em">What this story teaches</h3><p>' + esc(s.lesson) + "</p></div>" +
        (!kids && s.gurbani ? '<div class="callout gurbani-link"><span class="label">Connection to Gurbani</span><p>' + esc(s.gurbani) + "</p></div>" : "") +
        (!kids && s.forKids ? '<div class="callout kids"><span class="label">For younger readers</span><p>' + esc(s.forKids) + "</p></div>" : "") +
        '<hr class="divider" />' +
        '<div class="cluster"><a class="btn btn-sm" href="' + esc(s.verifyUrl) + '" target="_blank" rel="noopener">Further reading ↗</a>' +
          (fig ? '<a class="btn btn-sm btn-ghost" href="#/figure/' + esc(fig.id) + '">More about ' + esc(shortName(fig)) + "</a>" : "") + "</div>" +
      "</section>";
  }

  function viewGurbani() {
    var g = dailyGurbani();
    var all = (D.gurbani || []);
    var list = all.map(function (q, i) {
      return (
        '<button class="card gurbani-card" style="text-align:left;cursor:pointer;border:1px solid var(--line)" data-idx="' + i + '" type="button">' +
          '<div class="kicker">' + esc(q.theme) + "</div>" +
          (q.gurmukhi ? '<p class="gurbani-gurmukhi gurmukhi" lang="pa" style="font-size:1.15rem">' + esc(q.gurmukhi) + "</p>" : "") +
          '<p class="gurbani-translation" style="font-size:1rem">“' + esc(q.translation) + '”</p>' +
          '<div class="gurbani-source"><span class="badge badge-time">' + esc(gurbaniTypeLabel(q.type)) + "</span><span>" + esc(q.source) + "</span></div>" +
        "</button>"
      );
    }).join("");

    app.innerHTML =
      '<section class="view-enter">' +
        '<div class="section-head"><div class="eyebrow">Wisdom to live by</div><h1>Gurbani &amp; Sikh teachings</h1>' +
          '<p class="lede">A daily reflection drawn from Gurbani or a clearly labelled Sikh prayer, teaching, or jaikara. Tap any card below to read its reflection.</p></div>' +
        '<div id="todayGurbani">' + gurbaniCard(g, { kicker: "Today’s reflection", showAnother: true }) + "</div>" +
        '<div class="note-box mt-1" style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">' +
          '<span>🌅 <strong>Today’s Hukamnama</strong> — the daily message read from Sri Guru Granth Sahib Ji at Sri Harmandir Sahib.</span>' +
          '<a class="btn btn-sm" href="https://www.sikhnet.com/hukam" target="_blank" rel="noopener">Read today’s Hukamnama ↗</a>' +
        "</div>" +
        '<h3 class="related-head">The full collection</h3>' +
        '<p class="streak-note" style="margin-top:-6px">Each item is labelled by type and source. Translations are interpretive; use “View source text” to read SGGS lines in context.</p>' +
        '<div class="grid grid-cards" id="gurbaniGrid">' + list + "</div>" +
      "</section>";

    var another = byId("gurbaniAnother");
    if (another) another.addEventListener("click", reshuffleGurbani);
    qsa("#gurbaniGrid [data-idx]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        gurbaniOverride = parseInt(btn.getAttribute("data-idx"), 10);
        byId("todayGurbani").innerHTML = gurbaniCard(dailyGurbani(), { kicker: "Selected reflection", showAnother: true });
        var a = byId("gurbaniAnother"); if (a) a.addEventListener("click", reshuffleGurbani);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  function reshuffleGurbani() {
    var n = (D.gurbani || []).length;
    if (!n) return;
    var next;
    do { next = Math.floor(Math.random() * n); } while (n > 1 && next === gurbaniOverride);
    gurbaniOverride = next;
    var host = byId("todayGurbani");
    if (host) {
      host.innerHTML = gurbaniCard(dailyGurbani(), { kicker: "A reflection for you", showAnother: true });
      var a = byId("gurbaniAnother"); if (a) a.addEventListener("click", reshuffleGurbani);
    }
  }

  function viewNitnem() {
    var paaths = (D.paaths || []).slice().sort(function (a, b) { return a.order - b.order; });
    var res = D.paathResources || {};
    app.innerHTML =
      '<section class="view-enter">' +
        '<div class="section-head"><div class="eyebrow">Daily practice</div><h1>Nitnem — Daily Paaths</h1>' +
          '<p class="lede">The banis many Sikhs recite each day. Listen, read, and check off what you actually practised. Traditions vary on the exact set — follow the guidance of your family, Gurdwara, and chosen maryada.</p></div>' +
        '<div id="streakHero">' + streakHeroHTML() + "</div>" +
        '<p class="streak-note">A day counts toward your practice streak once you check at least one bani. Your progress is saved privately on this device only.</p>' +
        '<div class="paath-list" id="paathList">' + paaths.map(paathRow).join("") + "</div>" +
        '<div class="note-box mt-2"><strong>Read the full text &amp; hear more reciters.</strong> ' +
          'For complete Gurmukhi text, transliteration, and translations — and recordings from many respected reciters — visit ' +
          '<a class="text-link" href="' + esc(res.sikhnetNitnem || "https://www.sikhnet.com") + '" target="_blank" rel="noopener">SikhNet ↗</a>, ' +
          '<a class="text-link" href="' + esc(res.sikhitothemax || "https://www.sikhitothemax.org") + '" target="_blank" rel="noopener">SikhiToTheMax ↗</a>, or ' +
          '<a class="text-link" href="' + esc(res.readText || "https://www.searchgurbani.com") + '" target="_blank" rel="noopener">SearchGurbani ↗</a>.</div>' +
      "</section>";
    wirePaaths();
  }

  function streakHeroHTML() {
    var st = getNitnem();
    var streak = computeStreak(st, today());
    var rec = st.days[today()] || { paaths: [] };
    var count = (rec.paaths || []).length;
    var totalP = (D.paaths || []).length;
    return (
      '<div class="streak-hero">' +
        '<div class="streak-big"><span class="flame" aria-hidden="true">' + (streak > 0 ? "🔥" : "🪔") + "</span>" +
          '<span><span class="n" id="streakN">' + streak + '</span><br><span class="lbl">practice day' + (streak === 1 ? "" : "s") + " in a row</span></span></div>" +
        '<div class="streak-meta">' +
          '<div><b id="streakBest">' + (st.best || 0) + "</b>best streak</div>" +
          '<div><b id="streakCount">' + count + " / " + totalP + "</b>banis today</div>" +
        "</div>" +
      "</div>"
    );
  }

  function paathRow(p) {
    var rec = todayRec();
    var done = (rec.paaths || []).indexOf(p.id) >= 0;
    var audio = "";
    if (p.inAppAudio) {
      audio =
        '<div class="audio-row">' +
          '<audio controls preload="none" data-fallback="' + esc(p.listenUrl) + '"><source src="' + esc(p.inAppAudio) + '" type="audio/mpeg"></audio>' +
          '<span class="audio-fallback" hidden>Couldn’t load audio — <a class="text-link" href="' + esc(p.listenUrl) + '" target="_blank" rel="noopener">listen on SikhNet ↗</a></span>' +
          '<a class="btn btn-sm btn-ghost" href="' + esc(p.listenUrl) + '" target="_blank" rel="noopener">More on SikhNet ↗</a>' +
        "</div>" +
        (p.inAppReciter ? '<p class="reciter-note">' + esc(p.inAppReciter) + "</p>" : "");
    } else {
      audio =
        '<div class="audio-row"><a class="btn btn-sm" href="' + esc(p.listenUrl) + '" target="_blank" rel="noopener">▶ Listen on SikhNet ↗</a></div>';
    }
    return (
      '<article class="paath' + (done ? " done" : "") + '" data-id="' + esc(p.id) + '">' +
        '<div class="paath-top">' +
          '<button class="paath-check" type="button" aria-pressed="' + done + '" aria-label="Mark ' + esc(p.name) + ' done today" data-check="' + esc(p.id) + '">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10"/></svg></button>' +
          '<div class="paath-id"><h3>' + esc(p.name) + ' <span class="gurmukhi" lang="pa">' + esc(p.gurmukhi || "") + "</span></h3>" +
            '<div class="sub"><span class="badge badge-time">' + esc(p.time) + "</span> · " + esc(p.lengthApprox || "") + " · " + esc(p.author) + "</div></div>" +
          '<button class="paath-expand" type="button" aria-label="Show details" aria-expanded="false" aria-controls="paath-body-' + esc(p.id) + '" data-expand="' + esc(p.id) + '">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>' +
        "</div>" +
        '<div class="paath-body" id="paath-body-' + esc(p.id) + '"><p>' + esc(p.description) + "</p>" +
          "<p><b>When:</b> " + esc(p.whenToRead) + "</p>" +
          audio +
        "</div>" +
      "</article>"
    );
  }

  function wirePaaths() {
    qsa("[data-check]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        togglePaath(btn.getAttribute("data-check"));
        var artEl = btn.closest(".paath");
        var isDone = (todayRec().paaths || []).indexOf(btn.getAttribute("data-check")) >= 0;
        artEl.classList.toggle("done", isDone);
        btn.setAttribute("aria-pressed", isDone);
        refreshStreakHero();
      });
    });
    qsa("[data-expand]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var open = btn.closest(".paath").classList.toggle("open");
        btn.setAttribute("aria-expanded", open);
        btn.setAttribute("aria-label", open ? "Hide details" : "Show details");
      });
    });
    // audio error fallback
    qsa(".paath audio").forEach(function (au) {
      au.addEventListener("error", function () {
        au.style.display = "none";
        var fb = au.nextElementSibling;
        if (fb && fb.classList.contains("audio-fallback")) fb.hidden = false;
      });
      var src = au.querySelector("source");
      if (src) src.addEventListener("error", function () {
        au.style.display = "none";
        var fb = au.nextElementSibling;
        if (fb && fb.classList.contains("audio-fallback")) fb.hidden = false;
      });
    });
  }

  function refreshStreakHero() {
    var host = byId("streakHero");
    if (host) host.innerHTML = streakHeroHTML();
  }

  function viewAbout() {
    app.innerHTML =
      '<section class="view-enter">' +
        '<p class="greeting gurmukhi" lang="pa">ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਿਹ</p>' +
        '<p class="greeting-translit">Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh</p>' +
        '<div class="section-head"><div class="eyebrow">Our promise</div><h1>About Virsa &amp; our sources</h1>' +
          '<p class="lede">Virsa exists to make Sikh history and Gurbani accessible to a new generation — especially where language has been a barrier — through an accuracy-first, openly revisable approach.</p></div>' +

        '<div class="about-block"><h2>How we protect accuracy</h2>' +
          '<ul class="list-clean">' +
            "<li><strong>Historical vs. traditional.</strong> A historical label means the core event is attested; it does not mean every narrative detail is independently documented. Traditional accounts are identified clearly and treated with respect.</li>" +
            "<li><strong>An honest note on Gurbani.</strong> Sri Guru Granth Sahib Ji is spiritual and devotional wisdom — not a book of historical narratives. Where we mention a “connection to Gurbani”, we mean the values a story reflects or the hymns a Guru composed.</li>" +
            "<li><strong>Follow the evidence.</strong> Gurbani entries link to exact angs. Historical links are starting points for further study, not proof by themselves; sources can differ in detail and interpretation.</li>" +
            "<li><strong>Translations are interpretive.</strong> Gurbani cannot be translated perfectly; our translations aim to convey meaning, and we point you to the original Gurmukhi every time.</li>" +
          "</ul></div>" +

        '<div class="about-block"><h2>On images</h2>' +
          "<p>No verified contemporary likeness exists for most Gurus, and Sikh views on depiction differ. Virsa therefore uses symbols and calligraphy rather than presenting imagined portraits as historical likenesses.</p></div>" +

        '<div class="about-block"><h2>Further-reading resources</h2>' +
          '<div class="source-links">' +
            '<a class="btn btn-sm" href="https://www.sikhitothemax.org/" target="_blank" rel="noopener">SikhiToTheMax ↗</a>' +
            '<a class="btn btn-sm" href="https://www.searchgurbani.com/" target="_blank" rel="noopener">SearchGurbani ↗</a>' +
            '<a class="btn btn-sm" href="https://www.sikhnet.com/" target="_blank" rel="noopener">SikhNet ↗</a>' +
            '<a class="btn btn-sm" href="https://www.sikhiwiki.org/" target="_blank" rel="noopener">SikhiWiki ↗</a>' +
            '<a class="btn btn-sm" href="https://www.srigranth.org/" target="_blank" rel="noopener">SriGranth ↗</a>' +
          "</div></div>" +

        '<div class="note-box"><strong>Help us improve it.</strong> If you are a Granthi, scholar, historian, or knowledgeable reader and spot anything that should be corrected, please share the claim, proposed correction, and strongest available source.</div>' +

        '<div class="about-block mt-2"><h2>Your data</h2>' +
          "<p>Your Nitnem streak and settings are stored only on this device, never sent anywhere. You can clear them any time.</p>" +
          '<div class="cluster">' +
            '<button class="btn btn-sm" id="resetStreakBtn" type="button">Reset Nitnem streak</button>' +
            '<button class="btn btn-sm btn-ghost" id="resetAllBtn" type="button">Reset all settings</button>' +
          "</div><p class=\"streak-note\" id=\"resetMsg\" aria-live=\"polite\"></p></div>" +

        '<p class="streak-note">Virsa is an educational companion made with love and respect. It is not a substitute for the Guru, the Gurdwara, or scholarly study — it is a doorway to them. Simran, seva, Chardi Kala. 🙏</p>' +
      "</section>";

    byId("resetStreakBtn").addEventListener("click", function () {
      resetStreak(); byId("resetMsg").textContent = "Your Nitnem streak has been cleared.";
    });
    byId("resetAllBtn").addEventListener("click", function () {
      resetStreak(); store.del("virsa.kids"); store.del("virsa.theme");
      byId("resetMsg").textContent = "All settings cleared. Refresh to see defaults.";
    });
  }

  function notFound() {
    app.innerHTML = '<section class="view-enter"><div class="empty"><div class="big">🪔</div><h2>Not found</h2><p>That page doesn’t exist.</p><a class="btn btn-primary" href="#/home">Go home</a></div></section>';
  }

  /* --------------------------- list filtering UX ------------------------- */
  function wireListFilter(searchId, filtersId, gridId, emptyId, attr) {
    var input = byId(searchId), filters = byId(filtersId), grid = byId(gridId), empty = byId(emptyId);
    var current = "all";
    function apply() {
      var q = (input.value || "").trim().toLowerCase();
      var shown = 0;
      qsa(".tile", grid).forEach(function (t) {
        var matchF = current === "all" || t.getAttribute("data-" + attr) === current;
        var matchQ = !q || (t.getAttribute("data-search") || "").indexOf(q) >= 0;
        var show = matchF && matchQ;
        t.style.display = show ? "" : "none";
        if (show) shown++;
      });
      empty.hidden = shown !== 0;
    }
    input.addEventListener("input", apply);
    qsa(".filter-chip", filters).forEach(function (chip) {
      chip.addEventListener("click", function () {
        current = chip.getAttribute("data-f");
        qsa(".filter-chip", filters).forEach(function (c) { c.setAttribute("aria-pressed", c === chip); });
        apply();
      });
    });
  }

  /* ------------------------------- helpers ------------------------------- */
  function shortName(f) {
    // "Guru Nanak Dev Ji" -> "Guru Nanak Dev Ji"; keep it simple & respectful
    return f.name;
  }

  function bornLabel(f) {
    return f.type === "scripture" ? "Compilation / Guruship" : "Born";
  }

  function passedLabel(f) {
    var tags = f.tags || [];
    if (tags.indexOf("martyr") >= 0 || tags.indexOf("martyrs") >= 0) return "Shaheedi";
    return f.type === "guru" ? "Joti Jot" : "Passed";
  }

  /* ------------------------------ More hub ------------------------------- */
  function viewMore() {
    var items = [
      { href: "#/festivals", emoji: "🪔", title: "Festivals & Gurpurabs", sub: "The Sikh year of celebration & remembrance" },
      { href: "#/fives", emoji: "🪯", title: "The Five Ks", sub: "The sacred articles of faith of the Khalsa" },
      { href: "#/glossary", emoji: "📖", title: "Glossary", sub: "Sikh words, explained simply" },
      { href: "#/gurdwaras", emoji: "🗺️", title: "Historical Gurdwaras", sub: "A map of sacred places" },
      { href: "#/about", emoji: "🪷", title: "About & Sources", sub: "How Virsa protects accuracy" }
    ];
    app.innerHTML =
      '<section class="view-enter">' +
      '<div class="section-head"><div class="eyebrow">Explore</div><h1>More to discover</h1>' +
      '<p class="lede">Deepen your understanding of Sikh heritage and practice.</p></div>' +
      '<div class="grid grid-cards">' +
      items.map(function (i) {
        return '<a class="tile hub-tile" href="' + i.href + '"><span class="hub-emoji" aria-hidden="true">' + i.emoji + '</span><h3>' + esc(i.title) + '</h3><p>' + esc(i.sub) + '</p></a>';
      }).join("") +
      "</div></section>";
  }

  /* ----------------------------- Festivals ------------------------------- */
  function viewFestivals() {
    var cards = (D.festivals || []).map(function (f) {
      return (
        '<article class="card festival-card">' +
          '<div class="festival-head"><h3>' + esc(f.name) + ' <span class="gurmukhi" lang="pa">' + esc(f.gurmukhi || "") + "</span></h3>" +
            '<div class="festival-when"><span class="badge badge-time">' + esc(f.kind) + "</span> · " + esc(f.whenText) + "</div></div>" +
          '<p class="festival-section"><b>Remembers</b> ' + esc(f.commemorates) + "</p>" +
          '<p class="festival-section"><b>How it is observed</b> ' + esc(f.observance) + "</p>" +
          '<p class="festival-section meaning"><b>Why it matters</b> ' + esc(f.significance) + "</p>" +
        "</article>"
      );
    }).join("");
    app.innerHTML =
      '<section class="view-enter">' +
      '<a class="back-link" href="#/more">← More</a>' +
      '<div class="section-head"><div class="eyebrow">The Sikh year</div><h1>Festivals &amp; Gurpurabs</h1>' +
      '<p class="lede">Days of celebration and remembrance through the year.</p></div>' +
      '<div class="note-box mt-1">📅 ' + esc(D.festivalsNote || "") + "</div>" +
      '<div class="festival-list">' + cards + "</div>" +
      "</section>";
  }

  /* ------------------------------ Five Ks -------------------------------- */
  function viewFives() {
    var kids = kidsOn();
    var cards = (D.fives || []).map(function (k) {
      var body = kids
        ? '<div class="callout kids" style="margin-top:10px"><span class="label">Simple version</span><p>' + esc(k.forKids) + "</p></div>"
        : "<p>" + esc(k.meaning) + '</p><div class="callout lesson" style="margin:12px 0 0"><span class="label">Why it matters</span><p>' + esc(k.significance) + "</p></div>";
      return (
        '<article class="card kakaar-card">' +
          '<div class="kakaar-head"><span class="detail-emblem">' + icon(k.icon) + "</span>" +
            "<div><h3>" + esc(k.name) + ' <span class="gurmukhi" lang="pa">' + esc(k.gurmukhi) + "</span></h3>" +
            '<div class="detail-title">' + esc(k.subtitle) + "</div></div></div>" +
          body +
        "</article>"
      );
    }).join("");
    app.innerHTML =
      '<section class="view-enter">' +
      '<a class="back-link" href="#/more">← More</a>' +
      '<div class="section-head"><div class="eyebrow">The Khalsa</div><h1>The Five Ks <span class="gurmukhi" lang="pa" style="font-size:.8em">ਪੰਜ ਕਕਾਰ</span></h1>' +
      '<p class="lede">' + esc(D.fivesIntro || "") + "</p></div>" +
      '<div class="kakaar-list">' + cards + "</div>" +
      "</section>";
  }

  /* ------------------------------ Glossary ------------------------------- */
  function viewGlossary() {
    var terms = (D.glossary || []).slice().sort(function (a, b) { return a.term.localeCompare(b.term); });
    var cards = terms.map(function (t) {
      return (
        '<article class="card term-card" data-search="' + esc((t.term + " " + (t.def || "") + " " + (t.cat || "")).toLowerCase()) + '">' +
          '<div class="term-head"><h3>' + esc(t.term) + "</h3>" + (t.gurmukhi ? '<span class="gurmukhi term-gur" lang="pa">' + esc(t.gurmukhi) + "</span>" : "") + "</div>" +
          (t.cat ? '<span class="chip">' + esc(t.cat) + "</span>" : "") +
          "<p>" + esc(t.def) + "</p>" +
        "</article>"
      );
    }).join("");
    app.innerHTML =
      '<section class="view-enter">' +
      '<a class="back-link" href="#/more">← More</a>' +
      '<div class="section-head"><div class="eyebrow">Words &amp; meanings</div><h1>Glossary</h1>' +
      '<p class="lede">Sikh terms explained simply — to help bridge the language barrier.</p></div>' +
      '<div class="toolbar"><label class="search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>' +
        '<input id="glSearch" type="search" placeholder="Search a term or meaning…" aria-label="Search glossary" /></label></div>' +
      '<div class="term-grid" id="glGrid">' + cards + "</div>" +
      '<div class="empty" id="glEmpty" hidden><div class="big">🔎</div>No matching terms — try another word.</div>' +
      "</section>";
    var input = byId("glSearch"), grid = byId("glGrid"), empty = byId("glEmpty");
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase(), shown = 0;
      qsa(".term-card", grid).forEach(function (c) {
        var show = !q || (c.getAttribute("data-search") || "").indexOf(q) >= 0;
        c.style.display = show ? "" : "none"; if (show) shown++;
      });
      empty.hidden = shown !== 0;
    });
  }

  /* ------------------------ Historical Gurdwaras ------------------------- */
  var _leaflet = null;
  function ensureLeaflet(cb) {
    if (window.L) { cb(true); return; }
    if (_leaflet) { _leaflet.then(cb); return; }
    _leaflet = new Promise(function (resolve) {
      var css = document.createElement("link");
      css.rel = "stylesheet"; css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      css.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      css.crossOrigin = "anonymous";
      document.head.appendChild(css);
      var s = document.createElement("script");
      s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      s.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
      s.crossOrigin = "anonymous";
      s.onload = function () { resolve(true); };
      s.onerror = function () { resolve(false); };
      document.head.appendChild(s);
    });
    _leaflet.then(cb);
  }
  function viewGurdwaras() {
    var cards = (D.gurdwaras || []).map(function (g) {
      return (
        '<article class="card gurdwara-card' + (g.takht ? " is-takht" : "") + '">' +
          '<div class="gurdwara-head"><h3>' + esc(g.name) + "</h3>" + (g.takht ? '<span class="badge badge-trad">Takht</span>' : "") + "</div>" +
          '<div class="gurdwara-place">📍 ' + esc(g.place) + "</div>" +
          "<p>" + esc(g.significance) + "</p>" +
          '<a class="btn btn-sm" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(g.mapsQuery) + '" target="_blank" rel="noopener">View on map ↗</a>' +
        "</article>"
      );
    }).join("");
    app.innerHTML =
      '<section class="view-enter">' +
      '<a class="back-link" href="#/more">← More</a>' +
      '<div class="section-head"><div class="eyebrow">Sacred places</div><h1>Historical Gurdwaras</h1>' +
      '<p class="lede">Places woven through Sikh history — from the birthplace of Guru Nanak Dev Ji to the five Takhts. Marker positions are approximate; tap “View on map” for precise directions.</p></div>' +
      '<div id="gmap" class="gmap" role="img" aria-label="Map of historical Gurdwaras"></div>' +
      '<div class="grid grid-cards gurdwara-list">' + cards + "</div>" +
      "</section>";
    initGurdwaraMap();
  }
  function initGurdwaraMap() {
    var mapEl = byId("gmap");
    if (!mapEl) return;
    ensureLeaflet(function (ok) {
      if (!ok || !window.L || !byId("gmap")) {
        if (byId("gmap")) byId("gmap").innerHTML = '<div class="map-fallback">🗺️ The interactive map couldn’t load (you may be offline). Every Gurdwara below has a “View on map” link.</div>';
        return;
      }
      try {
        var map = L.map(mapEl, { scrollWheelZoom: false }).setView([28.6, 76.5], 4);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "© OpenStreetMap contributors" }).addTo(map);
        (D.gurdwaras || []).forEach(function (g) {
          L.marker(g.coords).addTo(map).bindPopup('<b>' + esc(g.name) + "</b><br>" + esc(g.place) + '<br><a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(g.mapsQuery) + '" target="_blank" rel="noopener">View on map ↗</a>');
        });
        setTimeout(function () { map.invalidateSize(); }, 200);
      } catch (e) {
        mapEl.innerHTML = '<div class="map-fallback">🗺️ Map unavailable. Use the “View on map” links below.</div>';
      }
    });
  }

  /* ------------------------------- router -------------------------------- */
  var routes = {
    "": viewHome, "home": viewHome, "figures": viewFigures, "stories": viewStories,
    "gurbani": viewGurbani, "nitnem": viewNitnem, "more": viewMore,
    "festivals": viewFestivals, "fives": viewFives, "glossary": viewGlossary,
    "gurdwaras": viewGurdwaras, "about": viewAbout
  };
  function router() {
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/");
    gurbaniOverride = null; // reset daily verse when navigating
    if (parts[0] === "figure" && parts[1]) { viewFigureDetail(decodeURIComponent(parts[1])); }
    else if (parts[0] === "story" && parts[1]) { viewStoryDetail(decodeURIComponent(parts[1])); }
    else { (routes[parts[0]] || viewHome)(); }
    setActiveTab(parts[0] || "home");
    window.scrollTo(0, 0);
    byId("main").focus({ preventScroll: true });
  }
  function setActiveTab(name) {
    var map = {
      figure: "figures", story: "stories", "": "home",
      festivals: "more", fives: "more", glossary: "more", gurdwaras: "more", about: "more", more: "more"
    };
    var active = map[name] || name;
    qsa(".tab").forEach(function (t) { t.classList.toggle("active", t.getAttribute("data-tab") === active); });
  }

  /* ----------------------------- chrome wiring --------------------------- */
  function initChrome() {
    // theme
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = store.get("virsa.theme", prefersDark ? "dark" : "light");
    var themeBtn = byId("themeToggle");
    function syncTheme() {
      var next = theme === "dark" ? "light" : "dark";
      themeBtn.setAttribute("aria-label", "Switch to " + next + " mode");
      themeBtn.setAttribute("title", "Switch to " + next + " mode");
    }
    document.documentElement.dataset.theme = theme;
    syncTheme();
    themeBtn.addEventListener("click", function () {
      theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = theme;
      store.set("virsa.theme", theme);
      syncTheme();
    });
    // kids mode
    var kidsBtn = byId("kidsToggle");
    function syncKids() { kidsBtn.setAttribute("aria-pressed", kidsOn()); }
    syncKids();
    kidsBtn.addEventListener("click", function () {
      store.set("virsa.kids", !kidsOn());
      syncKids();
      router(); // re-render current view with the new mode
    });
  }

  /* -------------------------------- boot --------------------------------- */
  window.addEventListener("hashchange", router);
  initChrome();
  if (!location.hash) location.replace("#/home");
  router();
})();
