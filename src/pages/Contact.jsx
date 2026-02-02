import React, { useState } from 'react';
import {
  Phone, MapPin, Clock, ArrowRight, Shield, CheckCircle2, MessageCircle,
  BadgeCheck, Mail, Star
} from 'lucide-react';
import { Button, SectionHeading, FAQItem, FAQS } from '../components/ui';

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState(-1);

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden border-b-2 border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.12),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-green-500 text-white px-4 py-1 text-sm font-black uppercase border-2 border-slate-700 mb-6">
            Free, No-Obligation Quotes
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">Get in Touch</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-medium">
            Call, text, WhatsApp, or fill in our form. We reply to every enquiry within 30 minutes during working hours.
          </p>
        </div>
      </section>

      {/* ===== CONTACT METHODS + FORM ===== */}
      <section className="py-14 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-50 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-black uppercase">Contact Details</h2>

              <a href="tel:01622000000" className="flex items-start gap-4 p-5 bg-red-600 text-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform group">
                <Phone className="w-8 h-8 shrink-0 group-hover:rotate-12 transition-transform" />
                <div>
                  <p className="font-black text-lg">01622 000 000</p>
                  <p className="text-white/90 text-sm font-medium">Landline &mdash; Maidstone office</p>
                </div>
              </a>

              <a href="tel:07000000000" className="flex items-start gap-4 p-5 bg-green-600 text-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform group">
                <MessageCircle className="w-8 h-8 shrink-0 group-hover:rotate-12 transition-transform" />
                <div>
                  <p className="font-black text-lg">07000 000 000</p>
                  <p className="text-white/90 text-sm font-medium">WhatsApp &amp; text &mdash; send photos for instant quotes</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-slate-50 border-2 border-slate-900">
                <Mail className="w-6 h-6 shrink-0 text-slate-500" />
                <div>
                  <p className="font-bold text-sm">info@kentcompleteclearances.co.uk</p>
                  <p className="text-slate-500 text-xs font-medium mt-1">For non-urgent enquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-50 border-2 border-slate-900">
                <Clock className="w-6 h-6 shrink-0 text-slate-500" />
                <div>
                  <p className="font-bold text-sm mb-2">Opening Hours</p>
                  <div className="text-sm text-slate-600 space-y-1">
                    <div className="flex justify-between"><span>Mon &ndash; Fri</span><span className="font-bold text-slate-900">7:00am &ndash; 7:00pm</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span className="font-bold text-slate-900">8:00am &ndash; 5:00pm</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span className="font-bold text-slate-900">By arrangement</span></div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-slate-900 text-white border-2 border-slate-900">
                <p className="font-bold flex items-center gap-2 mb-2"><BadgeCheck className="w-5 h-5 text-green-400" /> Licensing</p>
                <p className="text-sm text-slate-300">Environment Agency Registered<br />Upper Tier Waste Carrier</p>
                <p className="font-mono text-xs text-slate-400 mt-2">Reg: CBDU123456</p>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-3">
              <div className="border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] bg-white p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-black uppercase mb-2">Request a Free Quote</h2>
                  <p className="text-slate-600 font-medium">Tell us what needs clearing and we&apos;ll reply with a fixed price. No obligation.</p>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Your Name *</label>
                      <input type="text" required className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold" placeholder="John Smith" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Phone Number *</label>
                      <input type="tel" required className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold" placeholder="07000 000 000" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Email</label>
                      <input type="email" className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Postcode *</label>
                      <input type="text" required className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold" placeholder="e.g. ME14 1XX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Service Needed</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold appearance-none">
                      <option>House Clearance</option>
                      <option>Garden Waste</option>
                      <option>Builders Waste</option>
                      <option>Office Clearance</option>
                      <option>Single Item Removal</option>
                      <option>Other / Mixed</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold uppercase text-xs tracking-wider text-slate-500">What Needs Clearing? *</label>
                    <textarea required className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold h-32" placeholder="Roughly what needs going? e.g. 1 sofa, 10 black bags and a fridge..." />
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Preferred Date</label>
                    <input type="date" className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold" />
                  </div>

                  <Button className="w-full text-xl py-4">
                    Send My Quote Request <ArrowRight className="w-6 h-6" />
                  </Button>
                  <div className="flex justify-center gap-6 text-xs text-slate-400 font-bold">
                    <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Your data is safe</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Reply within 30 mins</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> No spam, ever</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="py-14 md:py-16 bg-slate-50 border-y-2 border-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="Find Us" subtitle="Based in Maidstone, serving all of Kent." />
          <div className="max-w-4xl mx-auto bg-white p-2 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] h-[350px]">
            <iframe
              title="Kent Complete Clearances Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319088.0831627931!2d0.15833215809707165!3d51.258835848529285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df310e30206141%3A0x676e191986420551!2sMaidstone%2C%20Kent!5e0!3m2!1sen!2suk!4v1709400000000!5m2!1sen!2suk"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* ===== MINI FAQ ===== */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading title="Quick Answers" subtitle="Common questions before you book." />
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.slice(0, 3).map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} isOpen={openFAQ === i} onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
