import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, ShieldCheck, Clock, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Home() {
  const services = [
    { title: "Leak Detection", icon: "💧", price: "₹499" },
    { title: "Bathroom Install", icon: "🚿", price: "₹7,999" },
    { title: "Pipe Replacement", icon: "🔧", price: "₹599" },
    { title: "Drain Cleaning", icon: "🪣", price: "₹699" },
    { title: "Tank Cleaning", icon: "🏠", price: "₹1,199" },
    { title: "24/7 Emergency", icon: "⚡", price: "₹799" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8 max-w-2xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium text-sm border border-green-200 shadow-sm animate-pulse-slow">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Plumbers Available Now in Mohali
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1]">
              Trusted Plumbers, <br/>
              <span className="text-primary">Zero Hassle.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              Mohali's highest-rated plumbing team. ITI-certified professionals at your door in under 60 minutes. No hidden fees, just great service.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start w-full max-w-md mx-auto md:mx-0">
              <Button asChild size="xl" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <Link href="/booking">Book a Plumber</Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full bg-white flex items-center gap-2">
                <a href="https://wa.me/919914148836" target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="w-5 h-5 text-green-600" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-6 pt-4 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-1.5">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span className="text-slate-900 font-bold">4.9/5</span> (5000+ Jobs)
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Generated Hero Image */}
              <img 
                src="/hero-plumber.png" 
                alt="Professional Plumber at Work" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Fast Response</p>
                  <p className="text-sm text-slate-600">We arrive within 60 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Fixing every leak, fast.</h2>
            <p className="text-slate-600">From dripping taps to full bathroom installs, our certified team handles it all with upfront pricing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="group hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/10">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-500 mb-4 text-sm line-clamp-2">Professional {service.title.toLowerCase()} services in Mohali. Fast, reliable, and guaranteed workmanship.</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm font-medium text-slate-500">Starts at <strong className="text-slate-900 text-lg">{service.price}</strong></span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/5 p-0" asChild>
                      <Link href="/booking">Book <ArrowRight className="ml-1 w-4 h-4" /></Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">How HomePlumber Works</h2>
            <p className="text-slate-600">Three simple steps to solve your plumbing problems today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Book a Service", desc: "Call, WhatsApp, or book online in under 60 seconds. Choose a time that works for you." },
              { step: "02", title: "We Arrive Promptly", desc: "Our ITI-certified plumber arrives on time, diagnoses the issue, and gives a fixed quote." },
              { step: "03", title: "Job Done Right", desc: "We fix the problem cleanly and efficiently, backed by our 30-day workmanship guarantee." }
            ].map((s, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-2 border-primary/20 rounded-full flex items-center justify-center text-2xl font-serif font-bold text-primary mb-6 shadow-sm z-10 relative">
                  {s.step}
                </div>
                {i < 2 && <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/20 to-transparent"></div>}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Why Mohali Chooses Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              "ITI Certified Plumbers", 
              "Background Verified", 
              "30-Day Guarantee", 
              "Transparent Pricing"
            ].map((trust, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-white/80" />
                <span className="font-medium text-lg">{trust}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">What Our Customers Say</h2>
            <p className="text-slate-600">Real reviews from real customers in Mohali — straight from Google.</p>
          </div>
          <div className="elfsight-app-ce9ca789-5404-4735-ab92-0f9cb23145a3" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Need a plumber right now?</h2>
              <p className="text-xl text-slate-300">Don't let a small leak turn into a big disaster. Call the experts.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild size="xl" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full">
                  <a href="tel:+919914148836">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +91 9914148836
                  </a>
                </Button>
                <Button asChild size="xl" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full bg-transparent border-slate-600 text-white hover:bg-slate-800 hover:text-white">
                  <Link href="/booking">Book Online</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
