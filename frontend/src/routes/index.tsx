import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import {
  ArrowRight,
  BrainCircuit,
  ChevronRight,
  CircleUserRound,
  Headset,
  Linkedin,
  MessageSquareText,
  SearchCheck,
  Sparkles,
  Twitter,
  Workflow,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Snowfall from 'react-snowfall'
import logoUrl from '../assets/logo.png'
import realTimeInsight from '../assets/realtimeinsight.png'

export const Route = createFileRoute('/')({ component: App })

/* ------------------------------------------------------------------ */
/*  Hook: observe elements and add a class when they enter the viewport */
/* ------------------------------------------------------------------ */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

function App() {
  const navigate = useNavigate()
  const [isMounted, setIsMounted] = useState(false)

  /* entrance animation trigger */
  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  /* scroll-reveal refs for each section */
  const featuresReveal = useScrollReveal()
  const stepsReveal = useScrollReveal()
  const testimonialsReveal = useScrollReveal()
  const ctaReveal = useScrollReveal()

  const features = [
    {
      icon: <MessageSquareText className="h-6 w-6 text-sky-300" />,
      title: 'Real-Time Conversation Insights',
      description:
        'Get actionable suggestions as conversations happen so teams can respond with confidence.',
      backgroundImage: realTimeInsight,
    },
    {
      icon: <Headset className="h-6 w-6 text-sky-300" />,
      title: 'Customer Service Enhancement',
      description:
        'Resolve issues faster with AI-guided responses that help agents deliver consistent outcomes.',
      backgroundImage: realTimeInsight,
    },
    {
      icon: <SearchCheck className="h-6 w-6 text-sky-300" />,
      title: 'Market Research Analysis',
      description:
        'Extract meaningful patterns from conversation data to improve strategy and decision-making.',
      backgroundImage: realTimeInsight,
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-sky-300" />,
      title: 'Content Analysis',
      description:
        'Understand sentiment, tone, and key topics automatically with NLP-powered analysis.',
      backgroundImage: realTimeInsight,
    },
    {
      icon: <Workflow className="h-6 w-6 text-sky-300" />,
      title: 'Multi-Domain Support',
      description:
        'Works across industries and conversation types from support desks to research interviews.',
      backgroundImage: realTimeInsight,
    },
    {
      icon: <Sparkles className="h-6 w-6 text-sky-300" />,
      title: 'Smart Learning',
      description:
        'Continuously improves from interactions using advanced machine learning models.',
      backgroundImage: realTimeInsight,
    },
  ]
  const testimonials = [
    {
      quote:
        'ConvoBoost helped our team cut average response time by 40% while improving customer satisfaction scores.',
      name: 'Sarah Chen',
      role: 'Customer Success Manager',
      company: 'TechFlow',
      initials: 'SC',
    },
    {
      quote:
        'The analysis depth is exactly what we needed. We can now spot trends in interview data in a fraction of the time.',
      name: 'Marcus Rodriguez',
      role: 'Market Research Lead',
      company: 'InsightCorp',
      initials: 'MR',
    },
    {
      quote:
        'Our support leads use ConvoBoost daily. It boosted team productivity and made coaching much more targeted.',
      name: 'Priya Sharma',
      role: 'Head of Support',
      company: 'CloudBase',
      initials: 'PS',
    },
  ]
  const steps = [
    {
      number: '01',
      title: 'Connect',
      description: 'Integrate ConvoBoost with your conversation channels.',
      icon: <CircleUserRound className="h-6 w-6 text-sky-300" />,
    },
    {
      number: '02',
      title: 'Analyze',
      description:
        'AI processes conversations in real-time using NLP and intent modeling.',
      icon: <BrainCircuit className="h-6 w-6 text-sky-300" />,
    },
    {
      number: '03',
      title: 'Elevate',
      description:
        'Receive intelligent insights and suggestions to boost outcomes.',
      icon: <Sparkles className="h-6 w-6 text-sky-300" />,
    },
  ]

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (!section) return
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#070b1a] text-white [scroll-behavior:smooth]">
      {/* ── CSS keyframe animations ─────────────────────────────── */}
      <style>
        {`
          @keyframes floatY {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes softReveal {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes borderGlow {
            0%, 100% { border-color: rgba(56,189,248,0.3); }
            50% { border-color: rgba(167,139,250,0.5); }
          }
        `}
      </style>

      {/* ── Snowfall overlay (above bg blobs, below content) ───── */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <Snowfall
          color="#e2ecff"
          snowflakeCount={80}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
      </div>

      {/* ── Background effects ──────────────────────────────────── */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl animate-pulse" />
        <div
          className="absolute top-44 -left-16 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl animate-pulse"
          style={{ animationDelay: '1.2s' }}
        />
        <div
          className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl animate-pulse"
          style={{ animationDelay: '2.1s' }}
        />
        {/* decorative ping particles */}
        <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-sky-300/50 animate-ping" />
        <div
          className="absolute right-1/4 top-1/3 h-1.5 w-1.5 rounded-full bg-violet-300/60 animate-ping"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-full bg-rose-300/40 animate-ping"
          style={{ animationDelay: '1.8s' }}
        />
        <div
          className="absolute top-2/3 right-1/3 h-1.5 w-1.5 rounded-full bg-fuchsia-300/40 animate-ping"
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      {/* ── Navigation ──────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b border-indigo-200/10 bg-[#070b1a]/75 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoUrl} alt="Echo Logic AI" className="h-10 w-10 object-contain" />
            <span className="text-base font-semibold tracking-wide sm:text-lg">
              Echo Logic AI
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            {(['features', 'how-it-works', 'testimonials', 'pricing'] as const).map(
              (section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(section)
                  }}
                  className="relative transition-colors hover:text-sky-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-sky-300 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {section
                    .split('-')
                    .map((w) => w[0].toUpperCase() + w.slice(1))
                    .join(' ')}
                </a>
              ),
            )}
          </div>

          <button
            onClick={() => navigate({ to: '/chat' })}
            className="rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold shadow-[0_0_36px_-14px_rgba(99,102,241,0.9)] transition-all hover:scale-[1.05] hover:-translate-y-0.5 hover:from-sky-400 hover:to-rose-400"
          >
            Start Chatting
          </button>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28">
        <div
          className={`mb-6 inline-flex items-center rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-xs font-medium tracking-wide text-sky-100 transition-all duration-700 ${
            isMounted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
          style={{ animation: isMounted ? 'borderGlow 3s ease-in-out infinite' : undefined }}
        >
          Echo Logic AI Flagship Product
        </div>

        <h1
          className={`text-5xl font-black tracking-tight transition-all duration-700 delay-100 sm:text-7xl lg:text-8xl ${
            isMounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span
            className="bg-gradient-to-r from-sky-300 via-violet-400 to-rose-400 bg-clip-text text-transparent [background-size:200%_200%]"
            style={{ animation: 'gradientShift 7s ease-in-out infinite' }}
          >
            ConvoBoost
          </span>
        </h1>
        <p
          className={`mt-5 text-2xl font-semibold text-slate-100 transition-all duration-700 delay-200 sm:text-3xl ${
            isMounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Supercharge Your Conversations with AI-Powered Insights
        </p>
        <p
          className={`mt-6 max-w-3xl text-base leading-relaxed text-slate-300 transition-all duration-700 delay-300 sm:text-lg ${
            isMounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          ConvoBoost enhances customer service, market research, and content analysis
          with intelligent real-time suggestions, helping teams move from reactive
          conversations to outcome-focused interactions.
        </p>

        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-500 ${
            isMounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <button
            onClick={() => navigate({ to: '/chat' })}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 py-3 font-semibold shadow-[0_0_36px_-14px_rgba(217,70,239,0.75)] transition-all hover:scale-[1.05] hover:-translate-y-0.5 hover:from-violet-400 hover:to-fuchsia-400"
          >
            Start Chatting
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="group inline-flex items-center gap-2 rounded-full border border-indigo-200/20 bg-white/5 px-7 py-3 font-semibold text-slate-100 backdrop-blur transition-all hover:scale-[1.05] hover:-translate-y-0.5 hover:border-sky-300/50 hover:bg-sky-300/10"
          >
            Learn More
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────── */}
      <section id="features" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Why ConvoBoost?</h2>
        </div>
        <div ref={featuresReveal.ref} className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
  <article
    key={feature.title}
    className={`group relative overflow-hidden rounded-2xl border border-indigo-200/15 bg-slate-900/45 p-6 backdrop-blur-xl transition-all duration-700 hover:-translate-y-1.5 hover:border-sky-300/50 hover:bg-slate-900/70 hover:shadow-[0_0_30px_-16px_rgba(56,189,248,0.7)] ${
      featuresReveal.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}
    style={{ transitionDelay: `${180 + index * 100}ms` }}
  >
    {/* --- WATERMARK IMAGE START --- */}
    {feature.backgroundImage && (
      <img
        src={feature.backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.40] grayscale transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"
      />
    )}
    {/* --- WATERMARK IMAGE END --- */}

    <div className="relative z-10"> {/* Added z-10 to keep text above image */}
      <div className="mb-4 inline-flex rounded-xl border border-sky-300/30 bg-sky-400/10 p-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        {feature.icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
      <p className="text-slate-300 font-semibold">{feature.description}</p>
    </div>
  </article>
))}
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────── */}
      <section id="how-it-works" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Workflow
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How It Works</h2>
        </div>

        <div ref={stepsReveal.ref} className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`relative rounded-2xl border border-indigo-200/15 bg-slate-900/45 p-6 backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 hover:border-violet-300/40 hover:shadow-[0_0_30px_-16px_rgba(167,139,250,0.6)] ${
                stepsReveal.isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${250 + idx * 120}ms` }}
            >
              {idx < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-[2px] w-6 bg-gradient-to-r from-sky-400 to-violet-500 lg:block" />
              )}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-bold tracking-wider text-sky-300">
                  {step.number}
                </span>
                <div className="rounded-lg border border-sky-300/30 bg-sky-400/10 p-2">
                  {step.icon}
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────── */}
      <section id="testimonials" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What Our Users Say</h2>
        </div>

        <div ref={testimonialsReveal.ref} className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`rounded-2xl border border-indigo-200/15 bg-slate-900/45 p-6 backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 hover:border-rose-300/40 hover:shadow-[0_0_30px_-16px_rgba(251,113,133,0.7)] ${
                testimonialsReveal.isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${320 + index * 120}ms`,
                animation: testimonialsReveal.isVisible
                  ? `floatY ${5 + index}s ease-in-out ${index * 0.3}s infinite`
                  : undefined,
              }}
            >
              <p className="text-slate-200">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r from-sky-400 to-violet-500 text-sm font-bold text-slate-950">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-300">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Pricing / CTA ───────────────────────────────────────── */}
      <section
        id="pricing"
        className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6"
      >
        <div
          ref={ctaReveal.ref}
          className={`rounded-3xl border border-sky-300/20 bg-gradient-to-br from-violet-500/25 via-[#101832] to-sky-500/25 p-8 text-center backdrop-blur-xl sm:p-12 transition-all duration-700 ${
            ctaReveal.isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
          style={{ animation: ctaReveal.isVisible ? 'softReveal 0.9s ease-out' : undefined }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Get Started
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
            Ready to Elevate Your Conversations?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Start using ConvoBoost to drive faster responses, stronger insights, and
            better outcomes across every interaction.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate({ to: '/chat' })}
              className="rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-7 py-3 font-semibold shadow-[0_0_36px_-14px_rgba(99,102,241,0.9)] transition-all hover:scale-[1.05] hover:-translate-y-0.5"
            >
              Start Chatting Now
            </button>
            <a
              href="mailto:contact@echologic.ai"
              className="rounded-full border border-indigo-200/25 bg-white/10 px-7 py-3 font-semibold backdrop-blur transition-all hover:scale-[1.05] hover:-translate-y-0.5 hover:border-sky-300/50 hover:bg-sky-300/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="border-t border-indigo-200/10 bg-[#060913]/85">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 text-sm text-slate-300 sm:flex-row sm:px-6">
          <div>
            <p>© 2026 Echo Logic AI. All rights reserved.</p>
            <p className="mt-1 text-slate-400">Powered by Echo Logic AI</p>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-sky-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sky-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-300 transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-sky-300 transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
