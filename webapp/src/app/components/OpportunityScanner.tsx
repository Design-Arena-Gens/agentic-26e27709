'use client';

import { useMemo, useState } from 'react';

type Opportunity = {
  id: string;
  theme: 'anime' | 'cine' | 'gaming' | 'comics' | 'cultura-pop';
  title: string;
  description: string;
  hook: string;
  proofPoints: string[];
  monetization: string[];
  recommendedFormat: string;
  retentionMove: string;
};

const opportunities: Opportunity[] = [
  {
    id: 'anime-lanzamientos',
    theme: 'anime',
    title: 'Calendario de Estrenos Anime',
    description:
      'Cobertura semanal de los nuevos episodios y spin-offs de franquicias top (Jujutsu Kaisen, Demon Slayer, One Piece). Usa reels diarios con cortes de la emisión original y voz en off.',
    hook: '“Esta semana un personaje clave cae en Jujutsu Kaisen y casi nadie lo notó…”',
    proofPoints: [
      'Picos de búsquedas entre domingo y martes',
      'Comunidades listas para compartir en Reddit y Discord',
      'Patrocinios potenciales con plataformas de streaming nipón',
    ],
    monetization: ['Afiliados Crunchyroll', 'Patrocinios de merch oficial', 'Members-only watch parties'],
    recommendedFormat: 'Daily Shorts + recap largo de 8-10 min los viernes',
    retentionMove: 'Usa cliffhanger al minuto 4 anunciando teoría exclusiva para el final',
  },
  {
    id: 'cine-analisis',
    theme: 'cine',
    title: 'Análisis Visual de Estrenos Taquilleros',
    description:
      'Desmonta el lenguaje cinematográfico de los blockbusters del mes (Marvel, DC, sagas nostalgia). Enfócate en detalles ocultos con referencias geek.',
    hook: '“Los 3 planos que confirman el multiverso mutante en Deadpool & Wolverine”',
    proofPoints: [
      'Audiencia mixta: fans de cultura geek + cinéfilos',
      'Contenido evergreen cuando sale la versión en streaming',
      'Oportunidad de SEO con keywords de escenas específicas',
    ],
    monetization: ['Patreon con breakdown extendido', 'Ventas de LUTs y presets', 'Integraciones con aplicaciones de edición'],
    recommendedFormat: 'Video ensayo de 12-14 min + carousel en Instagram/Twitter con capturas clave',
    retentionMove: 'Abre con escena en loop de 5 s; añade capítulo final tipo “detalle que nadie vio”',
  },
  {
    id: 'gaming-trends',
    theme: 'gaming',
    title: 'Reportes de Tendencias Gamer en Vivo',
    description:
      'Streams cortos resumiendo actualizaciones, parches y eventos eSports de franquicias populares (Fortnite, Valorant, Genshin Impact).',
    hook: '“El parche 9.3 cambia por completo el competitivo de Valorant, te digo por qué en 60 segundos”',
    proofPoints: [
      'Fanbase busca rapidez y opinión experta',
      'Buen material para shorts reactivos en TikTok y YT',
      'Marcas de periféricos y energía buscan canales reaccionando en tiempo real',
    ],
    monetization: ['Sponsoreo de hardware', 'Afiliados Amazon para setup gamer', 'Donaciones en vivo + Super Chats'],
    recommendedFormat: 'Live de 20-30 min + highlights editados al día siguiente',
    retentionMove: 'Mostrar ranking propio y actualizarlo cada semana para generar seguimiento',
  },
  {
    id: 'comics-lore',
    theme: 'comics',
    title: 'Lore Express de Multiversos Comic',
    description:
      'Videos animados cortos donde explicas arcos complejos (Secret Wars, Crisis en Tierras Infinitas) usando gráficos y líneas temporales.',
    hook: '“¿Por qué Miles Morales es la clave de la próxima Secret Wars? Te lo explico en 90 segundos”',
    proofPoints: [
      'Retención alta si hay visuales claros',
      'Necesidad grande en el fandom casual que entra por películas',
      'Potencial de playlists temáticas para watch time',
    ],
    monetization: ['Venta de guías descargables', 'Patrocinios de aplicaciones de lectura digital', 'Cursos sobre storytelling comiquero'],
    recommendedFormat: 'Shorts animados + video largo mensual detallando cronología completa',
    retentionMove: 'Cerrar cada video con CTA a encuesta sobre qué arco explicar después',
  },
  {
    id: 'pop-cultura-live',
    theme: 'cultura-pop',
    title: 'Show Nocturno de Cultura Pop',
    description:
      'Magazine en vivo 3 veces por semana combinando noticias geek, análisis de fandoms y entrevistas rápidas con creadores.',
    hook: '“Hoy te traigo los 5 anuncios que cambiarán la Comic-Con 2025. Spoiler: uno involucra a Shrek”',
    proofPoints: [
      'Formato perfecto para clips reutilizables',
      'Amplía alcance con invitados micro-influencers',
      'Posibilidad de co-streaming y raids en Twitch para captar audiencia',
    ],
    monetization: ['Patrocinios recurrentes de snacks/energy drinks', 'Programa de membresías con contenido backstage', 'Merch drop colaborativo trimestral'],
    recommendedFormat: 'Streams de 45 min + highlights segmentados por tema',
    retentionMove: 'Introduce mini games y trivias con participación del chat cada 15 min',
  },
];

