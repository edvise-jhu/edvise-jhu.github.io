import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, FlaskConical, Monitor } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Robert Balfanz",
    role: "{Title}",
    bio: "{Bio}",
    initials: "RB",
    color: "from-primary to-teal-light",
  },
  {
    name: "Zilu Jiang",
    role: "{Title}",
    bio: "{Bio}",
    initials: "ZJ",
    color: "from-accent to-navy-light",
  },
  {
    name: "Abhinav Gupta",
    role: "{Title}",
    bio: "{Bio}",
    initials: "AG",
    color: "from-teal-dark to-primary",
  },
];

const tags = [
  { label: "Usability", icon: Monitor },
  { label: "Onboarding", icon: BookOpen },
  { label: "Evaluation", icon: FlaskConical },
  { label: "Testing", icon: Users },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 lg:py-28 text-center relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full opacity-[0.04]"
          style={{ background: `radial-gradient(circle, hsl(174, 56%, 50%) 0%, transparent 70%)` }}
        />

        <div className="container mx-auto px-8 relative z-10">
          <span className="accent-bar mx-auto" />
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Users size={14} className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
              Our Team
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            The people building
            <br />
            <span className="gradient-text-teal">EdVise</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            EdVise is developed by researchers, designers, and engineers focused on
            early warning systems and educator decision-making.
          </motion.p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-12 section-gradient">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="glass-card-hover rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-5`}
                  style={{ boxShadow: `0 6px 16px hsl(174, 56%, 36%, 0.25)` }}
                >
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* Design & Research Team */}
          <motion.div
            className="glass-card-hover rounded-2xl p-8 mt-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-start gap-5 mb-6">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, hsl(213, 52%, 23%) 0%, hsl(213, 40%, 32%) 100%)`,
                  boxShadow: `0 4px 12px hsl(213, 52%, 23%, 0.25)`,
                }}
              >
                <Users size={24} className="text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Design & Research Team</h3>
                <p className="text-sm text-muted-foreground">Collaborative Design & Evaluation</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Responsible for usability, onboarding, and pilot evaluation. Our cross-functional team
              ensures EdVise meets the real-world needs of educators through continuous testing and refinement.
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105"
                  style={{
                    background: `hsl(174, 56%, 36%, 0.08)`,
                    color: `hsl(174, 56%, 32%)`,
                    border: `1px solid hsl(174, 56%, 36%, 0.15)`,
                  }}
                >
                  <tag.icon size={14} />
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-20 relative rounded-3xl overflow-hidden p-14 text-center"
            style={{
              background: `linear-gradient(135deg, hsl(213, 52%, 23%) 0%, hsl(213, 52%, 18%) 50%, hsl(174, 56%, 28%) 100%)`,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
              style={{ background: `radial-gradient(circle, hsl(174, 56%, 50%) 0%, transparent 70%)` }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-accent-foreground mb-4">Join our mission</h2>
              <p className="text-accent-foreground/60 max-w-md mx-auto mb-8 leading-relaxed">
                We're always looking for talented researchers, designers, and engineers
                passionate about improving educational outcomes.
              </p>
              <button className="btn-primary-fancy">
                Get in Touch <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
