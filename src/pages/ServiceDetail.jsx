import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Sofa, TreePine, Construction, Trash2, Package, Truck,
  CheckCircle2, ArrowRight, Phone, Shield, Clock, Recycle,
  BadgeCheck, Camera, CalendarCheck, ThumbsUp, MessageCircle,
  Star, MapPin, Home as HomeIcon, ChevronRight, X
} from 'lucide-react';
import { Button, SectionHeading, FAQItem, REVIEWS } from '../components/ui';

const ICONS = { Sofa, TreePine, Construction, Trash2, Package, Truck };

const SERVICES_DATA = {
  'house-clearance': {
    title: 'House Clearance',
    seoTitle: 'House Clearance Kent',
    icon: 'Sofa',
    colorBg: 'bg-red-600',
    colorBgHover: 'hover:bg-red-700',
    colorText: 'text-red-600',
    colorBgLight: 'bg-red-50',
    shadowColor: 'shadow-[12px_12px_0px_0px_rgba(220,38,38,1)]',
    heroSubtitle: 'Full property clearances, probate, bereavement & downsizing across Kent',
    heroDescription: 'Professional house clearance across Kent. From a single room to a full property, we handle every aspect — loading, transport, recycling, and paperwork.',
    features: [
      'Same-day service available across Kent',
      'We do all the heavy lifting — you don\'t touch a thing',
      'Probate & bereavement clearance specialists',
      'Full property or single room clearances',
      'Garage, loft & shed clearances included',
      'Sensitive, respectful service every time',
    ],
    whatWeTake: [
      'Sofas & armchairs', 'Beds & mattresses', 'Wardrobes & drawers',
      'Fridges & freezers', 'Washing machines', 'Cookers & ovens',
      'Carpets & underlay', 'Loft contents', 'General household items',
      'White goods', 'Electronics & TVs', 'Clothing & textiles',
    ],
    paragraphs: [
      'Whether you need a single room cleared or an entire property emptied, Kent Complete Clearances provides a fast, professional house clearance service across Kent. Our experienced team arrives on time, loads everything into the van, and sweeps up before leaving. We handle everything from sofas and beds to fridges, washing machines, and loft contents.',
      'We specialise in probate and bereavement clearances, understanding that these can be difficult times. Our team works sensitively and respectfully, taking care to identify any items of value or sentimental importance before clearing. We can work with solicitors, estate agents, and family members to ensure a smooth process.',
      'Unlike skip hire, you don\'t need to lift a finger. We do all the heavy lifting, loading, and disposal. There\'s no permit required, no blocked driveway, and no waiting days for collection. Most house clearances in Kent are completed within a few hours, and we can often provide same-day service if you call before 10am.',
    ],
    pricing: [
      { name: 'Single Room', price: 'from \u00a3150' },
      { name: 'Two-Bed Flat', price: 'from \u00a3350' },
      { name: 'Three-Bed House', price: 'from \u00a3500' },
      { name: 'Full Property', price: 'from \u00a3700' },
    ],
    faqs: [
      { question: 'How long does a full house clearance take?', answer: 'Most house clearances take between 2-6 hours depending on the size of the property and volume of items. A single room can be done in under an hour. We always give you an estimated timeframe when we provide your quote.' },
      { question: 'Can you handle probate clearances?', answer: 'Yes, we specialise in probate and bereavement clearances. We work sensitively and can liaise with solicitors or estate agents. We\'ll identify any items that may have value and set them aside before clearing.' },
      { question: 'Do I need to be at the property?', answer: 'Not always. For many jobs, you can leave a key or arrange access with a neighbour. We\'ll send you before-and-after photos once the job is done. For larger clearances, we recommend being there at the start so you can walk us through anything specific.' },
    ],
    reviewIndices: [0, 3],
  },
  'garden-waste': {
    title: 'Garden Waste Removal',
    seoTitle: 'Garden Waste Removal Kent',
    icon: 'TreePine',
    colorBg: 'bg-green-700',
    colorBgHover: 'hover:bg-green-600',
    colorText: 'text-green-700',
    colorBgLight: 'bg-green-50',
    shadowColor: 'shadow-[12px_12px_0px_0px_rgba(21,128,61,1)]',
    heroSubtitle: 'Green waste, soil, rubble, shed demolition & garden clearance',
    heroDescription: 'Professional garden waste removal across Kent. We take everything from green waste and soil to old sheds and fencing. We even sweep the patio before we leave.',
    features: [
      'Shed & decking demolition included',
      'Rubble, hardcore & soil removal',
      'Green waste & branches of any size',
      'We sweep up before we leave',
      'Same-day service for most of Kent',
      'Cheaper than hiring a skip',
    ],
    whatWeTake: [
      'Green waste & cuttings', 'Branches & logs', 'Soil & turf',
      'Rubble & hardcore', 'Old sheds', 'Fencing & fence panels',
      'Decking', 'Garden furniture', 'Paving slabs',
      'Plant pots', 'Old compost bins', 'Garden tools',
    ],
    paragraphs: [
      'Overgrown jungle? Pile of soil from a landscaping job? Old rotten shed? Kent Complete Clearances takes it all. Our team loads everything — even the heavy stuff — and we sweep the patio before we leave. No skips blocking your driveway, no permits, no hassle.',
      'We can also dismantle sheds, decking, and fencing on-site. Whether it\'s the remains of a DIY project or a full garden clearance before selling your home, we\'ll have it cleared quickly and responsibly. All green waste goes to authorized composting facilities, and rubble goes to licensed recycling centres.',
      'Our garden waste service is popular with landscapers, gardeners, and homeowners across Kent. We\'re often significantly cheaper than skip hire once you factor in the cost of a permit, the time waiting for delivery and collection, and the heavy lifting you have to do yourself with a skip.',
    ],
    pricing: [
      { name: 'Small Load', price: 'from \u00a380' },
      { name: 'Half Van', price: 'from \u00a3150' },
      { name: 'Full Van', price: 'from \u00a3250' },
      { name: 'Shed Demolition', price: 'from \u00a3150' },
    ],
    faqs: [
      { question: 'Can you remove soil and rubble?', answer: 'Yes, we take soil, turf, rubble, hardcore, paving slabs, and all types of garden waste. Heavier materials like rubble may be priced slightly higher due to weight, but we\'ll always give you a fixed price upfront.' },
      { question: 'Do you dismantle sheds?', answer: 'Yes, we can demolish and remove old sheds, decking, fencing, and other garden structures. This is included in our service — just let us know when you send your photos for a quote.' },
      { question: 'Is garden waste recycled?', answer: 'All green waste goes to licensed composting facilities. Rubble and hardcore go to authorized recycling centres. We achieve a 98% recycling rate across all waste types.' },
    ],
    reviewIndices: [1, 5],
  },
  'builders-waste': {
    title: 'Builders Waste Removal',
    seoTitle: 'Builders Waste Removal Kent',
    icon: 'Construction',
    colorBg: 'bg-yellow-500',
    colorBgHover: 'hover:bg-yellow-400',
    colorText: 'text-yellow-600',
    colorBgLight: 'bg-yellow-50',
    shadowColor: 'shadow-[12px_12px_0px_0px_rgba(234,179,8,1)]',
    textOnBg: 'text-slate-900',
    heroSubtitle: 'Rubble, plasterboard, timber, renovation waste & rip-outs',
    heroDescription: 'Professional builders waste removal across Kent. Cheaper than a skip, no permits needed, and we do all the loading. Perfect for renovations, kitchen rip-outs, and building sites.',
    features: [
      'No council permit required',
      'Cheaper than skip hire for most jobs',
      'Wait & load service available',
      'We load everything for you',
      'Mixed waste accepted',
      'VAT invoices for trade customers',
    ],
    whatWeTake: [
      'Rubble & concrete', 'Plasterboard & drywall', 'Timber & wood',
      'Kitchen units', 'Bathroom suites', 'Tiles & ceramics',
      'Metal & pipes', 'Bricks & blocks', 'Mixed construction waste',
      'Carpet & underlay', 'Doors & frames', 'Plumbing fixtures',
    ],
    paragraphs: [
      'Cheaper than a skip. No permit needed. Our builders waste removal service is designed for tradespeople, contractors, and homeowners mid-renovation. We turn up, load everything into the van (or you can help on our wait-and-load service), and drive away immediately.',
      'No driveway blocked for days. No waiting for delivery and collection. No permits. No fines for overloading. We accept all types of construction waste including rubble, plasterboard, timber, kitchen and bathroom rip-outs, and mixed waste. We can usually be with you the same day or next day.',
      'For trade customers, we provide VAT invoices and waste transfer notes for every job. Many builders and contractors across Kent use us regularly because we\'re faster, cheaper, and more flexible than traditional skip hire. We also offer regular collection schedules for ongoing projects.',
    ],
    pricing: [
      { name: 'Small Load', price: 'from \u00a3100' },
      { name: 'Half Van', price: 'from \u00a3180' },
      { name: 'Full Van', price: 'from \u00a3300' },
      { name: 'Wait & Load', price: 'from \u00a3200' },
    ],
    faqs: [
      { question: 'Is it really cheaper than a skip?', answer: 'Almost always, yes. With us there\u2019s no permit needed, no waiting for delivery, no heavy lifting, and no road-blocking your driveway. We load everything for you and take it away immediately. For most jobs, we\'re 20-40% cheaper than skip hire once you factor in permit costs.' },
      { question: 'Can you take mixed construction waste?', answer: 'Yes, we accept all types of construction and renovation waste in the same load. Rubble, plasterboard, timber, tiles, metal, plumbing — it all goes. We sort and recycle at the transfer station.' },
      { question: 'Do you provide waste transfer notes?', answer: 'Yes. We provide a waste transfer note for every single job. This is your legal proof that your waste was disposed of responsibly by a licensed carrier. We also provide VAT invoices for trade customers.' },
    ],
    reviewIndices: [4, 1],
  },
  'office-clearance': {
    title: 'Office & Commercial Clearance',
    seoTitle: 'Office Clearance Kent',
    icon: 'Trash2',
    colorBg: 'bg-slate-900',
    colorBgHover: 'hover:bg-slate-800',
    colorText: 'text-slate-700',
    colorBgLight: 'bg-slate-50',
    shadowColor: 'shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]',
    heroSubtitle: 'Office furniture, WEEE disposal, confidential waste & retail clearances',
    heroDescription: 'Professional commercial clearance for offices, shops, and business premises across Kent. WEEE compliant, confidential destruction, and full documentation provided.',
    features: [
      'WEEE-compliant IT equipment disposal',
      'Confidential document destruction',
      'VAT invoices provided',
      'Out-of-hours clearances available',
      'Full audit trail & documentation',
      'Regular contract options',
    ],
    whatWeTake: [
      'Office desks & chairs', 'Filing cabinets', 'IT equipment & monitors',
      'Printers & copiers', 'Shelving & racking', 'Confidential paper waste',
      'Kitchen appliances', 'Retail fixtures', 'Signage',
      'Carpet tiles', 'Partition walls', 'Reception furniture',
    ],
    paragraphs: [
      'Moving office? Closing a retail unit? Kent Complete Clearances provides secure, professional disposal of office furniture, IT equipment, and confidential waste for businesses across Kent. We understand that business clearances often need to happen quickly and with minimal disruption.',
      'All IT equipment is disposed of in compliance with WEEE (Waste Electrical and Electronic Equipment) regulations. Confidential documents and data-bearing devices are securely destroyed, and we provide certificates of destruction on request. VAT invoices and full audit trails are standard on every commercial job.',
      'We can work outside of normal business hours to minimise disruption to your operations. Whether you need a single office cleared or an entire building emptied, we have the team and the vehicles to handle it. Many businesses across Kent trust us for regular waste management contracts.',
    ],
    pricing: null,
    faqs: [
      { question: 'Is IT equipment disposal WEEE compliant?', answer: 'Yes. All IT equipment including computers, monitors, printers, and servers is disposed of in full compliance with WEEE regulations. We can provide certificates of disposal for your records and audits.' },
      { question: 'Can you destroy confidential documents?', answer: 'Yes. We offer secure confidential waste destruction for paper documents and data-bearing devices. We can provide certificates of destruction for compliance purposes.' },
      { question: 'Can you work outside business hours?', answer: 'Yes. We understand that many businesses need clearances done with minimal disruption. We can work evenings, weekends, or overnight to fit around your schedule. Just let us know when you get in touch.' },
    ],
    reviewIndices: [2, 4],
  },
  'wait-and-load': {
    title: 'Wait & Load Service',
    seoTitle: 'Wait & Load Waste Removal Kent',
    icon: 'Truck',
    colorBg: 'bg-blue-600',
    colorBgHover: 'hover:bg-blue-500',
    colorText: 'text-blue-600',
    colorBgLight: 'bg-blue-50',
    shadowColor: 'shadow-[12px_12px_0px_0px_rgba(37,99,235,1)]',
    heroSubtitle: 'We arrive, you load (or we help), and we drive away. Done.',
    heroDescription: 'Our wait & load service is the fastest, most flexible alternative to skip hire in Kent. No permits, no blocked driveways, and we can help with the heavy lifting.',
    features: [
      'No skip permit needed',
      'No blocked driveway for days',
      'We help you load if needed',
      'In and out within the hour',
      'Perfect for renovation waste',
      'Available same-day across Kent',
    ],
    whatWeTake: [
      'Rubble & concrete', 'Timber & wood', 'Plasterboard',
      'Old furniture', 'Kitchen rip-outs', 'Bathroom suites',
      'Garden waste', 'General household waste', 'Mixed waste',
      'Metal & scrap', 'White goods', 'Carpets & flooring',
    ],
    paragraphs: [
      'Our wait & load service is simple: we drive to your location, park up, and you load the van. If you need help with heavy items, our team pitches in. Once the van is full, we drive away. The whole process usually takes less than an hour. No skip sitting on your drive for a week, no council permits, no stress.',
      'This is the most popular option for tradespeople mid-renovation, homeowners doing a big clear-out, or anyone who already has their waste bagged and ready to go. It\'s almost always cheaper than hiring a skip once you factor in permit costs, delivery charges, and the time wasted waiting for pickup.',
      'We accept all types of domestic and commercial waste on our wait & load service. Whether it\'s rubble from a building job, furniture from a house clearance, or garden waste from a landscaping project, we take it all in one go. Available same-day for most Kent locations.',
    ],
    pricing: [
      { name: 'Quarter Van', price: 'from \u00a3100' },
      { name: 'Half Van', price: 'from \u00a3180' },
      { name: 'Full Van', price: 'from \u00a3280' },
      { name: 'XL Load', price: 'from \u00a3400' },
    ],
    faqs: [
      { question: 'Do I have to load the van myself?', answer: 'No. While the wait & load service is designed for you to load while we wait, our team is always happy to help with heavy items. If you want us to do all the loading, that\'s fine too — we\'ll just adjust the price accordingly.' },
      { question: 'How quickly can you come?', answer: 'We offer same-day and next-day wait & load service across most of Kent. If you call before 10am, we can usually be with you that afternoon.' },
      { question: 'Is there a time limit?', answer: 'We allow up to an hour for loading. For most jobs, this is more than enough. If you need longer, just let us know — we\'re flexible.' },
    ],
    reviewIndices: [4, 5],
  },
  'single-item-removal': {
    title: 'Single Item Removal',
    seoTitle: 'Single Item Removal Kent',
    icon: 'Package',
    colorBg: 'bg-blue-600',
    colorBgHover: 'hover:bg-blue-500',
    colorText: 'text-blue-600',
    colorBgLight: 'bg-blue-50',
    shadowColor: 'shadow-[12px_12px_0px_0px_rgba(37,99,235,1)]',
    heroSubtitle: 'Just one thing to go? Affordable single item collection across Kent',
    heroDescription: 'Don\'t need a full clearance? We collect individual items at affordable prices. Sofas, mattresses, fridges, washing machines and more — collected from any room in your home.',
    features: [
      'Affordable fixed prices',
      'We collect from any room',
      'Same-day collection available',
      'Responsible recycling guaranteed',
      'No minimum order',
      'Perfect for items that won\'t fit in your car',
    ],
    whatWeTake: [
      'Sofas & armchairs', 'Mattresses & bed frames', 'Fridges & freezers',
      'Washing machines', 'Tumble dryers', 'Dishwashers',
      'TVs & monitors', 'Desks & tables', 'Wardrobes',
      'Exercise equipment', 'Hot tubs', 'Piano removal',
    ],
    paragraphs: [
      'Don\'t need a full clearance? No problem. Kent Complete Clearances collects individual items at affordable, fixed prices. Whether it\'s an old sofa, a broken fridge, a mattress, or a washing machine, we\'ll come to your home, collect it from any room, and dispose of it responsibly.',
      'Our single item service is perfect for things that won\'t fit in your car, are too heavy to move yourself, or that the council won\'t collect quickly enough. We can usually collect within 24 hours, and same-day service is available if you call before 10am.',
      'Every item we collect is recycled or donated wherever possible. Reusable furniture goes to local charities. White goods are recycled through approved WEEE channels. Nothing is fly-tipped, ever. You\'ll receive a waste transfer note as proof of responsible disposal.',
    ],
    pricing: [
      { name: 'Sofa', price: 'from \u00a340' },
      { name: 'Mattress', price: 'from \u00a325' },
      { name: 'Fridge/Freezer', price: 'from \u00a335' },
      { name: 'Washing Machine', price: 'from \u00a335' },
    ],
    faqs: [
      { question: 'What\'s the cheapest item to collect?', answer: 'Single items start from around \u00a325 for a mattress. Prices depend on the item size, weight, and your location in Kent. Send us a photo on WhatsApp for an exact price — no obligation.' },
      { question: 'Will you collect from upstairs?', answer: 'Yes, we collect from any room in your home — upstairs, downstairs, loft, or garage. We do all the heavy lifting. If access is particularly tricky (narrow stairs, tight corners), just let us know when you book so we can plan ahead.' },
      { question: 'Can I add extra items on the day?', answer: 'Of course. If you have extra bits to go once we arrive, we\'ll give you a price on the spot. Many customers find a few extra things once they see how easy the process is!' },
    ],
    reviewIndices: [3, 0],
  },
};

