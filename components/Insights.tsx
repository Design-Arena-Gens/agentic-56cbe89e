import { latestInsights } from "@/data/insights";

export const Insights = () => (
  <section className="card">
    <div className="card-section">
      <h2>Exemples d’insights quotidiens</h2>
      <p>
        Les synthèses privilégient l’impact pédagogique, les précautions
        réglementaires et les retours d’expérience concrets. Chaque insight est
        lié à l’article original pour permettre l’approfondissement.
      </p>
    </div>
    <div className="highlight">
      {latestInsights.map((insight) => (
        <article key={insight.id} className="highlight-item">
          <strong>{insight.title}</strong>
          <p>{insight.summary}</p>
          <div className="source-meta">
            <span>Catégorie : {insight.category}</span>
            <span>Publié le : {insight.publishedAt}</span>
            <a href={insight.sourceUrl} target="_blank" rel="noreferrer">
              Source : {insight.sourceName}
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

Insights.displayName = "Insights";
