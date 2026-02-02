import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck, CheckCircle2, Phone, MapPin, ArrowRight, Star, Shield, Zap,
  BadgeCheck, Award, ChevronLeft, ChevronRight, Heart, Leaf, Users, Handshake,
  Quote, Recycle, Clock, FileCheck
} from 'lucide-react';
import { Button, SectionHeading, TownBadge, FAQItem, REVIEWS, FAQS, TOWNS } from '../components/ui';
import useCountUp from '../hooks/useCountUp';

export default function About() {
  const [activeReview, setActiveReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(0);
  const stat1 = useCountUp(98);
  const stat2 = useCountUp(50);
  const stat3 = useCountUp(2015);

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

  useEffect(() => {
    const timer = setInterval(nextReview, 8000);
    return () => clearInterval(timer);
  }, [nextReview]);

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28 relative overflow-hidden border-b-4 border-red-600">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(220,38,38,0.2),transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-2 mb-8">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-white font-bold uppercase text-sm tracking-wider">Family Run Since 2015</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Us</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
              We're not a franchise. We're not a call centre. We're a local Kent family who got tired of seeing fly-tipping and decided to do something about it.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                { value: '2015', label: 'Est.' },
                { value: '50+', label: 'Reviews' },
                { value: '98%', label: 'Recycled' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-red-500">{stat.value}</div>
                  <div className="text-sm text-slate-400 font-bold uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-50 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-100 border-2 border-slate-900 px-4 py-1 mb-6">
                  <Truck className="w-4 h-4 text-red-600" />
                  <span className="text-red-700 font-bold uppercase text-sm tracking-wider">Our Story</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Real People.<br />Real Service.</h2>
                <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                  <p>
                    Kent Complete Clearances started with a simple idea: waste removal shouldn't cost a fortune, take all week, or end up dumped in a lay-by.
                  </p>
                  <p>
                    We're a family-run team based in <strong className="text-slate-900">Maidstone</strong>, covering every corner of Kent. When you call us, you're speaking to the people who actually do the work — not a booking agent in another city.
                  </p>
                  <p>
                    Every van is driven by an insured, DBS-checked team member. We recycle or donate <strong className="text-slate-900">98% of everything we collect</strong>. The rest goes to authorized transfer stations — never fly-tipped, ever.
                  </p>
                </div>
                <div className="mt-8">
                  <Button as="link" to="/contact">
                    Get a Quote <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Heart className="w-8 h-8" />, title: 'Family Values', desc: 'We treat your home like our own.', color: 'bg-red-600' },
                  { icon: <Leaf className="w-8 h-8" />, title: 'Eco First', desc: '98% recycling rate.', color: 'bg-green-600' },
                  { icon: <Shield className="w-8 h-8" />, title: 'Fully Licensed', desc: 'EA registered carrier.', color: 'bg-blue-600' },
                  { icon: <Handshake className="w-8 h-8" />, title: 'Honest Pricing', desc: 'Fixed quotes. No surprises.', color: 'bg-yellow-500 text-slate-900' },
                ].map((v, i) => (
                  <div key={i} className="bg-white border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] p-5 hover:-translate-y-1 transition-transform">
                    <div className={`${v.color} text-white w-14 h-14 flex items-center justify-center border-2 border-slate-900 mb-4`}>{v.icon}</div>
                    <h3 className="font-black uppercase text-sm mb-1">{v.title}</h3>
                    <p className="text-slate-500 text-sm font-medium">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CREDENTIALS ===== */}
      <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.15),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Our Credentials" subtitle="Licensed, insured, and accountable." light />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <BadgeCheck className="w-10 h-10" />, title: 'EA Registered', desc: 'Upper Tier Waste Carrier (CBDU123456)', color: 'text-green-400' },
              { icon: <Shield className="w-10 h-10" />, title: 'Fully Insured', desc: '£5M Public Liability Coverage', color: 'text-blue-400' },
              { icon: <FileCheck className="w-10 h-10" />, title: 'Duty of Care', desc: 'Waste Transfer Notes on every job', color: 'text-yellow-400' },
              { icon: <Recycle className="w-10 h-10" />, title: '98% Recycled', desc: 'Authorized disposal sites only', color: 'text-green-400' },
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

      {/* ===== AREAS COVERED ===== */}
      <section id="areas" className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Areas Covered" subtitle="Based in Maidstone, serving every corner of Kent." />
          <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
            <div className="bg-white p-2 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] h-[400px]">
              <iframe
                title="Kent Service Area"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319088.0831627931!2d0.15833215809707165!3d51.258835848529285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df310e30206141%3A0x676e191986420551!2sMaidstone%2C%20Kent!5e0!3m2!1sen!2suk!4v1709400000000!5m2!1sen!2suk"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 text-white p-3 border-2 border-slate-900 shrink-0">
                  <Clock className="w-6 h-6" />
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
                <h3 className="font-bold text-slate-500 uppercase text-xs mb-4 tracking-widest">All Towns We Cover</h3>
                <div className="flex flex-wrap gap-2">
                  {TOWNS.map((town) => <TownBadge key={town} name={town} />)}
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

      {/* ===== REVIEWS ===== */}
      <section id="reviews" className="py-16 md:py-20 bg-gradient-to-br from-red-600 via-red-600 to-red-700 relative overflow-hidden">
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

            <div className="bg-white border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] p-8 md:p-12 relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-16 h-16 text-red-100 -rotate-12" />

              <div className={`transition-all duration-500 ease-out ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <div className="flex justify-center mb-6">
                  <div className="bg-red-600 text-white px-4 py-2 border-2 border-slate-900 flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current text-yellow-300" />)}
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl text-slate-700 font-medium text-center leading-relaxed mb-8 relative z-10 italic">
                  "{REVIEWS[activeReview].text}"
                </blockquote>

                <div className="text-center">
                  <p className="font-black text-slate-900 uppercase tracking-wider text-lg">{REVIEWS[activeReview].name}</p>
                  <p className="text-red-600 font-bold flex items-center justify-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" /> {REVIEWS[activeReview].location}
                  </p>
                </div>
              </div>
            </div>

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
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(254,202,202,0.15),transparent_40%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Frequently Asked Questions" subtitle="Got questions? We've got straight answers." />
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} isOpen={openFAQ === i} onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)} />
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-slate-500 font-medium mb-4">Still got a question?</p>
            <a href="tel:01622000000">
              <Button variant="dark"><Phone className="w-4 h-4" /> Call Us — We're Friendly</Button>
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.2),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-red-600 px-4 py-1 text-sm font-black uppercase border-2 border-slate-700 mb-6 text-white">
            Free Quotes
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Ready to Clear the Clutter?</h2>
          <p className="text-slate-300 text-lg font-medium mb-8 max-w-lg mx-auto">Get a free, no-obligation quote in minutes.</p>
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
