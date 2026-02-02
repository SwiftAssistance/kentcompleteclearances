import React, { useState, useEffect, useRef } from 'react';
import {
  Truck,
  Trash2,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Recycle,
  Sofa,
  TreePine,
  Construction,
  FileText,
  Star,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Camera,
  Shield,
  Zap,
  ThumbsUp,
  MessageCircle,
  Award,
  BadgeCheck,
  CalendarCheck,
  PoundSterling,
  CircleDot,
  Users,
  Sparkles
} from 'lucide-react';

// --- Reusable Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "font-bold py-3 px-6 transition-all duration-200 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-white text-slate-900 hover:bg-slate-50",
    outline: "bg-transparent text-slate-900 border-slate-900 hover:bg-slate-100",
    dark: "bg-slate-900 text-white hover:bg-slate-800",
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, align = 'center', light = false }) => (
  <div className={`mb-12 ${align === 'left' ? 'text-left' : 'text-center'}`}>
    <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto font-medium ${light ? 'text-slate-300' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
    <div className={`h-1 w-24 bg-red-600 mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
  </div>
);

const TownBadge = ({ name }) => (
  <span className="inline-block px-4 py-2 bg-slate-100 border border-slate-900 text-slate-800 font-bold text-sm hover:bg-red-600 hover:text-white transition-colors cursor-default">
    {name}
  </span>
);

const ReviewCard = ({ name, location, text }) => (
  <div className="bg-slate-50 p-8 md:p-12 border-2 border-slate-900 relative h-full flex flex-col justify-center text-center min-h-[350px]">
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white p-2 border-2 border-slate-900 z-10">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>
    </div>
    <div className="mb-8 mt-4">
      <p className="text-slate-700 font-medium text-xl md:text-2xl italic leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
    </div>
    <div className="border-t-2 border-slate-200 pt-6 inline-block mx-auto">
      <p className="font-black text-slate-900 uppercase tracking-wider text-lg">{name}</p>
      <p className="text-sm text-red-600 font-bold flex items-center justify-center gap-1 mt-1">
        <MapPin className="w-4 h-4" /> {location}
      </p>
    </div>
  </div>
);

// Animated counter hook
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

// FAQ Accordion item
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-2 border-slate-900 bg-white overflow-hidden">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-6 text-left font-black uppercase tracking-tight text-lg hover:bg-slate-50 transition-colors"
    >
      <span>{question}</span>
      <ChevronDown className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed border-t-2 border-slate-100 pt-4">
        {answer}
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const stat1 = useCountUp(2400);
  const stat2 = useCountUp(98);
  const stat3 = useCountUp(500);

  const reviews = [
    { name: "Sarah Jenkins", location: "Maidstone", text: "Absolutely brilliant service. The lads arrived on time, cleared my mum's garage in under an hour and swept up after. Much easier than hiring a skip." },
    { name: "Dave Miller", location: "Ashford", text: "Cheaper than the quote I got from a big national company. Friendly team, checked everything before taking it. Highly recommend for garden waste." },
    { name: "The Red Lion Pub", location: "Canterbury", text: "Use Kent Complete Clearances for all our commercial waste. Regular, reliable and they provide all the paperwork we need for the council." },
    { name: "Mrs. P. Thompson", location: "Sevenoaks", text: "I was worried about a sofa that wouldn't fit out the door. They dismantled it carefully and took it away. Very polite young men." },
    { name: "Construction Plus Ltd", location: "Dartford", text: "Top notch for wait and load. Drivers actually help load the van which is a rarity these days. Good price for rubble disposal." },
    { name: "Mike Stevens", location: "Tonbridge", text: "Great communication via WhatsApp. Sent a photo, got a price, job done next day. Couldn't ask for more." }
  ];

  const faqs = [
    { question: "How much does a clearance cost?", answer: "Every job is different. A single item like a sofa starts from around \u00a330. A full house clearance depends on the volume but typically ranges from \u00a3200-\u00a3800. We always give a fixed price before we start \u2014 no surprises, no hidden fees. Send us a photo for an instant quote." },
    { question: "Do I need to be at the property?", answer: "Not always. For many jobs, you can leave a key or arrange access with a neighbour. We'll send you before-and-after photos once the job is done. For larger clearances, we recommend being there at the start so you can walk us through anything specific." },
    { question: "What can\u2019t you take?", answer: "We can\u2019t take hazardous waste such as asbestos, paint, chemicals, or gas canisters. Everything else \u2014 including fridges, mattresses, TVs, tyres, and rubble \u2014 we handle. If you\u2019re unsure, just ask." },
    { question: "How quickly can you come?", answer: "We offer same-day and next-day service for most of Kent. If you call before 10am, we can usually be with you that afternoon. For planned clearances, we\u2019re happy to book in a date that works for you." },
    { question: "Are you licensed and insured?", answer: "Yes. We are a registered Upper Tier Waste Carrier with the Environment Agency (Reg: CBDU123456). We carry full public liability insurance and provide waste transfer notes for every job. Your waste is taken to authorized transfer stations \u2014 never fly-tipped." },
    { question: "Is it cheaper than hiring a skip?", answer: "Almost always, yes. With us there\u2019s no permit needed, no waiting for delivery, no heavy lifting, and no road-blocking your driveway. We load everything for you and take it away immediately. For most residential jobs, we\u2019re 20-40% cheaper than skip hire once you factor in permit costs." }
  ];

  const nextReview = () => setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-200">

      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-xs md:text-sm font-bold tracking-wide">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-red-500" /> Licensed Waste Carrier (CBDU12345)</span>
            <span className="hidden md:flex items-center gap-2"><Clock className="w-4 h-4 text-red-500" /> Same Day Service Available</span>
          </div>
          <a href="tel:01622000000" className="hover:text-red-400 transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3" /> Maidstone &amp; All Kent: 01622 000 000
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-slate-900 ${scrolled ? 'bg-white/95 backdrop-blur-sm py-3' : 'bg-white py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 text-white p-2 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black uppercase leading-none tracking-tighter">
                Kent Complete<br /><span className="text-red-600">Clearances</span>
              </h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider">
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#areas" className="hover:text-red-600 transition-colors">Areas</a>
            <a href="#reviews" className="hover:text-red-600 transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-red-600 transition-colors">FAQ</a>
            <a href="#contact">
              <Button variant="primary" className="py-2 px-4 text-sm animate-pulse-subtle">
                <Phone className="w-4 h-4" /> Get a Quote
              </Button>
            </a>
          </div>

          <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-slate-900 p-4 absolute w-full shadow-xl">
            <div className="flex flex-col gap-4 font-bold uppercase">
              <a href="#services" onClick={toggleMenu} className="py-2 border-b border-slate-100">Services</a>
              <a href="#areas" onClick={toggleMenu} className="py-2 border-b border-slate-100">Areas Covered</a>
              <a href="#reviews" onClick={toggleMenu} className="py-2 border-b border-slate-100">Reviews</a>
              <a href="#faq" onClick={toggleMenu} className="py-2 border-b border-slate-100">FAQ</a>
              <a href="tel:01622000000" className="py-3 bg-red-600 text-center text-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                Call 01622 000 000
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ========== HERO SECTION ========== */}
      <header className="relative bg-gradient-to-br from-white via-slate-50 to-red-50 border-b-2 border-slate-900 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-100 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-50 rounded-full opacity-40 blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-red-100 border-2 border-slate-900 px-4 py-1 transform -rotate-2">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span className="text-red-700 font-bold uppercase text-sm tracking-wider">Kent&apos;s #1 Rated Waste Team</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] uppercase tracking-tight">
                We Load.<br />
                We Clear.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">You Relax.</span>
              </h2>

              <p className="text-xl text-slate-600 font-medium max-w-md">
                Cheaper than a skip. Faster than the council. Fully licensed waste removal for homes and businesses across Kent.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact">
                  <Button className="w-full sm:w-auto text-lg">
                    <Phone className="w-5 h-5" /> Get a Free Quote
                  </Button>
                </a>
                <a href="tel:07000000000">
                  <Button variant="secondary" className="w-full sm:w-auto text-lg">
                    <Camera className="w-5 h-5" /> Send us a Photo <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                </a>
              </div>

              {/* Mini trust indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-sm font-bold text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 w-5 h-5" /> No Hidden Fees
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 w-5 h-5" /> 98% Recycled
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 w-5 h-5" /> Same-Day Service
                </div>
              </div>

              {/* Social proof nudge */}
              <div className="flex items-center gap-3 bg-white border-2 border-slate-200 rounded-none p-3 max-w-sm">
                <div className="flex -space-x-2">
                  {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                      {['S', 'D', 'M', 'P'][i]}
                    </div>
                  ))}
                </div>
                <div className="text-xs">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <span className="text-slate-600 font-bold">500+ five-star reviews across Kent</span>
                </div>
              </div>
            </div>

            {/* Hero image placeholder */}
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
                {/* Urgent badge */}
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 text-xs font-black uppercase border-2 border-slate-900 animate-bounce-slow">
                  Slots Available Today
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========== ANIMATED STATS BAR ========== */}
      <section className="bg-slate-900 text-white py-16 border-b-2 border-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div ref={stat1.ref} className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-red-500">{stat1.count.toLocaleString()}+</div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-400">Jobs Completed</div>
            </div>
            <div ref={stat2.ref} className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-red-500">{stat2.count}%</div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-400">Waste Recycled</div>
            </div>
            <div ref={stat3.ref} className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-red-500">{stat3.count}+</div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-400">5-Star Reviews</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-red-500">
                <Zap className="w-10 h-10 md:w-12 md:h-12 mx-auto text-red-500" />
              </div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-400">Same-Day Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fef2f2_1px,transparent_1px),linear-gradient(to_bottom,#fef2f2_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="How It Works"
            subtitle="Getting rid of your junk takes 3 simple steps. No stress, no hassle."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', icon: <Camera className="w-10 h-10" />, title: 'Send a Photo', desc: 'Snap a photo of what needs clearing and send it to us via WhatsApp, text, or our form. We reply with a fixed price within minutes.', color: 'bg-red-600' },
              { step: '02', icon: <CalendarCheck className="w-10 h-10" />, title: 'We Show Up', desc: 'Pick a time that works for you — same day, next day, or whenever suits. Our team arrives on time, every time. No waiting around.', color: 'bg-slate-900' },
              { step: '03', icon: <ThumbsUp className="w-10 h-10" />, title: 'Job Done', desc: 'We load everything, sweep up, and leave your space spotless. 98% of what we collect is recycled. You get a waste transfer note for peace of mind.', color: 'bg-green-600' },
            ].map((item, i) => (
              <div key={i} className="relative group">
                {/* Connector line */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-16 left-[calc(100%_-_1rem)] w-[calc(100%_-_6rem)] h-0.5 bg-slate-200 z-0">
                    <ArrowRight className="absolute right-0 -top-2 w-5 h-5 text-slate-300" />
                  </div>
                )}
                <div className="bg-white border-4 border-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative z-10 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -top-4 -right-4 bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black border-2 border-slate-900 text-sm">
                    {item.step}
                  </div>
                  <div className={`${item.color} text-white w-20 h-20 mx-auto flex items-center justify-center border-2 border-slate-900 mb-6 group-hover:rotate-6 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black uppercase mb-3">{item.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA under how it works */}
          <div className="text-center mt-12">
            <a href="#contact">
              <Button className="text-lg px-10">
                Get Your Free Quote Now <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section id="services" className="py-20 bg-slate-50 border-y-2 border-slate-900 relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="No generic packages. We clear exactly what you need cleared."
          />

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            {/* Service 1: House Clearance */}
            <div className="border-4 border-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] bg-white flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 p-4 font-black text-9xl text-slate-100 -z-10 group-hover:text-red-50 transition-colors select-none">01</div>
              <div className="shrink-0 bg-red-600 text-white p-6 border-2 border-slate-900 transform rotate-1 group-hover:rotate-6 transition-transform">
                <Sofa className="w-12 h-12" />
              </div>
              <div className="grow text-center md:text-left z-10">
                <h3 className="text-3xl font-black uppercase mb-3 tracking-tight">House Clearance</h3>
                <p className="text-lg text-slate-600 mb-4 font-medium">From single sofas to full probate clearances. We handle the heavy lifting, loading, and disposal so you don&apos;t have to lift a finger.</p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {['Furniture', 'Carpets', 'Appliances', 'Loft Junk', 'Mattresses'].map(tag => (
                    <span key={tag} className="bg-slate-100 border-2 border-slate-900 px-3 py-1 font-bold text-sm">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 z-10">
                <a href="#contact">
                  <Button variant="outline" className="whitespace-nowrap group-hover:bg-slate-900 group-hover:text-white">
                    Get Price <ChevronRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Service 2 & 3 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-4 border-slate-900 p-8 bg-slate-900 text-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-4 right-4 text-slate-700 font-black text-6xl opacity-30 select-none">02</div>
                <TreePine className="w-12 h-12 text-green-400 mb-6 transform group-hover:-translate-y-2 transition-transform" />
                <h3 className="text-2xl font-black uppercase mb-3 text-white">Garden Waste</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">Overgrown jungle? Old shed? We take green waste, soil, rubble, and rotten fencing. We sweep the patio before we leave.</p>
                <ul className="space-y-2 mb-6 text-sm font-bold text-slate-400">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Green Waste</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Shed Demolition</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Soil &amp; Rubble</li>
                </ul>
                <a href="#contact">
                  <Button className="w-full bg-green-600 border-slate-900 hover:bg-green-500 text-white">Get Garden Quote</Button>
                </a>
              </div>

              <div className="border-4 border-slate-900 p-8 bg-yellow-400 text-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-4 right-4 text-yellow-600 font-black text-6xl opacity-20 select-none">03</div>
                <Construction className="w-12 h-12 text-slate-900 mb-6 transform group-hover:-translate-y-2 transition-transform" />
                <h3 className="text-2xl font-black uppercase mb-3">Builders Waste</h3>
                <p className="text-slate-900 mb-6 font-bold leading-relaxed">Cheaper than a skip permit. We turn up, load your rubble, plasterboard, and timber, and drive away immediately.</p>
                <ul className="space-y-2 mb-6 text-sm font-bold text-slate-800">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Wait &amp; Load</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Kitchen Rip-outs</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Bathroom Refurbs</li>
                </ul>
                <a href="#contact">
                  <Button variant="outline" className="w-full bg-white border-black">Get Trade Quote</Button>
                </a>
              </div>
            </div>

            {/* Service 4: Office */}
            <div className="border-4 border-slate-900 p-8 bg-white shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] flex flex-col md:flex-row items-center gap-6 group hover:bg-slate-50 transition-colors hover:-translate-y-1 transition-transform duration-300">
              <div className="shrink-0 p-4 bg-white border-2 border-slate-900 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Trash2 className="w-8 h-8" />
              </div>
              <div className="grow text-center md:text-left">
                <h3 className="text-xl font-black uppercase mb-1">Commercial &amp; Office Clearance</h3>
                <p className="text-slate-600 text-sm font-medium">Secure disposal of WEEE (electronics), confidential paper waste, and office furniture. VAT invoices provided.</p>
              </div>
              <a href="#contact">
                <Button variant="primary" className="shrink-0">Business Enquiry</Button>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-red-600 p-6 border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
              <div>
                <h3 className="text-2xl font-black text-white uppercase">Not sure if we take it?</h3>
                <p className="text-red-100 font-medium">Just send us a photo on WhatsApp and we&apos;ll give you an instant quote.</p>
              </div>
              <a href="tel:07000000000" className="bg-white px-6 py-3 font-mono font-bold border-2 border-slate-900 text-slate-900 transform rotate-2 hover:rotate-0 transition-transform text-lg flex items-center gap-2">
                <MessageCircle className="w-5 h-5" /> 07000 000 000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY US vs SKIP HIRE ========== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Why Choose Us Over a Skip?"
            subtitle="Save money. Save time. Save your back."
            light
          />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-0 border-4 border-slate-700">
            {/* Skip Hire Column */}
            <div className="bg-slate-800 p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="inline-block bg-slate-700 px-4 py-2 text-slate-400 font-black uppercase text-sm tracking-wider border border-slate-600">Skip Hire</div>
              </div>
              <ul className="space-y-5">
                {[
                  'Council permit needed (\u00a320-\u00a365)',
                  'Wait 1-3 days for delivery',
                  'You load it yourself',
                  'Blocks your driveway for days',
                  'Extra charges for heavy items',
                  'Overloading fines',
                  'No recycling guarantee',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 font-medium">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Us Column */}
            <div className="bg-red-600 p-8 md:p-10 relative">
              <div className="absolute -top-3 right-4 bg-yellow-400 text-slate-900 px-3 py-1 text-xs font-black uppercase border-2 border-slate-900 rotate-2">
                Better Value
              </div>
              <div className="text-center mb-8">
                <div className="inline-block bg-red-700 px-4 py-2 text-white font-black uppercase text-sm tracking-wider border border-red-500">Kent Complete Clearances</div>
              </div>
              <ul className="space-y-5">
                {[
                  'No permits needed \u2014 ever',
                  'Same-day &amp; next-day service',
                  'We do ALL the loading for you',
                  'In and out in under an hour',
                  'Fixed price \u2014 no surprises',
                  'Friendly, insured team',
                  '98% recycled responsibly',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="#contact">
              <Button className="text-lg bg-red-600 hover:bg-red-700 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
                Get a Free Quote &mdash; Beat Any Skip Price <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ========== PRICING INDICATORS ========== */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Transparent Pricing"
            subtitle="No surprises. No hidden fees. Just honest, upfront pricing."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Single Items', price: '30', desc: 'One sofa, fridge, mattress, or similar item. Perfect for quick removals.', items: ['1 large item', 'Loading included', 'Same-day available'], popular: false },
              { title: 'Partial Load', price: '120', desc: 'A few items or bags. Great for a garage clear-out or small garden job.', items: ['Up to 1/3 van', 'Loading included', 'Sweep up after'], popular: true },
              { title: 'Full Load', price: '220', desc: 'Full van load. Ideal for house clearances, office moves, or big garden jobs.', items: ['Full van load', 'Loading included', 'Waste transfer note'], popular: false },
            ].map((plan, i) => (
              <div key={i} className={`relative border-4 border-slate-900 p-8 bg-white text-center group hover:-translate-y-2 transition-transform duration-300 ${plan.popular ? 'shadow-[8px_8px_0px_0px_rgba(220,38,38,1)]' : 'shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 text-xs font-black uppercase border-2 border-slate-900 whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-black uppercase mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-sm text-slate-500 font-bold">from</span>
                  <div className="text-5xl font-black text-slate-900">
                    <span className="text-2xl align-top">&pound;</span>{plan.price}
                  </div>
                </div>
                <p className="text-slate-600 font-medium mb-6 text-sm">{plan.desc}</p>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact">
                  <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                    Get This Quote
                  </Button>
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-8 font-medium">
            Prices are starting guides. Every job is priced individually based on volume and access. No obligation quotes &mdash; always free.
          </p>
        </div>
      </section>

      {/* ========== TRUST BADGES ========== */}
      <section className="py-12 bg-slate-100 border-y-2 border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Shield className="w-8 h-8" />, label: 'Fully Insured', sub: 'Public liability covered' },
              { icon: <BadgeCheck className="w-8 h-8" />, label: 'EA Registered', sub: 'Upper tier carrier' },
              { icon: <Recycle className="w-8 h-8" />, label: '98% Recycled', sub: 'Eco-friendly disposal' },
              { icon: <Users className="w-8 h-8" />, label: 'Family Run', sub: 'Local & trustworthy' },
            ].map((badge, i) => (
              <div key={i} className="bg-white border-2 border-slate-900 p-6 text-center shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform">
                <div className="text-red-600 mx-auto mb-3 flex justify-center">{badge.icon}</div>
                <p className="font-black uppercase text-sm">{badge.label}</p>
                <p className="text-xs text-slate-500 font-medium mt-1">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== AREAS COVERED ========== */}
      <section id="areas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading title="Areas Covered" subtitle="We're local, reliable, and ready to roll across Kent." />
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-2 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] h-[400px]">
                <iframe
                  title="Kent Service Area"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319088.0831627931!2d0.15833215809707165!3d51.258835848529285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df310e30206141%3A0x676e191986420551!2sMaidstone%2C%20Kent!5e0!3m2!1sen!2suk!4v1709400000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="text-2xl font-black text-slate-900 uppercase mb-4">
                  Based in Maidstone,<br />Serving All of <span className="text-red-600 underline decoration-4 decoration-slate-900 underline-offset-4">Kent</span>
                </h3>
                <p className="text-slate-600 mb-6">
                  Our trucks are strategically located in Maidstone and Ashford, allowing us to offer same-day service to most major towns.
                </p>
              </div>

              <div className="bg-white p-6 border-2 border-slate-900">
                <h3 className="font-bold text-slate-400 uppercase text-xs mb-4 tracking-widest">Primary Service Locations</h3>
                <div className="flex flex-wrap gap-2">
                  {['Maidstone', 'Ashford', 'Canterbury', 'Dartford', 'Sevenoaks', 'Tunbridge Wells', 'Gillingham', 'Chatham', 'Rochester', 'Sittingbourne', 'Faversham', 'Whitstable', 'Herne Bay', 'Margate', 'Dover', 'Folkestone', 'Tonbridge', 'Gravesend', 'Swanley'].map((town) => (
                    <TownBadge key={town} name={town} />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-red-100 border-l-4 border-red-600">
                <MapPin className="w-8 h-8 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-sm">Responsible Disposal</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    All waste is taken to authorized transfer stations in Cuxton and Lenham. Waste transfer notes provided on every job.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== REVIEWS ========== */}
      <section id="reviews" className="py-20 bg-slate-50 border-y-2 border-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="What The Locals Say" subtitle="Real feedback from real Kent customers. We don't delete reviews." />

          {/* Google rating banner */}
          <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
            <div className="bg-white border-2 border-slate-900 px-6 py-3 flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <div className="text-3xl font-black text-slate-900">4.9</div>
              <div>
                <div className="flex text-yellow-500">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase">Google Rating</span>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-900 px-6 py-3 flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <Award className="w-8 h-8 text-red-600" />
              <div>
                <span className="font-black text-slate-900 text-sm uppercase">500+ Verified Reviews</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
              <button
                onClick={prevReview}
                className="bg-white border-2 border-slate-900 p-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-50 active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
              <button
                onClick={nextReview}
                className="bg-white border-2 border-slate-900 p-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-50 active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-all"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="px-4 md:px-0">
              <div className="transition-opacity duration-300">
                <ReviewCard {...reviews[activeReviewIndex]} />
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReviewIndex(idx)}
                  className={`w-3 h-3 rounded-full border-2 border-slate-900 transition-colors ${idx === activeReviewIndex ? 'bg-red-600' : 'bg-white'}`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Got questions? We've got straight answers."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === i}
                onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-500 font-medium mb-4">Still got a question?</p>
            <a href="tel:01622000000">
              <Button variant="dark">
                <Phone className="w-4 h-4" /> Call Us &mdash; We&apos;re Friendly
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA / BOOKING FORM ========== */}
      <section id="contact" className="py-20 bg-red-600 text-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white text-slate-900 max-w-4xl mx-auto border-4 border-slate-900 shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-block bg-red-100 border-2 border-red-200 px-4 py-1 mb-4 text-red-700 font-bold text-sm uppercase">
                Free, No-Obligation Quote
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Ready to Clear the Clutter?</h2>
              <p className="text-lg text-slate-600">Fill in the form below or call <a href="tel:01622000000" className="text-red-600 font-bold underline">01622 000 000</a> for an instant price.</p>
            </div>

            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Your Name</label>
                <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold" placeholder="John Smith" />
              </div>
              <div className="space-y-2">
                <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Phone Number</label>
                <input type="tel" className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold" placeholder="07000 000 000" />
              </div>
              <div className="space-y-2">
                <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Postcode</label>
                <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold" placeholder="e.g. ME14 1XX" />
              </div>
              <div className="space-y-2">
                <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Service Needed</label>
                <select className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold appearance-none">
                  <option>House Clearance</option>
                  <option>Garden Waste</option>
                  <option>Builders Waste</option>
                  <option>Office Clearance</option>
                  <option>Other / Mixed</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Description of Items</label>
                <textarea className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold h-32" placeholder="Roughly what needs going? e.g. 1 sofa, 10 black bags and a fridge..."></textarea>
              </div>
              <div className="md:col-span-2">
                <Button className="w-full text-xl py-4">
                  Get My Free Quote <ArrowRight className="w-6 h-6" />
                </Button>
                <div className="flex justify-center gap-6 mt-4 text-xs text-slate-400 font-bold">
                  <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Your data is safe</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Reply within 30 mins</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> No spam, ever</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-600 text-white p-2 border-2 border-slate-700">
                  <Truck className="w-5 h-5" />
                </div>
                <h5 className="text-white font-black uppercase tracking-wider">Kent Complete Clearances</h5>
              </div>
              <p className="text-sm mb-4">
                Professional, licensed waste removal services for Kent. We recycle 98% of what we collect. Family run, locally trusted.
              </p>
              <div className="flex gap-2 text-white">
                <a href="tel:01622000000" className="p-2 bg-slate-800 border border-slate-700 hover:bg-red-600 transition-colors"><Phone className="w-4 h-4" /></a>
                <a href="#areas" className="p-2 bg-slate-800 border border-slate-700 hover:bg-red-600 transition-colors"><MapPin className="w-4 h-4" /></a>
              </div>
            </div>

            <div>
              <h5 className="text-white font-bold uppercase tracking-wider mb-4">Services</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-red-500 transition-colors">House Clearance</a></li>
                <li><a href="#services" className="hover:text-red-500 transition-colors">Garden Waste</a></li>
                <li><a href="#services" className="hover:text-red-500 transition-colors">Office Clearouts</a></li>
                <li><a href="#services" className="hover:text-red-500 transition-colors">Wait &amp; Load</a></li>
                <li><a href="#services" className="hover:text-red-500 transition-colors">Builders Waste</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold uppercase tracking-wider mb-4">Useful Links</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#faq" className="hover:text-red-500 transition-colors">FAQ</a></li>
                <li><a href="#areas" className="hover:text-red-500 transition-colors">Areas Covered</a></li>
                <li><a href="#reviews" className="hover:text-red-500 transition-colors">Customer Reviews</a></li>
                <li><a href="#contact" className="hover:text-red-500 transition-colors">Get a Quote</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold uppercase tracking-wider mb-4">Contact</h5>
              <a href="tel:01622000000" className="text-lg font-bold text-white block mb-1 hover:text-red-400 transition-colors">01622 000 000</a>
              <p className="text-sm mb-4">info@kentcompleteclearances.co.uk</p>
              <div className="bg-slate-800 p-4 border border-slate-700 text-xs">
                <p className="font-bold text-white mb-1 flex items-center gap-1"><BadgeCheck className="w-4 h-4 text-green-400" /> Environment Agency Registered</p>
                <p>Upper Tier Carrier Dealer</p>
                <p className="font-mono text-slate-500">Reg: CBDU123456</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} Kent Complete Clearances. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with <span className="text-red-600">&hearts;</span> in Kent.</p>
          </div>
        </div>
      </footer>

      {/* ========== STICKY MOBILE CTA ========== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900 border-t-2 border-red-600 p-3 flex gap-2">
        <a href="tel:01622000000" className="flex-1 bg-red-600 text-white text-center py-3 font-black uppercase text-sm border-2 border-slate-900 flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a href="#contact" className="flex-1 bg-white text-slate-900 text-center py-3 font-black uppercase text-sm border-2 border-slate-900 flex items-center justify-center gap-2">
          <ArrowRight className="w-4 h-4" /> Free Quote
        </a>
      </div>

      {/* Bottom padding for sticky CTA on mobile */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
}
