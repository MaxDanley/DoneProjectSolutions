import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImg from "@/assets/hero-construction.jpg";
import heroCostImg from "@/assets/hero-cost-management.jpg";

const CostManagement = () => (
  <ServicePageTemplate
    title="Cost Management"
    subtitle="Protecting budget performance with disciplined forecasting, contingency control, and proactive change management."
    deliverDesc="We provide transparent cost controls that keep financial outcomes visible and manageable from start to finish."
    deliverItems={[
      "Budget Management",
      "Contingency Planning",
      "Margin Forecasting",
      "Change Order Management/Reviews",
    ]}
    factTitle="Did You Know?"
    factText="In 2024, 75% of projects went over budget. For every $1M in construction, $90,000-$150,000 in unforeseen costs arise from material, labor, and design changes."
    ctaText="Want tighter control of project cost outcomes?"
    image={heroImg}
    heroImage={heroCostImg}
  />
);

export default CostManagement;
