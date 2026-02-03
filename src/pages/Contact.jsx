import React, { useState } from 'react';
import {
  Phone, MapPin, Clock, ArrowRight, Shield, CheckCircle2, MessageCircle,
  BadgeCheck, Mail, Star, Zap, Camera, Recycle
} from 'lucide-react';
import { Button, SectionHeading, FAQItem, FAQS } from '../components/ui';

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState(-1);

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28 relative overflow-hidden border-b-4 border-red-600">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_50%)] pointer-events-none" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-green-600/20 border border-green-500/30 px-5 py-2 mb-8">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="text-white font-bold uppercase text-sm tracking-wider">Replies Within 30 Minutes</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Touch</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
              Call, text, WhatsApp, or fill in our form. We reply to every enquiry within 30 minutes during working hours.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:01622000000">
                <Button variant="primary" className="text-lg">
                  <Phone className="w-5 h-5" /> 01622 000 000
                </Button>
              </a>
              <a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="text-lg bg-green-600 hover:bg-green-500 border-green-700">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK CONTACT STRIP ===== */}
      <section className="bg-white py-8 border-b-2 border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Phone className="w-6 h-6" />, label: 'Landline', value: '01622 000 000', color: 'text-red-600' },
              { icon: <MessageCircle className="w-6 h-6" />, label: 'WhatsApp', value: '07000 000 000', color: 'text-green-600' },
              { icon: <Camera className="w-6 h-6" />, label: 'Send Photo', value: 'For instant quote', color: 'text-blue-600' },
              { icon: <Clock className="w-6 h-6" />, label: 'Response', value: 'Within 30 mins', color: 'text-yellow-600' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={`${item.color}`}>{item.icon}</div>
                <div>
                  <p className="font-black text-slate-900 text-sm">{item.value}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT METHODS + FORM ===== */}
      <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-50 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-50 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-100 border-2 border-slate-900 px-4 py-1 mb-2">
                <Phone className="w-4 h-4 text-red-600" />
                <span className="text-red-700 font-bold uppercase text-sm tracking-wider">Contact Details</span>
              </div>

              <a href="tel:01622000000" className="flex items-start gap-4 p-5 bg-red-600 text-white border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform group block">
                <Phone className="w-8 h-8 shrink-0 group-hover:rotate-12 transition-transform" />
                <div>
                  <p className="font-black text-xl">01622 000 000</p>
                  <p className="text-white/80 text-sm font-medium">Landline — Sittingbourne office</p>
                </div>
              </a>

              <a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-green-600 text-white border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform group block">
                <MessageCircle className="w-8 h-8 shrink-0 group-hover:rotate-12 transition-transform" />
                <div>
                  <p className="font-black text-xl">07000 000 000</p>
                  <p className="text-white/80 text-sm font-medium">WhatsApp — send photos for quotes</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-white border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                <Mail className="w-6 h-6 shrink-0 text-slate-600" />
                <div>
                  <p className="font-bold">info@kentcompleteclearances.co.uk</p>
                  <p className="text-slate-500 text-xs font-medium mt-1">For non-urgent enquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                <Clock className="w-6 h-6 shrink-0 text-slate-600" />
                <div className="flex-1">
                  <p className="font-bold mb-3">Opening Hours</p>
                  <div className="text-sm text-slate-600 space-y-2">
                    <div className="flex justify-between"><span>Mon – Fri</span><span className="font-bold text-slate-900">7am – 7pm</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span className="font-bold text-slate-900">8am – 5pm</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span className="font-bold text-slate-900">By arrangement</span></div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-slate-900 text-white border-4 border-slate-900">
                <p className="font-bold flex items-center gap-2 mb-3"><BadgeCheck className="w-5 h-5 text-green-400" /> Licensing</p>
                <p className="text-sm text-slate-300">Environment Agency Registered</p>
                <p className="text-sm text-slate-300">Upper Tier Waste Carrier</p>
                <p className="font-mono text-xs text-slate-500 mt-3">Company Reg: 16770749</p>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-3">
              <div className="border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] bg-white p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-black uppercase mb-2">Request a Free Quote</h2>
                  <p className="text-slate-600 font-medium">Tell us what needs clearing and we'll reply with a fixed price. No obligation.</p>
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
                  <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500 font-bold">
                    <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-green-600" /> Your data is safe</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-green-600" /> Reply within 30 mins</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-600" /> No spam, ever</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CONTACT US ===== */}
      <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(220,38,38,0.15),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Why Choose Us?" subtitle="Real reasons from real customers." light />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Zap className="w-8 h-8" />, title: 'Fast Response', desc: 'We reply to every enquiry within 30 minutes during working hours.', color: 'text-yellow-400' },
              { icon: <Shield className="w-8 h-8" />, title: 'Fixed Pricing', desc: 'No nasty surprises. The price we quote is the price you pay.', color: 'text-green-400' },
              { icon: <Recycle className="w-8 h-8" />, title: '98% Recycled', desc: 'We sort everything. Reusables go to charity, the rest to authorised centres.', color: 'text-blue-400' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 border-2 border-slate-700 p-6 text-center hover:border-slate-600 transition-colors">
                <div className={`${item.color} mx-auto mb-4`}>{item.icon}</div>
                <h3 className="font-black uppercase text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading title="Find Us" subtitle="Based in Sittingbourne, serving all of Kent." />
          <div className="max-w-4xl mx-auto bg-white p-2 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] h-[400px]">
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
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading title="Quick Answers" subtitle="Common questions before you book." />
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.slice(0, 4).map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} isOpen={openFAQ === i} onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button as="link" to="/about#faq" variant="outline">
              View All FAQs <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
