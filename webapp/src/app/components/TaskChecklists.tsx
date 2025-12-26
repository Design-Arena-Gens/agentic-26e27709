'use client';

type ChecklistPhase = {
  id: string;
  label: string;
  focus: string;
  timeline: string;
  metrics: string[];
  tasks: { title: string; detail: string }[];
};

const phases: ChecklistPhase[] = [
  {
    id: 'fundamentos',
    label: 'Fundamentos (Semana 1-2)',
    focus: 'Claridad estratégica y posicionamiento diferenciado.',
    timeline: 'Define identidad sonora, visual y narrativa antes de publicar contenido.',
    metrics: ['Propuesta de valor validada', 'Storybrand y slogan listos', 'Kit gráfico terminado'],
    tasks: [
      {
        title: 'Radiografía de audiencia',
        detail: 'Identifica 3 perfiles (fan hardcore, curioso casual, nostálgico) y documenta pains/gains.',
      },
      {
        title: 'Mapa de diferenciadores',
        detail: 'Contrasta contra 5 competidores: formato, tono, cadencia, monetización, comunidad.',
      },
      {
        title: 'Guía de estilo',
        detail: 'Define paleta, tipografía, intro/outro, lower thirds y sonido de marca.',
      },
      {
        title: 'Stack productivo',
        detail: 'Elige herramientas para research, edición, programación, analítica y colaboración.',
      },
    ],
  },
  {
    id: 'lanzamiento',
    label: 'Lanzamiento (Semana 3-6)',
    focus: 'Publicar en cadencia y recolectar señal temprana.',
    timeline: 'Apunta a 6-8 piezas en 30 días mezclando shorts y videos largos.',
    metrics: ['CTR ≥ 5%', 'Retención ≥ 55% en videos largos', '1000 subs iniciales'],
    tasks: [
      {
        title: 'Sistema de investigación',
        detail: 'Configura alertas (Google Trends, Feedly, Pulse) y sheet de ideas priorizadas.',
      },
      {
        title: 'Batching de producción',
        detail: 'Reserva 2 días/semana para grabar + editar y mantener backlog de 10 ideas.',
      },
      {
        title: 'Optimización SEO',
        detail: 'Crea plantillas de títulos con fórmula keyword + promesa + curiosidad.',
      },
      {
        title: 'Activa ecosistema social',
        detail: 'Recicla highlights en TikTok, Reels, Shorts y publica hilos resumen en X.',
      },
    ],
  },
  {
    id: 'crecimiento',
    label: 'Crecimiento (Mes 3-6)',
    focus: 'Escalar comunidad y diversificar formatos monetizables.',
    timeline: 'Introduce directos, colaboraciones y contenido exclusivo premium.',
    metrics: ['RPM ≥ 4 USD', 'Retención en vivo ≥ 35 min', 'Discord activo +500 miembros'],
    tasks: [
      {
        title: 'Eventos especiales',
        detail: 'Planifica watch parties, debates post-estreno y charlas con expertos.',
      },
      {
        title: 'Sistema de monetización',
        detail: 'Lanza membership con niveles (behind the scenes, votaciones, masterclass mensual).',
      },
      {
        title: 'Optimiza funnel',
        detail: 'Integra newsletter semanal con CTA a cursos, afiliados y lives.',
      },
      {
        title: 'Automatiza reporting',
        detail: 'Dashboard quincenal con métricas clave, aprendizajes y próximos experimentos.',
      },
    ],
  },
];

export default function TaskChecklists() {
  return (
    <section className="stack gap-xl">
      <header className="section-header">
        <div>
          <p className="eyebrow">Ejecución impecable</p>
          <h2>Checklist operativo por etapas</h2>
        </div>
        <p className="muted">
          Sigue estas tareas críticas para construir un canal rentable que combine contenido geek,
          producción eficiente y múltiples flujos de ingresos desde el día uno.
        </p>
      </header>

      <div className="grid three">
        {phases.map((phase) => (
          <article key={phase.id} className="card">
            <header className="card-header">
              <span className="chip chip-soft">{phase.label}</span>
              <p className="muted">{phase.focus}</p>
            </header>

            <p className="card-highlight">{phase.timeline}</p>

            <div className="divider" />

            <div className="stack gap-md">
              <strong>Métricas objetivo</strong>
              <ul className="bullet-list">
                {phase.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </div>

            <div className="stack gap-md">
              <strong>Tareas clave</strong>
              <ul className="task-list">
                {phase.tasks.map((task) => (
                  <li key={task.title}>
                    <span>{task.title}</span>
                    <small>{task.detail}</small>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
