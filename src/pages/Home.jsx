import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2, Phone, ArrowRight, Sofa, TreePine, Construction, Trash2,
  Star, Camera, Shield, ChevronLeft, ChevronRight, Recycle, Clock, BadgeCheck
} from 'lucide-react';
import { Button, REVIEWS } from '../components/ui';

export default function Home() {
  const [activeReview, setActiveReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Rubbish Removal<br />
              <span className="text-red-600">Done Properly</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
              We turn up, load your stuff, and take it away. No skips blocking your drive for a week. Based in Sittingbourne, covering all of Kent.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button as="link" to="/contact" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" /> Get a Free Quote
              </Button>
              <a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="w-full sm:w-auto">
                  <Camera className="w-5 h-5" /> WhatsApp Us a Photo
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-1"><CheckCircle2 className="text-green-600 w-4 h-4" /> Same-day service</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="text-green-600 w-4 h-4" /> We do all the lifting</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="text-green-600 w-4 h-4" /> 98% recycled</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===== TRUST STRIP ===== */}
      <section className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-400" /> Fully insured</span>
            <span className="flex items-center gap-2"><Recycle className="w-4 h-4 text-green-400" /> 98% recycled</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-green-400" /> Same-day available</span>
            <span className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-green-400" /> Licensed carrier</span>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">What we clear</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
            {[
              { icon: <Sofa className="w-6 h-6" />, title: 'House Clearance', desc: 'Furniture, appliances, full house clear-outs', slug: 'house-clearance' },
              { icon: <TreePine className="w-6 h-6" />, title: 'Garden Waste', desc: 'Green waste, soil, rubble, shed removal', slug: 'garden-waste' },
              { icon: <Construction className="w-6 h-6" />, title: 'Builders Waste', desc: 'Rubble, plasterboard, timber, tiles', slug: 'builders-waste' },
              { icon: <Trash2 className="w-6 h-6" />, title: 'Office Clearance', desc: 'Desks, IT equipment, confidential waste', slug: 'office-clearance' },
            ].map((s, i) => (
              <Link to={`/services/${s.slug}`} key={i} className="border border-slate-200 p-5 hover:border-slate-400 transition-colors block">
                <div className="text-red-600 mb-3">{s.icon}</div>
                <h3 className="font-bold mb-1">{s.title}</h3>
                <p className="text-slate-500 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/services" className="text-red-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Why people use us</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
            <div>
              <h3 className="font-bold mb-2">We do the heavy lifting</h3>
              <p className="text-slate-600 text-sm">You point, we carry. No need to drag stuff to the kerb or hire extra help.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Cheaper than a skip</h3>
              <p className="text-slate-600 text-sm">No permit fees, no delivery wait, no blocked driveway. We're often cheaper and always faster.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Proper disposal</h3>
              <p className="text-slate-600 text-sm">Licensed carrier, waste transfer notes provided. 98% goes to recycling, not landfill.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
            <div>
              <div className="text-red-600 font-bold text-sm mb-2">1.</div>
              <h3 className="font-bold mb-2">Send us a photo</h3>
              <p className="text-slate-600 text-sm">WhatsApp or email a pic of what needs clearing. We'll text you back a fixed price.</p>
            </div>
            <div>
              <div className="text-red-600 font-bold text-sm mb-2">2.</div>
              <h3 className="font-bold mb-2">Pick a time</h3>
              <p className="text-slate-600 text-sm">Same day, next day, or whenever works for you. We show up when we say we will.</p>
            </div>
            <div>
              <div className="text-red-600 font-bold text-sm mb-2">3.</div>
              <h3 className="font-bold mb-2">We clear it</h3>
              <p className="text-slate-600 text-sm">We load everything, sweep up, and leave you with a waste transfer note.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-12 md:py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">What customers say</h2>

          <div className="max-w-2xl">
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex gap-1 text-yellow-500 mb-3">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <blockquote className="text-lg text-slate-700 mb-4">
                "{REVIEWS[activeReview].text}"
              </blockquote>
              <p className="font-medium text-slate-900">{REVIEWS[activeReview].name}, {REVIEWS[activeReview].location}</p>
            </div>

            <div className="flex gap-2 mt-6">
              <button onClick={prevReview} className="p-2 border border-slate-300 hover:bg-white"><ChevronLeft className="w-4 h-4" /></button>
              <button onClick={nextReview} className="p-2 border border-slate-300 hover:bg-white"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AREAS ===== */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Areas we cover</h2>
          <p className="text-slate-600 mb-6 max-w-xl">
            Based in Sittingbourne. We cover Maidstone, Canterbury, Ashford, Gillingham, Chatham, Rochester, Faversham, Whitstable, and everywhere in between.
          </p>
          <Link to="/about#areas" className="text-red-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            See full coverage <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-12 md:py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get a quote</h2>
            <p className="text-slate-400 mb-6">Send us a photo of what needs clearing. We'll get back to you with a fixed price.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button as="link" to="/contact">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
              <a href="tel:01622000000">
                <Button variant="secondary">
                  <Phone className="w-5 h-5" /> 01622 000 000
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
