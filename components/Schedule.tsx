import { routine } from "@/data/routine";

export const Schedule = () => (
  <section className="card">
    <div className="card-section schedule">
      <div className="schedule-row">
        <h2>Routine d’exécution</h2>
        <span className="schedule-badge">Déclenchement quotidien 07h30 GMT+1</span>
      </div>
      <p>
        Le moteur de veille ne retient que les contenus publiés dans les 24
        dernières heures. Les synthèses sont optimisées pour la prise de décision
        rapide des équipes pédagogiques et innovation.
      </p>
    </div>
    <div className="timeline">
      {routine.map((step) => (
        <div key={step.id} className="timeline-step">
          <h3>
            {step.time} · {step.label}
          </h3>
          <p>{step.detail}</p>
          <p>
            <strong>Sortie :</strong> {step.output}
          </p>
        </div>
      ))}
    </div>
  </section>
);

Schedule.displayName = "Schedule";
