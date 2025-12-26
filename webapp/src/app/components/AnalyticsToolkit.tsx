'use client';

const kpis = [
  {
    name: 'Descubrimiento',
    metric: 'CTR vs benchmark',
    target: '≥ 6.5% en thumbnails principales',
    ritual: 'Testea 3 variantes por video con data de 24h básica',
    tools: ['TubeBuddy A/B', 'Thumbly', 'Canva Bulk'],
  },
  {
    name: 'Retención',
    metric: 'Retención promedio (videos 8-12 min)',
    target: '≥ 58% (objetivo agresivo en nicho geek narrativo)',
    ritual: 'Anota drop-offs > 20% y etiqueta causas; rediseña gancho/estructura',
    tools: ['YouTube Analytics avanzados', 'Descript Highlights', 'Notion plantilla feedback'],
  },
  {
    name: 'Comunidad',
    metric: 'Comentarios & guardados',
    target: 'Ratio comentarios/vistas ≥ 2.5%',
    ritual: 'Responder en las primeras 2h, usar pinned comment con pregunta abierta',
    tools: ['Gankbox', 'Typefully', 'ThriveDesk'],
  },
  {
    name: 'Revenue',
    metric: 'RPM total',
    target: '≥ 6 USD sumando Ads + afiliados + membresías',
    ritual: 'Reporte mensual con split por fuente y plan experimental',
    tools: ['Sofi Dashboard', 'Beacons Analytics', 'Google Data Studio'],
  },
];

const stack = [
  {
    category: 'Investigación & ideación',
    items: ['Feedly + newsletters de fandom', 'Trends.vc + Glimpse gaming', 'Sheets con scoring de ideas'],
  },
  {
    category: 'Producción & post',
    items: ['Notion HQ', 'Descript', 'CapCut / Premiere', 'DaVinci Resolve (grading rápido)'],
  },
  {
    category: 'Distribución & comunidad',
    items: ['Buffer / Typefully', 'Trello colaboraciones', 'Discord con bots de bienvenida'],
  },
];

export default function AnalyticsToolkit() {
  return (
    <section className="stack gap-xl">
      <header className="section-header">
        <div>
          <p className="eyebrow">Control total</p>
          <h2>KPIs críticos y stack de herramientas</h2>
        </div>
        <p className="muted">
          Mezcla datos duros con rituales semanales para no perder momentum creativo ni oportunidades de monetización.
        </p>
      </header>

      <div className="grid two">
        <article className="card">
          <h3>KPIs para monitorear semanalmente</h3>
          <ul className="kpi-list">
            {kpis.map((kpi) => (
              <li key={kpi.name}>
                <div>
                  <span className="badge">{kpi.name}</span>
                  <strong>{kpi.metric}</strong>
                </div>
                <p className="muted">{kpi.target}</p>
                <p className="detail">{kpi.ritual}</p>
                <small>Herramientas: {kpi.tools.join(', ')}</small>
              </li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h3>Toolkit operativo recomendado</h3>
          <div className="stack gap-md">
            {stack.map((block) => (
              <div key={block.category} className="tool-block">
                <strong>{block.category}</strong>
                <ul className="bullet-list">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
