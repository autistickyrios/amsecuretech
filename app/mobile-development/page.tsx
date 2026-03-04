import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeatureSection from '@/components/feature-section';
import CTASection from '@/components/cta-section';
import { Code2, Smartphone, Zap, Shield, RefreshCw, Users } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Cross-Platform Development',
    description: 'Build once, deploy everywhere with native performance on iOS and Android.',
  },
  {
    icon: Code2,
    title: 'Modern Tech Stack',
    description: 'We use the latest frameworks and technologies to ensure your app stays current.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures smooth, responsive user experiences.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade security built into every aspect of your application.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Updates',
    description: 'Regular maintenance and updates to keep your app competitive.',
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description: 'Beautiful, intuitive interfaces designed for your target audience.',
  },
];

export default function MobileDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection
          title="Professional Mobile Development Services"
          subtitle="We create powerful iOS and Android applications that drive business growth and engage users. From concept to deployment, our expert team handles every step."
          ctaText="Start Your Project"
          ctaHref="/contact"
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Native & Cross-Platform Solutions
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Whether you need a native iOS app for maximum performance, a native Android app for market reach, or cross-platform development for efficiency, we have the expertise to deliver.
                </p>
                <ul className="space-y-3">
                  {['iOS Development', 'Android Development', 'Cross-Platform Apps', 'App Maintenance'].map(
                    (item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-accent font-bold">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="bg-orange-100 rounded-2xl h-96" />
            </div>
          </div>
        </section>

        <FeatureSection title="Key Features" features={features} />

        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements' },
                { step: '02', title: 'Design', desc: 'Creating intuitive user experiences' },
                { step: '03', title: 'Development', desc: 'Building robust, scalable applications' },
                { step: '04', title: 'Launch', desc: 'Deploying and supporting your app' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-lg border border-border">
                  <div className="text-accent font-bold text-3xl mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Build Your Mobile App?"
          description="Let's discuss your project requirements and create something amazing together."
          primaryCtaText="Get in Touch"
          primaryCtaHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
