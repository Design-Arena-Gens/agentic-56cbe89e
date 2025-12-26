const activationDetails = [
  {
    id: "collection",
    label: "Surveillance intelligente",
    description:
      "Connecteurs RSS/API, scraping léger lorsque l’API n’existe pas, filtres temporels pour ne conserver que les publications de la dernière journée."
  },
  {
    id: "classification",
    label: "Classification pédagogique",
    description:
      "Modèle multi-étiquettes différenciant usages enseignants, élèves, direction, formation continue et dimension éthique."
  },
  {
    id: "distribution",
    label: "Diffusion multicanal",
    description:
      "Dashboard web, export PDF, envoi email aux listes de diffusion et webhook possible vers Slack/Teams."
  }
];

export const Activation = () => (
  <section className="card">
    <div className="card-section">
      <h2>Moteur d’automatisation</h2>
      <p>
        Une fois la sélection validée, la routine se déclenche tous les jours à
        07h30 GMT+1. Les publications antérieures sont ignorées au profit des
        nouveautés, puis résumées automatiquement avant diffusion.
      </p>
    </div>
    <div className="highlight">
      {activationDetails.map((item) => (
        <div key={item.id} className="highlight-item">
          <strong>{item.label}</strong>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

Activation.displayName = "Activation";
