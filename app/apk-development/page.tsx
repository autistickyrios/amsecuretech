import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeatureSection from '@/components/feature-section';
import CTASection from '@/components/cta-section';
import { Package, Smartphone, Zap, Bug, Rocket, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Full APK Development',
    description: 'Complete APK creation from design to distribution on Google Play Store.',
  },
  {
    icon: Zap,
    title: 'Optimized Performance',
    description: 'Lightweight and efficient APKs that work smoothly on all Android devices.',
  },
  {
    icon: Bug,
    title: 'Quality Assurance',
    description: 'Rigorous testing across multiple devices and Android versions.',
  },
  {
    icon: Rocket,
    title: 'Play Store Ready',
    description: 'Apps compliant with Google Play Store guidelines and requirements.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Integration',
    description: 'Built-in analytics to track user behavior and app performance.',
  },
  {
    icon: Smartphone,
    title: 'Device Compatibility',
    description: 'Tested on phones, tablets, and various Android versions.',
  },
];

export default function APKDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection
          title="Expert APK Development for Android"
          subtitle="Create professional Android applications with our specialized APK development services. We handle everything from coding to app store deployment."
          ctaText="Start Your APK"
          ctaHref="/contact"
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-orange-100 rounded-2xl h-96" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Android Apps That Stand Out
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our team specializes in creating feature-rich Android applications that deliver exceptional user experiences. We focus on creating APKs that are fast, secure, and scalable.
                </p>
                <ul className="space-y-3">
                  {[
                    'Custom APK Development',
                    'Google Play Store Submission',
                    'App Updates & Maintenance',
                    'Performance Optimization',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FeatureSection title="Why Choose Our APK Development" features={features} />

        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Development Workflow</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Requirements Gathering',
                  description: 'We listen to your vision and create a detailed project roadmap.',
                },
                {
                  title: 'Design & Prototyping',
                  description: 'Beautiful UI/UX designed specifically for Android users.',
                },
                {
                  title: 'Development',
                  description: 'Professional coding following Android best practices.',
                },
                {
                  title: 'Testing & QA',
                  description: 'Comprehensive testing on multiple devices and Android versions.',
                },
                {
                  title: 'Play Store Submission',
                  description: 'We handle all the paperwork and guidelines for store submission.',
                },
                {
                  title: 'Post-Launch Support',
                  description: 'Ongoing maintenance, updates, and user support.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-accent text-white font-semibold rounded-lg">
                    {i + 1}
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Launch Your Android App?"
          description="Our team is ready to build your next APK. Contact us today to discuss your project."
          primaryCtaText="Get Started Now"
          primaryCtaHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
