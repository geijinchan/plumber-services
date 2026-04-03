import { Link } from "wouter";
import { Phone, CalendarCheck } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-40 flex h-16 safe-area-bottom">
      <a 
        href="tel:+9112345678" 
        className="flex-1 flex flex-col items-center justify-center gap-1 text-gray-700 hover:bg-gray-50 transition-colors border-r"
      >
        <Phone className="w-5 h-5 text-primary" />
        <span className="text-[10px] font-semibold uppercase tracking-wider">Call</span>
      </a>
      
      <a 
        href="https://wa.me/9112345678" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 text-gray-700 hover:bg-green-50 transition-colors border-r"
      >
        <SiWhatsapp className="w-5 h-5 text-green-600" />
        <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
      </a>
      
      <Link 
        href="/booking" 
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-primary text-white hover:bg-primary/90 transition-colors"
      >
        <CalendarCheck className="w-5 h-5" />
        <span className="text-[10px] font-semibold uppercase tracking-wider">Book Now</span>
      </Link>
    </div>
  );
}
