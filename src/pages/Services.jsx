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
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28 relative overflow-hidden border-b-4 border-red-600">
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
      <section className="bg-white py-4 border-b-2 border-slate-200 sticky top-[72px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'house', icon: <Sofa className="w-4 h-4" />, label: 'House', color: 'hover:bg-red-600' },
              { id: 'garden', icon: <TreePine className="w-4 h-4" />, label: 'Garden', color: 'hover:bg-green-600' },
              { id: 'builders', icon: <Construction className="w-4 h-4" />, label: 'Trade', color: 'hover:bg-yellow-500 hover:text-slate-900' },
              { id: 'office', icon: <Trash2 className="w-4 h-4" />, label: 'Commercial', color: 'hover:bg-slate-900' },
              { id: 'single', icon: <Package className="w-4 h-4" />, label: 'Single Items', color: 'hover:bg-blue-600' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-2 px-3 py-1.5 border-2 border-slate-900 font-bold text-xs uppercase transition-all hover:text-white ${item.color}`}
              >
                {item.icon} {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES DETAIL ===== */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">

            {/* House Clearance */}
            <div id="house" className="scroll-mt-40">
              <div className="grid lg:grid-cols-5 gap-0 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] bg-white overflow-hidden">
                <div className="lg:col-span-2 bg-red-600 text-white p-8 flex flex-col justify-center">
                  <Sofa className="w-16 h-16 mb-6" />
                  <h2 className="text-3xl md:text-4xl font-black uppercase mb-3">House Clearance</h2>
                  <p className="text-white/80 font-medium mb-6">Homes, flats, garages, lofts &amp; probate clearances</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-300" /> Same-day available</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-300" /> We do all heavy lifting</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-300" /> Probate specialists</div>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 space-y-6">
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    Whether it's a single sofa or an entire property, we handle every aspect of your house clearance. Our team arrives, loads everything into the van, and sweeps up before we leave. We're especially experienced with probate and bereavement clearances — we treat every home with respect.
                  </p>
                  <div>
                    <h3 className="font-black uppercase text-sm text-slate-500 mb-3 tracking-widest">What We Take</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Sofas & armchairs','Beds & mattresses','Wardrobes','Fridges & freezers','Washing machines','Cookers','Carpets','Loft clearances','General household'].map(item => (
                        <span key={item} className="bg-red-50 border-2 border-slate-900 px-3 py-1 font-bold text-sm">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button as="link" to="/contact" className="w-full sm:w-auto">
                      Get House Clearance Quote <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Button as="link" to="/services/house-clearance" variant="outline" className="w-full sm:w-auto">
                      View Full Details <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Garden Waste */}
            <div id="garden" className="scroll-mt-40">
              <div className="grid lg:grid-cols-5 gap-0 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] bg-white overflow-hidden">
                <div className="lg:col-span-3 p-8 space-y-6 order-2 lg:order-1">
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    Overgrown jungle? Pile of soil from a landscaping job? Old rotten shed? We take it all. Our team loads everything — even the heavy stuff — and we sweep the patio before we leave. We can also dismantle sheds, decking, and fencing on-site.
                  </p>
                  <div>
                    <h3 className="font-black uppercase text-sm text-slate-500 mb-3 tracking-widest">What We Take</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Green waste','Branches & logs','Soil & turf','Rubble','Old sheds','Fencing','Decking','Garden furniture','Paving slabs'].map(item => (
                        <span key={item} className="bg-green-50 border-2 border-slate-900 px-3 py-1 font-bold text-sm">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button as="link" to="/contact" className="w-full sm:w-auto bg-green-700 hover:bg-green-600">
                      Get Garden Quote <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Button as="link" to="/services/garden-waste" variant="outline" className="w-full sm:w-auto">
                      View Full Details <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-2 bg-green-700 text-white p-8 flex flex-col justify-center order-1 lg:order-2">
                  <TreePine className="w-16 h-16 mb-6" />
                  <h2 className="text-3xl md:text-4xl font-black uppercase mb-3">Garden Waste</h2>
                  <p className="text-white/80 font-medium mb-6">Green waste, soil, rubble, shed demolition</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-300" /> Shed demolition included</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-300" /> Rubble &amp; hardcore OK</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-300" /> We sweep up after</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Builders Waste */}
            <div id="builders" className="scroll-mt-40">
              <div className="grid lg:grid-cols-5 gap-0 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(234,179,8,1)] bg-white overflow-hidden">
                <div className="lg:col-span-2 bg-yellow-500 text-slate-900 p-8 flex flex-col justify-center">
                  <Construction className="w-16 h-16 mb-6" />
                  <h2 className="text-3xl md:text-4xl font-black uppercase mb-3">Trade Waste</h2>
                  <p className="text-yellow-900 font-medium mb-6">Wait &amp; load, rip-outs, rubble, renovation waste</p>
                  <div className="space-y-2 text-sm text-yellow-900">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> No permits needed</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Cheaper than skip hire</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Wait &amp; load service</div>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 space-y-6">
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    Cheaper than a skip. No permit needed. Our wait-and-load service means we turn up, you load (or we help), and we drive away immediately. No driveway blocked, no waiting days for collection. Perfect for kitchen and bathroom rip-outs, renovations, and building sites.
                  </p>
                  <div>
                    <h3 className="font-black uppercase text-sm text-slate-500 mb-3 tracking-widest">What We Take</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Rubble & concrete','Plasterboard','Timber','Kitchen units','Bathroom suites','Tiles','Metal & pipes','Bricks','Mixed waste'].map(item => (
                        <span key={item} className="bg-yellow-50 border-2 border-slate-900 px-3 py-1 font-bold text-sm">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button as="link" to="/contact" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-slate-900">
                      Get Trade Quote <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Button as="link" to="/services/builders-waste" variant="outline" className="w-full sm:w-auto">
                      View Full Details <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Office / Commercial */}
            <div id="office" className="scroll-mt-40">
              <div className="grid lg:grid-cols-5 gap-0 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] bg-white overflow-hidden">
                <div className="lg:col-span-3 p-8 space-y-6 order-2 lg:order-1">
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    Moving office? Closing a retail unit? We provide secure, professional disposal of office furniture, IT equipment (WEEE compliant), and confidential paper waste. VAT invoices and full audit trails provided for your records.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {['WEEE-compliant disposal','Confidential destruction','VAT invoices provided','Out-of-hours clearances','Full audit trail','Regular contracts'].map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> {feat}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button as="link" to="/contact" variant="dark" className="w-full sm:w-auto">
                      Business Enquiry <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Button as="link" to="/services/office-clearance" variant="outline" className="w-full sm:w-auto">
                      View Full Details <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-2 bg-slate-900 text-white p-8 flex flex-col justify-center order-1 lg:order-2">
                  <Trash2 className="w-16 h-16 mb-6" />
                  <h2 className="text-3xl md:text-4xl font-black uppercase mb-3">Commercial</h2>
                  <p className="text-slate-400 font-medium mb-6">WEEE, confidential waste, office furniture, retail</p>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Professional service</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Full documentation</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Data security</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Single Item Removal */}
            <div id="single" className="scroll-mt-40">
              <div className="border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] bg-white overflow-hidden">
                <div className="bg-blue-600 text-white p-6 flex items-center gap-4">
                  <Package className="w-10 h-10 shrink-0" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase">Single Item Removal</h2>
                    <p className="text-white/80 font-medium text-sm">Just one thing to go? We can help.</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                    Don't need a full clearance? No problem. We collect individual items at affordable prices. Perfect for that old sofa, broken fridge, or mattress that won't fit in your car.
                  </p>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { name: 'Sofa', price: 'from £40' },
                      { name: 'Mattress', price: 'from £25' },
                      { name: 'Fridge/Freezer', price: 'from £35' },
                      { name: 'Washing Machine', price: 'from £35' },
                    ].map((item) => (
                      <div key={item.name} className="bg-blue-50 border-2 border-slate-900 p-4 text-center">
                        <p className="font-black uppercase text-sm">{item.name}</p>
                        <p className="text-blue-600 font-bold">{item.price}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 mb-6">*Prices are estimates. Send a photo for an exact quote.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button as="link" to="/contact" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500">
                      Get Single Item Quote <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Button as="link" to="/services/single-item-removal" variant="outline" className="w-full sm:w-auto">
                      View Full Details <ArrowRight className="w-5 h-5" />
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

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-100 to-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="How It Works" subtitle="3 simple steps. That's it." />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', icon: <Camera className="w-10 h-10" />, title: 'Send a Photo', desc: 'WhatsApp, text, or use our form. We reply with a fixed price within minutes.', color: 'bg-red-600' },
              { step: '02', icon: <CalendarCheck className="w-10 h-10" />, title: 'We Show Up', desc: 'Same day, next day, or whenever suits. On time, every time.', color: 'bg-slate-900' },
              { step: '03', icon: <ThumbsUp className="w-10 h-10" />, title: 'Job Done', desc: 'We load, sweep, and go. 98% recycled. Waste transfer note provided.', color: 'bg-green-600' },
            ].map((item, i) => (
              <div key={i} className="relative group">
                {i < 2 && (
                  <div className="hidden md:block absolute top-16 left-[calc(100%_-_1rem)] w-[calc(100%_-_6rem)] h-0.5 bg-slate-300 z-0">
                    <ArrowRight className="absolute right-0 -top-2 w-5 h-5 text-slate-400" />
                  </div>
                )}
                <div className="bg-white border-4 border-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] text-center relative z-10 group-hover:-translate-y-2 transition-transform">
                  <div className="absolute -top-4 -right-4 bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black border-2 border-slate-900 text-sm">{item.step}</div>
                  <div className={`${item.color} text-white w-20 h-20 mx-auto flex items-center justify-center border-2 border-slate-900 mb-6 group-hover:rotate-6 transition-transform`}>{item.icon}</div>
                  <h3 className="text-xl font-black uppercase mb-3">{item.title}</h3>
                  <p className="text-slate-600 font-medium">{item.desc}</p>
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
