import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sofa, TreePine, Construction, Trash2, CheckCircle2, ArrowRight,
  Camera, CalendarCheck, ThumbsUp, MessageCircle, Phone, X, Armchair,
  Monitor, Refrigerator, Bed, Bike, Package
} from 'lucide-react';
import { Button, SectionHeading } from '../components/ui';

export default function Services() {
  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden border-b-2 border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.15),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-red-600 px-4 py-1 text-sm font-black uppercase border-2 border-slate-700 mb-6">
            Licensed &amp; Insured
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">Our Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-medium">
            From a single sofa to a full house clearance. We handle everything &mdash; loading, transport, recycling, and paperwork.
          </p>
        </div>
      </section>

      {/* ===== SERVICES DETAIL ===== */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">

            {/* House Clearance */}
            <div id="house" className="border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] bg-white overflow-hidden">
              <div className="bg-red-600 text-white p-6 flex items-center gap-4">
                <Sofa className="w-10 h-10 shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase">House Clearance</h2>
                  <p className="text-white/90 font-medium text-sm">Homes, flats, garages, lofts &amp; probate clearances</p>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  Whether it&apos;s a single sofa or an entire property, we handle every aspect of your house clearance. Our team arrives, loads everything into the van, and sweeps up before we leave. We&apos;re especially experienced with probate and bereavement clearances &mdash; we treat every home with respect.
                </p>
                <div>
                  <h3 className="font-black uppercase text-sm text-slate-500 mb-3 tracking-widest">What We Take</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Sofas & armchairs','Beds & mattresses','Wardrobes & drawers','Fridges & freezers','Washing machines','Cookers','Carpets & underlay','Loft clearances','Garage junk','Black bags','General household'].map(item => (
                      <span key={item} className="bg-slate-100 border-2 border-slate-900 px-3 py-1 font-bold text-sm">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['Fixed price \u2014 no surprises','We do all the heavy lifting','Same-day & next-day available','Probate & bereavement specialists','Before & after photos sent','Waste transfer note provided'].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> {feat}
                    </div>
                  ))}
                </div>
                <Button as="link" to="/contact" className="w-full sm:w-auto">
                  Get a House Clearance Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Garden Waste */}
            <div id="garden" className="border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] bg-white overflow-hidden">
              <div className="bg-green-700 text-white p-6 flex items-center gap-4">
                <TreePine className="w-10 h-10 shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase">Garden Waste</h2>
                  <p className="text-white/90 font-medium text-sm">Green waste, soil, rubble, shed demolition</p>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  Overgrown jungle? Pile of soil from a landscaping job? Old rotten shed? We take it all. Our team loads everything &mdash; even the heavy stuff &mdash; and we sweep the patio before we leave. We can also dismantle sheds, decking, and fencing on-site.
                </p>
                <div>
                  <h3 className="font-black uppercase text-sm text-slate-500 mb-3 tracking-widest">What We Take</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Green waste','Branches & logs','Soil & turf','Rubble & hardcore','Old sheds','Fencing & trellis','Decking','Garden furniture','Plant pots','Paving slabs'].map(item => (
                      <span key={item} className="bg-green-50 border-2 border-slate-900 px-3 py-1 font-bold text-sm">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['Shed demolition included','We bag and load everything','Sweep patio before we leave','Rubble & hardcore OK','Same-day service available','Eco-friendly green waste disposal'].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> {feat}
                    </div>
                  ))}
                </div>
                <Button as="link" to="/contact" className="w-full sm:w-auto bg-green-700 hover:bg-green-600">
                  Get a Garden Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Builders Waste */}
            <div id="builders" className="border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] bg-white overflow-hidden">
              <div className="bg-yellow-500 text-slate-900 p-6 flex items-center gap-4">
                <Construction className="w-10 h-10 shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase">Builders &amp; Trade Waste</h2>
                  <p className="text-yellow-900 font-medium text-sm">Wait &amp; load, rip-outs, rubble, renovation waste</p>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  Cheaper than a skip. No permit needed. Our wait-and-load service means we turn up, you load (or we help), and we drive away immediately. No driveway blocked, no waiting days for collection. Perfect for kitchen and bathroom rip-outs, renovations, and building sites.
                </p>
                <div>
                  <h3 className="font-black uppercase text-sm text-slate-500 mb-3 tracking-widest">What We Take</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Rubble & concrete','Plasterboard','Timber & wood','Kitchen units','Bathroom suites','Tiles & ceramic','Metal & pipes','Bricks','Insulation','Mixed renovation waste'].map(item => (
                      <span key={item} className="bg-yellow-50 border-2 border-slate-900 px-3 py-1 font-bold text-sm">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['No permit needed','Wait & load service','We help load if needed','Cheaper than skip hire','Same-day for trade customers','Duty of care paperwork provided'].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> {feat}
                    </div>
                  ))}
                </div>
                <Button as="link" to="/contact" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-slate-900 border-slate-900">
                  Get a Trade Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Office / Commercial */}
            <div id="office" className="border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] bg-white overflow-hidden">
              <div className="bg-slate-900 text-white p-6 flex items-center gap-4">
                <Trash2 className="w-10 h-10 shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase">Commercial &amp; Office</h2>
                  <p className="text-slate-300 font-medium text-sm">WEEE, confidential waste, office furniture, retail units</p>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  Moving office? Closing a retail unit? We provide secure, professional disposal of office furniture, IT equipment (WEEE compliant), and confidential paper waste. VAT invoices and full audit trails provided for your records.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['WEEE-compliant disposal','Confidential document destruction','VAT invoices provided','Out-of-hours clearances','Full audit trail','Regular contract available'].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> {feat}
                    </div>
                  ))}
                </div>
                <Button as="link" to="/contact" variant="dark" className="w-full sm:w-auto">
                  Business Enquiry <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKIP COMPARISON ===== */}
      <section className="py-14 md:py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.1),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Why Choose Us Over a Skip?" subtitle="Save money. Save time. Save your back." light />
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-0 border-4 border-slate-700">
            <div className="bg-slate-800 p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="inline-block bg-slate-700 px-4 py-2 text-slate-200 font-black uppercase text-sm tracking-wider border border-slate-600">Skip Hire</div>
              </div>
              <ul className="space-y-5">
                {['Council permit needed (\u00a320\u2013\u00a365)','Wait 1\u20133 days for delivery','You load it yourself','Blocks your driveway for days','Extra charges for heavy items','Overloading fines','No recycling guarantee'].map((item, i) => (
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
                {['No permits needed \u2014 ever','Same-day & next-day service','We do ALL the loading for you','In and out in under an hour','Fixed price \u2014 no surprises','Friendly, insured team','98% recycled responsibly'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-14 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fef2f2_1px,transparent_1px),linear-gradient(to_bottom,#fef2f2_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="How It Works" subtitle="3 simple steps. That's it." />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', icon: <Camera className="w-10 h-10" />, title: 'Send a Photo', desc: 'WhatsApp, text, or use our form. We reply with a fixed price within minutes.', color: 'bg-red-600' },
              { step: '02', icon: <CalendarCheck className="w-10 h-10" />, title: 'We Show Up', desc: 'Same day, next day, or whenever suits. On time, every time.', color: 'bg-slate-900' },
              { step: '03', icon: <ThumbsUp className="w-10 h-10" />, title: 'Job Done', desc: 'We load, sweep, and go. 98% recycled. Waste transfer note provided.', color: 'bg-green-600' },
            ].map((item, i) => (
              <div key={i} className="bg-white border-4 border-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] text-center">
                <div className={`${item.color} text-white w-20 h-20 mx-auto flex items-center justify-center border-2 border-slate-900 mb-6`}>{item.icon}</div>
                <h3 className="text-xl font-black uppercase mb-3">{item.title}</h3>
                <p className="text-slate-600 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WhatsApp / CTA ===== */}
      <section className="py-14 md:py-16 bg-red-600 border-y-2 border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">Not Sure What You Need?</h2>
          <p className="text-white/90 text-lg font-medium mb-8 max-w-lg mx-auto">Send us a photo and we&apos;ll give you an instant, no-obligation quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" to="/contact" variant="secondary" className="text-lg">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Button>
            <a href="tel:07000000000">
              <Button variant="dark" className="text-lg border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
                <MessageCircle className="w-5 h-5" /> WhatsApp: 07000 000 000
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
