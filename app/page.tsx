import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import ServicesGrid from '@/components/services-grid';
import FeatureSection from '@/components/feature-section';
import CTASection from '@/components/cta-section';
import {
  Smartphone,
  Package,
  Camera,
  MapPin,
  Shield,
  Zap,
  Users,
} from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Custom iOS and Android applications built with cutting-edge technology.',
    href: '/mobile-development',
  },
  {
    icon: Package,
    title: 'APK Development',
    description: 'Professional APK development for Android platforms with full support.',
    href: '/apk-development',
  },
  {
    icon: Camera,
    title: 'CCTV Installation',
    description: 'State-of-the-art surveillance systems for complete security coverage.',
    href: '/cctv-installation',
  },
  {
    icon: MapPin,
    title: 'GPS Tracking',
    description: 'Real-time tracking solutions for fleet management and asset monitoring.',
    href: '/gps-tracking',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Industry-leading security practices to protect your business and data.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized solutions that deliver fast, reliable results every time.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated team ready to support your business 24/7.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection
          title="Secure Technology Solutions for Modern Business"
          subtitle="AM SecureTech provides comprehensive technology and security services including mobile development, APK solutions, CCTV installation, and GPS tracking to keep your business safe and efficient."
          ctaText="Get Started"
          ctaHref="/contact"
          secondaryCtaText="Learn More"
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
