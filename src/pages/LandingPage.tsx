import { ArrowRight, CheckCircle2, ChevronRight, Clock3, Mail, Phone, ShieldCheck, Sparkles, Star, X } from 'lucide-react';
import { type PageContent } from '../content/types';

type LandingPageProps = {
  content: PageContent;
  onNavigate: (path: string) => void;
};

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white';

const eyebrowClass =
  'text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-blue)]';

const sectionHeadingClass =
  'text-3xl font-semibold tracking-[-0.03em] text-[var(--color-foreground-dark)] md:text-5xl';

const bodyCopyClass = 'text-base leading-7 text-[var(--color-muted-body)] md:text-lg';

const LandingPage = ({ content, onNavigate }: LandingPageProps) => {
  const isDutch = window.location.pathname.startsWith('/nl');

  const internalAction = (path: string) => onNavigate(path);

  const externalButtonClass =
    `${buttonBase} min-h-14 px-8 py-4 text-base font-semibold bg-[var(--color-primary-blue)] text-white shadow-[0_20px_42px_rgba(47,111,237,0.22)] hover:translate-y-[-1px] hover:bg-[#245fdc]`;
  const outlineButtonClass =
    `${buttonBase} min-h-12 border border-[rgba(16,35,61,0.14)] bg-white px-6 py-3 text-sm text-[var(--color-foreground-dark)] hover:bg-[rgba(47,111,237,0.05)]`;
  const finalCtaButtonClass =
    `${buttonBase} min-h-14 px-8 py-4 text-base font-semibold bg-white text-[var(--color-deep-navy)] shadow-[0_20px_40px_rgba(12,29,51,0.18)] hover:bg-[var(--color-primary-blue-soft)]`;

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_24%,#f7f9fc_100%)] text-[var(--color-foreground-dark)]">
      <div className="border-b border-[rgba(16,35,61,0.08)] bg-[var(--color-deep-navy)] text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 text-sm md:px-6">
          <p className="flex items-center gap-2 text-white/84">
            <ShieldCheck className="h-4 w-4 text-[var(--color-primary-blue-soft)]" />
            {content.announcementBar}
          </p>
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => internalAction(isDutch ? '/' : '/')}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${
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
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${
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

      <header className="sticky top-0 z-20 border-b border-[rgba(16,35,61,0.06)] bg-white/88 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <button
            type="button"
            onClick={() => internalAction('/')}
            className="flex items-center gap-3 text-left"
          >
            <img src="/logo.png" alt={content.brand.name} className="h-12 w-auto md:h-14" />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-[0.06em] text-[var(--color-foreground-dark)]">
                {content.brand.name}
              </div>
              <div className="text-xs text-[var(--color-muted-body)]">Automation audit for SMBs</div>
            </div>
          </button>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--color-muted-body)] md:flex">
            <a href="#deliverables" className="transition hover:text-[var(--color-foreground-dark)]">
              Deliverables
            </a>
            <a href="#review" className="transition hover:text-[var(--color-foreground-dark)]">
              Review
            </a>
            <a href="#process" className="transition hover:text-[var(--color-foreground-dark)]">
              Process
            </a>
            <a href="#faq" className="transition hover:text-[var(--color-foreground-dark)]">
              FAQ
            </a>
          </nav>

          <button
            type="button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="rounded-full bg-[var(--color-deep-navy)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0a1728]"
          >
            Contact
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,111,237,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,35,61,0.08),transparent_26%)]" />
          <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 md:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(47,111,237,0.14)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-blue)] shadow-[0_14px_28px_rgba(16,35,61,0.06)]">
                <Sparkles className="h-4 w-4" />
                {content.hero.badge}
              </div>

              <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-[var(--color-foreground-dark)] md:text-6xl md:leading-[1.02]">
                {content.hero.headline}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted-body)] md:text-xl">
                {content.hero.subheadline}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => window.open(content.calendlyUrl, '_blank', 'noopener,noreferrer')}
                  className={externalButtonClass}
                >
                  {content.hero.ctaPrimary}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a href="#deliverables" className={outlineButtonClass}>
                  {content.hero.ctaSecondary}
                </a>
              </div>

              <p className="mt-4 text-sm font-medium text-[var(--color-muted-body)]">{content.hero.microcopy}</p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {content.credibility.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[rgba(16,35,61,0.08)] bg-white p-4 shadow-[0_12px_24px_rgba(16,35,61,0.04)]"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--color-primary-blue)]" />
                      <p className="text-sm font-medium leading-6 text-[var(--color-foreground-dark)]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--color-muted-body)]">
                {content.credibility.note}
              </p>
            </div>
          </div>
        </section>

        <section id="deliverables" className="section-padding border-t border-[rgba(16,35,61,0.06)] bg-white">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-xl">
              <p className={eyebrowClass}>{content.deliverables.eyebrow}</p>
              <h2 className={`mt-4 ${sectionHeadingClass}`}>{content.deliverables.heading}</h2>
              <p className={`mt-4 ${bodyCopyClass}`}>{content.deliverables.subheading}</p>

              <div className="mt-8 rounded-2xl border border-[rgba(16,35,61,0.08)] bg-[rgba(47,111,237,0.04)] px-5 py-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-foreground-dark)]">
                  <Star className="h-4 w-4 text-[var(--color-primary-blue)]" />
                  Why it matters
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted-body)]">
                  The aim is not to recommend a big transformation. It is to identify the first workflow that can be improved with the least disruption and the clearest payback.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {content.deliverables.items.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[rgba(16,35,61,0.08)] bg-white px-5 py-5 shadow-[0_12px_24px_rgba(16,35,61,0.04)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(47,111,237,0.08)] text-sm font-semibold text-[var(--color-primary-blue)]">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--color-foreground-dark)]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted-body)]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-[rgba(16,35,61,0.08)] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-5 py-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-foreground-dark)]">
                  <ShieldCheck className="h-4 w-4 text-[var(--color-primary-blue)]" />
                  Readable and practical
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted-body)]">
                  You do not need to be technical. We keep the conversation in plain business language, with clear examples and no unnecessary jargon.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[linear-gradient(180deg,#162a4a_0%,#13223b_100%)] text-white">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-blue-soft)]">
                {content.pain.heading}
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                Does this sound familiar?
              </h2>
              <p className="mt-4 text-base leading-7 text-white/68 md:text-lg">
                {content.pain.subheading}
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {content.pain.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/8 text-[var(--color-primary-blue-soft)]">
                      <X className="h-4 w-4" />
                    </div>
                    <p className="text-lg font-medium leading-8 text-white/92 italic">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-white/48">
              {content.pain.footnote}
            </p>
          </div>
        </section>

        <section id="review" className="section-padding bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className={eyebrowClass}>{content.whatWeReview.eyebrow}</p>
              <h2 className={`mt-4 ${sectionHeadingClass}`}>
                {content.whatWeReview.heading}{' '}
                <span className="text-[var(--color-primary-blue)]">{content.whatWeReview.headingHighlight}</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {content.whatWeReview.cards.map((card, index) => (
                <article
                  key={card.name}
                  className="rounded-2xl border border-[rgba(16,35,61,0.08)] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-6 py-6 shadow-[0_12px_24px_rgba(16,35,61,0.04)]"
                >
                  <div className="flex items-center gap-3 text-sm font-semibold text-[var(--color-primary-blue)]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(47,111,237,0.08)]">
                      {index + 1}
                    </div>
                    <span className="uppercase tracking-[0.12em]">{card.name}</span>
                  </div>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted-body)]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section-padding bg-[var(--color-soft-blue)]">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className={sectionHeadingClass}>A simple path to the first improvement</h2>
              <p className={`mt-4 ${bodyCopyClass}`}>We keep the process short, clear, and easy to act on.</p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {content.howItWorks.steps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-[rgba(16,35,61,0.08)] bg-white px-6 py-8 text-center shadow-[0_12px_24px_rgba(16,35,61,0.04)]"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary-blue)] text-lg font-semibold text-white shadow-[0_16px_30px_rgba(47,111,237,0.2)]">
                    {step.step}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-[var(--color-foreground-dark)]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--color-muted-body)]">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => window.open(content.calendlyUrl, '_blank', 'noopener,noreferrer')}
                className={externalButtonClass}
              >
                {content.howItWorks.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="max-w-xl">
                <p className={eyebrowClass}>Common starting points</p>
                <h2 className={`mt-4 ${sectionHeadingClass}`}>
                  {content.opportunities.heading}{' '}
                  <span className="text-[var(--color-primary-blue)]">{content.opportunities.headingHighlight}</span>
                </h2>
                <p className={`mt-4 ${bodyCopyClass}`}>
                  These are common starting points for SMB teams that want the first useful automation, not a giant rebuild.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {content.opportunities.items.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex items-start gap-4 rounded-2xl border border-[rgba(16,35,61,0.08)] bg-[linear-gradient(180deg,#ffffff_0%,#f9fbfe_100%)] px-5 py-5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(47,111,237,0.08)] text-sm font-semibold text-[var(--color-primary-blue)]">
                      {index + 1}
                    </div>
                    <p className="text-sm font-medium leading-6 text-[var(--color-foreground-dark)]">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-padding bg-[var(--color-soft-blue)]">
          <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className={sectionHeadingClass}>Frequently asked questions</h2>
              <p className={`mt-4 ${bodyCopyClass}`}>{content.faq.subheading}</p>
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl border border-[rgba(16,35,61,0.08)] bg-white shadow-[0_12px_24px_rgba(16,35,61,0.04)]">
              {content.faq.items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start justify-between gap-4 border-b border-[rgba(16,35,61,0.06)] px-6 py-6 last:border-b-0"
                >
                  <div className="pr-4">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--color-foreground-dark)]">{item.title}</h3>
                    <p className="mt-2 max-w-3xl text-base leading-7 text-[var(--color-muted-body)]">{item.desc}</p>
                  </div>
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(47,111,237,0.08)] text-[var(--color-primary-blue)]">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,var(--color-deep-navy)_0%,#17345d_48%,#2155c7_100%)] px-6 py-10 text-white md:px-10 md:py-12">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72">Free action plan</p>
                  <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                    {content.finalCta.heading}
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                    {content.finalCta.body}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/12 bg-white/10 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--color-primary-blue-soft)]" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Good fit for</p>
                      <p className="mt-2 text-base leading-7 text-white/82">
                        Owner-led teams that want a believable, practical path to better follow-up, smoother handoffs, and less admin.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={() => window.open(content.calendlyUrl, '_blank', 'noopener,noreferrer')}
                      className={finalCtaButtonClass}
                    >
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

      <footer id="contact" className="border-t border-white/8 bg-[var(--color-deep-navy)] text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 md:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt={content.brand.name} className="h-11 w-auto" />
              <div>
                <p className="text-sm font-semibold tracking-[0.06em] text-white">{content.brand.name}</p>
                <p className="text-xs text-white/55">Automation audit for SMBs</p>
              </div>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">{content.footer.description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${content.contact.email}`}
              className="rounded-2xl border border-white/10 bg-white/6 p-4 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-blue-soft)]">
                <Mail className="h-4 w-4" />
                {content.footer.contactLabel}
              </div>
              <p className="mt-2 text-sm font-semibold text-white">{content.contact.email}</p>
            </a>
            <a
              href={`tel:${content.contact.phone}`}
              className="rounded-2xl border border-white/10 bg-white/6 p-4 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-blue-soft)]">
                <Phone className="h-4 w-4" />
                {content.footer.contactLabel}
              </div>
              <p className="mt-2 text-sm font-semibold text-white">{content.contact.phone}</p>
            </a>
          </div>
        </div>

        <div className="border-t border-white/8 bg-[rgba(255,255,255,0.02)]">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-6">
            <p>{content.footer.copyright}</p>
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary-blue-soft)]" />
              Built for SMB teams that want a practical first automation, not a giant transformation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
