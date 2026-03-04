'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg">Have a question? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                  <Mail size={24} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">Email</h3>
                <p className="text-gray-600">info@amsecuretech.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                  <Phone size={24} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                  <MapPin size={24} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">Address</h3>
                <p className="text-gray-600">123 Tech Avenue, Tech City, TC 12345</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
              />

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
