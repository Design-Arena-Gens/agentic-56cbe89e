import { Activation } from "@/components/Activation";
import { AgentProfile } from "@/components/AgentProfile";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { Schedule } from "@/components/Schedule";
import { SourceCategories } from "@/components/SourceCategories";

export default function Page() {
  return (
    <main>
      <div className="page-wrapper">
        <Hero />
        <section className="dashboard">
          <div className="dashboard-grid">
            <AgentProfile />
            <Schedule />
          </div>
          <SourceCategories />
          <div className="dashboard-grid">
            <Insights />
            <Activation />
          </div>
        </section>
        <footer className="footer">
          <span>
            Agent configuré pour déclenchement automatique quotidien · Fenêtre
            de surveillance : publications &lt; 24h · Fuseau : GMT+1.
          </span>
          <span>
            Contact :{" "}
            <a href="mailto:veille-ia-education@example.com">
              veille-ia-education@example.com
            </a>
          </span>
        </footer>
      </div>
    </main>
  );
}
