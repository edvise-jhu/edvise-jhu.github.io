import { motion, type Easing } from "framer-motion";
import { Package, Target, Heart, FileText, Clock, ArrowRight, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as unknown as Easing },
  }),
};

const features = [
  {
    icon: Package,
    title: "Data sensemaking",
    description:
      "Helps educators explore attendance, behavior, course performance, and social-emotional indicators through guided inquiry.",
  },
  {
    icon: Target,
    title: "Intersection analysis",
    description:
      "Surfaces overlapping risk patterns across multiple indicators to support more precise targeting.",
  },
  {
    icon: Heart,
    title: "SEL as context",
    description:
      "Integrates social-emotional data to explain academic and attendance trends, not replace them.",
  },
  {
    icon: FileText,
    title: "Intervention planning",
    description:
      "Suggests evidence-aligned strategies and structures them into implementable plans.",
  },
  {
    icon: Clock,
    title: "Continuity over time",
    description:
      "Maintains context across sessions so teams can build on prior analysis rather than starting over.",
  },
  {
    icon: Sparkles,
    title: "AI-powered insights",
    description:
      "Leverages intelligent analysis to surface patterns and recommendations that might otherwise go unnoticed.",
  },
];

const steps = [
  { num: 1, label: "Identify signals", desc: "Review early warning indicators" },
  { num: 2, label: "Analyze patterns", desc: "Explore intersecting risk factors" },
  { num: 3, label: "Plan interventions", desc: "Create actionable support plans" },
];

const stats = [
  { value: "3x", label: "Faster analysis" },
  { value: "85%", label: "Time saved" },
  { value: "100+", label: "Schools served" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero with Image */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Students and educators collaborating"
            className="w-full h-full object-cover"
          />
          <div className="hero-gradient-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-background/30" />
        </div>

        {/* Decorative dots */}
        <div className="absolute top-20 right-20 w-48 h-48 dot-pattern opacity-20 rounded-full" />

        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.span
              className="accent-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
            />
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                Decision Support Platform
              </span>
            </motion.div>
            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              From early warning data
              <br />
              <span className="gradient-text-teal">to clear action.</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              EdVise supports educators in interpreting student risk signals and
              translating them into practical, evidence-aligned intervention plans.
            </motion.p>
            <motion.div
              className="flex gap-4 flex-wrap"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <a href="https://edvise-one.vercel.app/" className="btn-primary-fancy">
                Get Started <ArrowRight size={18} />
              </a>
              <a href="#what-edvise-does" className="btn-secondary-fancy">
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="what-edvise-does" className="py-24 section-gradient relative">
        {/* Decorative */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="accent-bar mx-auto" />
            <motion.h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What EdVise does
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Comprehensive tools designed for modern educational environments
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="group glass-card-hover rounded-2xl p-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-teal-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                
                <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg]"
                  style={{
                    background: `linear-gradient(135deg, hsl(174, 56%, 36%) 0%, hsl(174, 45%, 48%) 100%)`,
                    boxShadow: `0 4px 12px hsl(174, 56%, 36%, 0.25)`,
                  }}
                >
                  <f.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-lg">
              <span className="accent-bar" />
              <motion.h2
                className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Designed for{" "}
                <span className="gradient-text-teal">real workflows</span>
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                EdVise is built around how Early Warning System teams actually work:
                starting with broad signals, asking follow-up questions, and moving
                toward coordinated action under time and capacity constraints.
              </motion.p>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="glass-card-hover rounded-xl text-center p-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                  >
                    <div className="text-3xl font-extrabold gradient-text-teal">{s.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  className="glass-card-hover rounded-2xl p-6 flex items-start gap-5"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  <div className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center text-xl font-extrabold text-primary-foreground"
                    style={{
                      background: `linear-gradient(135deg, hsl(174, 56%, 36%) 0%, hsl(174, 45%, 48%) 100%)`,
                      boxShadow: `0 4px 12px hsl(174, 56%, 36%, 0.3)`,
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{step.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Connector lines */}
              <div className="hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <motion.div
            className="relative rounded-3xl overflow-hidden p-16 text-center"
            style={{
              background: `linear-gradient(135deg, hsl(213, 52%, 23%) 0%, hsl(213, 52%, 18%) 50%, hsl(174, 56%, 28%) 100%)`,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
              style={{ background: `radial-gradient(circle, hsl(174, 56%, 50%) 0%, transparent 70%)` }}
            />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
              style={{ background: `radial-gradient(circle, hsl(174, 56%, 50%) 0%, transparent 70%)` }}
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-accent-foreground mb-4">
                Ready to transform your practice?
              </h2>
              <p className="text-accent-foreground/70 max-w-lg mx-auto mb-8 text-lg leading-relaxed">
                Join schools across the country using EdVise to turn early warning data into meaningful student support.
              </p>
              <a
                href="https://edvise-one.vercel.app/"
                className="btn-primary-fancy text-lg"
              >
                Get Started Free <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
