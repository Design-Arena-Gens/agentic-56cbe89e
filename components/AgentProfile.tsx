const missionItems = [
  {
    id: "mission",
    title: "Mission",
    description:
      "Assurer une veille stratégique sur l’IA générative en éducation, de la maternelle à l’enseignement supérieur, avec un focus sur les impacts pédagogiques."
  },
  {
    id: "perimetre",
    title: "Périmètre",
    description:
      "Articles francophones prioritaires, complétés par des sources internationales lorsque les sujets sont émergents ou insuffisamment couverts."
  },
  {
    id: "indicateurs",
    title: "Indicateurs suivis",
    description:
      "Usages pédagogiques, cadres réglementaires, gouvernance de la donnée, innovation EdTech, retours d’expérience d’enseignants, recherche académique."
  },
  {
    id: "livrables",
    title: "Livrables quotidiens",
    description:
      "Résumé exécutif (3 minutes), digest complet (10 minutes), liens sources, tableau comparatif des outils repérés."
  }
];

export const AgentProfile = () => (
  <section className="card">
    <div className="card-section">
      <h2>Configuration de l’agent</h2>
      <p>
        L’agent autonome combine veille automatisée et analyse experte. Les
        arbitrages privilégient la qualité et la diversité des perspectives
        francophones, tout en gardant une fenêtre ouverte sur les innovations
        internationales.
      </p>
    </div>
    <div className="highlight">
      {missionItems.map((item) => (
        <div key={item.id} className="highlight-item">
          <strong>{item.title}</strong>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

AgentProfile.displayName = "AgentProfile";
