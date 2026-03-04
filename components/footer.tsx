import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AM SecureTech</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional technology and security solutions for modern businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/mobile-development" className="hover:text-accent transition-colors duration-200">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/apk-development" className="hover:text-accent transition-colors duration-200">
                  APK Development
                </Link>
              </li>
              <li>
                <Link href="/cctv-installation" className="hover:text-accent transition-colors duration-200">
                  CCTV Installation
                </Link>
              </li>
              <li>
                <Link href="/gps-tracking" className="hover:text-accent transition-colors duration-200">
                  GPS Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-accent transition-colors duration-200">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Email: info@amsecuretech.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Tech Avenue, Tech City, TC 12345</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} AM SecureTech. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/" className="hover:text-accent transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/" className="hover:text-accent transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
