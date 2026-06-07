import { ArrowRight, CheckCircle2, ChevronRight, Clock3, FileText, Mail, Phone, Sparkles, ShieldCheck, Star, Users } from 'lucide-react';
import { type PageContent } from '../content/types';

type LandingPageProps = {
  content: PageContent;
  onNavigate: (path: string) => void;
};

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white';

const sectionLabel =
  'inline-flex items-center rounded-full border border-[rgba(16,35,61,0.1)] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary-blue)] shadow-[0_8px_20px_rgba(16,35,61,0.04)]';

const SectionHeading = ({
  eyebrow,
  heading,
  highlight,
  subheading,
  centered = false,
}: {
  eyebrow?: string;
  heading: string;
  highlight?: string;
  subheading?: string;
  centered?: boolean;
}) => (
  <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    {eyebrow ? <div className={sectionLabel}>{eyebrow}</div> : null}
    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground-dark)] md:text-4xl">
      {heading} {highlight ? <span className="text-[var(--color-primary-blue)]">{highlight}</span> : null}
    </h2>
    {subheading ? (
      <p className="mt-4 text-base leading-7 text-[var(--color-muted-body)] md:text-lg">
        {subheading}
      </p>
    ) : null}
  </div>
);

const LandingPage = ({ content, onNavigate }: LandingPageProps) => {
  const isDutch = window.location.pathname.startsWith('/nl');

  const internalAction = (path: string) => onNavigate(path);

  const externalButtonClass =
    `${buttonBase} min-h-14 px-8 py-4 text-base font-semibold bg-[var(--color-primary-blue)] text-white shadow-[0_22px_48px_rgba(47,111,237,0.30)] hover:translate-y-[-1px] hover:bg-[#2159d4]`;
  const outlineButtonClass =
    `${buttonBase} min-h-12 border border-[rgba(16,35,61,0.12)] bg-white px-6 py-3 text-sm text-[var(--color-foreground-dark)] hover:bg-[var(--color-soft-blue)]`;
  const finalCtaButtonClass =
    `${buttonBase} min-h-16 px-9 py-4 text-base font-semibold bg-white text-[var(--color-deep-navy)] shadow-[0_20px_48px_rgba(12,29,51,0.24)] hover:bg-[var(--color-primary-blue-soft)]`;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(47,111,237,0.14),_transparent_36%),linear-gradient(180deg,#f7fbff_0%,#ffffff_22%,#f5f8fc_100%)] text-[var(--color-foreground-dark)]">
      <div className="border-b border-[rgba(16,35,61,0.08)] bg-[var(--color-deep-navy)] text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 text-sm md:px-6">
          <p className="flex items-center gap-2 text-white/85">
            <ShieldCheck className="h-4 w-4 text-[var(--color-primary-blue-soft)]" />
            {content.announcementBar}
          </p>
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => internalAction(isDutch ? '/' : '/')}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                !isDutch
                  ? 'border-white/25 bg-white/10 text-white'
                  : 'border-white/15 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => internalAction('/nl')}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                isDutch
                  ? 'border-white/25 bg-white/10 text-white'
                  : 'border-white/15 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              NL
            </button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b border-[rgba(16,35,61,0.06)] bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <button
            type="button"
            onClick={() => internalAction('/')}
            className="flex items-center gap-3 text-left"
          >
            <img src="/logo.png" alt={content.brand.name} className="h-12 w-auto md:h-14" />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-[0.08em] text-[var(--color-foreground-dark)]">
                {content.brand.name}
              </div>
              <div className="text-xs text-[var(--color-muted-body)]">Automation audit for SMBs</div>
            </div>
          </button>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--color-muted-body)] md:flex">
            <a href="#deliverables" className="transition hover:text-[var(--color-primary-blue)]">
              Deliverables
            </a>
            <a href="#review" className="transition hover:text-[var(--color-primary-blue)]">
              Review
            </a>
            <a href="#process" className="transition hover:text-[var(--color-primary-blue)]">
              Process
            </a>
            <a href="#faq" className="transition hover:text-[var(--color-primary-blue)]">
              FAQ
            </a>
          </nav>

          <button
            type="button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="rounded-full bg-[var(--color-deep-navy)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(16,35,61,0.18)] transition hover:bg-[#0a1728]"
          >
            Contact
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0)_100%)]" />
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[rgba(47,111,237,0.12)] blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[rgba(16,35,61,0.08)] blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(47,111,237,0.16)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary-blue)] shadow-[0_18px_40px_rgba(16,35,61,0.08)]">
                <Sparkles className="h-4 w-4" />
                {content.hero.badge}
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[var(--color-foreground-dark)] md:text-6xl md:leading-[1.02]">
                {content.hero.headline}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted-body)] md:text-xl">
                {content.hero.subheadline}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="button" onClick={() => window.open(content.calendlyUrl, '_blank', 'noopener,noreferrer')} className={externalButtonClass}>
                  {content.hero.ctaPrimary}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a href="#review" className={outlineButtonClass}>
                  {content.hero.ctaSecondary}
                </a>
              </div>

              <p className="mt-4 text-sm font-medium text-[var(--color-muted-body)]">{content.hero.microcopy}</p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {content.credibility.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[rgba(16,35,61,0.08)] bg-white/90 p-4 shadow-[0_18px_40px_rgba(16,35,61,0.06)]"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--color-primary-blue)]" />
                      <p className="text-sm font-medium text-[var(--color-foreground-dark)]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 max-w-2xl rounded-2xl border border-[rgba(16,35,61,0.08)] bg-white px-5 py-4 text-sm leading-7 text-[var(--color-muted-body)] shadow-[0_18px_40px_rgba(16,35,61,0.06)]">
                {content.credibility.note}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[linear-gradient(180deg,rgba(16,35,61,0.96)_0%,rgba(16,35,61,0.9)_100%)] shadow-[0_30px_80px_rgba(16,35,61,0.18)]" />
              <div className="absolute inset-x-6 top-6 h-24 rounded-full bg-[rgba(91,140,255,0.24)] blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 p-6 text-white md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Sample output</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">A clearer view of where time is leaking</h2>
                  </div>
                  <div className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/75">
                    45 to 60 min
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/7 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
                      <Users className="h-4 w-4 text-[var(--color-primary-blue-soft)]" />
                      Common patterns
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-white/72">
                      <li>• Manual follow-up across email and chat</li>
                      <li>• Context scattered between tools</li>
                      <li>• Lead response depends on one or two people</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/7 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
                      <FileText className="h-4 w-4 text-[var(--color-primary-blue-soft)]" />
                      What you leave with
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-white/72">
                      <li>• A practical gap map</li>
                      <li>• One priority workflow to automate first</li>
                      <li>• A realistic next-step plan</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-white/70">Example audit summary</p>
                    <div className="rounded-full bg-[var(--color-primary-blue)] px-3 py-1 text-xs font-semibold text-white">
                      Highest impact first
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 text-sm text-white/76 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white/6 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">Workflow</p>
                      <p className="mt-2 font-semibold">Lead intake</p>
                    </div>
                    <div className="rounded-2xl bg-white/6 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">Issue</p>
                      <p className="mt-2 font-semibold">Follow-up delay</p>
                    </div>
                    <div className="rounded-2xl bg-white/6 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">Next step</p>
                      <p className="mt-2 font-semibold">Auto-route and remind</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="deliverables" className="section-padding">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeading
              eyebrow={content.deliverables.eyebrow}
              heading={content.deliverables.heading}
              subheading={content.deliverables.subheading}
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[rgba(16,35,61,0.08)] bg-white p-6 shadow-[0_18px_40px_rgba(16,35,61,0.06)] lg:col-span-1 lg:row-span-2">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary-blue)]">
                  <Clock3 className="h-4 w-4" />
                  Audit output
                </div>
                <div className="mt-4 space-y-4">
                  {content.deliverables.items.map((item, index) => (
                    <div key={item.title} className={index === 0 ? 'rounded-2xl bg-[var(--color-soft-blue)] p-4' : 'rounded-2xl border border-[rgba(16,35,61,0.08)] p-4'}>
                      <p className="text-sm font-semibold text-[var(--color-foreground-dark)]">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted-body)]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[rgba(16,35,61,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(238,245,255,0.8))] p-6 shadow-[0_18px_40px_rgba(16,35,61,0.05)]">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary-blue)]">
                  <Star className="h-4 w-4" />
                  Why it matters
                </div>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted-body)]">
                  The aim is not to recommend a big transformation. It is to identify the first workflow that can be improved with the least disruption and the clearest payback.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-[rgba(16,35,61,0.08)] bg-white p-6 shadow-[0_18px_40px_rgba(16,35,61,0.06)]">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary-blue)]">
                  <ShieldCheck className="h-4 w-4" />
                  Readable and practical
                </div>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted-body)]">
                  You do not need to be technical. We keep the conversation in plain business language, with clear examples and no unnecessary jargon.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <SectionHeading
              eyebrow={content.pain.heading}
              heading="What usually brings people in"
              subheading={content.pain.subheading}
              centered
            />

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {content.pain.items.map((item, index) => (
                <div
                  key={item}
                  className={[
                    'rounded-[1.5rem] border border-[rgba(16,35,61,0.08)] bg-white p-5 shadow-[0_18px_40px_rgba(16,35,61,0.05)]',
                    index === 0 ? 'lg:col-span-2' : '',
                  ].join(' ')}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-primary-blue)]" />
                    <p className="text-base leading-7 text-[var(--color-foreground-dark)]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-[var(--color-muted-body)]">
              {content.pain.footnote}
            </p>
          </div>
        </section>

        <section id="review" className="section-padding">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <SectionHeading
              eyebrow={content.whatWeReview.eyebrow}
              heading={content.whatWeReview.heading}
              highlight={content.whatWeReview.headingHighlight}
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-12">
              {content.whatWeReview.cards.map((card, index) => (
                <article
                  key={card.name}
                  className={[
                    'rounded-[1.75rem] border border-[rgba(16,35,61,0.08)] bg-white p-6 shadow-[0_18px_40px_rgba(16,35,61,0.06)]',
                    index === 0 ? 'lg:col-span-7 lg:row-span-2 lg:min-h-[22rem]' : '',
                    index === 1 ? 'lg:col-span-5' : '',
                    index === 2 ? 'lg:col-span-5 lg:translate-y-2' : '',
                    index === 3 ? 'lg:col-span-7 lg:translate-y-6' : '',
                  ].join(' ')}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary-blue)]">
                      <ChevronRight className="h-4 w-4" />
                      {card.name}
                    </div>
                    <p className="mt-4 text-lg leading-8 text-[var(--color-foreground-dark)]">
                      {card.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section-padding">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <SectionHeading
              eyebrow="How it works"
              heading="A simple path to the first improvement"
              subheading="We keep the process short, clear, and easy to act on."
              centered
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {content.howItWorks.steps.map((step, index) => (
                <div
                  key={step.step}
                  className={[
                    'rounded-[1.75rem] border border-[rgba(16,35,61,0.08)] bg-white p-6 shadow-[0_18px_40px_rgba(16,35,61,0.06)]',
                    index === 1 ? 'lg:translate-y-4' : '',
                    index === 2 ? 'lg:translate-y-8' : '',
                  ].join(' ')}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary-blue)]">
                      Step {step.step}
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[var(--color-soft-blue)] text-center text-sm font-semibold leading-10 text-[var(--color-primary-blue)]">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[var(--color-foreground-dark)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--color-muted-body)]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button type="button" onClick={() => window.open(content.calendlyUrl, '_blank', 'noopener,noreferrer')} className={externalButtonClass}>
                {content.howItWorks.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Common starting points"
                heading={content.opportunities.heading}
                highlight={content.opportunities.headingHighlight}
                subheading="These are common starting points for SMB teams that want the first useful automation, not a giant rebuild."
              />
            </div>
            <div className="rounded-[1.75rem] border border-[rgba(16,35,61,0.08)] bg-white p-6 shadow-[0_18px_40px_rgba(16,35,61,0.06)]">
              <div className="grid gap-3 sm:grid-cols-2">
                {content.opportunities.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-[rgba(16,35,61,0.08)] bg-[var(--color-soft-blue)] px-4 py-4 text-sm font-semibold text-[var(--color-foreground-dark)]"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-padding">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <SectionHeading
              eyebrow="FAQ"
              heading={content.faq.heading}
              subheading={content.faq.subheading}
              centered
            />

            <div className="mx-auto mt-12 grid max-w-5xl gap-4">
              {content.faq.items.map((item) => (
                <details
                  key={item.title}
                  className="group rounded-[1.5rem] border border-[rgba(16,35,61,0.08)] bg-white p-6 shadow-[0_18px_40px_rgba(16,35,61,0.05)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold tracking-[-0.02em] text-[var(--color-foreground-dark)]">
                    <span>{item.title}</span>
                    <span className="rounded-full bg-[var(--color-soft-blue)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-blue)] transition group-open:rotate-90">
                      open
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted-body)]">{item.desc}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,var(--color-deep-navy)_0%,#17345d_45%,#235dcf_100%)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(16,35,61,0.22)] md:px-10 md:py-12">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
                    Free action plan
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                    {content.finalCta.heading}
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">
                    {content.finalCta.body}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-6 backdrop-blur">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--color-primary-blue-soft)]" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Good fit for</p>
                      <p className="mt-2 text-base leading-7 text-white/80">
                        Owner-led teams that want a believable, practical path to better follow-up, smoother handoffs, and less admin.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button type="button" onClick={() => window.open(content.calendlyUrl, '_blank', 'noopener,noreferrer')} className={finalCtaButtonClass}>
                      {content.finalCta.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/65">{content.finalCta.footnote}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-[rgba(16,35,61,0.08)] bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt={content.brand.name} className="h-11 w-auto" />
              <div>
                <p className="text-sm font-semibold tracking-[0.08em] text-[var(--color-foreground-dark)]">
                  {content.brand.name}
                </p>
                <p className="text-xs text-[var(--color-muted-body)]">{content.footer.description}</p>
              </div>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted-body)]">
              {content.footer.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${content.contact.email}`}
              className="rounded-2xl border border-[rgba(16,35,61,0.08)] bg-[var(--color-soft-blue)] p-4 transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(16,35,61,0.08)]"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary-blue)]">
                <Mail className="h-4 w-4" />
                {content.footer.contactLabel}
              </div>
              <p className="mt-2 text-sm font-semibold text-[var(--color-foreground-dark)]">{content.contact.email}</p>
            </a>
            <a
              href={`tel:${content.contact.phone}`}
              className="rounded-2xl border border-[rgba(16,35,61,0.08)] bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(16,35,61,0.08)]"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary-blue)]">
                <Phone className="h-4 w-4" />
                {content.footer.contactLabel}
              </div>
              <p className="mt-2 text-sm font-semibold text-[var(--color-foreground-dark)]">{content.contact.phone}</p>
            </a>
          </div>
        </div>

        <div className="border-t border-[rgba(16,35,61,0.08)] bg-[rgba(16,35,61,0.02)]">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-[var(--color-muted-body)] md:flex-row md:items-center md:justify-between md:px-6">
            <p>{content.footer.copyright}</p>
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary-blue)]" />
              Built for SMB teams that want a practical first automation, not a giant transformation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
