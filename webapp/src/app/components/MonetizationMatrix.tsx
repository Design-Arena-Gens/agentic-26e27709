'use client';

type MonetizationStream = {
  id: string;
  name: string;
  launch: string;
  requirements: string[];
  margin: 'Alta' | 'Media' | 'Variable';
  activaciones: string[];
  tooling: string[];
};

const streams: MonetizationStream[] = [
  {
    id: 'adsense',
    name: 'AdSense optimizado',
    launch: 'Mes 1-2',
    requirements: ['CTR arriba del 5%', 'Videos 8-12 min con mid-rolls estratégicos', 'Miniaturas testeadas A/B'],
    margin: 'Variable',
    activaciones: ['Storytelling con cliffhangers para sostener retención', 'Segmenta playlists por ARPU'],
    tooling: ['Tubebuddy', 'Thumbnail Test', 'Google Trends'],
  },
  {
    id: 'afiliados',
    name: 'Afiliados & códigos',
    launch: 'Mes 2-3',
    requirements: ['Review honesta + prueba en cámara', 'Landing con comparativa de precios', 'Call-to-action en primer comentario'],
    margin: 'Alta',
    activaciones: ['Bundles de merch + códigos exclusivos', 'Links específicos por personaje o franquicia'],
    tooling: ['Beacons/Airpage', 'Bitly con UTMs', 'Notion CRM de marcas'],
  },
  {
    id: 'membresias',
    name: 'Membresías & Patreon',
    launch: 'Mes 3-4',
    requirements: ['Backlog de contenido exclusivo', 'Canales privados en Discord', 'Beneficios tangibles mensuales'],
    margin: 'Alta',
    activaciones: ['Votaciones para elegir temas', 'Clases en vivo sobre storytelling geek'],
    tooling: ['Patreon / Ko-fi', 'Discord con bots de automatización', 'Zapier para onboarding'],
  },
  {
    id: 'sponsors',
    name: 'Patrocinios recurrentes',
    launch: 'Mes 4-6',
    requirements: ['Media kit con datos demográficos', 'Casos de éxito y CTR comprobado', 'Pipeline de contactos actualizado'],
    margin: 'Alta',
    activaciones: ['Series patrocinadas de varios episodios', 'Inserciones dinámicas con códigos trackeables'],
    tooling: ['Canva Docs + Data Studio', 'Apollo / Clay para outreach', 'Notion CRM'],
  },
  {
    id: 'productos',
    name: 'Productos digitales',
    launch: 'Mes 5+',
    requirements: ['Propiedad intelectual clara', 'Proceso de fulfillment automatizado', 'Soporte al cliente documentado'],
    margin: 'Alta',
    activaciones: ['Cursos micro-learning sobre narrativa', 'Plantillas de guion y Notion dashboards'],
    tooling: ['Gumroad', 'Luma', 'Loom + Descript para producción'],
  },
];

export default function MonetizationMatrix() {
  return (
    <section className="stack gap-xl">
      <header className="section-header">
        <div>
          <p className="eyebrow">Ingresos diversificados</p>
          <h2>Matriz de monetización progresiva</h2>
        </div>
        <p className="muted">
          Activa nuevas fuentes cada trimestre para elevar el RPM total del canal y blindarte ante
          cambios del algoritmo de YouTube.
        </p>
      </header>

      <div className="matrix">
        {streams.map((stream) => (
          <article key={stream.id} className="card">
            <header className="matrix-head">
              <h3>{stream.name}</h3>
              <span className="chip chip-soft">Lanzamiento: {stream.launch}</span>
            </header>

            <div className="stack gap-md">
              <strong>Requisitos</strong>
              <ul className="bullet-list">
                {stream.requirements.map((req) => (
                  <li key={req}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="stack gap-md">
              <strong>Acciones clave</strong>
              <ul className="bullet-list">
                {stream.activaciones.map((act) => (
                  <li key={act}>{act}</li>
                ))}
              </ul>
            </div>

            <div className="stack gap-md">
              <strong>Herramientas sugeridas</strong>
              <ul className="bullet-list">
                {stream.tooling.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>

            <footer className="matrix-footer">
              <span className="badge">Margen {stream.margin}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
