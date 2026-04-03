import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  return (
    <div className="pt-8 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Honest, Upfront Pricing.</h1>
          <p className="text-lg text-slate-600">
            No hidden fees, no surprise charges at the end. You know exactly what you'll pay before we start working.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          
          {/* Basic */}
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-xl text-slate-500 font-medium mb-2">Basic Visit</CardTitle>
              <div className="text-4xl font-bold text-slate-900">₹499<span className="text-lg text-slate-500 font-normal">/visit</span></div>
              <CardDescription className="mt-4">For minor fixes & inspections</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {["Detailed inspection", "Minor tap fixes", "Quote for larger jobs", "No obligation"].map((f,i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-8">
              <Button asChild variant="outline" className="w-full">
                <Link href="/booking">Book Basic Visit</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Home Care (Popular) */}
          <Card className="border-2 border-primary shadow-xl relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
              Most Popular
            </div>
            <CardHeader className="text-center pb-8 pt-10">
              <CardTitle className="text-xl text-primary font-medium mb-2">Home Care Plan</CardTitle>
              <div className="text-4xl font-bold text-slate-900">₹1,499<span className="text-lg text-slate-500 font-normal">/mo</span></div>
              <CardDescription className="mt-4">Complete peace of mind for homes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {["Free unlimited visits", "Priority 24/7 response", "Free tank cleaning (1/yr)", "15% off all parts", "Annual health check"].map((f,i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-8">
              <Button asChild className="w-full text-lg h-12 shadow-lg">
                <a href="https://wa.me/9112345678?text=Hi%2C+I'm+interested+in+the+Home+Care+Plan" target="_blank" rel="noopener noreferrer">
                  Subscribe via WhatsApp
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Commercial */}
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-xl text-slate-500 font-medium mb-2">Commercial</CardTitle>
              <div className="text-4xl font-bold text-slate-900">Custom</div>
              <CardDescription className="mt-4">For offices, restaurants & retail</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {["Dedicated account manager", "GST Invoicing", "Preventative maintenance", "After-hours servicing"].map((f,i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-8">
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Request Quote</Link>
              </Button>
            </CardFooter>
          </Card>

        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-10">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl p-6 shadow-sm border">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-lg">Do I have to pay if you just come to inspect?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                We charge a basic visit fee of ₹499 to cover our travel and time to diagnose the issue accurately. If you proceed with the repair work that costs above ₹2000, we waive off the visit fee entirely!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-lg">Do you provide parts or should I buy them?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                We carry most common spare parts in our vans. We use high-quality branded parts (Jaquar, Kohler, Ashirvad) and bill them at MRP transparently. However, if you prefer to purchase the parts yourself, we are perfectly happy to just charge for our labor.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-lg">Do you offer any guarantee on your work?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Absolutely. We provide a 30-day workmanship guarantee on all repairs. If the exact same issue reoccurs within 30 days of our repair, we will fix it for free.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold text-lg">What payment methods do you accept?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                We accept UPI (Google Pay, PhonePe, Paytm), Cash, and direct bank transfers. We provide GST invoices for all commercial work upon request.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
    </div>
  );
}
