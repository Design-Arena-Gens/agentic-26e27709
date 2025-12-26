import OpportunityScanner from '@/app/components/OpportunityScanner';
import TaskChecklists from '@/app/components/TaskChecklists';
import ContentCalendar from '@/app/components/ContentCalendar';
import MonetizationMatrix from '@/app/components/MonetizationMatrix';
import AnalyticsToolkit from '@/app/components/AnalyticsToolkit';
import styles from './page.module.css';

const heroHighlights = [
  { label: 'Meta 90 días', value: '10K subs + RPM ≥ 4 USD' },
  { label: 'Flywheel', value: 'Contenido → Comunidad → Productos' },
  { label: 'Diferencial', value: 'Análisis geek + datos accionables' },
];

const foundations = [
  {
    title: 'Posicionamiento',
    description: 'Canal experto en cultura pop/geek con visión estratégica y narrativa cinematográfica.',
    bullets: [
      'Promesa: “Analizamos la cultura geek para ayudarte a crear y monetizar tu pasión”.',
      'Tono híbrido: entusiasta, con datos concretos y storytelling visual ágil.',
      'Segmentos claros: noticia express, análisis profundo, monetización para creadores.',
    ],
  },
  {
    title: 'Contenidos núcleo',
    description: 'Mix de formatos para captar tendencias y construir autoridad.',
    bullets: [
      'Shorts diarios (60-90s) con ganchos poderosos y CTA a videos largos.',
      'Videos ensayos de 8-12 min con capítulos, animaciones ligeras y referencias cultas.',
      'Directos semanales para comunidad + invitados, generando clips economizables.',
    ],
  },
  {
    title: 'Monetización & comunidad',
    description: 'Ingresos escalables enfocándose primero en data y afiliados.',
    bullets: [
      'Afiliados y patrocinios alineados a lanzamientos (merch, streaming, hardware).',
      'Newsletter + Discord para fans core con contenido exclusivo y encuestas.',
      'Membresías escalonadas: backstage, análisis extendido, workshops narrativos.',
    ],
  },
];

const contentPillars = [
  {
    pillar: 'Radar de estrenos & noticias calientes',
    goal: 'Captar descubrimiento y tendencias diarias.',
    mix: '30%',
    formats: 'Shorts / Clips 60-120s, resúmenes newsletter, carruseles visuales.',
    note: 'Usa velocidad + autoridad; apóyate en escenas oficiales con fair use.',
  },
  {
    pillar: 'Análisis profundos & lore geek',
    goal: 'Construir watch time alto y credibilidad.',
    mix: '35%',
    formats: 'Video ensayo 8-12 min, live breakdown, hilos X con timestamps.',
    note: 'Estructura con capítulos y ganchos cada 90s para sostener retención.',
  },
  {
    pillar: 'Cultura de fandom & colaboraciones',
    goal: 'Activar comunidad y co-marketing.',
    mix: '20%',
    formats: 'Directos con invitados, debates, retos interactivos.',
    note: 'Coordina con micro-influencers y crea playlists temáticas.',
  },
  {
    pillar: 'Monetización & negocio geek',
    goal: 'Diversificar ingresos y atraer marcas.',
    mix: '15%',
    formats: 'Reviews sponsoreadas, guías descargables, masterclasses.',
    note: 'Mide conversiones con UTMs y ofrece reportes a patrocinadores.',
  },
];

const researchSources = [
  {
    name: 'Fandom y PopVerse',
    type: 'Base de datos',
    description: 'Calendarios de estrenos, cobertura de convenciones y fichas detalladas de franquicias.',
    url: 'https://www.fandom.com/',
  },
  {
    name: 'Glimpse & Google Trends',
    type: 'Tendencias',
    description: 'Alertas automáticas sobre picos de búsqueda en cultura pop y gaming.',
    url: 'https://meetglimpse.com/',
  },
  {
    name: 'Deadline / Variety / IGN',
    type: 'Industria',
    description: 'Fuentes primarias para noticias verificadas, deals y números de taquilla.',
    url: 'https://deadline.com/',
  },
  {
    name: 'Reddit (r/MarvelStudios, r/Anime, r/Gaming)',
    type: 'Comunidad',
    description: 'Descubre teorías emergentes y preguntas frecuentes para generar contenido.',
    url: 'https://www.reddit.com/',
  },
  {
    name: 'Gartner Fan Economy Reports',
    type: 'Insights pagos',
    description: 'Estudios sobre monetización y comportamiento de audiencias geek.',
    url: 'https://www.gartner.com/',
  },
];

