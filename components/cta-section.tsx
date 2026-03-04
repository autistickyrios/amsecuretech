import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function CTASection({
  title,
  description,
  primaryCtaText = 'Get Started',
  primaryCtaHref = '/contact',
  secondaryCtaText,
  secondaryCtaHref,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/95 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={primaryCtaHref}
            className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {primaryCtaText}
          </Link>
          {secondaryCtaText && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
