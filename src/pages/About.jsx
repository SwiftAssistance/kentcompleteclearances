import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck, CheckCircle2, Phone, MapPin, ArrowRight, Star, Shield, Zap,
  BadgeCheck, Award, ChevronLeft, ChevronRight, Heart, Leaf, Users, Handshake
} from 'lucide-react';
import { Button, SectionHeading, TownBadge, ReviewCard, FAQItem, REVIEWS, FAQS, TOWNS } from '../components/ui';
import useCountUp from '../hooks/useCountUp';

export default function About() {
  const [activeReview, setActiveReview] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(0);
  const stat1 = useCountUp(98);
  const stat2 = useCountUp(50);

  useEffect(() => {
    const timer = setInterval(() => setActiveReview((p) => (p + 1) % REVIEWS.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => setActiveReview((p) => (p + 1) % REVIEWS.length);
  const prevReview = () => setActiveReview((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden border-b-2 border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(220,38,38,0.12),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-red-600 px-4 py-1 text-sm font-black uppercase border-2 border-slate-700 mb-6">
            Family Run. Locally Trusted.
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">About Us</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-medium">
            We&apos;re not a franchise. We&apos;re not a call centre. We&apos;re a local Kent family who got tired of seeing fly-tipping and decided to do something about it.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-14 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-50 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Our Story" align="left" />
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-lg">
                <p>
                  Kent Complete Clearances started with a simple idea: waste removal shouldn&apos;t cost a fortune, take all week, or end up dumped in a lay-by.
                </p>
                <p>
                  We&apos;re a family-run team based in <strong className="text-slate-900">Maidstone</strong>, covering every corner of Kent. When you call us, you&apos;re speaking to the people who actually do the work &mdash; not a booking agent in another city.
                </p>
                <p>
                  Every van is driven by an insured, DBS-checked team member. We recycle or donate <strong className="text-slate-900">98% of everything we collect</strong>. The rest goes to authorized transfer stations &mdash; never fly-tipped, ever.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { icon: <Heart className="w-6 h-6" />, title: 'Family Values', desc: 'We treat your home like our own. Every job, big or small, gets the same care and respect.' },
                  { icon: <Leaf className="w-6 h-6" />, title: 'Eco First', desc: '98% recycling rate. We sort everything and donate reusable items to local charities.' },
                  { icon: <Shield className="w-6 h-6" />, title: 'Fully Licensed', desc: 'EA registered Upper Tier Carrier. Full public liability insurance. Waste transfer notes on every job.' },
                  { icon: <Handshake className="w-6 h-6" />, title: 'Honest Pricing', desc: 'Fixed quotes before we start. No hidden fees. No nasty surprises on the day.' },
                ].map((v, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="bg-red-600 text-white p-3 border-2 border-slate-900 shrink-0">{v.icon}</div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-1">{v.title}</h4>
                      <p className="text-slate-600 text-sm font-medium">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST NUMBERS ===== */}
      <section className="bg-slate-900 text-white py-10 border-y-2 border-slate-900 relative overflow-hidden">
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

      {/* ===== AREAS COVERED ===== */}
      <section id="areas" className="py-14 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100 rounded-full opacity-50 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Areas Covered" subtitle="Based in Maidstone, serving every corner of Kent." />
          <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <div className="bg-white p-2 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] h-[400px]">
              <iframe
                title="Kent Service Area"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319088.0831627931!2d0.15833215809707165!3d51.258835848529285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df310e30206141%3A0x676e191986420551!2sMaidstone%2C%20Kent!5e0!3m2!1sen!2suk!4v1709400000000!5m2!1sen!2suk"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 font-medium text-lg">
                Our trucks are strategically located in <strong className="text-slate-900">Maidstone</strong> and <strong className="text-slate-900">Ashford</strong>, allowing us to offer same-day service to most major towns in Kent.
              </p>
              <div className="bg-white p-6 border-2 border-slate-900">
                <h3 className="font-bold text-slate-400 uppercase text-xs mb-4 tracking-widest">Primary Service Locations</h3>
                <div className="flex flex-wrap gap-2">
                  {TOWNS.map((town) => <TownBadge key={town} name={town} />)}
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-red-100 border-l-4 border-red-600">
                <MapPin className="w-8 h-8 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-sm">Responsible Disposal</h4>
                  <p className="text-xs text-slate-600 mt-1">All waste taken to authorized transfer stations in Cuxton and Lenham. Waste transfer notes on every job.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section id="reviews" className="py-14 md:py-16 bg-slate-50 border-y-2 border-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="What The Locals Say" subtitle="Real feedback from real Kent customers. We don't delete reviews." />
          <div className="flex items-center justify-center gap-4 mb-10 flex-wrap">
            <div className="bg-white border-2 border-slate-900 px-6 py-3 flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <div className="text-3xl font-black text-slate-900">4.9</div>
              <div>
                <div className="flex text-yellow-500">{[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                <span className="text-xs font-bold text-slate-500 uppercase">Google Rating</span>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-900 px-6 py-3 flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <Award className="w-8 h-8 text-red-600" />
              <span className="font-black text-slate-900 text-sm uppercase">50+ Verified Reviews</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
              <button onClick={prevReview} className="bg-white border-2 border-slate-900 p-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-50 active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-all" aria-label="Previous review">
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
              <button onClick={nextReview} className="bg-white border-2 border-slate-900 p-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-50 active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-all" aria-label="Next review">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="px-4 md:px-0">
              <ReviewCard {...REVIEWS[activeReview]} />
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {REVIEWS.map((_, idx) => (
                <button key={idx} onClick={() => setActiveReview(idx)} className={`w-3 h-3 rounded-full border-2 border-slate-900 transition-colors ${idx === activeReview ? 'bg-red-600' : 'bg-white'}`} aria-label={`Go to review ${idx + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-14 md:py-16 bg-white relative overflow-hidden">
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
              <Button variant="dark"><Phone className="w-4 h-4" /> Call Us &mdash; We&apos;re Friendly</Button>
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-14 md:py-16 bg-red-600 border-t-2 border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Ready to Clear the Clutter?</h2>
          <p className="text-red-100 text-lg font-medium mb-8 max-w-lg mx-auto">Get a free, no-obligation quote in minutes.</p>
          <Button as="link" to="/contact" variant="secondary" className="text-lg">
            Get My Free Quote <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </>
  );
}
