import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = 'Get Started',
  ctaHref = '/contact',
  secondaryCtaText = 'Learn More',
  secondaryCtaHref = '/',
}: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl -mr-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={ctaHref}
              className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {ctaText}
            </Link>
            <Link
              href={secondaryCtaHref}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-secondary transition-all duration-200"
            >
              {secondaryCtaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
