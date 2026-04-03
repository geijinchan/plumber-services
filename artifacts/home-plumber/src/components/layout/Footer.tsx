import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 border-t border-slate-800 pb-24 md:pb-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-white flex items-center">
              <span className="text-3xl mr-1 leading-none">💧</span>
              HomePlumber
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Mohali's most trusted plumbing service since 2012. ITI-certified, verified, and always on time.
          </p>
        </div>

        <div>
          <h4 className="text-white font-serif font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-semibold text-lg mb-4">Services</h4>
          <ul className="space-y-3 text-sm">
            <li>Leak Detection</li>
            <li>Bathroom Installation</li>
            <li>Pipe Replacement</li>
            <li>Drain Cleaning</li>
            <li>Water Tank Cleaning</li>
            <li>24/7 Emergency</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-semibold text-lg mb-4">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href="tel:+9112345678" className="hover:text-white transition-colors">+91 12345678</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href="mailto:hello@homeplumber.in" className="hover:text-white transition-colors">hello@homeplumber.in</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>Phase 7, Mohali<br />Punjab, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Home Plumber Mohali. All rights reserved.</p>
      </div>
    </footer>
  );
}
