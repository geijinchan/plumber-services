import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl font-bold text-blue-600 flex items-center gap-1">
              <span className="text-2xl leading-none">💧</span>
              <span>Home<span className="italic">Plumber</span></span>
            </span>
          </Link>

          {/* Desktop nav — only visible on md+ */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location === link.href ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA — only visible on md+ */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919914148836"
              className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              +91 9914148836
            </a>
            <Button asChild size="sm">
              <Link href="/booking">Book a Plumber</Link>
            </Button>
          </div>

          {/* Mobile hamburger — only visible below md */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="button-hamburger"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu — rendered below md only */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="flex flex-col px-6 pt-6 pb-24">
            <ul className="flex flex-col divide-y divide-gray-100">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-4 text-lg font-semibold transition-colors ${
                      location === link.href ? "text-blue-600" : "text-gray-800"
                    }`}
                    data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Button asChild size="lg" className="w-full h-14 text-base" onClick={() => setIsOpen(false)}>
                <Link href="/booking">Book a Plumber Now</Link>
              </Button>
              <a
                href="tel:+919914148836"
                className="flex items-center justify-center gap-3 w-full h-14 rounded-lg border-2 border-gray-200 text-gray-800 font-semibold text-base hover:border-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
                data-testid="link-nav-call"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                +91 9914148836
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
