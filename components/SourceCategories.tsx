import { sourceCategories } from "@/data/sources";

export const SourceCategories = () => (
  <section className="card">
    <div className="card-section">
      <h2>Sources sélectionnées</h2>
      <p>
        Quatre familles de surveillance combinent actualités, retours de terrain,
        publications scientifiques et benchmarks d’outils. Chaque source a été
        privilégiée pour sa crédibilité, sa couverture francophone et la
        fréquence de ses mises à jour.
      </p>
    </div>
    <div className="card-section source-grid">
      {sourceCategories.map((category) => (
        <article key={category.id} className="source-card">
          <div>
            <strong>{category.label}</strong>
            <p>{category.description}</p>
          </div>
          <div className="source-meta">
            <span>{category.focus}</span>
          </div>
          <ul className="source-grid">
            {category.sources.map((source) => (
              <li key={source.id} className="highlight-item">
                <strong>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.name}
                  </a>
                </strong>
                <p>{source.description}</p>
                <div className="source-meta">
                  <span>Couverture : {source.coverage.join(", ")}</span>
                  <span>Cadence : {source.cadence}</span>
                  <span>
                    Langue :{" "}
                    {source.language === "multi"
                      ? "Fr / En"
                      : source.language.toUpperCase()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

SourceCategories.displayName = "SourceCategories";
