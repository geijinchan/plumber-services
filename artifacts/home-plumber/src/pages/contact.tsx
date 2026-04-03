import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <div className="pt-8 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600">
            Need a plumber in Mohali? We're ready to help. Reach out to us via phone, WhatsApp, or visit our office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details */}
          <div className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Call Us (24/7)</p>
                  <a href="tel:+9112345678" className="text-2xl font-bold text-slate-900 hover:text-primary transition-colors">
                    +91 12345678
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-green-50/50 hover:bg-green-50 transition-colors">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="w-14 h-14 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center shrink-0">
                  <SiWhatsapp className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">WhatsApp</p>
                  <a href="https://wa.me/9112345678" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-slate-900 hover:text-[#25D366] transition-colors">
                    Chat with our team
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:hello@homeplumber.in" className="text-lg font-bold text-slate-900 hover:text-primary transition-colors">
                    hello@homeplumber.in
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white rounded-2xl p-8 border shadow-sm mt-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Working Hours
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex justify-between pb-3 border-b">
                  <span>Monday - Saturday</span>
                  <span className="font-medium text-slate-900">8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between pb-3 border-b">
                  <span>Sunday</span>
                  <span className="font-medium text-slate-900">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span className="text-red-500 font-medium">Emergency Calls</span>
                  <span className="font-bold text-red-500">24/7 Available</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Location & Map */}
          <div className="space-y-6 flex flex-col">
            <div className="bg-white rounded-2xl p-8 border shadow-sm flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" /> Office Location
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Phase 7, Mohali<br />
                Punjab, India<br />
                (Serving all phases of Mohali, Kharar, and Zirakpur)
              </p>
              
              <div className="w-full bg-slate-100 rounded-xl overflow-hidden flex-1 min-h-[300px] border shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95.27623!2d76.6731015!3d30.7277997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefa0a75e7de1%3A0x8876dd9375747d67!2sHome%20plumber!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Home Plumber Location Map"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://www.google.com/maps/place/Home+plumber/@30.7237145,76.6744623,16.5z/data=!4m6!3m5!1s0x390fefa0a75e7de1:0x8876dd9375747d67!8m2!3d30.7277997!4d76.6731015!16s%2Fg%2F11l2m4141f" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline text-sm"
                >
                  View on Google Maps / Read Reviews →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
