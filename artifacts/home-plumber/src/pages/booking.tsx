import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  service: z.string().min(1, { message: "Please select a service" }),
  date: z.string().min(1, { message: "Please select a date/time" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Please provide your full address" }),
});

export default function Booking() {
  const [_, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Parse URL params for pre-selecting service
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      form.setValue('service', serviceParam);
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "",
      date: "",
      name: "",
      phone: "",
      address: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Format text for WhatsApp
    const text = `Hi, I want to book a plumber.%0A*Service:* ${values.service}%0A*Date/Time:* ${values.date}%0A*Name:* ${values.name}%0A*Phone:* ${values.phone}%0A*Address:* ${values.address}`;
    
    const whatsappUrl = `https://wa.me/9112345678?text=${text}`;
    
    // Small delay to show button loading state before redirect
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      // Optional: redirect to a success page or back home
      // setLocation("/");
    }, 800);
  }

  const services = [
    { id: "Leak Detection", icon: "💧" },
    { id: "Bathroom Install", icon: "🚿" },
    { id: "Pipe Replacement", icon: "🔧" },
    { id: "Drain Cleaning", icon: "🪣" },
    { id: "Tank Cleaning", icon: "🏠" },
    { id: "Emergency 24/7", icon: "⚡" },
  ];

  return (
    <div className="pt-8 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Book a Plumber</h1>
            <p className="text-slate-600">Fill out the details below. We'll confirm your booking instantly via WhatsApp.</p>
          </div>

          <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-6 md:p-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  
                  {/* Service Selector */}
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-bold text-slate-900">1. What do you need help with?</FormLabel>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                          {services.map((s) => (
                            <div 
                              key={s.id}
                              onClick={() => form.setValue("service", s.id)}
                              className={`cursor-pointer rounded-xl p-4 text-center border-2 transition-all ${
                                field.value === s.id 
                                  ? "border-primary bg-primary/5 text-primary" 
                                  : "border-slate-200 hover:border-primary/30 bg-white"
                              }`}
                            >
                              <div className="text-3xl mb-2">{s.icon}</div>
                              <div className="text-sm font-semibold">{s.id}</div>
                            </div>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 gap-8">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-bold text-slate-900">2. When should we arrive?</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Today at 4 PM, Tomorrow morning" className="h-12 text-lg bg-white" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-6">
                      <p className="text-base font-bold text-slate-900">3. Your Details</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Full Name" className="h-12 bg-white" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Phone Number" type="tel" className="h-12 bg-white" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea 
                                placeholder="Complete Address (Phase / Sector, Mohali)" 
                                className="min-h-[100px] resize-none bg-white" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="xl" 
                    className="w-full h-16 text-lg font-bold rounded-xl shadow-lg mt-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Confirm Booking via WhatsApp"}
                  </Button>
                  
                  <p className="text-center text-sm text-slate-500 mt-4">
                    No payment required now. You'll pay after the job is done.
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
