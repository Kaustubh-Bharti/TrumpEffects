/**
 * APPLICATION LOGIC LAYER
 *
 * OOAD Principles:
 *  - Single Responsibility: Each class handles one concern
 *  - Open/Closed: New features extend without modifying existing code
 *  - Encapsulation: Internal state is private via #fields
 *  - Observer Pattern: Theme changes notify all listeners
 *  - Facade Pattern: App class orchestrates subsystems
 */

/* ──────────────────────────────────────────────
   0. PLATFORM DETECTOR
   ────────────────────────────────────────────── */
class PlatformDetector {
  static #platform = null;

  static detect() {
    if (PlatformDetector.#platform) return PlatformDetector.#platform;

    const ua = navigator.userAgent.toLowerCase();
    const p  = navigator.platform?.toLowerCase() || '';

    if (p.startsWith('win') || ua.includes('windows')) {
      PlatformDetector.#platform = 'windows';
    } else if (p.startsWith('mac') || ua.includes('macintosh') || ua.includes('mac os')) {
      PlatformDetector.#platform = 'macos';
    } else if (p.startsWith('linux') || ua.includes('linux') || ua.includes('x11')) {
      PlatformDetector.#platform = 'linux';
    } else {
      PlatformDetector.#platform = 'windows'; // sensible default
    }
    return PlatformDetector.#platform;
  }

  static get label() {
    const map = { windows: 'Windows', macos: 'macOS', linux: 'Linux' };
    return map[PlatformDetector.detect()] || 'Windows';
  }

  static get icon() {
    const map = {
      windows: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.5l9.9-1.4v9.5H0zm11.1-1.6L24 0v11.6H11.1zM0 12.6h9.9v9.5L0 20.7zm11.1-.1H24V24l-12.9-1.8z"/></svg>`,
      macos: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
      linux: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.362 1.97 1.608.849.241 1.813.07 2.576-.527.735-.597 1.024-1.529 1.226-2.28.207-.784.37-1.527.504-2.1a.5.5 0 00.023-.189c.013-.072.017-.137.012-.195-.058-.505-.266-1.061-.678-1.42a2.4 2.4 0 00-.27-.204c.158-.39.234-.689.17-1.004-.064-.306-.278-.527-.46-.778-.18-.246-.341-.502-.4-.777-.058-.276-.07-.587-.075-.765-.003-.2.015-.373.02-.55.01-.353.012-.69-.07-1.16-.083-.408-.241-.817-.441-1.303l-.003-.003C16.411 7.768 16.031 5.407 15.558 4c-.238-.702-.58-1.263-1.054-1.582-.388-.261-.832-.346-1.296-.415-.46-.065-.97-.084-1.47-.1-.503-.01-1.016-.02-1.478-.087-.456-.066-.87-.2-1.19-.515C9.758.803 9.28.295 8.585.122c-.347-.084-.717-.079-1.032-.01-.32.066-.627.2-.887.415-.517.42-.872 1.077-.918 1.793-.054.867.155 1.747.476 2.562.32.812.757 1.578 1.3 2.229.516.633 1.12 1.16 1.82 1.546.699.387 1.47.616 2.284.608.4-.004.824-.073 1.104-.27.282-.199.37-.51.354-.79-.016-.283-.13-.507-.31-.675-.177-.167-.395-.28-.597-.373a3.5 3.5 0 01-.22-.115 1.19 1.19 0 01-.176-.132.49.49 0 01-.12-.173.52.52 0 01-.01-.34c.032-.077.087-.149.163-.21.077-.06.175-.109.278-.145.208-.076.384-.06.437-.03.076.043.178.132.308.253.13.12.285.279.452.426.337.299.75.562 1.225.625.476.063.937-.117 1.43-.372.487-.254 1.003-.577 1.508-.887a28 28 0 011.703-.932c.178-.087.372-.178.59-.277v-.002z"/></svg>`
    };
    return map[PlatformDetector.detect()] || map.windows;
  }
}

/* ──────────────────────────────────────────────
   1. THEME MANAGER (Observer Pattern)
   ────────────────────────────────────────────── */
class ThemeManager {
  #currentTheme;
  #listeners;
  #storageKey;

