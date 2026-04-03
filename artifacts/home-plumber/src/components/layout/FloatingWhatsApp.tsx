import { SiWhatsapp } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function FloatingWhatsApp() {
  return (
    <div className="hidden md:block fixed bottom-8 right-8 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-both">
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/9112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            aria-label="Chat on WhatsApp"
          >
            <SiWhatsapp className="w-8 h-8" />
            
            {/* Notification dot */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white text-[8px] font-bold items-center justify-center">1</span>
            </span>
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-white text-gray-800 shadow-xl border p-3 rounded-xl font-medium">
          Need a plumber? Chat with us! 💧
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
