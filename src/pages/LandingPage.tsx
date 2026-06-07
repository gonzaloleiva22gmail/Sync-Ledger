import React from 'react';
import { motion } from 'motion/react';
import {
  Calculator,
  CheckCircle2,
  ChevronRight,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Settings,
  ShoppingCart,
  TrendingUp,
  Users,
} from 'lucide-react';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { Button } from '@/components/ui/button';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { PageContent } from '@/content/types';
import { cn } from '@/lib/utils';

const reviewIcons = [Clock, Settings, Search, TrendingUp];
const opportunityIcons = [
  <MessageSquare key="message" />,
  <Users key="users" />,
  <TrendingUp key="trending" />,
  <ShoppingCart key="cart" />,
  <Calculator key="calculator" />,
];

interface LandingPageProps {
  content: PageContent;
  onNavigate: (path: string) => void;
}

const formatPhoneHref = (phone: string) => `tel:${phone.replace(/\s+/g, '')}`;
const formatWhatsAppHref = (value: string) => {
  const digits = value.replace(/\D+/g, '');
  if (digits.length === 0) return value;
  return `https://wa.me/${digits}`;
};

const LandingPage = ({ content, onNavigate }: LandingPageProps) => {
  const reviewCards = content.whatWeReview.cards.map((card, index) => ({
    Icon: reviewIcons[index],
    name: card.name,
    description: card.description,
    href: '#',
    cta: 'Learn more',
    background: <div className="absolute inset-0 bg-gradient-to-br from-[#F4F2FF] to-white" />,
    className: 'lg:col-span-1',
  }));

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#1F144D] px-4 py-3 text-center text-sm font-medium text-white">
        {content.announcementBar}
      </div>

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex cursor-pointer items-center" onClick={() => onNavigate('/')}>
            <img src="/logo.png" alt={content.brand.name} className="h-14 w-auto object-contain" />
          </div>
          <Button
            asChild
            className="rounded-full bg-[#8B82FE] px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#8B82FE]/20 hover:bg-[#8B82FE]/90"
          >
            <a href={content.calendlyUrl} target="_blank" rel="noopener noreferrer">
              {content.hero.ctaPrimary.toUpperCase()}
            </a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#F2EFFF] to-white py-20 md:py-32">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
          )}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <div className="mb-6 flex items-center justify-center">
            <div className="group rounded-full border border-[#8B82FE]/20 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#8B82FE]/40 hover:bg-white">
              <AnimatedShinyText className="text-xs font-bold uppercase tracking-[0.15em] text-[#8B82FE]">
                {content.hero.badge}
              </AnimatedShinyText>
            </div>
          </div>

          <TypingAnimation
            as="h1"
            duration={40}
            className="mb-8 font-display text-5xl font-black leading-[1.05] text-[#0A0A2E] md:text-7xl"
          >
            {content.hero.headline}
          </TypingAnimation>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-[#667085]"
          >
            {content.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="h-16 rounded-full bg-[#8B82FE] px-10 text-lg text-white shadow-xl shadow-[#8B82FE]/20 hover:bg-[#8B82FE]/90"
            >
              <a href={content.calendlyUrl} target="_blank" rel="noopener noreferrer">
                {content.hero.ctaPrimary}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('what-we-review')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-16 rounded-full border-2 border-gray-200 px-10 text-lg text-[#0A0A2E] hover:bg-gray-50"
            >
              {content.hero.ctaSecondary} <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75 }}
            className="mt-6 text-sm text-gray-400"
          >
            {content.hero.microcopy}
          </motion.p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#402E99] via-[#1F144D] to-[#0D0826] py-24 text-white">
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-black md:text-5xl">{content.pain.heading}</h2>
            <p className="text-lg text-white/60">{content.pain.subheading}</p>
          </div>
          <div className="mb-12 grid gap-4 md:grid-cols-2">
            {content.pain.items.map((pain) => (
              <div
                key={pain}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="mt-0.5 flex-shrink-0 text-2xl leading-none font-black text-[#9C95FF]">×</span>
                <p className="text-base font-medium italic leading-relaxed text-white/90">{pain}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-white/40">{content.pain.footnote}</p>
        </div>
      </section>

      <section
        id="what-we-review"
        className="bg-[radial-gradient(ellipse_at_center,_#F4F2FF_0%,_#FFFFFF_70%)] py-20 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B82FE]">
              {content.whatWeReview.eyebrow}
            </span>
            <h2 className="font-display text-4xl font-black text-[#0A0A2E] md:text-6xl">
              {content.whatWeReview.heading}{' '}
              <span className="bg-gradient-to-r from-[#8B82FE] to-[#9C95FF] bg-clip-text text-transparent">
                {content.whatWeReview.headingHighlight}
              </span>
            </h2>
          </div>

          <BentoGrid className="auto-rows-[16rem] lg:grid-cols-2">
            {reviewCards.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>

      <section className="bg-[#F4F2FF] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-20 text-center font-display text-4xl font-black text-[#0A0A2E] md:text-6xl">
            {content.howItWorks.heading}{' '}
            <span className="bg-gradient-to-r from-[#8B82FE] to-[#9C95FF] bg-clip-text text-transparent">
              {content.howItWorks.headingHighlight}
            </span>
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {content.howItWorks.steps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-[#EBE8FF] bg-white p-10 text-center shadow-sm"
              >
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#8B82FE] text-3xl font-black text-white shadow-xl shadow-[#8B82FE]/20">
                  {item.step}
                </div>
                <h3 className="mb-4 font-display text-xl font-bold text-[#0A0A2E]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#667085]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button
              asChild
              size="lg"
              className="h-16 rounded-full bg-[#8B82FE] px-12 text-lg font-bold text-white shadow-xl shadow-[#8B82FE]/20 hover:bg-[#8B82FE]/90"
            >
              <a href={content.calendlyUrl} target="_blank" rel="noopener noreferrer">
                {content.howItWorks.ctaLabel}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-16 text-center font-display text-4xl font-black text-[#0A0A2E] md:text-5xl">
            {content.opportunities.heading}{' '}
            <span className="bg-gradient-to-r from-[#8B82FE] to-[#9C95FF] bg-clip-text text-transparent">
              {content.opportunities.headingHighlight}
            </span>
          </h2>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {content.opportunities.items.map((item, index) => (
              <div key={item.name} className="group flex flex-col items-center text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[2rem] border border-[#EBE8FF] bg-[#F4F2FF] text-[#8B82FE] transition-all duration-500 ease-out group-hover:border-transparent group-hover:bg-[#8B82FE] group-hover:text-white group-hover:shadow-xl group-hover:shadow-[#8B82FE]/20">
                  {React.cloneElement(opportunityIcons[index], { size: 32, strokeWidth: 1.5 })}
                </div>
                <span className="text-[13px] font-bold tracking-tight text-[#667085] transition-colors duration-300 group-hover:text-[#0A0A2E]">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F2FF] py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-4xl font-black text-[#0A0A2E]">{content.faq.heading}</h2>
            <p className="text-xl text-[#667085]">{content.faq.subheading}</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#EBE8FF] bg-white shadow-sm">
            {content.faq.items.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between border-b border-gray-50 p-8 transition-colors last:border-0 hover:bg-[#F4F2FF]"
              >
                <div className="pr-8">
                  <h4 className="mb-1 text-lg font-bold text-[#0A0A2E]">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-[#667085]">{item.desc}</p>
                </div>
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#EBE8FF] text-[#8B82FE]">
                  <CheckCircle2 size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#402E99] via-[#1F144D] to-[#0D0826] py-32 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-5">
          <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-8 font-display text-4xl font-black leading-tight md:text-6xl">
            {content.finalCta.heading}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-white/70">
            {content.finalCta.body}
          </p>
          <Button
            asChild
            size="lg"
            className="min-h-[4rem] h-auto rounded-full bg-white px-6 py-4 text-center text-lg font-bold whitespace-normal text-[#8B82FE] shadow-2xl hover:bg-white/90 md:h-20 md:px-16 md:text-2xl"
          >
            <a href={content.calendlyUrl} target="_blank" rel="noopener noreferrer">
              {content.finalCta.ctaLabel}
            </a>
          </Button>
          <p className="mt-6 text-sm text-white/40">{content.finalCta.footnote}</p>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[#1F144D] pb-12 pt-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-20 grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <img src="/logo.png" alt={content.brand.name} className="mb-8 h-16 w-auto object-contain" />
              <p className="max-w-sm text-base leading-relaxed text-white/60">{content.footer.description}</p>
            </div>

            <div>
              <h5 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                {content.footer.contactLabel}
              </h5>
              <ul className="space-y-6 text-white/80">
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-[#8B82FE]">
                    <Mail size={20} />
                  </div>
                  <a
                    href={`mailto:${content.contact.email}`}
                    className="font-medium transition-colors hover:text-[#8B82FE]"
                  >
                    {content.contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-[#8B82FE]">
                    <Phone size={20} />
                  </div>
                  <a
                    href={formatPhoneHref(content.contact.phone)}
                    className="font-medium transition-colors hover:text-[#8B82FE]"
                  >
                    {content.contact.phone}
                  </a>
                </li>
                {content.contact.whatsapp ? (
                  <li className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-[#8B82FE]">
                      <MessageSquare size={20} />
                    </div>
                    <a
                      href={formatWhatsAppHref(content.contact.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium transition-colors hover:text-[#8B82FE]"
                    >
                      {content.contact.whatsapp}
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 text-center text-xs font-bold tracking-widest text-white/20">
            {content.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
