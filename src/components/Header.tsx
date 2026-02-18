import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/team", label: "Team" },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 transition-all"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-8 flex justify-between items-center py-4">
        <Link
          to="/"
          className="font-extrabold text-2xl tracking-tight hover:-translate-y-0.5 transition-transform"
        >
          <span className="gradient-text-navy">Ed</span>
          <span className="gradient-text-teal">Vise</span>
        </Link>
        <nav className="flex gap-8 items-center">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-medium transition-colors pb-1 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full"
                  initial={false}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                  style={{ display: "block" }}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
