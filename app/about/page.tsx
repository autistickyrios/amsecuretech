import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeatureSection from '@/components/feature-section';
import CTASection from '@/components/cta-section';
import { Award, Users, Zap, Target } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver the highest quality solutions backed by expertise and dedication.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work closely with our clients to understand and exceed their expectations.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of technology trends to provide cutting-edge solutions.',
  },
  {
    icon: Target,
    title: 'Reliability',
    description: 'You can count on us for consistent, dependable service and support.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection
          title="About AM SecureTech"
          subtitle="Leading provider of technology and security solutions with a commitment to excellence and customer success."
          ctaText="Let's Work Together"
          ctaHref="/contact"
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-orange-100 rounded-2xl h-96" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Founded with a vision to simplify technology and security, AM SecureTech has been helping businesses
                  protect their operations and grow through innovative solutions.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our team of experienced professionals brings decades of combined expertise in mobile development,
                  security systems, and technology solutions. We're passionate about delivering results that matter.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From startups to enterprises, we've had the privilege of partnering with businesses across various
                  industries to transform their operations and protect their assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FeatureSection title="Our Core Values" features={values} />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">By The Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '100+', label: 'Satisfied Clients' },
                { number: '15+', label: 'Years Experience' },
                { number: '24/7', label: 'Support Available' },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-secondary rounded-lg border border-border">
                  <div className="text-accent font-bold text-4xl mb-2">{item.number}</div>
                  <p className="text-gray-700 font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'John Smith',
                  role: 'Founder & CEO',
                  bio: 'With 15+ years in technology, John leads our vision for innovative solutions.',
                },
                {
                  name: 'Sarah Johnson',
                  role: 'Chief Technology Officer',
                  bio: 'Expert in mobile development with expertise across iOS and Android platforms.',
                },
                {
                  name: 'Mike Chen',
                  role: 'Director of Security',
                  bio: 'Security specialist ensuring all solutions meet enterprise-grade standards.',
                },
              ].map((member, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-border text-center">
                  <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Proven Track Record',
                  items: [
                    '500+ successful projects',
                    'Long-term client relationships',
                    'Industry recognitions',
                  ],
                },
                {
                  title: 'Expert Team',
                  items: [
                    'Certified professionals',
                    'Continuous learning',
                    'Dedicated support',
                  ],
                },
                {
                  title: 'Quality Assurance',
                  items: [
                    'Rigorous testing processes',
                    'Security standards compliance',
                    'Performance optimization',
                  ],
                },
                {
                  title: 'Customer Focused',
                  items: ['24/7 support available', 'Custom solutions', 'Transparent communication'],
                },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-secondary rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((subitem, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-700 text-sm">
                        <span className="text-accent font-bold">✓</span> {subitem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Partner With Us?"
          description="Let's discuss how AM SecureTech can help your business grow and succeed."
          primaryCtaText="Get in Touch"
          primaryCtaHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
