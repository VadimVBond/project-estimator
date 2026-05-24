// ─── Dev Virtual Router ────────────────────────────────────────────
// Обрабатывает hash-маршруты вида #dev:* для виртуальных dev/debug страниц.
// Работает ТОЛЬКО в dev-режиме (import.meta.env.DEV).
// Не создаёт реальных страниц — рендерит HTML прямо в #dev-root.

/**
 * Реестр виртуальных маршрутов.
 * Ключ — идентификатор после #dev:
 * Значение — функция, возвращающая HTML-строку
 */
const DEV_ROUTES = {
  playground: () => `
    <div style="max-width:960px;margin:2rem auto;padding:2rem;font-family:system-ui,sans-serif;">
      <h1 style="font-size:2rem;margin-bottom:1rem;">🛠 Component Playground</h1>
      <p style="color:#666;margin-bottom:2rem;">Интерактивная среда для тестирования компонентов.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;">
        <div style="border:1px solid #e5e7eb;border-radius:12px;padding:1.5rem;background:#fafafa;">
          <h3 style="margin-bottom:0.5rem;">Button</h3>
          <button style="padding:0.5rem 1.5rem;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:1rem;">
            Primary Action
          </button>
        </div>
        <div style="border:1px solid #e5e7eb;border-radius:12px;padding:1.5rem;background:#fafafa;">
          <h3 style="margin-bottom:0.5rem;">Badge</h3>
          <span style="padding:0.25rem 0.75rem;background:#dbeafe;color:#1d4ed8;border-radius:999px;font-size:0.875rem;">
            New
          </span>
          <span style="padding:0.25rem 0.75rem;background:#fce7f3;color:#be185d;border-radius:999px;font-size:0.875rem;margin-left:0.5rem;">
            Beta
          </span>
        </div>
      </div>
    </div>
  `,

  'style-guide': () => `
    <div style="max-width:960px;margin:2rem auto;padding:2rem;font-family:system-ui,sans-serif;">
      <h1 style="font-size:2rem;margin-bottom:1rem;">🎨 Style Guide</h1>
      <p style="color:#666;margin-bottom:2rem;">Токены дизайна и типографика проекта.</p>

      <h2 style="font-size:1.25rem;margin-bottom:1rem;border-bottom:1px solid #e5e7eb;padding-bottom:0.5rem;">Типографика</h2>
      <div style="display:flex;flex-direction:column;gap:0.75rem;margin-bottom:2rem;">
        <span style="font-size:2.5rem;font-weight:700;">Heading 1 — 2.5rem</span>
        <span style="font-size:2rem;font-weight:600;">Heading 2 — 2rem</span>
        <span style="font-size:1.5rem;font-weight:600;">Heading 3 — 1.5rem</span>
        <span style="font-size:1rem;">Body — 1rem</span>
        <span style="font-size:0.875rem;color:#6b7280;">Small / Caption — 0.875rem</span>
      </div>

      <h2 style="font-size:1.25rem;margin-bottom:1rem;border-bottom:1px solid #e5e7eb;padding-bottom:0.5rem;">Цветовая палитра</h2>
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
        ${['#6366f1','#8b5cf6','#ec4899','#f43f5e','#f97316','#eab308','#22c55e','#06b6d4','#3b82f6','#1e293b']
          .map(c => `<div style="width:60px;height:60px;background:${c};border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.1);" title="${c}"></div>`)
          .join('')}
      </div>
    </div>
  `,

  i18n: () => `
    <div style="max-width:960px;margin:2rem auto;padding:2rem;font-family:system-ui,sans-serif;">
      <h1 style="font-size:2rem;margin-bottom:1rem;">🌐 i18n Inspector</h1>
      <p style="color:#666;margin-bottom:1.5rem;">Инспектор переводов (debug-панель).</p>
      <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
        <thead>
          <tr style="background:#f1f5f9;text-align:left;">
            <th style="padding:0.75rem;border-bottom:2px solid #e2e8f0;">Key</th>
            <th style="padding:0.75rem;border-bottom:2px solid #e2e8f0;">Locale</th>
            <th style="padding:0.75rem;border-bottom:2px solid #e2e8f0;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f1f5f9;">header.homes.title</td><td>en</td><td>✅</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f1f5f9;">header.homes.title</td><td>ru</td><td>✅</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f1f5f9;">header.homes.title</td><td>uk</td><td>⚠️ fallback</td></tr>
        </tbody>
      </table>
      <p style="margin-top:1rem;font-size:0.8rem;color:#94a3b8;">Статические данные для демонстрации. Подключите реальный i18n-источник при необходимости.</p>
    </div>
  `,

  routes: () => `
    <div style="max-width:960px;margin:2rem auto;padding:2rem;font-family:system-ui,sans-serif;">
      <h1 style="font-size:2rem;margin-bottom:1rem;">🗺 Route Map</h1>
      <p style="color:#666;margin-bottom:1.5rem;">Карта маршрутов приложения (debug).</p>
      <ul style="list-style:none;padding:0;font-family:monospace;font-size:0.9rem;">
        ${[
          '/','/homes/saas','/homes/startup','/homes/mobile-app','/homes/personal',
          '/services','/pricing','/about','/contact','/terms','/privacy',
          '/landing/lead-generation','/landing/sales','/landing/click-through',
          '/landing/product','/landing/pre-launch',
          '/blog','#dev:playground','#dev:style-guide','#dev:i18n','#dev:routes',
        ].map(r => {
          const isHash = r.startsWith('#');
          const color = isHash ? '#8b5cf6' : '#3b82f6';
          const badge = isHash ? '<span style="background:#ede9fe;color:#7c3aed;padding:0.1rem 0.4rem;border-radius:4px;font-size:0.75rem;margin-left:0.5rem;">virtual</span>' : '';
          return `<li style="padding:0.4rem 0.75rem;border-left:3px solid ${color};margin-bottom:0.25rem;">${r}${badge}</li>`;
        }).join('')}
      </ul>
    </div>
  `,
};

