import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  const content = (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
        <Icon size={24} className="text-accent" />
      </div>
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>
      {href && (
        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-accent font-semibold text-sm hover:underline">Learn more →</span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        <div className="p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md hover:border-accent/50 transition-all duration-300 cursor-pointer h-full">
          {content}
        </div>
      </Link>
    );
  }

  return (
    <div className="p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full">
      {content}
    </div>
  );
}
