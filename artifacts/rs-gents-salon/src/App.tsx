import { useState, type ReactNode, type FormEvent } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

const phoneOne = '880 17391-76722';
const phoneTwo = '880 18135-66454';

const services = [
  {
    title: 'Hair colour',
    eyebrow: 'A considered change',
    description: 'L’Oréal, Revlon, Garnier and high-speed colour work with the finish to match.',
    number: '01',
  },
  {
    title: 'Hair treatment',
    eyebrow: 'Reset the texture',
    description: 'From hot oil and head massage to hair spa, straightening and rebonding.',
    number: '02',
  },
  {
    title: 'Cut & beard',
    eyebrow: 'The daily signature',
    description: 'Regular cuts, catalogue cuts, clean shaves and beard styling with intent.',
    number: '03',
  },
  {
    title: 'Facial',
    eyebrow: 'Good skin, quietly',
    description: 'Herbal, Japanese, gold, diamond and Hydra facials for a rested face.',
    number: '04',
  },
  {
    title: 'Body massage & spa',
    eyebrow: 'Leave lighter',
    description: 'Massage, scrub, wax, manicure and pedicure when you need a proper pause.',
    number: '05',
  },
];

const packages = [
  { name: 'The Essential', detail: 'Cut · clean shave · wash · setup · regular facial', price: '500/-' },
  { name: 'The Herbal', detail: 'Cut · clean shave · wash · setup · herbal facial', price: '700/-' },
  { name: 'The Gold Standard', detail: 'Cut · clean shave · wash · setup · gold / diamond facial', price: '1000/-' },
  { name: 'The Full Reset', detail: 'Cut · facial · manicure + pedicure · body massage · hair spa', price: '4500/-' },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openBooking = (service = '') => {
    setSelectedService(service);
    setSubmitted(false);
    setBookingOpen(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeBooking = () => setBookingOpen(false);

  return (
    <div className="rs-noise min-h-[100dvh] bg-[#120f0b] text-[#efe3cb]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#c99a3d]/20 bg-[#120f0b]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="RS Gents home">
            <span className="rs-mark transition-transform duration-500 group-hover:rotate-[-4deg]" aria-hidden="true">RS</span>
            <span className="hidden border-l border-[#c99a3d]/30 pl-3 text-[10px] font-bold uppercase leading-[1.35] tracking-[.26em] text-[#d5b16a] sm:block">
              For men only<br /><span className="font-medium tracking-[.17em] text-[#8e806b]">Parlour & spa center</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[.2em] text-[#b9aa92] lg:flex">
            <a className="transition-colors hover:text-[#e7bd62]" href="#experience">The experience</a>
            <a className="transition-colors hover:text-[#e7bd62]" href="#services">Services</a>
            <a className="transition-colors hover:text-[#e7bd62]" href="#packages">Packages</a>
            <a className="transition-colors hover:text-[#e7bd62]" href="#visit">Visit us</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={`tel:+8801739176722`} className="hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[.14em] text-[#e7bd62] transition-colors hover:text-[#f7e4af] sm:flex">
              <Phone size={14} strokeWidth={1.5} /> Call to reserve
            </a>
            <button type="button" onClick={() => setMenuOpen((value) => !value)} className="rounded-sm border border-[#c99a3d]/40 p-2 text-[#e7bd62] lg:hidden" aria-label="Toggle navigation">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#c99a3d]/20 bg-[#19140e] px-5 py-5 lg:hidden">
            {['experience', 'services', 'packages', 'visit'].map((item) => (
              <a key={item} onClick={() => setMenuOpen(false)} href={`#${item}`} className="flex border-b border-[#c99a3d]/10 py-4 text-[11px] font-bold uppercase tracking-[.22em] text-[#dfc992]">
                {item === 'visit' ? 'Visit us' : `The ${item}`}
                <ArrowUpRight className="ml-auto" size={15} />
              </a>
            ))}
            <a href={`tel:+8801739176722`} className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#e7bd62]"><Phone size={14} /> {phoneOne}</a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative isolate flex min-h-[720px] items-end overflow-hidden border-b border-[#c99a3d]/20 bg-[radial-gradient(circle_at_78%_25%,rgba(201,154,61,.18),transparent_24%),linear-gradient(135deg,#120f0b_0%,#21180d_48%,#0f0c09_100%)] pt-[76px] sm:min-h-[820px] lg:min-h-[800px]">
          <div className="hero-pattern absolute inset-0 -z-10 opacity-50" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,15,11,.18),rgba(18,15,11,.62)_62%,#120f0b_100%)]" />
          <div className="absolute right-[8%] top-[17%] -z-10 hidden select-none font-serif text-[clamp(12rem,28vw,30rem)] leading-none text-[#d4a84c]/[.06] lg:block">RS</div>
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
            <div className="max-w-[650px]">
              <div className="reveal-up flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.38em] text-[#e3b754]">
                <span className="h-px w-10 bg-[#c99a3d]" /> A finer kind of ready
              </div>
              <h1 className="reveal-up reveal-delay-1 rs-display mt-6 text-[clamp(3.3rem,9vw,7.4rem)] font-medium leading-[.91] tracking-[-.06em] text-[#f1e5ce]">
                Look good.<br /><span className="gold-text italic">Feel confident.</span>
              </h1>
              <p className="reveal-up reveal-delay-2 mt-7 max-w-[480px] text-[15px] leading-7 text-[#cfc0a8] sm:text-[17px]">
                A refined grooming room for the way you want to show up. Sharp cuts, considered colour, restorative skin and body care — all for men.
              </p>
              <div className="reveal-up reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => openBooking()} className="shine-button inline-flex h-13 items-center justify-center gap-3 bg-[#c99a3d] px-6 text-[11px] font-bold uppercase tracking-[.2em] text-[#1b1307] transition-colors hover:bg-[#e2bb64]">
                  Reserve your chair <ArrowUpRight size={16} />
                </button>
                <a href="#services" className="inline-flex h-13 items-center justify-center gap-3 border border-[#d8ae58]/60 bg-[#16110c]/35 px-6 text-[11px] font-bold uppercase tracking-[.2em] text-[#eddbb0] transition-colors hover:bg-[#c99a3d]/10">
                  Explore the menu <ChevronRight size={16} />
                </a>
              </div>
              <div className="reveal-up reveal-delay-3 mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#af9e81]">
                <span className="flex items-center gap-2"><Scissors size={14} className="text-[#c99a3d]" /> Expert barbers</span>
                <span className="flex items-center gap-2"><Sparkles size={14} className="text-[#c99a3d]" /> Premium products</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-[#c99a3d]" /> Clean & private</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-[9px] font-bold uppercase tracking-[.28em] text-[#c1ae8e] lg:flex">
            <span className="h-px w-14 bg-[#c99a3d]/70" /> Scroll to explore
          </div>
        </section>

        <section id="experience" className="relative overflow-hidden border-b border-[#c99a3d]/15 bg-[#18130d] py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-24 lg:px-10">
            <div className="relative">
              <span className="absolute -left-2 -top-10 rs-display text-[120px] leading-none text-[#c99a3d]/[.08] sm:-left-10 sm:-top-16 sm:text-[180px]">RS</span>
              <p className="relative text-[10px] font-bold uppercase tracking-[.35em] text-[#c99a3d]">More than a haircut</p>
              <h2 className="relative rs-display mt-5 max-w-[430px] text-4xl leading-[1.02] tracking-[-.04em] text-[#f0e4cc] sm:text-6xl">
                The chair is only the beginning.
              </h2>
              <div className="mt-8 h-px w-24 bg-[#c99a3d]" />
            </div>
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12">
              {[
                ['01', 'Unhurried attention', 'We start with your face, hair and the finish you actually want. No rushed, one-size-fits-all service.'],
                ['02', 'A room to reset', 'Leave the noise at the door. Our studio is warm, private and built around feeling looked after.'],
                ['03', 'The right finish', 'Every detail — neckline, beard edge, skin, colour — gets the same considered eye.'],
                ['04', 'Men, understood', 'Practical grooming and proper self-care, delivered without the performance or fuss.'],
              ].map(([number, title, text]) => (
                <div key={number} className="group border-t border-[#c99a3d]/25 pt-4">
                  <span className="text-[10px] font-bold tracking-[.2em] text-[#c99a3d]">{number}</span>
                  <h3 className="mt-5 text-[19px] font-semibold tracking-[-.02em] text-[#ebddc2]">{title}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#a99b84]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-[#c99a3d]/15 bg-[#120f0b] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.35em] text-[#c99a3d]">The service edit</p>
                <h2 className="rs-display mt-4 text-4xl tracking-[-.04em] text-[#f1e3ca] sm:text-6xl">Choose your ritual.</h2>
              </div>
              <p className="max-w-[310px] text-[13px] leading-6 text-[#a99b84] sm:text-right">Every service is a small act of self-respect. Browse the full menu, then call and make it yours.</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {services.map((service, index) => (
                <button type="button" key={service.title} onClick={() => openBooking(service.title)} className={`service-card group relative overflow-hidden border border-[#c99a3d]/25 bg-[#1a140e] text-left ${index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''} ${index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                  <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[1.22]' : 'aspect-[.82] sm:aspect-[.76]'}`}>
                    <div className="service-number absolute left-5 top-5 rs-display text-[clamp(4rem,8vw,7rem)] leading-none text-[#d4a84c]/20">{service.number}</div>
                    <div className="service-icon absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-[#d4a84c]/45 text-[#e4bc62]"><Scissors size={20} strokeWidth={1.2} /></div>
                    <span className="absolute right-4 top-4 text-[10px] font-bold tracking-[.2em] text-[#e2b957]">{service.number}</span>
                    <div className="absolute inset-x-5 bottom-5">
                      <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#e4bc62]">{service.eyebrow}</p>
                      <h3 className="rs-display mt-2 text-[25px] leading-none text-[#f4e7cb]">{service.title}</h3>
                      <p className="mt-3 max-w-[260px] text-[11px] leading-5 text-[#c9bba4]">{service.description}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#edca78]">Book this <ArrowUpRight size={13} /></span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="border-b border-[#c99a3d]/15 bg-[#1b150f] py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:items-start lg:gap-20 lg:px-10">
            <div className="lg:sticky lg:top-28">
              <p className="text-[10px] font-bold uppercase tracking-[.35em] text-[#c99a3d]">For the full day ahead</p>
              <h2 className="rs-display mt-4 text-4xl leading-[1.02] tracking-[-.04em] text-[#f1e3ca] sm:text-6xl">Pick your perfect care.</h2>
              <p className="mt-6 max-w-[340px] text-[13px] leading-6 text-[#b2a28a]">Our packages pair the essentials so you can settle in, switch off and walk out feeling unmistakably yourself.</p>
              <a href={`tel:+8801813566454`} className="mt-8 inline-flex items-center gap-3 border-b border-[#c99a3d] pb-2 text-[11px] font-bold uppercase tracking-[.2em] text-[#e3b95d]">Ask about packages <ArrowUpRight size={15} /></a>
            </div>
            <div className="divide-y divide-[#c99a3d]/20 border-y border-[#c99a3d]/20">
              {packages.map((pack, index) => (
                <button type="button" onClick={() => openBooking(pack.name)} key={pack.name} className="group flex w-full items-center gap-5 py-7 text-left transition-colors hover:bg-[#c99a3d]/[.06] sm:gap-8 sm:py-9">
                  <span className="text-[10px] font-bold tracking-[.2em] text-[#9e8251]">0{index + 1}</span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-3">
                      <span className="text-[18px] font-semibold tracking-[-.02em] text-[#eadcc1] sm:text-[21px]">{pack.name}</span>
                      <ArrowUpRight className="text-[#c99a3d] opacity-0 transition-opacity group-hover:opacity-100" size={16} />
                    </span>
                    <span className="mt-2 block max-w-[440px] text-[12px] leading-5 text-[#a99b84]">{pack.detail}</span>
                  </span>
                  <span className="rs-display text-2xl text-[#dfb452] sm:text-3xl">{pack.price}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-[#c99a3d]/15 bg-[#120f0b] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
              <div className="relative overflow-hidden border border-[#c99a3d]/30">
                <div className="package-art-ring absolute h-[260px] w-[260px] rounded-full border border-[#d4a84c]/35" />
                <div className="package-art-ring absolute h-[205px] w-[205px] rounded-full border border-[#d4a84c]/20" />
                <div className="relative text-center">
                  <span className="block text-[10px] font-bold uppercase tracking-[.45em] text-[#d4a84c]">For men only</span>
                  <span className="rs-display mt-3 block text-[clamp(6rem,14vw,10rem)] leading-none text-[#ecd18e]">RS</span>
                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-[.3em] text-[#b69b63]">Parlour & spa center</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.35em] text-[#c99a3d]">A little more than maintenance</p>
                <h2 className="rs-display mt-4 text-4xl leading-[1.04] tracking-[-.04em] text-[#f1e3ca] sm:text-5xl">Make time for the version of you that gets noticed.</h2>
                <p className="mt-6 text-[14px] leading-7 text-[#b3a58d]">From a 500/- essential to a 4500/- full reset, there is a rhythm for every week, every milestone and every reason to feel good in your own skin.</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="border border-[#c99a3d]/20 bg-[#1a140e] p-4"><span className="block text-2xl text-[#e1b856]">05</span><span className="mt-2 block text-[10px] uppercase tracking-[.16em] text-[#9e917b]">service worlds</span></div>
                  <div className="border border-[#c99a3d]/20 bg-[#1a140e] p-4"><span className="block text-2xl text-[#e1b856]">08</span><span className="mt-2 block text-[10px] uppercase tracking-[.16em] text-[#9e917b]">signature packages</span></div>
                </div>
                <button type="button" onClick={() => openBooking('A package consultation')} className="shine-button mt-8 inline-flex items-center gap-3 bg-[#c99a3d] px-6 py-4 text-[11px] font-bold uppercase tracking-[.2em] text-[#1b1307] hover:bg-[#e2bb64]">Talk through your visit <ArrowUpRight size={16} /></button>
              </div>
            </div>
          </div>
        </section>

        <section id="visit" className="border-b border-[#c99a3d]/20 bg-[#1b150f] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:gap-24">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.35em] text-[#c99a3d]">Your next good decision</p>
                <h2 className="rs-display mt-4 max-w-[590px] text-5xl leading-[.98] tracking-[-.05em] text-[#f1e3ca] sm:text-7xl">Come in as you are.<br /><span className="gold-text italic">Leave feeling ready.</span></h2>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button type="button" onClick={() => openBooking()} className="shine-button inline-flex items-center justify-center gap-3 bg-[#c99a3d] px-6 py-4 text-[11px] font-bold uppercase tracking-[.2em] text-[#1b1307] hover:bg-[#e2bb64]">Book an appointment <CalendarDays size={16} /></button>
                  <a href={`tel:+8801739176722`} className="inline-flex items-center justify-center gap-3 border border-[#c99a3d]/50 px-6 py-4 text-[11px] font-bold uppercase tracking-[.2em] text-[#e8d5a9] hover:bg-[#c99a3d]/10"><Phone size={15} /> {phoneOne}</a>
                </div>
              </div>
              <div className="border-l border-[#c99a3d]/25 pl-6 sm:pl-8">
                <div className="flex items-center gap-3 text-[#e1b65c]"><Clock3 size={18} strokeWidth={1.5} /><span className="text-[10px] font-bold uppercase tracking-[.25em]">A few useful details</span></div>
                <div className="mt-7 space-y-6">
                  <div><p className="text-[12px] font-bold uppercase tracking-[.15em] text-[#cdb88e]">Appointments</p><p className="mt-2 text-[13px] leading-6 text-[#a99b84]">Call ahead and we will set aside the right time for your service.</p></div>
                  <div><p className="text-[12px] font-bold uppercase tracking-[.15em] text-[#cdb88e]">Two direct lines</p><div className="mt-2 space-y-1 text-[14px] text-[#ead7af]"><a className="block hover:text-[#edc56d]" href="tel:+8801739176722">{phoneOne}</a><a className="block hover:text-[#edc56d]" href="tel:+8801813566454">{phoneTwo}</a></div></div>
                  <div><p className="text-[12px] font-bold uppercase tracking-[.15em] text-[#cdb88e]">The promise</p><p className="mt-2 text-[13px] leading-6 text-[#a99b84]">Look good, feel confident. Every service, every time.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#120f0b] py-16 sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.35em] text-[#c99a3d]">The RS Gents mark</p>
              <h2 className="rs-display mt-3 text-3xl text-[#eadbc1] sm:text-4xl">Good grooming is a quiet kind of power.</h2>
            </div>
            <div className="flex items-center gap-5 text-[#a99b84]">
              <a href={`tel:+8801813566454`} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.18em] hover:text-[#e5bb62]"><Phone size={15} /> Call us</a>
              <a href="#top" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.18em] hover:text-[#e5bb62]">Back to top <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#c99a3d]/25 bg-[#0f0c09]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#827560]">RS Gents · Parlour & Spa Center · For men only</p>
          <div className="flex items-center gap-5 text-[10px] font-bold uppercase tracking-[.17em] text-[#a39170]"><span className="flex items-center gap-2"><MapPin size={13} /> A welcoming local studio</span><span className="hidden sm:flex items-center gap-2"><Instagram size={13} /> RS Gents</span></div>
        </div>
      </footer>

      {bookingOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#090704]/80 p-0 backdrop-blur-sm sm:items-center sm:p-5" role="dialog" aria-modal="true" aria-label="Book an appointment">
          <div className="max-h-[92dvh] w-full max-w-[550px] overflow-y-auto border border-[#c99a3d]/35 bg-[#1b150f] p-6 shadow-2xl sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#c99a3d]">RS Gents / booking desk</p><h2 className="rs-display mt-2 text-4xl text-[#f1e3ca]">Set aside a little time.</h2></div>
              <button type="button" onClick={closeBooking} className="border border-[#c99a3d]/30 p-2 text-[#c99a3d] hover:bg-[#c99a3d]/10" aria-label="Close booking dialog"><X size={18} /></button>
            </div>
            {submitted ? (
              <div className="mt-8 border border-[#c99a3d]/35 bg-[#241b11] p-6">
                <div className="flex h-10 w-10 items-center justify-center border border-[#c99a3d] text-[#e4bb5d]"><Check size={19} /></div>
                <h3 className="rs-display mt-5 text-3xl text-[#f0e0c2]">Request received.</h3>
                <p className="mt-3 text-[13px] leading-6 text-[#b6a78f]">We have your preferred details. Please call either line to confirm your chair and time.</p>
                <div className="mt-5 flex flex-col gap-2 text-[13px] text-[#e4c477]"><a href="tel:+8801739176722">{phoneOne}</a><a href="tel:+8801813566454">{phoneTwo}</a></div>
                <button type="button" onClick={closeBooking} className="mt-7 border-b border-[#c99a3d] pb-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#e4bb5d]">Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-[10px] font-bold uppercase tracking-[.18em] text-[#b6a68c]">Your name<input required name="name" className="mt-2 h-12 w-full border border-[#c99a3d]/25 bg-[#120f0b] px-3 text-sm font-medium tracking-normal text-[#f0e1c6] outline-none focus:border-[#c99a3d]" placeholder="How should we call you?" /></label>
                  <label className="text-[10px] font-bold uppercase tracking-[.18em] text-[#b6a68c]">Phone number<input required type="tel" name="phone" className="mt-2 h-12 w-full border border-[#c99a3d]/25 bg-[#120f0b] px-3 text-sm font-medium tracking-normal text-[#f0e1c6] outline-none focus:border-[#c99a3d]" placeholder="Your direct number" /></label>
                </div>
                <label className="block text-[10px] font-bold uppercase tracking-[.18em] text-[#b6a68c]">What are we doing?<select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} className="mt-2 h-12 w-full border border-[#c99a3d]/25 bg-[#120f0b] px-3 text-sm font-medium tracking-normal text-[#f0e1c6] outline-none focus:border-[#c99a3d]"><option value="">Choose a service</option>{services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}{packages.map((pack) => <option key={pack.name} value={pack.name}>{pack.name} package</option>)}</select></label>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-[10px] font-bold uppercase tracking-[.18em] text-[#b6a68c]">Preferred day<input required type="date" name="date" className="mt-2 h-12 w-full border border-[#c99a3d]/25 bg-[#120f0b] px-3 text-sm font-medium tracking-normal text-[#f0e1c6] outline-none focus:border-[#c99a3d]" /></label>
                  <label className="text-[10px] font-bold uppercase tracking-[.18em] text-[#b6a68c]">Preferred time<select required name="time" className="mt-2 h-12 w-full border border-[#c99a3d]/25 bg-[#120f0b] px-3 text-sm font-medium tracking-normal text-[#f0e1c6] outline-none focus:border-[#c99a3d]"><option value="">Choose a time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
                </div>
                <p className="text-[11px] leading-5 text-[#8f806c]">This is a request, not a confirmed booking. We will confirm your time by phone.</p>
                <button type="submit" className="shine-button flex h-13 w-full items-center justify-center gap-3 bg-[#c99a3d] text-[11px] font-bold uppercase tracking-[.2em] text-[#1b1307] hover:bg-[#e2bb64]">Send booking request <ArrowUpRight size={16} /></button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