  constructor(storageKey = "trump-effects-theme") {
    this.#storageKey = storageKey;
    this.#listeners = [];
    this.#currentTheme = this.#loadSavedTheme();
  }

  #loadSavedTheme() {
    const saved = localStorage.getItem(this.#storageKey);
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  get theme() { return this.#currentTheme; }
  get isDark() { return this.#currentTheme === "dark"; }
  get label() { return this.isDark ? "Starry" : "Autumn"; }

  toggle() {
    this.#currentTheme = this.isDark ? "light" : "dark";
    localStorage.setItem(this.#storageKey, this.#currentTheme);
    this.#applyTheme();
    this.#notifyListeners();
  }

  #applyTheme() {
    document.documentElement.setAttribute("data-theme", this.#currentTheme);
  }

  onChange(fn) { this.#listeners.push(fn); }
  #notifyListeners() { this.#listeners.forEach(fn => fn(this.#currentTheme)); }
  init() { this.#applyTheme(); }
}

/* ──────────────────────────────────────────────
   2. FILTER MANAGER
   ────────────────────────────────────────────── */
class FilterManager {
  #activeCategory;
  #searchQuery;
  #onChangeCallback;

  constructor() {
    this.#activeCategory = "all";
    this.#searchQuery = "";
    this.#onChangeCallback = null;
  }

  setCategory(id) { this.#activeCategory = id; this.#notify(); }
  setSearch(q) { this.#searchQuery = q.toLowerCase().trim(); this.#notify(); }

  get activeCategory() { return this.#activeCategory; }
  get searchQuery() { return this.#searchQuery; }

  onChange(fn) { this.#onChangeCallback = fn; }
  #notify() { if (this.#onChangeCallback) this.#onChangeCallback(); }

  filter(actions) {
    return actions.filter(action => {
      const matchesSearch =
        !this.#searchQuery ||
        action.title.toLowerCase().includes(this.#searchQuery) ||
        action.subtitle.toLowerCase().includes(this.#searchQuery) ||
        action.summary.toLowerCase().includes(this.#searchQuery) ||
        action.affectedCountries.some(c =>
          c.name.toLowerCase().includes(this.#searchQuery)
        );

      const matchesCategory =
        this.#activeCategory === "all" ||
        action.category.id === this.#activeCategory;

      return matchesSearch && matchesCategory;
    });
  }
}

/* ──────────────────────────────────────────────
   3. MODAL MANAGER
   ────────────────────────────────────────────── */
class ModalManager {
  #overlayEl;
  #isOpen;

  constructor() {
    this.#isOpen = false;
  }

  init() {
    this.#overlayEl = document.getElementById("modalOverlay");

    // Close on overlay click
    this.#overlayEl.addEventListener("click", (e) => {
      if (e.target === this.#overlayEl) this.close();
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.#isOpen) this.close();
    });
  }

  open(action) {
    this.#overlayEl.innerHTML = Renderer.renderModal(action);
    this.#overlayEl.classList.add("modal-overlay--active");
    document.body.style.overflow = "hidden";
    this.#isOpen = true;

    // Bind close button
    const closeBtn = this.#overlayEl.querySelector(".modal__close");
    if (closeBtn) closeBtn.addEventListener("click", () => this.close());
  }

  close() {
    this.#overlayEl.classList.remove("modal-overlay--active");
    document.body.style.overflow = "";
    this.#isOpen = false;
  }
}

/* ──────────────────────────────────────────────
   4. RENDERER (Template Method / Static Factory)
   ────────────────────────────────────────────── */
class Renderer {

  /** Decorative code-like elements for the hero background */
  static #decoItems = [
    { text: "§",      left: "6%",  top: "18%", dur: "7s",  delay: "0s",   rot: "-4deg" },
    { text: "exec",   left: "10%", top: "45%", dur: "9s",  delay: "1s",   rot: "3deg"  },
    { text: "{ }",    left: "7%",  top: "72%", dur: "6s",  delay: "0.5s", rot: "-6deg" },
    { text: "act",    left: "18%", top: "85%", dur: "8s",  delay: "2s",   rot: "2deg"  },
    { text: ">>",     left: "25%", top: "22%", dur: "10s", delay: "1.5s", rot: "-3deg" },
    { text: "( )",    left: "80%", top: "15%", dur: "8s",  delay: "0.8s", rot: "4deg"  },
    { text: "=>",     left: "87%", top: "38%", dur: "7s",  delay: "2.5s", rot: "-5deg" },
    { text: "fx()",   left: "84%", top: "60%", dur: "9s",  delay: "0s",   rot: "5deg"  },
    { text: "[ ]",    left: "91%", top: "78%", dur: "6s",  delay: "1s",   rot: "-3deg" },
    { text: "ord",    left: "78%", top: "90%", dur: "11s", delay: "3s",   rot: "6deg"  },
    { text: "||",     left: "38%", top: "10%", dur: "8s",  delay: "0.3s", rot: "-2deg" },
    { text: "++",     left: "50%", top: "6%",  dur: "7s",  delay: "1.8s", rot: "1deg"  },
    { text: "//",     left: "60%", top: "82%", dur: "9s",  delay: "2.2s", rot: "-3deg" },
    { text: "&&",     left: "4%",  top: "58%", dur: "8s",  delay: "1.2s", rot: "4deg"  },
    { text: "~",      left: "70%", top: "28%", dur: "10s", delay: "0.7s", rot: "-5deg" },
  ];

  /* ---- Navbar ---- */
  static renderNavbar(metadata) {
    return `
      <nav class="navbar" id="navbar">
        <div class="container navbar__inner">
          <a href="#hero" class="navbar__brand">
            <span class="navbar__brand-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </span>
            Trump<span class="navbar__brand-dot">Effects</span>
          </a>
          <div class="navbar__actions">
            <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
              <span class="theme-toggle__icon theme-toggle__icon--sun" title="Light mode">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              </span>
              <span class="theme-toggle__icon theme-toggle__icon--moon" title="Dark mode">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>
    `;
  }

  /* ---- Hero ---- */
  static renderHero(metadata) {
    const decoHTML = Renderer.#decoItems.map(d => `
      <span class="hero-deco" style="
        left:${d.left};top:${d.top};
        --float-duration:${d.dur};--float-delay:${d.delay};
        --rot-start:0deg;--rot-end:${d.rot};
        --float-y:-${8 + Math.random() * 14}px;
      ">${d.text}</span>
    `).join("");

    return `
      <section class="hero" id="hero">
        <div class="hero__decorations" aria-hidden="true">${decoHTML}</div>
        <div class="container hero__inner">
          <span class="hero__eyebrow">Comprehensive Policy Analysis &mdash; ${metadata.lastUpdated}</span>
          <h1 class="hero__title">
            The Most <span class="hero__title-accent">Controversial</span> Actions
            &amp; Their Global Fallout
          </h1>
          <p class="hero__subtitle">${metadata.subtitle}</p>
          <p class="hero__tagline">"Every executive order has a ripple effect that crosses borders."</p>
          <div class="hero__actions">
            <a href="#actions" class="btn btn--primary">Explore All Actions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#overview" class="btn btn--ghost">View Stats</a>
          </div>
          <div class="hero__scroll-hint">
            <span>Scroll</span>
            <span class="hero__scroll-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </span>
          </div>
        </div>
      </section>
    `;
  }

  /* ---- Stats Overview ---- */
  static renderOverview(actions) {
    const totalCountries = new Set(
      actions.flatMap(a => a.affectedCountries.map(c => c.name))
    ).size;
    const totalEffects = actions.reduce(
      (sum, a) => sum + a.globalEffects.length, 0
    );
    const avgControversy = Math.round(
      actions.reduce((s, a) => s + a.controversyLevel, 0) / actions.length
    );

    return `
      <section class="overview" id="overview">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-card">
              <span class="stat-card__number" data-count="${actions.length}">0</span>
              <span class="stat-card__label">Actions Analyzed</span>
            </div>
            <div class="stat-card">
              <span class="stat-card__number" data-count="${totalCountries}">0</span>
              <span class="stat-card__label">Countries Affected</span>
            </div>
            <div class="stat-card">
              <span class="stat-card__number" data-count="${totalEffects}">0</span>
              <span class="stat-card__label">Global Effects</span>
            </div>
            <div class="stat-card">
              <span class="stat-card__number" data-count="${avgControversy}">0</span>
              <span class="stat-card__label">Avg. Controversy</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /* ---- Filters ---- */
  static renderFilters(categories) {
    const pills = categories.map(cat => `
      <button class="filter-pill" data-category="${cat.id}">
        <span class="filter-pill__dot" style="background:${cat.color}"></span>
        <span class="filter-pill__label">${cat.label}</span>
      </button>
    `).join("");

    return `
      <section class="filters" id="filters">
        <div class="container">
          <div class="filters__bar">
            <div class="filters__search">
              <svg class="filters__search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input type="text" class="filters__input" id="searchInput"
                     placeholder="Search actions, countries..." autocomplete="off" />
            </div>
            <div class="filters__pills" id="filterPills">
              <button class="filter-pill filter-pill--active" data-category="all">
                <span class="filter-pill__dot" style="background:var(--color-accent)"></span>
                <span class="filter-pill__label">All</span>
              </button>
              ${pills}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /* ---- Action Card ---- */
  static renderActionCard(action, index) {
    const imageStyle = action.image
      ? `background-image:url('${action.image}');background-size:cover;background-position:center;`
      : `background:${action.imageGradient};`;

    return `
      <article class="action-card" data-action-id="${action.id}" style="--index:${index}">
        <div class="action-card__image" style="${imageStyle}">
          <span class="action-card__tag" style="--tag-color:${action.category.color}">
            ${action.category.label}
          </span>
          <span class="action-card__status action-card__status--${action.status.toLowerCase()}">${action.status}</span>
        </div>
        <div class="action-card__content">
          <h3 class="action-card__title">${action.title}</h3>
          <p class="action-card__subtitle">${action.subtitle}</p>
          <p class="action-card__summary">${action.summary}</p>
          <div class="action-card__meta">
            <span class="action-card__date">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              ${action.date}
            </span>
            <span class="action-card__countries-count">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              ${action.affectedCountries.length} countries
            </span>
          </div>
          <div class="controversy-bar" title="Controversy: ${action.controversyLevel}/100">
            <div class="controversy-bar__fill" style="--level:${action.controversyLevel}%"></div>
          </div>
        </div>
      </article>
    `;
  }

  /* ---- Actions Grid ---- */
  static renderActionsGrid(actions) {
    if (actions.length === 0) {
      return `
        <div class="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <h3 class="empty-state__title">No matching actions</h3>
          <p class="empty-state__desc">Try adjusting your search or filter criteria.</p>
        </div>
      `;
    }
    return actions.map((a, i) => Renderer.renderActionCard(a, i)).join("");
  }

  /* ---- Detail Modal ---- */
  static renderModal(action) {
    const imageStyle = action.image
      ? `background-image:url('${action.image}');background-size:cover;background-position:center;`
      : `background:${action.imageGradient};`;

    const factsHTML = action.keyFacts
      .map(f => `<li class="fact-item">${f}</li>`)
      .join("");

    const effectsHTML = action.globalEffects
      .map(e => `
        <div class="effect-card">
          <h4 class="effect-card__title">${e.title}</h4>
          <p class="effect-card__desc">${e.description}</p>
        </div>
      `)
      .join("");

    const countriesHTML = action.affectedCountries
      .map(c => `
        <div class="country-item">
          <div class="country-item__header">
            <span class="country-item__flag">${c.flag}</span>
            <h4 class="country-item__name">${c.name}</h4>
          </div>
          <p class="country-item__impact">${c.impact}</p>
        </div>
      `)
      .join("");

    return `
      <div class="modal" role="dialog" aria-modal="true" aria-label="${action.title}">
        <button class="modal__close" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div class="modal__hero-image" style="${imageStyle}"></div>

        <div class="modal__body">
          <span class="modal__tag" style="--tag-color:${action.category.color}">
            ${action.category.label}
          </span>
          <span class="modal__status modal__status--${action.status.toLowerCase()}">${action.status}</span>

          <h2 class="modal__title">${action.title}</h2>
          <p class="modal__date">${action.date}</p>

          <div class="modal__controversy">
            <span class="modal__controversy-label">Controversy Level</span>
            <div class="controversy-bar controversy-bar--large">
              <div class="controversy-bar__fill" style="--level:${action.controversyLevel}%"></div>
            </div>
            <span class="modal__controversy-value">${action.controversyLevel}/100</span>
          </div>

          <div class="modal__section">
            <h3 class="modal__section-title">Overview</h3>
            <p class="modal__overview">${action.overview}</p>
          </div>

          <div class="modal__section">
            <h3 class="modal__section-title">Key Facts</h3>
            <ul class="modal__facts-list">${factsHTML}</ul>
          </div>

          <div class="modal__section">
            <h3 class="modal__section-title">Global Effects</h3>
            <div class="modal__effects-grid">${effectsHTML}</div>
          </div>

          <div class="modal__section">
            <h3 class="modal__section-title">Affected Countries</h3>
            <div class="modal__countries">${countriesHTML}</div>
          </div>
        </div>
      </div>
    `;
  }

  /* ---- Footer ---- */
  /* ---- Strategic Goals ---- */
  static renderGoalsSection(goals) {
    const cardsHTML = goals.map(g => {
      const metricsHTML = g.keyMetrics.map(m => `
        <div class="goal-metric">
          <span class="goal-metric__value">${m.value}</span>
          <span class="goal-metric__label">${m.label}</span>
        </div>
      `).join('');

      const relatedHTML = g.relatedActionIds.map(id => {
        const action = ActionsData.find(a => a.id === id);
        return action ? `<span class="goal-related-tag" data-action-id="${id}">${action.title}</span>` : '';
      }).join('');

      return `
        <div class="goal-card" data-goal-id="${g.id}">
          <div class="goal-card__top">
            <div class="goal-card__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${g.iconPath}"/></svg>
            </div>
            <div>
              <h3 class="goal-card__title">${g.title}</h3>
              <span class="goal-card__subtitle">${g.subtitle}</span>
            </div>
          </div>
          <p class="goal-card__description">${g.description}</p>
          <div class="goal-card__metrics">${metricsHTML}</div>
          <div class="goal-card__related">
            <p class="goal-card__related-title">Related Actions</p>
            <div class="goal-card__related-list">${relatedHTML}</div>
          </div>
          <p class="goal-card__expand-hint">Click to expand</p>
        </div>
      `;
    }).join('');

    return `
      <section class="goals-section" id="goals">
        <div class="container">
          <div class="goals-section__header">
            <h2 class="goals-section__title">Strategic Goals</h2>
            <p class="goals-section__subtitle">The overarching objectives behind the executive orders, tariffs, and geopolitical maneuvers.</p>
          </div>
          <div class="goals-grid">${cardsHTML}</div>
        </div>
      </section>
    `;
  }

  /* ---- Potential Reasons ---- */
  static renderReasonsSection(reasons) {
    const cardsHTML = reasons.map((r, i) => {
      const evidenceHTML = r.evidence.map(e => `<li class="evidence-item">${e}</li>`).join('');

      return `
        <div class="reason-card" data-reason-id="${r.id}">
          <div class="reason-card__header">
            <div class="reason-card__header-left">
              <span class="reason-card__number">Theory ${String(i + 1).padStart(2, '0')}</span>
              <h3 class="reason-card__title">${r.title}</h3>
              <p class="reason-card__tagline">"${r.tagline}"</p>
            </div>
            <svg class="reason-card__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="reason-card__body">
            <div class="reason-card__body-inner">
              <p class="reason-card__analysis">${r.analysis}</p>
              <p class="reason-card__evidence-title">Supporting Evidence</p>
              <ul class="reason-card__evidence-list">${evidenceHTML}</ul>
              <div class="reason-card__counter">
                <p class="reason-card__counter-label">Counterpoint</p>
                <p class="reason-card__counter-text">${r.counterArgument}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <section class="reasons-section" id="reasons">
        <div class="container">
          <div class="reasons-section__header">
            <h2 class="reasons-section__title">Why Is He Doing This?</h2>
            <p class="reasons-section__subtitle">Five analytical frameworks for understanding the strategic calculus behind the controversy.</p>
          </div>
          <div class="reasons-list">${cardsHTML}</div>
        </div>
      </section>
    `;
  }

  /* ---- Downloads ---- */
  static renderDownloadsSection(downloads) {
    const downloadSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`;

    const platform = PlatformDetector.detect();
    const platformLabel = PlatformDetector.label;

    const cardsHTML = downloads.map(d => {
      const exeFile = d.executables?.[platform] || '';

      return `
        <div class="download-card">
          <div class="download-card__icon download-card__icon--${d.iconType}">${downloadSvg}</div>
          <h3 class="download-card__title">${d.title}</h3>
          <p class="download-card__description">${d.description}</p>
          <a class="download-card__btn" href="${exeFile}" download="${exeFile}">
            ${downloadSvg}
            Download
          </a>
        </div>
      `;
    }).join('');

    return `
      <section class="downloads-section" id="downloads">
        <div class="container">
          <div class="downloads-section__header">
            <h2 class="downloads-section__title">Downloads &amp; Resources</h2>
            <p class="downloads-section__subtitle">Executable reports auto-detected for your platform. Click to download.</p>
          </div>
          <div class="downloads-grid">${cardsHTML}</div>
        </div>
      </section>
    `;
  }

  static renderFooter(metadata) {
    return `
      <footer class="footer">
        <div class="container footer__inner">
          <p class="footer__text">${metadata.footer}</p>
          <p class="footer__text footer__text--small">Last updated: ${metadata.lastUpdated}</p>
        </div>
      </footer>
    `;
  }
}

/* ──────────────────────────────────────────────
   5. ANIMATION CONTROLLER
   ────────────────────────────────────────────── */
class AnimationController {
  #observer;

  constructor() {
    this.#observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            this.#observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
  }

  observeAll(selector) {
    document.querySelectorAll(selector).forEach(el => this.#observer.observe(el));
  }

  static animateCountUp() {
    document.querySelectorAll("[data-count]").forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
}

/* ──────────────────────────────────────────────
   6. APP CONTROLLER (Facade Pattern)
   ────────────────────────────────────────────── */
class App {
  #themeManager;
  #filterManager;
  #modalManager;
  #animationController;

  constructor() {
    this.#themeManager = new ThemeManager();
    this.#filterManager = new FilterManager();
    this.#modalManager = new ModalManager();
    this.#animationController = new AnimationController();
  }

  init() {
    this.#themeManager.init();
    this.#renderPage();
    this.#modalManager.init();
    this.#bindEvents();
    this.#initAnimations();
  }

  #renderPage() {
    const app = document.getElementById("app");
    const categories = getAllActionCategories();

    app.innerHTML = `
      ${Renderer.renderNavbar(SiteMetadata)}
      ${Renderer.renderHero(SiteMetadata)}
      ${Renderer.renderDownloadsSection(DownloadableResources)}
      ${Renderer.renderOverview(ActionsData)}
      ${Renderer.renderGoalsSection(StrategicGoals)}
      ${Renderer.renderReasonsSection(PotentialReasons)}
      ${Renderer.renderFilters(categories)}

      <section class="actions" id="actions">
        <div class="container">
          <div class="actions__header">
            <h2 class="section-title">All Actions</h2>
            <p class="section-subtitle" id="resultCount">${ActionsData.length} actions</p>
          </div>
          <div class="actions-grid" id="actionsGrid">
            ${Renderer.renderActionsGrid(ActionsData)}
          </div>
        </div>
      </section>

      ${Renderer.renderFooter(SiteMetadata)}

      <div class="modal-overlay" id="modalOverlay"></div>
    `;
  }

  #bindEvents() {
    // Theme toggle
    document.getElementById("themeToggle").addEventListener("click", () => {
      this.#themeManager.toggle();
    });

    // Search (debounced)
    const searchInput = document.getElementById("searchInput");
    let searchTimeout;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        this.#filterManager.setSearch(e.target.value);
      }, 200);
    });

    // Filter pills
    document.getElementById("filterPills").addEventListener("click", (e) => {
      const pill = e.target.closest(".filter-pill");
      if (!pill) return;
      document.querySelectorAll(".filter-pill").forEach(p =>
        p.classList.remove("filter-pill--active")
      );
      pill.classList.add("filter-pill--active");
      this.#filterManager.setCategory(pill.dataset.category);
    });

    this.#filterManager.onChange(() => this.#updateGrid());

    // Card clicks → open modal (event delegation)
    document.getElementById("actionsGrid").addEventListener("click", (e) => {
      const card = e.target.closest(".action-card");
      if (!card) return;
      const actionId = card.dataset.actionId;
      const action = ActionsData.find(a => a.id === actionId);
      if (action) this.#modalManager.open(action);
    });

    // Navbar scroll effect — background appears after scroll
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      navbar.classList.toggle("navbar--scrolled", window.scrollY > 50);
    }, { passive: true });

    // Smooth scroll anchors
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const el = document.querySelector(link.getAttribute("href"));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    // Goal card expand/collapse
    document.querySelectorAll('.goal-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.goal-related-tag')) {
          e.stopPropagation();
          const actionId = e.target.dataset.actionId;
          const action = ActionsData.find(a => a.id === actionId);
          if (action) this.#modalManager.open(action);
          return;
        }
        card.classList.toggle('goal-card--expanded');
        const hint = card.querySelector('.goal-card__expand-hint');
        if (hint) hint.textContent = card.classList.contains('goal-card--expanded') ? 'Click to collapse' : 'Click to expand';
      });
    });

    // Reason card accordion
    document.querySelectorAll('.reason-card__header').forEach(header => {
      header.addEventListener('click', () => {
        const card = header.closest('.reason-card');
        card.classList.toggle('reason-card--expanded');
      });
    });



  }

  #updateGrid() {
    const filtered = this.#filterManager.filter([...ActionsData]);
    const grid = document.getElementById("actionsGrid");
    const count = document.getElementById("resultCount");

    grid.innerHTML = Renderer.renderActionsGrid(filtered);
    count.textContent = `${filtered.length} action${filtered.length !== 1 ? "s" : ""}`;
    this.#animationController.observeAll(".action-card");
  }

  #initAnimations() {
    this.#animationController.observeAll(".action-card");
    this.#animationController.observeAll(".stat-card");
    this.#animationController.observeAll(".goal-card");
    this.#animationController.observeAll(".reason-card");
    this.#animationController.observeAll(".download-card");

    const overviewObs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            AnimationController.animateCountUp();
            overviewObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    const overview = document.querySelector(".overview");
    if (overview) overviewObs.observe(overview);
  }
}

/* ──────────────────────────────────────────────
   BOOTSTRAP
   ────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});
