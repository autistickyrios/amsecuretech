import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import ContactSection from '@/components/contact-section';
import CTASection from '@/components/cta-section';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection
          title="Get In Touch With Us"
          subtitle="Have a question about our services? We'd love to hear from you. Reach out to our team and let's discuss how we can help your business."
          ctaText="Send Message"
          ctaHref="#contact-form"
        />

        <ContactSection />

        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {[
                {
                  q: 'What is your typical project timeline?',
                  a: 'Project timelines vary based on scope and complexity. Mobile development projects typically take 2-6 months, while CCTV and GPS solutions can be installed within 1-2 weeks. We provide detailed timelines during the initial consultation.',
                },
                {
                  q: 'Do you provide ongoing support and maintenance?',
                  a: 'Yes, we offer comprehensive post-launch support and maintenance packages for all our services. Our team is available 24/7 to ensure your systems run smoothly.',
                },
                {
                  q: 'Can you customize solutions for my specific needs?',
                  a: 'Absolutely! All our services are customized to meet your unique business requirements. We work closely with you to understand your needs and deliver tailored solutions.',
                },
                {
                  q: 'What payment options do you accept?',
                  a: 'We accept various payment methods including credit cards, bank transfers, and custom payment plans for larger projects. Contact us to discuss the best option for your situation.',
                },
                {
                  q: 'Are your solutions secure?',
                  a: 'Security is paramount. All our solutions comply with industry standards and best practices. We implement encryption, secure authentication, and regular security audits.',
                },
                {
                  q: 'How quickly can you start a project?',
                  a: 'We can typically start projects within 1-2 weeks of signing the agreement. For urgent requests, we offer expedited onboarding options.',
                },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-3">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Let's Start Your Project Today"
          description="Contact our team to discuss your requirements and get a customized quote."
          primaryCtaText="Schedule Consultation"
          primaryCtaHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