const communitySpots = [
  {
    name: 'Discord “Geek Ops”',
    focus: 'Creadores geek que comparten estadísticas y oportunidades de colaboración.',
    dynamic: 'Organiza watch parties, co-streamings y mastermind de thumbnails.',
  },
  {
    name: 'Twitter List “Pop Culture Newsrooms”',
    focus: 'Periodistas y filtradores confiables de Hollywood, anime y gaming.',
    dynamic: 'Publica hilos comentando y citando fuentes para subir reputación.',
  },
  {
    name: 'Eventos híbridos (Comic-Con, Gamescom, CCXP)',
    focus: 'Networking con marcas, paneles y acceso a material exclusivo.',
    dynamic: 'Planifica contenido en vivo + packs exclusivos para miembros.',
  },
  {
    name: 'Comunidades latinas (TikTok, Kudasai, Spoiler Time)',
    focus: 'Fans hispanohablantes deseosos de análisis profundo y humor local.',
    dynamic: 'Haz alianzas de crossposting y crea playlists bilingües.',
  },
];

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Blueprint canal geek redituable</span>
          <h1 className={styles.heroTitle}>Lanza y escala un canal de cultura pop con data, narrativa y monetización clara.</h1>
          <p className={styles.heroSubtitle}>
            Esta hoja de ruta te ayuda a dominar el ciclo completo: research certero, producción eficiente,
            distribución multiformato y flujos de ingresos diversificados sin perder la esencia fandom.
          </p>

          <div className={styles.heroHighlights}>
            {heroHighlights.map((item) => (
              <div key={item.label} className={styles.highlightCard}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <a className="button primary" href="#radar">
              Activar radar de oportunidades
            </a>
            <a className="button secondary" href="#fundamentos">
              Revisar fundamentos clave
            </a>
          </div>
        </div>

        <div className={styles.heroGrid}>
          {foundations.map((item) => (
            <article key={item.title} className={styles.foundationCard}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </header>

      <main className={styles.main}>
        <section id="fundamentos" className={styles.section}>
          <div className="section-header">
            <div>
              <p className="eyebrow">Arquitectura del canal</p>
              <h2>Framework de posicionamiento y pilares editoriales</h2>
            </div>
            <p className="muted">
              Alinea misión, voz, cadencia y objetivos de negocio para construir una marca sólida en cultura pop y cultura geek.
            </p>
          </div>

          <div className="table-wrapper">
            <table className={styles.pillarsTable}>
              <thead>
                <tr>
                  <th>Pilar</th>
                  <th>Objetivo</th>
                  <th>Mix</th>
                  <th>Formatos</th>
                  <th>Notas de ejecución</th>
                </tr>
              </thead>
              <tbody>
                {contentPillars.map((pillar) => (
                  <tr key={pillar.pillar}>
                    <td>
                      <strong>{pillar.pillar}</strong>
                    </td>
                    <td>{pillar.goal}</td>
                    <td>{pillar.mix}</td>
                    <td>{pillar.formats}</td>
                    <td>{pillar.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div id="radar">
          <OpportunityScanner />
        </div>

        <TaskChecklists />

        <ContentCalendar />

        <MonetizationMatrix />

        <section className={styles.section} id="metas">
          <AnalyticsToolkit />
        </section>

        <section className={styles.section}>
          <div className="section-header">
            <div>
              <p className="eyebrow">Investigación continua</p>
              <h2>Fuentes confiables para detectar tendencias y validar ideas</h2>
            </div>
            <p className="muted">
              Consolida un pipeline de research que combine data dura, escucha social y conexiones directas con la industria.
            </p>
          </div>

          <div className={styles.resources}>
            {researchSources.map((source) => (
              <article key={source.name} className={styles.resourceCard}>
                <small>{source.type}</small>
                <strong>{source.name}</strong>
                <p>{source.description}</p>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  Visitar recurso →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className="section-header">
            <div>
              <p className="eyebrow">Efecto comunidad</p>
              <h2>Donde encontrar aliados, fans núcleo y oportunidades B2B</h2>
            </div>
            <p className="muted">
              Participa activamente en espacios donde la cultura geek se conversa a diario para multiplicar alcance y reputación.
            </p>
          </div>

          <div className={styles.communities}>
            {communitySpots.map((community) => (
              <article key={community.name} className={styles.communityCard}>
                <strong>{community.name}</strong>
                <span>Enfoque: {community.focus}</span>
                <p className="muted">{community.dynamic}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        Operado con enfoque data-driven. Revisa métricas semanalmente, itera ganchos y duplica acciones que eleven retención y RPM.
      </footer>
    </div>
  );
}
