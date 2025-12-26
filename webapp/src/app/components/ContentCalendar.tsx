'use client';

type CalendarItem = {
  id: string;
  week: number;
  pillar: string;
  video: string;
  objective: string;
  distribution: string[];
};

const calendar: CalendarItem[] = [
  {
    id: 'w1-hero',
    week: 1,
    pillar: 'Noticias calientes',
    video: 'Top 5 anuncios sorpresa de la semana + ranking de hype',
    objective: 'Capturar búsquedas y enganchar audiencia amplia',
    distribution: ['Shorts con cada anuncio', 'Newsletter “Flash Geek”', 'Tweetstorm con enlaces fuentes'],
  },
  {
    id: 'w1-deep',
    week: 1,
    pillar: 'Deep dives',
    video: 'Análisis visual del tráiler principal del mes',
    objective: 'Demostrar expertise visual y generar watch time',
    distribution: ['Clips en vertical con breakdowns por escena', 'Album de Instagram con frames clave'],
  },
  {
    id: 'w2-community',
    week: 2,
    pillar: 'Cultura de fandom',
    video: 'Debate con invitado sobre teorías principales de la saga en tendencia',
    objective: 'Activar comunidad y abrir puerta a colaboraciones',
    distribution: ['Live en Twitch con restream a YouTube', 'Highlights editados en 48 h'],
  },
  {
    id: 'w2-guide',
    week: 2,
    pillar: 'Guías express',
    video: 'Lore de 90 segundos sobre personaje solicitado por la comunidad',
    objective: 'Contenido altamente compartible y evergreen',
    distribution: ['Short + TikTok + Reels', 'PDF descargable vía newsletter'],
  },
  {
    id: 'w3-monetize',
    week: 3,
    pillar: 'Monetización directa',
    video: 'Review honesta de merch/coleccionables con CTA afiliado',
    objective: 'Generar ingresos sin depender solo de AdSense',
    distribution: ['Landing con códigos de descuento', 'Short comparando calidades'],
  },
  {
    id: 'w3-data',
    week: 3,
    pillar: 'Reportes & data',
    video: 'Informe trimestral sobre tendencias geek (datos + predicciones)',
    objective: 'Posicionarse como referencia estratégica y atraer sponsors B2B',
    distribution: ['Infografía descargable', 'Post en LinkedIn + foros especializados'],
  },
  {
    id: 'w4-exclusivo',
    week: 4,
    pillar: 'Contenido premium',
    video: 'Making-of de la producción + set tour para miembros',
    objective: 'Incentivar membresías y fidelizar fans core',
    distribution: ['Teaser público de 45s', 'Post comunidad YouTube con CTA a miembros'],
  },
  {
    id: 'w4-reciclaje',
    week: 4,
    pillar: 'Reciclaje inteligente',
    video: 'Compilado de mejores clips del mes + aprendizajes',
    objective: 'Cierre de ciclo y preparación de próximos experimentos',
    distribution: ['Podcast en audio-only', 'Blog resumen con timestamps'],
  },
];

export default function ContentCalendar() {
  return (
    <section className="stack gap-xl">
      <header className="section-header">
        <div>
          <p className="eyebrow">Plan editorial</p>
          <h2>Calendario de 4 semanas reutilizable</h2>
        </div>
        <p className="muted">
          Rota estos pilares para equilibrar awareness, comunidad, autoridad y monetización.
          Ajusta cada bloque según lanzamientos relevantes en cine, gaming o anime.
        </p>
      </header>

      <div className="calendar-grid">
        {calendar.map((item) => (
          <article key={item.id} className="card">
            <header className="calendar-head">
              <span className="chip chip-soft">Semana {item.week}</span>
              <span className="badge">{item.pillar}</span>
            </header>

            <h3>{item.video}</h3>
            <p className="muted">{item.objective}</p>

            <div className="divider" />

            <div className="stack gap-sm">
              <strong>Distribución recomendada</strong>
              <ul className="bullet-list">
                {item.distribution.map((channel) => (
                  <li key={channel}>{channel}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
