import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeatureSection from '@/components/feature-section';
import CTASection from '@/components/cta-section';
import { Camera, Eye, Shield, AlertCircle, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: '24/7 Monitoring',
    description: 'Round-the-clock surveillance coverage for your property and assets.',
  },
  {
    icon: Camera,
    title: 'HD Quality',
    description: 'Crystal clear 1080p to 4K video quality for detailed footage.',
  },
  {
    icon: Shield,
    title: 'Advanced Security',
    description: 'State-of-the-art encryption and secure cloud storage options.',
  },
  {
    icon: AlertCircle,
    title: 'Smart Alerts',
    description: 'Real-time notifications when motion or unusual activity is detected.',
  },
  {
    icon: Zap,
    title: 'Easy Integration',
    description: 'Seamlessly integrates with your existing security systems.',
  },
  {
    icon: Users,
    title: 'Expert Installation',
    description: 'Professional installation and setup by certified technicians.',
  },
];

export default function CCTVInstallationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection
          title="Professional CCTV Installation & Surveillance"
          subtitle="Protect your business and property with our advanced CCTV systems. From residential to enterprise solutions, we provide complete surveillance coverage."
          ctaText="Get Quote"
          ctaHref="/contact"
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Complete Surveillance Solutions
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our CCTV systems provide comprehensive security coverage. Whether you need surveillance for your home, office, or industrial facility, we have the perfect solution.
                </p>
                <ul className="space-y-3">
                  {[
                    'Professional Installation',
                    'HD & 4K Cameras',
                    'Remote Monitoring',
                    'Cloud Storage Integration',
                    ' 24/7 Support',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-100 rounded-2xl h-96" />
            </div>
          </div>
        </section>

        <FeatureSection title="Advanced CCTV Features" features={features} />

        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">System Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Residential Systems',
                  features: ['1-8 Cameras', 'HD Quality', 'Remote Access', 'Motion Detection'],
                },
                {
                  title: 'Commercial Systems',
                  features: ['8-32 Cameras', '1080p - 4K', 'Advanced Analytics', 'Full Monitoring'],
                },
                {
                  title: 'Enterprise Solutions',
                  features: ['32+ Cameras', '4K Resolution', 'AI Integration', 'Centralized Control'],
                },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-accent">●</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Installation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Site Survey', desc: 'Assessment of your property and security needs' },
                { step: '02', title: 'System Design', desc: 'Custom solution tailored to your requirements' },
                {
                  step: '03',
                  title: 'Installation',
                  desc: 'Professional setup and configuration',
                },
                { step: '04', title: 'Training', desc: 'Complete training on system usage' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-secondary rounded-lg border border-border">
                  <div className="text-accent font-bold text-3xl mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Secure Your Property Today"
          description="Contact us for a free site survey and customized CCTV solution quote."
          primaryCtaText="Request Free Survey"
          primaryCtaHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
