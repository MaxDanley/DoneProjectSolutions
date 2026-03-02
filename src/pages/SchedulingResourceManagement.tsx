import ServicePageTemplate from "@/components/ServicePageTemplate";
import teamImg from "@/assets/team-planning.jpg";
import heroSchedImg from "@/assets/hero-scheduling.jpg";

const SchedulingResourceManagement = () => (
  <ServicePageTemplate
    title="Scheduling & Resource Management"
    subtitle="Integrated scheduling and workforce planning that keeps project delivery aligned with cost and procurement realities."
    deliverDesc="We build scheduling systems that connect execution strategy to cash flow and resource constraints."
    deliverItems={[
      "Schedule Development & Management",
      "Cost Loaded Schedules for Cashflow Projections",
      "Resource Loaded for Workforce Management",
      "Material Procurement Scheduling",
    ]}
    factTitle="Did You Know?"
    factText="Only 30% of projects finish on schedule and under budget."
    ctaText="Need stronger schedule control and resource predictability?"
    image={teamImg}
    heroImage={heroSchedImg}
  />
);

export default SchedulingResourceManagement;