const themes: { value: Opportunity['theme']; label: string; macroTrend: string }[] = [
  { value: 'anime', label: 'Anime & Manga', macroTrend: 'Boom continuo de adaptaciones y arcos finales' },
  { value: 'cine', label: 'Cine & Series', macroTrend: 'Universos conectados + nostalgia Y2K' },
  { value: 'gaming', label: 'Gaming', macroTrend: 'Live service + eventos competitivos colaborativos' },
  { value: 'comics', label: 'Cómics & Multiversos', macroTrend: 'Necesidad de explicaciones cortas para fans casuales' },
  { value: 'cultura-pop', label: 'Cultura Pop Híbrida', macroTrend: 'Cruces entre música, cine y fandoms digitales' },
];

export default function OpportunityScanner() {
  const [selectedTheme, setSelectedTheme] = useState<Opportunity['theme']>('anime');

  const filtered = useMemo(
    () => opportunities.filter((item) => item.theme === selectedTheme),
    [selectedTheme],
  );

  return (
    <section className="stack gap-xl">
      <header className="section-header">
        <div>
          <p className="eyebrow">Radar de mercado</p>
          <h2>Scanner de oportunidades rentables</h2>
        </div>
        <p className="muted">
          Selecciona el foco principal de tu canal para descubrir ideas listas para producir,
          ganchos virales y movimientos de retención alineados con monetización.
        </p>
      </header>

      <div className="scanner">
        <div className="scanner-select">
          {themes.map((theme) => (
            <button
              key={theme.value}
              className={selectedTheme === theme.value ? 'chip chip-active' : 'chip'}
              type="button"
              onClick={() => setSelectedTheme(theme.value)}
            >
              <span>{theme.label}</span>
              <small>{theme.macroTrend}</small>
            </button>
          ))}
        </div>

        <div className="scanner-grid">
          {filtered.map((opportunity) => (
            <article key={opportunity.id} className="card accent-border">
              <header>
                <h3>{opportunity.title}</h3>
                <p className="muted">{opportunity.description}</p>
              </header>

              <dl className="data-grid">
                <div>
                  <dt>Hook viral</dt>
                  <dd>{opportunity.hook}</dd>
                </div>
                <div>
                  <dt>Pruebas de demanda</dt>
                  <dd>
                    <ul>
                      {opportunity.proofPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>Monetización ligada</dt>
                  <dd>
                    <ul>
                      {opportunity.monetization.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>Formato recomendado</dt>
                  <dd>{opportunity.recommendedFormat}</dd>
                </div>
                <div>
                  <dt>Movimiento de retención</dt>
                  <dd>{opportunity.retentionMove}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
