import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeatureSection from '@/components/feature-section';
import CTASection from '@/components/cta-section';
import { MapPin, Truck, BarChart3, AlertTriangle, Zap, Clock } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Real-Time Location',
    description: 'Track vehicles and assets in real-time with GPS precision.',
  },
  {
    icon: Truck,
    title: 'Fleet Management',
    description: 'Complete fleet monitoring and optimization for your business.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Comprehensive analytics for better decision making.',
  },
  {
    icon: AlertTriangle,
    title: 'Alert System',
    description: 'Instant notifications for unauthorized movements and anomalies.',
  },
  {
    icon: Zap,
    title: 'Fast Setup',
    description: 'Quick installation and immediate tracking capability.',
  },
  {
    icon: Clock,
    title: '24/7 Tracking',
    description: 'Continuous monitoring around the clock for complete peace of mind.',
  },
];

export default function GPSTrackingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection
          title="Advanced GPS Tracking Solutions"
          subtitle="Monitor your fleet, vehicles, and assets in real-time with our comprehensive GPS tracking system. Optimize operations and reduce costs."
          ctaText="Start Tracking"
          ctaHref="/contact"
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-orange-100 rounded-2xl h-96" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Fleet Tracking That Works
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our GPS tracking system provides complete visibility into your fleet operations. Monitor vehicles, optimize routes, and ensure driver safety.
                </p>
                <ul className="space-y-3">
                  {[
                    'Real-Time GPS Tracking',
                    'Route Optimization',
                    'Driver Monitoring',
                    'Fuel & Cost Analysis',
                    'Mobile App Access',
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

        <FeatureSection title="Tracking Features" features={features} />

        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Fleet Management',
                  description:
                    'Track multiple vehicles, optimize routes, reduce fuel costs, and improve driver efficiency.',
                },
                {
                  title: 'Delivery Services',
                  description:
                    'Ensure on-time deliveries, track packages in real-time, and provide customers with accurate ETAs.',
                },
                {
                  title: 'Equipment Tracking',
                  description:
                    'Monitor expensive equipment and machinery, prevent theft, and optimize asset utilization.',
                },
                {
                  title: 'Personal Safety',
                  description:
                    'Track family members, monitor elderly care, and ensure personal safety with location-based alerts.',
                },
                {
                  title: 'Field Service',
                  description:
                    'Dispatch technicians efficiently, verify job completion, and improve customer service quality.',
                },
                {
                  title: 'Construction Sites',
                  description:
                    'Monitor equipment movement, prevent unauthorized access, and improve project accountability.',
                },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Cost Savings',
                  stats: 'Up to 30%',
                  description: 'Reduce fuel costs and improve operational efficiency',
                },
                {
                  title: 'Safety Improvement',
                  stats: '40%',
                  description: 'Reduce accidents with driver behavior monitoring',
                },
                {
                  title: 'Time Efficiency',
                  stats: '25%',
                  description: 'Optimize routes and reduce delivery times',
                },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-orange-50 rounded-lg border border-border">
                  <div className="text-accent font-bold text-4xl mb-2">{item.stats}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Track Your Fleet?"
          description="Get started with our GPS tracking system and optimize your operations today."
          primaryCtaText="Request Demo"
          primaryCtaHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
