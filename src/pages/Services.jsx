import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sofa, TreePine, Construction, Trash2, CheckCircle2, ArrowRight,
  Camera, CalendarCheck, ThumbsUp, MessageCircle, Phone, X, Star,
  Truck, Package, Shield, Clock, Recycle, BadgeCheck
} from 'lucide-react';
import { Button, SectionHeading, REVIEWS } from '../components/ui';

export default function Services() {
  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 md:py-28 relative overflow-hidden border-b-4 border-red-600">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.2),transparent_50%)] pointer-events-none" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-red-600/20 border border-red-500/30 px-5 py-2 mb-8">
              <BadgeCheck className="w-5 h-5 text-green-400" />
              <span className="text-white font-bold uppercase text-sm tracking-wider">Licensed &amp; Fully Insured</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Services</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
              From a single sofa to a full house clearance. We handle everything — loading, transport, recycling, and paperwork.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { icon: <Clock className="w-5 h-5" />, text: 'Same-Day Service' },
                { icon: <Shield className="w-5 h-5" />, text: 'Fully Insured' },
                { icon: <Recycle className="w-5 h-5" />, text: '98% Recycled' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300">
                  <span className="text-red-500">{item.icon}</span>
                  <span className="font-bold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK NAV ===== */}
      <section className="bg-white py-3 border-b-2 border-slate-200 sticky top-[72px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar justify-start md:justify-center pb-1">
            {[
              { id: 'house', icon: <Sofa className="w-4 h-4" />, label: 'House', color: 'hover:bg-red-600' },
              { id: 'garden', icon: <TreePine className="w-4 h-4" />, label: 'Garden', color: 'hover:bg-green-600' },
              { id: 'builders', icon: <Construction className="w-4 h-4" />, label: 'Trade', color: 'hover:bg-yellow-500 hover:text-slate-900' },
              { id: 'office', icon: <Trash2 className="w-4 h-4" />, label: 'Office', color: 'hover:bg-slate-900' },
              { id: 'single', icon: <Package className="w-4 h-4" />, label: 'Single Item', color: 'hover:bg-blue-600' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-2 px-3 py-1.5 border-2 border-slate-900 font-bold text-xs uppercase transition-all hover:text-white whitespace-nowrap shrink-0 ${item.color}`}
              >
                {item.icon} {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES DETAIL ===== */}
      <section className="py-10 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            {/* House Clearance */}
            <div id="house" className="scroll-mt-32">
              <div className="grid lg:grid-cols-5 gap-0 border-2 md:border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] md:shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] bg-white overflow-hidden">
                <div className="lg:col-span-2 bg-red-600 text-white p-5 md:p-8 flex flex-col justify-center">
                  <Sofa className="w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-6" />
                  <h2 className="text-2xl md:text-4xl font-black uppercase mb-2 md:mb-3">House Clearance</h2>
                  <p className="text-white/80 font-medium text-sm md:text-base mb-3 md:mb-6">Homes, flats, garages, lofts &amp; probate clearances</p>
                  <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-300" /> Same-day available</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-300" /> We do all heavy lifting</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-300" /> Probate specialists</div>
                  </div>
                </div>
                <div className="lg:col-span-3 p-5 md:p-8 space-y-4 md:space-y-6">
                  <p className="text-sm md:text-lg text-slate-600 font-medium leading-relaxed">
                    Whether it's a single sofa or an entire property, we handle every aspect of your house clearance. Our team arrives, loads everything into the van, and sweeps up before we leave.
                  </p>
                  <div>
                    <h3 className="font-black uppercase text-xs md:text-sm text-slate-500 mb-2 md:mb-3 tracking-widest">What We Take</h3>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {['Sofas','Beds','Fridges','Washing machines','Wardrobes','Cookers','Carpets','Loft contents'].map(item => (
                        <span key={item} className="bg-red-50 border border-slate-900 md:border-2 px-2 py-0.5 md:px-3 md:py-1 font-bold text-xs md:text-sm">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <Button as="link" to="/contact" className="w-full sm:w-auto text-sm md:text-base">
                      Get Quote <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                    <Button as="link" to="/services/house-clearance" variant="outline" className="w-full sm:w-auto text-sm md:text-base">
                      Details <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Garden Waste */}
            <div id="garden" className="scroll-mt-32">
              <div className="grid lg:grid-cols-5 gap-0 border-2 md:border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] bg-white overflow-hidden">
                <div className="lg:col-span-3 p-5 md:p-8 space-y-4 md:space-y-6 order-2 lg:order-1">
                  <p className="text-sm md:text-lg text-slate-600 font-medium leading-relaxed">
                    Overgrown jungle? Pile of soil? Old rotten shed? We take it all and sweep the patio before we leave.
                  </p>
                  <div>
                    <h3 className="font-black uppercase text-xs md:text-sm text-slate-500 mb-2 md:mb-3 tracking-widest">What We Take</h3>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {['Green waste','Branches','Soil','Rubble','Sheds','Fencing','Decking','Slabs'].map(item => (
                        <span key={item} className="bg-green-50 border border-slate-900 md:border-2 px-2 py-0.5 md:px-3 md:py-1 font-bold text-xs md:text-sm">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <Button as="link" to="/contact" className="w-full sm:w-auto bg-green-700 hover:bg-green-600 text-sm md:text-base">
                      Get Quote <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                    <Button as="link" to="/services/garden-waste" variant="outline" className="w-full sm:w-auto text-sm md:text-base">
                      Details <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-2 bg-green-700 text-white p-5 md:p-8 flex flex-col justify-center order-1 lg:order-2">
                  <TreePine className="w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-6" />
                  <h2 className="text-2xl md:text-4xl font-black uppercase mb-2 md:mb-3">Garden Waste</h2>
                  <p className="text-white/80 font-medium text-sm md:text-base mb-3 md:mb-6">Green waste, soil, rubble, shed demolition</p>
                  <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-300" /> Shed demolition included</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-300" /> Rubble &amp; hardcore OK</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-300" /> We sweep up after</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Builders Waste */}
            <div id="builders" className="scroll-mt-32">
              <div className="grid lg:grid-cols-5 gap-0 border-2 md:border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] md:shadow-[12px_12px_0px_0px_rgba(234,179,8,1)] bg-white overflow-hidden">
                <div className="lg:col-span-2 bg-yellow-500 text-slate-900 p-5 md:p-8 flex flex-col justify-center">
                  <Construction className="w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-6" />
                  <h2 className="text-2xl md:text-4xl font-black uppercase mb-2 md:mb-3">Trade Waste</h2>
                  <p className="text-yellow-900 font-medium text-sm md:text-base mb-3 md:mb-6">Wait &amp; load, rip-outs, rubble</p>
                  <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-yellow-900">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> No permits needed</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Cheaper than skip hire</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Wait &amp; load service</div>
                  </div>
                </div>
                <div className="lg:col-span-3 p-5 md:p-8 space-y-4 md:space-y-6">
                  <p className="text-sm md:text-lg text-slate-600 font-medium leading-relaxed">
                    Cheaper than a skip. No permit needed. We turn up, you load (or we help), and we drive away immediately.
                  </p>
                  <div>
                    <h3 className="font-black uppercase text-xs md:text-sm text-slate-500 mb-2 md:mb-3 tracking-widest">What We Take</h3>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {['Rubble','Plasterboard','Timber','Kitchens','Bathrooms','Tiles','Metal','Bricks'].map(item => (
                        <span key={item} className="bg-yellow-50 border border-slate-900 md:border-2 px-2 py-0.5 md:px-3 md:py-1 font-bold text-xs md:text-sm">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <Button as="link" to="/contact" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-slate-900 text-sm md:text-base">
                      Get Quote <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                    <Button as="link" to="/services/builders-waste" variant="outline" className="w-full sm:w-auto text-sm md:text-base">
                      Details <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Office / Commercial */}
            <div id="office" className="scroll-mt-32">
              <div className="grid lg:grid-cols-5 gap-0 border-2 md:border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] md:shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] bg-white overflow-hidden">
                <div className="lg:col-span-3 p-5 md:p-8 space-y-4 md:space-y-6 order-2 lg:order-1">
                  <p className="text-sm md:text-lg text-slate-600 font-medium leading-relaxed">
                    Moving office? Closing a retail unit? We provide secure, professional disposal with full documentation.
                  </p>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {['WEEE disposal','Confidential','Documentation','Out-of-hours'].map((feat, i) => (
                      <div key={i} className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-bold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> {feat}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <Button as="link" to="/contact" variant="dark" className="w-full sm:w-auto text-sm md:text-base">
                      Enquire <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                    <Button as="link" to="/services/office-clearance" variant="outline" className="w-full sm:w-auto text-sm md:text-base">
                      Details <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-2 bg-slate-900 text-white p-5 md:p-8 flex flex-col justify-center order-1 lg:order-2">
                  <Trash2 className="w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-6" />
                  <h2 className="text-2xl md:text-4xl font-black uppercase mb-2 md:mb-3">Commercial</h2>
                  <p className="text-slate-400 font-medium text-sm md:text-base mb-3 md:mb-6">WEEE, confidential waste, office furniture</p>
                  <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-slate-300">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Professional service</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Full documentation</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Data security</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Single Item Removal */}
            <div id="single" className="scroll-mt-32">
              <div className="border-2 md:border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] md:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] bg-white overflow-hidden">
                <div className="bg-blue-600 text-white p-4 md:p-6 flex items-center gap-3 md:gap-4">
                  <Package className="w-8 h-8 md:w-10 md:h-10 shrink-0" />
                  <div>
                    <h2 className="text-xl md:text-3xl font-black uppercase">Single Item</h2>
                    <p className="text-white/80 font-medium text-xs md:text-sm">Just one thing to go? We can help.</p>
                  </div>
                </div>
                <div className="p-5 md:p-8">
                  <p className="text-sm md:text-lg text-slate-600 font-medium leading-relaxed mb-4 md:mb-6">
                    We collect individual items at affordable prices. Old sofa, broken fridge, or mattress — sorted.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-6">
                    {[
                      { name: 'Sofa', price: 'from £40' },
                      { name: 'Mattress', price: 'from £25' },
                      { name: 'Fridge', price: 'from £35' },
                      { name: 'Washer', price: 'from £35' },
                    ].map((item) => (
                      <div key={item.name} className="bg-blue-50 border border-slate-900 md:border-2 p-2 md:p-4 text-center">
                        <p className="font-black uppercase text-xs md:text-sm">{item.name}</p>
                        <p className="text-blue-600 font-bold text-xs md:text-base">{item.price}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-slate-500 mb-4 md:mb-6">*Send a photo for an exact quote.</p>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <Button as="link" to="/contact" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-sm md:text-base">
                      Get Quote <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                    <Button as="link" to="/services/single-item-removal" variant="outline" className="w-full sm:w-auto text-sm md:text-base">
                      Details <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKIP COMPARISON ===== */}
      <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.15),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Why Choose Us Over a Skip?" subtitle="Save money. Save time. Save your back." light />
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-0 border-4 border-slate-700">
            <div className="bg-slate-800 p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="inline-block bg-slate-700 px-4 py-2 text-slate-200 font-black uppercase text-sm tracking-wider border border-slate-600">Skip Hire</div>
              </div>
              <ul className="space-y-5">
                {['Council permit needed (£20–£65)','Wait 1–3 days for delivery','You load it yourself','Blocks your driveway for days','Extra charges for heavy items','Overloading fines','No recycling guarantee'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium"><X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-red-600 p-8 md:p-10 relative">
              <div className="absolute -top-3 right-4 bg-yellow-400 text-slate-900 px-3 py-1 text-xs font-black uppercase border-2 border-slate-900 rotate-2">Better Value</div>
              <div className="text-center mb-8">
                <div className="inline-block bg-red-700 px-4 py-2 text-white font-black uppercase text-sm tracking-wider border border-red-500">Kent Complete Clearances</div>
              </div>
              <ul className="space-y-5">
                {['No permits needed — ever','Same-day & next-day service','We do ALL the loading for you','In and out in under an hour','Fixed price — no surprises','Friendly, insured team','98% recycled responsibly'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MINI TESTIMONIAL ===== */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Trusted by Kent" subtitle="Don't just take our word for it." />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {REVIEWS.slice(0, 3).map((review, i) => (
              <div key={i} className="bg-white border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] p-6">
                <div className="flex text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 font-medium italic mb-4">"{review.text}"</p>
                <div>
                  <p className="font-black text-slate-900 uppercase text-sm">{review.name}</p>
                  <p className="text-red-600 text-sm font-bold">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR GUARANTEES ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-100 to-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="The Kent Complete Guarantee" subtitle="Every single job. No exceptions." />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Shield className="w-8 h-8" />, title: 'Fixed Price Promise', desc: 'The quote we give is the price you pay. No hidden charges, no extras, no surprises on the day. We absorb any unexpected costs ourselves.', color: 'bg-red-600' },
              { icon: <Clock className="w-8 h-8" />, title: 'On-Time or It\u2019s Free', desc: 'We arrive within the time slot we agree. If we\u2019re late for any reason within our control, your job is on us.', color: 'bg-blue-600' },
              { icon: <Recycle className="w-8 h-8" />, title: '98% Recycling Pledge', desc: 'We sort every load by hand at the transfer station. Reusable items go to charity. Only 2% ends up in landfill.', color: 'bg-green-600' },
              { icon: <Truck className="w-8 h-8" />, title: 'Full Clean-Up', desc: 'We don\u2019t just take your stuff and leave a mess. Every job ends with a sweep-up so the area is left clean and tidy.', color: 'bg-yellow-500 text-slate-900' },
            ].map((item, i) => (
              <div key={i} className="bg-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] flex items-start gap-5 hover:-translate-y-1 transition-transform">
                <div className={`${item.color} text-white w-16 h-16 flex items-center justify-center border-2 border-slate-900 shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase mb-2">{item.title}</h3>
                  <p className="text-slate-600 font-medium text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WhatsApp / CTA ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,0,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Not Sure What You Need?</h2>
          <p className="text-white/80 text-lg font-medium mb-8 max-w-lg mx-auto">Send us a photo and we'll give you an instant, no-obligation quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" to="/contact" variant="secondary" className="text-lg">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Button>
            <a href="tel:07000000000">
              <Button variant="dark" className="text-lg">
                <MessageCircle className="w-5 h-5" /> WhatsApp: 07000 000 000
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