// ─── Dev Root Container ────────────────────────────────────────────
function getOrCreateDevRoot() {
  let root = document.getElementById('dev-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'dev-root';
    root.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#fff;overflow:auto;display:none;';

    // Кнопка закрытия
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕ Close';
    closeBtn.style.cssText = 'position:fixed;top:1rem;right:1rem;z-index:10000;padding:0.5rem 1rem;background:#1e293b;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:0.875rem;';
    closeBtn.addEventListener('click', () => {
      history.replaceState(null, '', window.location.pathname + window.location.search);
      root.style.display = 'none';
      root.innerHTML = '';
      root.appendChild(closeBtn);
    });

    root.appendChild(closeBtn);
    document.body.appendChild(root);
  }
  return root;
}

// ─── Main Handler ──────────────────────────────────────────────────
/**
 * Обрабатывает текущий hash и рендерит виртуальную страницу.
 * Работает только в dev-режиме.
 */
export function handleDevRoute() {
  // Защита: только dev-режим
  if (!import.meta.env.DEV) return;

  const hash = window.location.hash;

  // Сбросить dev-root если hash не dev:*
  if (!hash.startsWith('#dev:')) {
    const existing = document.getElementById('dev-root');
    if (existing) {
      existing.style.display = 'none';
    }
    return;
  }

  const routeKey = hash.replace('#dev:', '');
  const renderer = DEV_ROUTES[routeKey];

  const root = getOrCreateDevRoot();

  if (renderer) {
    // Сохраняем кнопку закрытия
    const closeBtn = root.querySelector('button');
    root.innerHTML = renderer();
    if (closeBtn) root.appendChild(closeBtn);
    root.style.display = 'block';
  } else {
    const closeBtn = root.querySelector('button');
    root.innerHTML = `
      <div style="max-width:600px;margin:4rem auto;padding:2rem;text-align:center;font-family:system-ui,sans-serif;">
        <h1 style="font-size:3rem;margin-bottom:1rem;">🚧</h1>
        <h2 style="font-size:1.5rem;margin-bottom:0.5rem;">Dev Route Not Found</h2>
        <p style="color:#6b7280;">Маршрут <code style="background:#f1f5f9;padding:0.2rem 0.5rem;border-radius:4px;">#dev:${routeKey}</code> не зарегистрирован.</p>
        <p style="color:#94a3b8;font-size:0.875rem;margin-top:1rem;">Доступные: ${Object.keys(DEV_ROUTES).map(k => `<code>#dev:${k}</code>`).join(', ')}</p>
      </div>
    `;
    if (closeBtn) root.appendChild(closeBtn);
    root.style.display = 'block';
  }
}
