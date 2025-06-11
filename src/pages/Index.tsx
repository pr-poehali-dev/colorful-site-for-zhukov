import Hero from "@/components/Hero";
import ContactInfo from "@/components/ContactInfo";
import ServicesGrid from "@/components/ServicesGrid";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ContactInfo />
      <ServicesGrid />
      <ContactForm />
    </div>
  );
};

export default Index;