// All service slugs for "Other Services" section
const ALL_SERVICE_SLUGS = Object.keys(SERVICES_DATA);

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES_DATA[slug];
  const [openFAQ, setOpenFAQ] = useState(-1);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = ICONS[service.icon];
  const textOnBg = service.textOnBg || 'text-white';
  const otherServices = ALL_SERVICE_SLUGS.filter(s => s !== slug).slice(0, 4);

  return (
    <>
      {/* ===== BREADCRUMB ===== */}
      <div className="bg-slate-100 border-b border-slate-200 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-red-600 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900 font-bold">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* ===== HERO BANNER ===== */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 relative overflow-hidden border-b-4 border-red-600">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.2),transparent_50%)] pointer-events-none" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-red-600/20 border border-red-500/30 px-5 py-2 mb-6">
              <BadgeCheck className="w-5 h-5 text-green-400" />
              <span className="text-white font-bold uppercase text-sm tracking-wider">Licensed & Fully Insured</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">{service.seoTitle}</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl font-medium mb-6 max-w-2xl mx-auto">
              {service.heroSubtitle}
            </p>

            <p className="text-slate-400 font-medium mb-8 max-w-xl mx-auto">
              {service.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button as="link" to="/contact" variant="primary" className="text-lg">
                <Phone className="w-5 h-5" /> Get a Free Quote
              </Button>
              <a href="tel:01622000000">
                <Button variant="secondary" className="text-lg w-full">
                  <Phone className="w-5 h-5" /> 01622 000 000
                </Button>
              </a>
            </div>

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

      {/* ===== SERVICE DETAIL ===== */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-50 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Main content */}
              <div className="lg:col-span-3 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`${service.colorBg} ${textOnBg} p-3 border-2 border-slate-900`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase">{service.title}</h2>
                </div>

                {service.paragraphs.map((p, i) => (
                  <p key={i} className="text-slate-600 font-medium leading-relaxed text-lg">
                    {p}
                  </p>
                ))}

                <Button as="link" to="/contact" className={`w-full sm:w-auto ${service.colorBg} ${service.colorBgHover} mt-4`}>
                  Get {service.title} Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                {/* Features */}
                <div className={`border-4 border-slate-900 ${service.shadowColor} bg-white p-6`}>
                  <h3 className="font-black uppercase text-sm text-slate-500 mb-4 tracking-widest">Why Choose Us</h3>
                  <div className="space-y-3">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-slate-900 text-white p-6 border-4 border-slate-900">
                  <h3 className="font-black uppercase text-sm mb-4 tracking-widest">Quick Quote</h3>
                  <p className="text-slate-300 text-sm font-medium mb-4">Send us a photo on WhatsApp for an instant price. No obligation.</p>
                  <div className="space-y-3">
                    <a href="tel:01622000000" className="flex items-center gap-3 text-white hover:text-red-400 transition-colors">
                      <Phone className="w-5 h-5 text-red-500" />
                      <span className="font-bold">01622 000 000</span>
                    </a>
                    <a href="tel:07000000000" className="flex items-center gap-3 text-white hover:text-green-400 transition-colors">
                      <MessageCircle className="w-5 h-5 text-green-500" />
                      <span className="font-bold">07000 000 000</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE TAKE ===== */}
      <section className="py-12 md:py-16 bg-slate-50 border-y-2 border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeading title="What We Take" subtitle={`Items we handle as part of our ${service.title.toLowerCase()} service.`} />
            <div className="flex flex-wrap justify-center gap-3">
              {service.whatWeTake.map(item => (
                <span key={item} className={`${service.colorBgLight} border-2 border-slate-900 px-4 py-2 font-bold text-sm`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      {service.pricing && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeading title="Guide Prices" subtitle="Every job is different. Send a photo for an exact, fixed quote." />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {service.pricing.map((item) => (
                  <div key={item.name} className={`${service.colorBgLight} border-4 border-slate-900 p-5 text-center shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]`}>
                    <p className="font-black uppercase text-sm mb-1">{item.name}</p>
                    <p className={`${service.colorText} font-black text-xl`}>{item.price}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-slate-500 font-medium mt-4">
                *Prices are estimates based on typical jobs. Send a photo for your exact, no-obligation quote.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-100 to-slate-50">
        <div className="container mx-auto px-4">
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

      {/* ===== SKIP COMPARISON ===== */}
      <section className="py-12 md:py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.15),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Us vs Skip Hire" subtitle="There's no contest." light />
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-0 border-4 border-slate-700">
            <div className="bg-slate-800 p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-slate-700 px-4 py-2 text-slate-200 font-black uppercase text-sm tracking-wider border border-slate-600">Skip Hire</div>
              </div>
              <ul className="space-y-4">
                {['Council permit needed','Wait 1-3 days for delivery','You load it yourself','Blocks your driveway','Extra charges for heavy items'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium text-sm"><X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-red-600 p-6 md:p-8 relative">
              <div className="absolute -top-3 right-4 bg-yellow-400 text-slate-900 px-3 py-1 text-xs font-black uppercase border-2 border-slate-900 rotate-2">Better</div>
              <div className="text-center mb-6">
                <div className="inline-block bg-red-700 px-4 py-2 text-white font-black uppercase text-sm tracking-wider border border-red-500">Kent Complete</div>
              </div>
              <ul className="space-y-4">
                {['No permits needed','Same-day service','We load everything','In and out in under an hour','Fixed price — no surprises'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white font-medium text-sm"><CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading title="What Our Customers Say" subtitle="Real feedback from real Kent customers." />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.reviewIndices.map((ri, i) => (
              <div key={i} className="bg-white border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] p-6">
                <div className="flex text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 font-medium italic mb-4">"{REVIEWS[ri].text}"</p>
                <div>
                  <p className="font-black text-slate-900 uppercase text-sm">{REVIEWS[ri].name}</p>
                  <p className="text-red-600 text-sm font-bold flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {REVIEWS[ri].location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button as="link" to="/about#reviews" variant="outline" className="text-sm">
              Read All 50+ Reviews <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading title={`${service.title} FAQs`} subtitle="Got questions? Here are the most common ones." />
          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} isOpen={openFAQ === i} onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button as="link" to="/about#faq" variant="outline" className="text-sm">
              View All FAQs <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== OTHER SERVICES ===== */}
      <section className="py-12 md:py-16 bg-white border-t-2 border-slate-200">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Other Services" subtitle="We handle all types of waste removal across Kent." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {otherServices.map((s) => {
              const svc = SERVICES_DATA[s];
              const SvcIcon = ICONS[svc.icon];
              return (
                <Link
                  key={s}
                  to={`/services/${s}`}
                  className="bg-white border-4 border-slate-900 p-4 text-center group hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] block"
                >
                  <div className={`${svc.colorBg} ${svc.textOnBg || 'text-white'} w-12 h-12 mx-auto flex items-center justify-center border-2 border-slate-900 mb-3 group-hover:rotate-6 transition-transform`}>
                    <SvcIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-black uppercase text-xs mb-1">{svc.title}</h3>
                  <span className="text-red-600 font-bold text-xs uppercase inline-flex items-center gap-1">
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,0,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Get Your Free {service.title} Quote</h2>
          <p className="text-white/80 text-lg font-medium mb-8 max-w-lg mx-auto">Send us a photo and we'll give you a fixed price in minutes. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" to="/contact" variant="secondary" className="text-lg">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Button>
            <a href="tel:07000000000">
              <Button variant="dark" className="text-lg w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
