import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck, CheckCircle2, Phone, ArrowRight, Sofa, TreePine, Construction, Trash2,
  Star, Camera, Shield, Zap, ThumbsUp, CalendarCheck, Sparkles, ChevronLeft,
  ChevronRight, MapPin, Award, Quote, Recycle, Clock, BadgeCheck
} from 'lucide-react';
import { Button, SectionHeading, REVIEWS, TOWNS } from '../components/ui';
import useCountUp from '../hooks/useCountUp';

export default function Home() {
  const [activeReview, setActiveReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const stat1 = useCountUp(98);
  const stat2 = useCountUp(50);

  const goToReview = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveReview(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const nextReview = useCallback(() => {
    goToReview((activeReview + 1) % REVIEWS.length);
  }, [activeReview, goToReview]);

  const prevReview = useCallback(() => {
    goToReview((activeReview - 1 + REVIEWS.length) % REVIEWS.length);
  }, [activeReview, goToReview]);

  // Auto-rotate reviews every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextReview, 8000);
    return () => clearInterval(timer);
  }, [nextReview]);

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

              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] uppercase tracking-tight">
                We Load.<br />We Clear.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">You Relax.</span>
              </h1>

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
      <section className="py-16 md:py-20 bg-slate-50 border-b-2 border-slate-900">
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

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-50 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-50 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Why Kent Trusts Us" subtitle="We're not a franchise. We're your neighbours." />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Recycle className="w-8 h-8" />, title: '98% Recycling Rate', desc: 'We sort everything. Reusables go to charity, the rest to authorized recycling centres. Never fly-tipped.', color: 'bg-green-600' },
              { icon: <Clock className="w-8 h-8" />, title: 'Same-Day Service', desc: 'Call before 10am, we can often be there that afternoon. No waiting days for skip delivery.', color: 'bg-blue-600' },
              { icon: <BadgeCheck className="w-8 h-8" />, title: 'Fully Licensed', desc: 'EA registered Upper Tier Carrier. Full public liability. Waste transfer notes on every job.', color: 'bg-red-600' },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className={`${item.color} text-white w-20 h-20 mx-auto flex items-center justify-center border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] mb-6 group-hover:rotate-6 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black uppercase mb-3">{item.title}</h3>
                <p className="text-slate-600 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="How It Works" subtitle="Getting rid of your junk takes 3 simple steps. No stress, no hassle." light />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', icon: <Camera className="w-10 h-10" />, title: 'Send a Photo', desc: 'Snap a photo and send via WhatsApp, text, or our form. We reply with a fixed price within minutes.', color: 'bg-red-600' },
              { step: '02', icon: <CalendarCheck className="w-10 h-10" />, title: 'We Show Up', desc: 'Pick a time that works — same day, next day, or whenever suits. We arrive on time, every time.', color: 'bg-white text-slate-900' },
              { step: '03', icon: <ThumbsUp className="w-10 h-10" />, title: 'Job Done', desc: 'We load everything, sweep up, and go. 98% recycled. You get a waste transfer note for peace of mind.', color: 'bg-green-500' },
            ].map((item, i) => (
              <div key={i} className="relative group">
                {i < 2 && (
                  <div className="hidden md:block absolute top-16 left-[calc(100%_-_1rem)] w-[calc(100%_-_6rem)] h-0.5 bg-slate-700 z-0">
                    <ArrowRight className="absolute right-0 -top-2 w-5 h-5 text-slate-600" />
                  </div>
                )}
                <div className="bg-slate-800 border-2 border-slate-700 p-8 relative z-10 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -top-4 -right-4 bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black border-2 border-slate-900 text-sm">{item.step}</div>
                  <div className={`${item.color} w-20 h-20 mx-auto flex items-center justify-center border-2 border-slate-900 mb-6 group-hover:rotate-6 transition-transform`}>{item.icon}</div>
                  <h3 className="text-xl font-black uppercase mb-3 text-white">{item.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS CAROUSEL ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-red-600 via-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.15),transparent_40%)] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 mb-6">
              <Award className="w-6 h-6 text-yellow-300" />
              <span className="text-white font-black uppercase tracking-wider">50+ Five-Star Reviews</span>
              <div className="flex text-yellow-300">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              What The Locals Say
            </h2>
            <p className="text-white/80 text-lg font-medium">Real feedback from real Kent customers.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-20 bg-white border-4 border-slate-900 p-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-50 active:shadow-none active:translate-y-[calc(-50%+2px)] active:translate-x-[2px] transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextReview}
              className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-20 bg-white border-4 border-slate-900 p-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-50 active:shadow-none active:translate-y-[calc(-50%+2px)] active:translate-x-[2px] transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Review Card */}
            <div className="bg-white border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] p-8 md:p-12 relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-16 h-16 text-red-100 -rotate-12" />

              <div className={`transition-all duration-500 ease-out ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <div className="flex justify-center mb-6">
                  <div className="bg-red-600 text-white px-4 py-2 border-2 border-slate-900 flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current text-yellow-300" />)}
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl text-slate-700 font-medium text-center leading-relaxed mb-8 relative z-10 italic">
                  &ldquo;{REVIEWS[activeReview].text}&rdquo;
                </blockquote>

                <div className="text-center">
                  <p className="font-black text-slate-900 uppercase tracking-wider text-lg">{REVIEWS[activeReview].name}</p>
                  <p className="text-red-600 font-bold flex items-center justify-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" /> {REVIEWS[activeReview].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToReview(idx)}
                  className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${idx === activeReview ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'}`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Button as="link" to="/about#reviews" variant="secondary" className="text-sm">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA MAP ===== */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-50 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Serving All of Kent" subtitle="Based in Maidstone, covering every corner of the county." />

          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div className="bg-white p-2 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] h-[400px] order-2 lg:order-1">
              <iframe
                title="Kent Service Area"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319088.0831627931!2d0.15833215809707165!3d51.258835848529285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df310e30206141%3A0x676e191986420551!2sMaidstone%2C%20Kent!5e0!3m2!1sen!2suk!4v1709400000000!5m2!1sen!2suk"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 text-white p-3 border-2 border-slate-900 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-lg mb-2">Same-Day Coverage</h3>
                  <p className="text-slate-600 font-medium">
                    Our trucks are based in <strong className="text-slate-900">Maidstone</strong> and <strong className="text-slate-900">Ashford</strong>,
                    letting us reach most Kent locations within the hour. Call before 10am for same-day service.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 border-2 border-slate-900">
                <h3 className="font-bold text-slate-500 uppercase text-xs mb-4 tracking-widest">Towns We Cover</h3>
                <div className="flex flex-wrap gap-2">
                  {TOWNS.slice(0, 12).map((town) => (
                    <span key={town} className="inline-block px-3 py-1 bg-white border-2 border-slate-900 text-slate-800 font-bold text-sm hover:bg-red-600 hover:text-white transition-colors cursor-default">
                      {town}
                    </span>
                  ))}
                  <Link to="/about#areas" className="inline-block px-3 py-1 bg-red-600 border-2 border-slate-900 text-white font-bold text-sm hover:bg-red-700 transition-colors">
                    + {TOWNS.length - 12} more
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-green-100 border-l-4 border-green-600">
                <Recycle className="w-8 h-8 text-green-600 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 uppercase text-sm">Responsible Disposal</h3>
                  <p className="text-xs text-slate-600 mt-1">All waste goes to authorized transfer stations in Cuxton and Lenham. 98% recycling rate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK CTA ===== */}
      <section className="py-16 md:py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.2),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.15),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-red-600 px-4 py-1 text-sm font-black uppercase border-2 border-slate-700 mb-6 text-white">
            Free Quotes in Minutes
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Ready to Clear the Clutter?</h2>
          <p className="text-slate-300 text-lg font-medium mb-8 max-w-lg mx-auto">Get a free, no-obligation quote. Just send us a photo or give us a call.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" to="/contact" variant="primary" className="text-lg">
              Get My Free Quote <ArrowRight className="w-5 h-5" />
            </Button>
            <a href="tel:01622000000">
              <Button variant="secondary" className="text-lg">
                <Phone className="w-5 h-5" /> Call 01622 000 000
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
