import ServicePageTemplate from "@/components/ServicePageTemplate";
import completedImg from "@/assets/completed-building.jpg";
import heroDashImg from "@/assets/hero-dashboards.jpg";

const CustomDashboards = () => (
  <ServicePageTemplate
    title="Custom Dashboards"
    subtitle="Visibility drives better project outcomes. Our dashboards turn key construction metrics into decision-ready reporting for ownership teams."
    deliverDesc="We build practical reporting systems that keep project leadership informed and aligned."
    deliverItems={[
      "Cash Flow Projections",
      "Construction Schedule Status",
      "Budget Status",
      "Material Procurement Status",
      "Key Success Factors",
    ]}
    factTitle="Did You Know?"
    factText="When advanced scheduling methods and proper financial projections are incorporated, projects are 70% more likely to stay on track."
    ctaText="Need better visibility into project performance?"
    image={completedImg}
    heroImage={heroDashImg}
  />
);

export default CustomDashboards;
