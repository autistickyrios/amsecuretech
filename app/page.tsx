import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ServicesGrid from "@/components/services-grid";
import FeatureSection from "@/components/feature-section";
import CTASection from "@/components/cta-section";
import {
  Smartphone,
  Package,
  Camera,
  MapPin,
  Shield,
  Zap,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Custom Android and mobile applications designed for enterprise systems, operational tools, and government project requirements.",
    href: "/mobile-development",
  },
  {
    icon: Package,
    title: "APK Development",
    description:
      "Secure and optimized APK solutions built for controlled deployment, enterprise systems, and internal government applications.",
    href: "/apk-development",
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description:
      "Professional CCTV installation for offices, infrastructure projects, public facilities, and enterprise security systems.",
    href: "/cctv-installation",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description:
      "Advanced GPS tracking systems for vehicle fleets, logistics operations, and government infrastructure monitoring.",
    href: "/gps-tracking",
  },
];

// const features = [
//   {
//     icon: Shield,
//     title: "Enterprise Security",
//     description:
//       "Industry-leading security practices to protect your business and data.",
//   },
//   {
//     icon: Zap,
//     title: "High Performance",
//     description:
//       "Optimized solutions that deliver fast, reliable results every time.",
//   },
//   {
//     icon: Users,
//     title: "Expert Support",
//     description: "Dedicated team ready to support your business 24/7.",
//   },
// ];

const features = [
  {
    icon: Shield,
    title: "Security Focused",
    description:
      "Solutions built with strong security standards suitable for enterprise and government environments.",
  },
  {
    icon: Zap,
    title: "Reliable Infrastructure",
    description:
      "Technology deployments designed for long-term stability and operational efficiency.",
  },
  {
    icon: Users,
    title: "Professional Deployment",
    description:
      "Experienced team handling installation, configuration, and long-term support.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection
          title="Technology & Security Solutions for Government and Enterprise Projects"
          subtitle="AM SecureTech delivers reliable Mobile Development, APK Solutions, CCTV Installation, and GPS Tracking systems designed for government tenders, enterprises, and infrastructure projects across India."
          ctaText="Get a Quote"
          ctaHref="/contact"
          secondaryCtaText="View Services"
          secondaryCtaHref="#services"
        />

        <ServicesGrid
          services={services}
          title="Our Services"
          subtitle="Comprehensive solutions tailored to your business needs"
        />

        <FeatureSection
          title="Why Choose AM SecureTech"
          subtitle="Experience the difference with our commitment to excellence"
          features={features}
        />

        <CTASection
          title="Ready to Secure Your Business?"
          description="Get in touch with our team to discuss how we can help protect and optimize your operations with our innovative technology solutions."
          primaryCtaText="Contact Us Today"
          primaryCtaHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
