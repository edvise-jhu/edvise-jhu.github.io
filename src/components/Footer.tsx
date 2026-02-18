import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden mt-0">
      {/* Gradient transition from content */}
      <div className="h-24 bg-gradient-to-b from-background to-accent" />
      
      <div className="bg-accent text-accent-foreground py-16 px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <motion.div
                className="font-extrabold text-3xl mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-accent-foreground/90">Ed</span>
                <span className="text-primary">Vise</span>
              </motion.div>
              <p className="text-accent-foreground/50 leading-relaxed max-w-sm">
                Empowering educators with data-driven insights for student success.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4">
              <a
                href="https://edvise-one.vercel.app/"
                className="btn-primary-fancy text-sm"
              >
                Launch EdVise →
              </a>
              <p className="text-accent-foreground/30 text-sm">
                Built for Early Warning System teams
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-accent-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-accent-foreground/40 text-sm">
              © 2026 EdVise. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-accent-foreground/30 text-xs uppercase tracking-wider">
                Johns Hopkins University
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
