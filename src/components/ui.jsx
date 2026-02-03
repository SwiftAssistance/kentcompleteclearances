import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ChevronDown } from 'lucide-react';

export const Button = ({ children, variant = 'primary', className = '', as, to, ...props }) => {
  const baseStyle = "font-bold py-3 px-6 transition-all duration-200 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-white text-slate-900 hover:bg-slate-50",
    outline: "bg-transparent text-slate-900 border-slate-900 hover:bg-slate-100",
    dark: "bg-slate-900 text-white hover:bg-slate-800",
  };
  const classes = `${baseStyle} ${variants[variant]} ${className}`;
  if (as === 'link' && to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }
  return <button className={classes} {...props}>{children}</button>;
};

export const SectionHeading = ({ title, subtitle, align = 'center', light = false }) => (
  <div className={`mb-8 ${align === 'left' ? 'text-left' : 'text-center'}`}>
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

export const TownBadge = ({ name }) => (
  <span className="inline-block px-4 py-2 bg-slate-100 border border-slate-900 text-slate-800 font-bold text-sm hover:bg-red-600 hover:text-white transition-colors cursor-default">
    {name}
  </span>
);

export const ReviewCard = ({ name, location, text, compact = false }) => (
  <div className={`bg-slate-50 ${compact ? 'p-6' : 'p-8 md:p-12'} border-2 border-slate-900 relative h-full flex flex-col justify-center text-center ${compact ? 'min-h-0' : 'min-h-[350px]'}`}>
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white p-2 border-2 border-slate-900 z-10">
      <div className="flex gap-1">
        {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
    </div>
    <div className={`${compact ? 'mb-4 mt-4' : 'mb-8 mt-4'}`}>
      <p className={`text-slate-700 font-medium ${compact ? 'text-base' : 'text-xl md:text-2xl'} italic leading-relaxed`}>
        &ldquo;{text}&rdquo;
      </p>
    </div>
    <div className="border-t-2 border-slate-200 pt-4 inline-block mx-auto">
      <p className={`font-black text-slate-900 uppercase tracking-wider ${compact ? 'text-sm' : 'text-lg'}`}>{name}</p>
      <p className="text-sm text-red-600 font-bold flex items-center justify-center gap-1 mt-1">
        <MapPin className="w-4 h-4" /> {location}
      </p>
    </div>
  </div>
);

export const FAQItem = ({ question, answer, isOpen, onClick }) => (
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

export const REVIEWS = [
  { name: "Sarah Jenkins", location: "Maidstone", text: "Absolutely brilliant service. The lads arrived on time, cleared my mum's garage in under an hour and swept up after. Much easier than hiring a skip." },
  { name: "Dave Miller", location: "Ashford", text: "Cheaper than the quote I got from a big national company. Friendly team, checked everything before taking it. Highly recommend for garden waste." },
  { name: "The Red Lion Pub", location: "Canterbury", text: "Use Kent Complete Clearances for all our commercial waste. Regular, reliable and they provide all the paperwork we need for the council." },
  { name: "Mrs. P. Thompson", location: "Sevenoaks", text: "I was worried about a sofa that wouldn't fit out the door. They dismantled it carefully and took it away. Very polite young men." },
  { name: "Construction Plus Ltd", location: "Dartford", text: "Top notch for wait and load. Drivers actually help load the van which is a rarity these days. Good price for rubble disposal." },
  { name: "Mike Stevens", location: "Tonbridge", text: "Great communication via WhatsApp. Sent a photo, got a price, job done next day. Couldn't ask for more." },
];

export const FAQS = [
  { question: "How much does a clearance cost?", answer: "Every job is different. A single item like a sofa starts from around \u00a330. A full house clearance depends on the volume but typically ranges from \u00a3200\u2013\u00a3800. We always give a fixed price before we start \u2014 no surprises, no hidden fees. Send us a photo for an instant quote." },
  { question: "Do I need to be at the property?", answer: "Not always. For many jobs, you can leave a key or arrange access with a neighbour. We\u2019ll send you before-and-after photos once the job is done. For larger clearances, we recommend being there at the start so you can walk us through anything specific." },
  { question: "What can\u2019t you take?", answer: "We can\u2019t take hazardous waste such as asbestos, paint, chemicals, or gas canisters. Everything else \u2014 including fridges, mattresses, TVs, tyres, and rubble \u2014 we handle. If you\u2019re unsure, just ask." },
  { question: "How quickly can you come?", answer: "We offer same-day and next-day service for most of Kent. If you call before 10am, we can usually be with you that afternoon. For planned clearances, we\u2019re happy to book in a date that works for you." },
  { question: "Are you licensed and insured?", answer: "Yes. We are a registered Upper Tier Waste Carrier with the Environment Agency (Reg: CBDU123456). We carry full public liability insurance and provide waste transfer notes for every job. Your waste is taken to authorised transfer stations \u2014 never fly-tipped." },
  { question: "Is it cheaper than hiring a skip?", answer: "Almost always, yes. With us there\u2019s no permit needed, no waiting for delivery, no heavy lifting, and no road-blocking your driveway. We load everything for you and take it away immediately. For most residential jobs, we\u2019re 20\u201340% cheaper than skip hire once you factor in permit costs." },
];

export const TOWNS = ['Maidstone','Ashford','Canterbury','Dartford','Sevenoaks','Tunbridge Wells','Gillingham','Chatham','Rochester','Sittingbourne','Faversham','Whitstable','Herne Bay','Margate','Dover','Folkestone','Tonbridge','Gravesend','Swanley'];
