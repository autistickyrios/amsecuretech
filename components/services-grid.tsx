import ServiceCard from './service-card';
import { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

interface ServicesGridProps {
  services: Service[];
  title?: string;
  subtitle?: string;
}

export default function ServicesGrid({ services, title, subtitle }: ServicesGridProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
            {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
