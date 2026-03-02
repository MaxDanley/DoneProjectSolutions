import ServicePageTemplate from "@/components/ServicePageTemplate";
import blueprintsImg from "@/assets/blueprints-desk.jpg";
import heroPreConImg from "@/assets/hero-pre-construction.jpg";

const PreConstruction = () => (
  <ServicePageTemplate
    title="Pre-Construction"
    subtitle="We align scope, schedule, design, and commercial expectations before execution risk compounds in the field."
    deliverDesc="Our pre-construction framework helps teams avoid ambiguity and reduce avoidable change and delay."
    deliverItems={[
      "Pre-Construction Scheduling",
      "Preliminary Construction Scheduling",
      "Design/VE Assistance & Constructibility",
      "Budgeting & Scoping",
      "Bidding Process Support",
      "Permitting and compliance assistance",
    ]}
    factTitle="Did You Know?"
    factText="Change orders alone can increase project costs by 8-14% on average. Scope gaps can be reduced through early communication and alignment."
    ctaText="Start the project right before construction begins."
    image={blueprintsImg}
    heroImage={heroPreConImg}
  />
);

export default PreConstruction;
