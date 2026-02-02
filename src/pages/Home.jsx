import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck, CheckCircle2, Phone, ArrowRight, Sofa, TreePine, Construction, Trash2,
  Star, Camera, Shield, Zap, ThumbsUp, CalendarCheck, Sparkles
} from 'lucide-react';
import { Button, SectionHeading, ReviewCard, REVIEWS } from '../components/ui';
import useCountUp from '../hooks/useCountUp';

export default function Home() {
  const [activeReview, setActiveReview] = useState(0);
  const stat1 = useCountUp(98);
  const stat2 = useCountUp(50);

  useEffect(() => {
    const timer = setInterval(() => setActiveReview((p) => (p + 1) % REVIEWS.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <header className="relative bg-gradient-to-br from-white via-slate-50 to-red-50 border-b-2 border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-100 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-50 rounded-full opacity-40 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-red-100 border-2 border-slate-900 px-4 py-1 transform -rotate-2">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span className="text-red-700 font-bold uppercase text-sm tracking-wider">Kent&apos;s #1 Rated Waste Team</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] uppercase tracking-tight">
                We Load.<br />We Clear.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">You Relax.</span>
              </h2>

              <p className="text-xl text-slate-600 font-medium max-w-md">
                Cheaper than a skip. Faster than the council. Fully licensed waste removal for homes and businesses across Kent.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button as="link" to="/contact" className="w-full sm:w-auto text-lg">
                  <Phone className="w-5 h-5" /> Get a Free Quote
                </Button>
                <a href="tel:07000000000">
                  <Button variant="secondary" className="w-full sm:w-auto text-lg">
                    <Camera className="w-5 h-5" /> Send us a Photo <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-sm font-bold text-slate-500">
                <div className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-5 h-5" /> No Hidden Fees</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-5 h-5" /> 98% Recycled</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-5 h-5" /> Same-Day Service</div>
              </div>

              <div className="flex items-center gap-3 bg-white border-2 border-slate-200 p-3 max-w-sm">
                <div className="flex -space-x-2">
                  {['bg-red-500','bg-blue-500','bg-green-500','bg-yellow-500'].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                      {['S','D','M','P'][i]}
                    </div>
                  ))}
                </div>
                <div className="text-xs">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <span className="text-slate-600 font-bold">50+ five-star reviews across Kent</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden group">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                  <Truck className="w-24 h-24 mb-4 text-slate-300" />
                  <p className="font-bold uppercase text-center px-8">
                    Owner: Insert photo of your truck here.<br />
                    <span className="text-sm font-normal text-slate-500 normal-case">Real photos convert 40% better than stock photos!</span>
                  </p>
                </div>
                <div className="absolute bottom-6 right-6 bg-red-600 text-white p-4 border-2 border-slate-900 shadow-[4px_4px_0px_0px_white] text-center">
                  <p className="text-xs uppercase font-bold opacity-90">Rated</p>
                  <p className="text-3xl font-black leading-none">5.0</p>
                  <div className="flex text-yellow-300 mt-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 text-xs font-black uppercase border-2 border-slate-900 animate-bounce-slow">
                  Slots Available Today
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== TRUST STRIP ===== */}
      <section className="bg-slate-900 text-white py-10 border-b-2 border-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2"><Shield className="w-8 h-8 mx-auto text-red-500" /><div className="text-sm font-bold uppercase tracking-wider text-slate-300">Fully Insured</div></div>
            <div ref={stat1.ref} className="space-y-2"><div className="text-3xl md:text-4xl font-black text-red-500">{stat1.count}%</div><div className="text-sm font-bold uppercase tracking-wider text-slate-300">Waste Recycled</div></div>
            <div ref={stat2.ref} className="space-y-2"><div className="text-3xl md:text-4xl font-black text-red-500">{stat2.count}+</div><div className="text-sm font-bold uppercase tracking-wider text-slate-300">5-Star Reviews</div></div>
            <div className="space-y-2"><Zap className="w-8 h-8 mx-auto text-red-500" /><div className="text-sm font-bold uppercase tracking-wider text-slate-300">Same-Day Service</div></div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-14 md:py-16 bg-slate-50 border-b-2 border-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Services" subtitle="No generic packages. We clear exactly what you need cleared." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Sofa className="w-10 h-10" />, title: 'House Clearance', desc: 'Sofas, fridges, full house clear-outs. We do the heavy lifting.', bg: 'bg-white', accent: 'bg-red-600' },
              { icon: <TreePine className="w-10 h-10" />, title: 'Garden Waste', desc: 'Green waste, soil, rubble, old sheds. We sweep the patio after.', bg: 'bg-white', accent: 'bg-green-600' },
              { icon: <Construction className="w-10 h-10" />, title: 'Builders Waste', desc: 'Rubble, plasterboard, timber. Cheaper than a skip permit.', bg: 'bg-white', accent: 'bg-yellow-500' },
              { icon: <Trash2 className="w-10 h-10" />, title: 'Office Clearance', desc: 'Desks, WEEE, confidential waste. VAT invoices provided.', bg: 'bg-white', accent: 'bg-slate-900' },
            ].map((s, i) => (
              <Link to="/services" key={i} className={`${s.bg} border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] text-center group hover:-translate-y-2 transition-transform duration-300 block`}>
                <div className={`${s.accent} text-white w-16 h-16 mx-auto flex items-center justify-center border-2 border-slate-900 mb-4 group-hover:rotate-6 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-black uppercase mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm font-medium mb-3">{s.desc}</p>
                <span className="text-red-600 font-bold text-sm uppercase inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button as="link" to="/services" variant="dark" className="text-lg px-10">
              View All Services <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-14 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fef2f2_1px,transparent_1px),linear-gradient(to_bottom,#fef2f2_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="How It Works" subtitle="Getting rid of your junk takes 3 simple steps. No stress, no hassle." />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', icon: <Camera className="w-10 h-10" />, title: 'Send a Photo', desc: 'Snap a photo and send via WhatsApp, text, or our form. We reply with a fixed price within minutes.', color: 'bg-red-600' },
              { step: '02', icon: <CalendarCheck className="w-10 h-10" />, title: 'We Show Up', desc: 'Pick a time that works \u2014 same day, next day, or whenever suits. We arrive on time, every time.', color: 'bg-slate-900' },
              { step: '03', icon: <ThumbsUp className="w-10 h-10" />, title: 'Job Done', desc: 'We load everything, sweep up, and go. 98% recycled. You get a waste transfer note for peace of mind.', color: 'bg-green-600' },
            ].map((item, i) => (
              <div key={i} className="relative group">
                {i < 2 && (
                  <div className="hidden md:block absolute top-16 left-[calc(100%_-_1rem)] w-[calc(100%_-_6rem)] h-0.5 bg-slate-200 z-0">
                    <ArrowRight className="absolute right-0 -top-2 w-5 h-5 text-slate-300" />
                  </div>
                )}
                <div className="bg-white border-4 border-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative z-10 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -top-4 -right-4 bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black border-2 border-slate-900 text-sm">{item.step}</div>
                  <div className={`${item.color} text-white w-20 h-20 mx-auto flex items-center justify-center border-2 border-slate-900 mb-6 group-hover:rotate-6 transition-transform`}>{item.icon}</div>
                  <h3 className="text-xl font-black uppercase mb-3">{item.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MINI REVIEWS ===== */}
      <section className="py-14 md:py-16 bg-slate-50 border-y-2 border-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="What The Locals Say" subtitle="Real feedback from real Kent customers." />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <ReviewCard key={i} {...r} compact />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button as="link" to="/about#reviews" variant="outline" className="text-sm">
              See All 50+ Reviews <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== QUICK CTA ===== */}
      <section className="py-14 md:py-16 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Ready to Clear the Clutter?</h2>
          <p className="text-red-100 text-lg font-medium mb-8 max-w-lg mx-auto">Get a free, no-obligation quote in minutes. Call us or fill in our quick form.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" to="/contact" variant="secondary" className="text-lg">
              Get My Free Quote <ArrowRight className="w-5 h-5" />
            </Button>
            <a href="tel:01622000000">
              <Button variant="dark" className="text-lg border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
                <Phone className="w-5 h-5" /> Call 01622 000 000
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
