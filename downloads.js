/* ══════════════════════════════════════════════
   DOWNLOAD GENERATOR — Styled HTML Report Builder
   ══════════════════════════════════════════════
   Generates standalone, styled HTML documents
   for browser download. Each report is print-ready
   and opens in any browser.
   ────────────────────────────────────────────── */

class DownloadGenerator {

  /** Shared CSS injected into every generated HTML report */
  static #baseCSS = `
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; line-height:1.6; color:#1a1a2e; background:#fff; padding:40px 24px; max-width:900px; margin:0 auto; }
    h1 { font-size:1.8rem; font-weight:800; margin-bottom:6px; color:#1a1a2e; }
    h2 { font-size:1.3rem; font-weight:700; margin:32px 0 12px; padding-left:14px; border-left:4px solid #e8533f; color:#1a1a2e; }
    h3 { font-size:1.05rem; font-weight:700; margin:20px 0 8px; color:#333; }
    p { margin-bottom:12px; color:#4a4a5a; }
    .subtitle { font-size:0.95rem; color:#6a6a7a; margin-bottom:24px; }
    .generated { font-size:0.75rem; color:#aaa; margin-bottom:32px; }
    .card { background:#fafafa; border:1px solid #e8e8ee; border-radius:12px; padding:20px 24px; margin-bottom:16px; }
    .card-title { font-size:1rem; font-weight:700; margin-bottom:4px; }
    .card-subtitle { font-size:0.82rem; color:#e8533f; font-style:italic; margin-bottom:10px; }
    .card-meta { font-size:0.78rem; color:#8a8a9a; margin-bottom:10px; }
    .tag { display:inline-block; font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; padding:3px 10px; border-radius:999px; background:#fef2f0; color:#e8533f; margin-right:6px; margin-bottom:6px; }
    .bar-container { height:6px; background:#f3f3f5; border-radius:99px; margin:8px 0 16px; overflow:hidden; }
    .bar-fill { height:100%; border-radius:99px; background:linear-gradient(90deg,#22c55e,#eab308 45%,#ef4444); }
    ul { padding-left:20px; margin-bottom:16px; }
    li { margin-bottom:6px; font-size:0.88rem; color:#4a4a5a; }
    table { width:100%; border-collapse:collapse; margin:16px 0 24px; font-size:0.85rem; }
    th { text-align:left; padding:10px 14px; background:#f3f3f5; border-bottom:2px solid #e2e2e8; font-weight:700; color:#1a1a2e; }
    td { padding:10px 14px; border-bottom:1px solid #ececf0; color:#4a4a5a; vertical-align:top; }
    tr:hover td { background:#fafafa; }
    .country-flag { font-size:1.2rem; }
    .counter-box { background:#f7f7f9; border-left:3px solid #8a8a9a; padding:12px 16px; border-radius:0 8px 8px 0; margin-top:12px; }
    .counter-label { font-size:0.68rem; font-weight:700; text-transform:uppercase; color:#8a8a9a; margin-bottom:4px; }
    .counter-text { font-size:0.85rem; color:#4a4a5a; font-style:italic; }
    .metric-row { display:flex; gap:12px; flex-wrap:wrap; margin:12px 0; }
    .metric-box { flex:1; min-width:120px; background:#fff; border:1px solid #e8e8ee; border-radius:10px; padding:10px 14px; }
    .metric-value { font-size:1rem; font-weight:800; color:#e8533f; }
    .metric-label { font-size:0.68rem; color:#8a8a9a; text-transform:uppercase; }
    .footer-note { margin-top:48px; padding-top:16px; border-top:1px solid #ececf0; font-size:0.72rem; color:#aaa; text-align:center; }
    @media print { body { padding:20px; } .card { break-inside:avoid; } }
  `;

  /** Wraps body content in a complete HTML document shell */
  static #wrap(title, subtitle, bodyHTML) {
    return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title} — Trump Effects</title><style>${DownloadGenerator.#baseCSS}</style></head><body><h1>${title}</h1><p class="subtitle">${subtitle}</p><p class="generated">Generated on ${new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' })} from TrumpEffects editorial data.</p>${bodyHTML}<p class="footer-note">Trump Effects © 2025 — Independent editorial analysis. All facts from public records.</p></body></html>`;
  }

  /* ────────────────────────────────────────────
     Report 1: Full Action Report
     ──────────────────────────────────────────── */
  static generateFullReport() {
    let body = '';
    ActionsData.forEach((a, i) => {
      const factsHTML = a.keyFacts.map(f => `<li>${f}</li>`).join('');
      const effectsHTML = a.globalEffects.map(e => `<div class="card" style="margin-bottom:10px"><strong>${e.title}</strong><p>${e.description}</p></div>`).join('');
      const countriesHTML = a.affectedCountries.map(c => `<tr><td class="country-flag">${c.flag}</td><td><strong>${c.name}</strong></td><td>${c.impact}</td></tr>`).join('');

      body += `
        <h2>${i + 1}. ${a.title}</h2>
        <span class="tag">${a.category.label}</span>
        <span class="tag">${a.status}</span>
        <span class="tag">${a.date}</span>
        <div class="bar-container"><div class="bar-fill" style="width:${a.controversyLevel}%"></div></div>
        <p><strong>Controversy Level:</strong> ${a.controversyLevel}/100</p>
        <h3>Overview</h3>
        <p>${a.overview}</p>
        <h3>Key Facts</h3>
        <ul>${factsHTML}</ul>
        <h3>Global Effects</h3>
        ${effectsHTML}
        <h3>Affected Countries</h3>
        <table><thead><tr><th></th><th>Country</th><th>Impact</th></tr></thead><tbody>${countriesHTML}</tbody></table>
      `;
    });
    return DownloadGenerator.#wrap('Full Action Report', 'Complete analysis of all 14 controversial actions with facts, effects, and country-level impact data.', body);
  }

  /* ────────────────────────────────────────────
     Report 2: Controversy Rankings
     ──────────────────────────────────────────── */
  static generateControversyRankings() {
    const sorted = [...ActionsData].sort((a, b) => b.controversyLevel - a.controversyLevel);
    let rows = sorted.map((a, i) => `
      <tr>
        <td style="font-weight:700;text-align:center">#${i + 1}</td>
        <td><strong>${a.title}</strong><br><span style="font-size:0.78rem;color:#8a8a9a">${a.category.label}</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">${a.controversyLevel}</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:${a.controversyLevel}%"></div></div></td>
        <td>${a.status}</td>
        <td>${a.date}</td>
        <td style="text-align:center">${a.affectedCountries.length}</td>
      </tr>
    `).join('');

    const body = `
      <table>
        <thead><tr><th>Rank</th><th>Action</th><th>Score</th><th>Level</th><th>Status</th><th>Period</th><th>Countries</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <h2>Score Distribution</h2>
      ${sorted.map(a => `<div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">${a.title}</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:${a.controversyLevel}%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">${a.controversyLevel}</span></div>`).join('')}
    `;
    return DownloadGenerator.#wrap('Controversy Rankings', 'All 14 actions ranked by controversy level — from most to least contentious.', body);
  }

  /* ────────────────────────────────────────────
     Report 3: Country Impact Matrix
     ──────────────────────────────────────────── */
  static generateCountryMatrix() {
    const countryMap = new Map();
    ActionsData.forEach(a => {
      a.affectedCountries.forEach(c => {
        if (!countryMap.has(c.name)) countryMap.set(c.name, []);
        countryMap.get(c.name).push({ action: a.title, category: a.category.label, impact: c.impact, flag: c.flag, controversy: a.controversyLevel });
      });
    });

    const sorted = [...countryMap.entries()].sort((a, b) => b[1].length - a[1].length);
    let body = `<p><strong>${sorted.length} countries</strong> are affected across <strong>${ActionsData.length} actions</strong>.</p>`;

    sorted.forEach(([name, impacts]) => {
      const flag = impacts[0].flag;
      body += `<h2>${flag} ${name} <span style="font-size:0.82rem;font-weight:500;color:#8a8a9a">(${impacts.length} action${impacts.length > 1 ? 's' : ''})</span></h2>`;
      impacts.forEach(imp => {
        body += `<div class="card"><div class="card-title">${imp.action}</div><div class="card-meta">${imp.category} · Controversy: ${imp.controversy}/100</div><p>${imp.impact}</p></div>`;
      });
    });

    return DownloadGenerator.#wrap('Country Impact Matrix', 'Every affected country mapped to the actions that impact it, with detailed analysis.', body);
  }

  /* ────────────────────────────────────────────
     Report 4: Strategic Analysis
     ──────────────────────────────────────────── */
  static generateStrategicAnalysis() {
    let body = '<h2>Part I: Strategic Goals</h2>';
    StrategicGoals.forEach((g, i) => {
      const metricsHTML = g.keyMetrics.map(m => `<div class="metric-box"><div class="metric-value">${m.value}</div><div class="metric-label">${m.label}</div></div>`).join('');
      const relatedHTML = g.relatedActionIds.map(id => { const a = ActionsData.find(x => x.id === id); return a ? `<span class="tag">${a.title}</span>` : ''; }).join('');

      body += `
        <h3>${i + 1}. ${g.title}</h3>
        <p style="font-style:italic;color:#e8533f;margin-bottom:8px">${g.subtitle}</p>
        <p>${g.description}</p>
        <div class="metric-row">${metricsHTML}</div>
        <p style="font-size:0.82rem;color:#6a6a7a"><strong>Related Actions:</strong> ${relatedHTML}</p>
      `;
    });

    body += '<h2>Part II: Analytical Theories</h2>';
    PotentialReasons.forEach((r, i) => {
      const evidenceHTML = r.evidence.map(e => `<li>${e}</li>`).join('');
      body += `
        <h3>Theory ${i + 1}: ${r.title}</h3>
        <p style="font-style:italic;color:#6a6a7a;margin-bottom:8px">"${r.tagline}"</p>
        <p>${r.analysis}</p>
        <p style="font-size:0.82rem;font-weight:700;color:#8a8a9a;text-transform:uppercase;margin-bottom:6px">Evidence</p>
        <ul>${evidenceHTML}</ul>
        <div class="counter-box"><p class="counter-label">Counterpoint</p><p class="counter-text">${r.counterArgument}</p></div>
      `;
    });

    return DownloadGenerator.#wrap('Strategic Analysis Report', 'Complete breakdown of Trump\'s strategic goals and the analytical theories behind the most controversial actions.', body);
  }

  /* ────────────────────────────────────────────
     Download Trigger — creates blob + triggers save
     ──────────────────────────────────────────── */
  static download(generatorFnName, filename) {
    const html = DownloadGenerator[generatorFnName]();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
