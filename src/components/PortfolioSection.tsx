import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const categories = ["All", "Branding", "Web", "Marketing", "Apps"];

const projects = [
  { title: "TechStart Brand", category: "Branding", desc: "Complete visual identity & brand guidelines for a tech startup", number: "01" },
  { title: "EliteCareer Platform", category: "Web", desc: "Modern career portal with AI-powered job matching", number: "02" },
  { title: "GrowthHub Campaign", category: "Marketing", desc: "360° digital marketing strategy driving 5x ROI", number: "03" },
  { title: "ProResume Builder", category: "Apps", desc: "Smart resume builder app with ATS optimization", number: "04" },
  { title: "SocialPulse Strategy", category: "Marketing", desc: "Social media campaign reaching 1M+ impressions", number: "05" },
  { title: "VisionCraft Identity", category: "Branding", desc: "Premium brand identity for a consulting firm", number: "06" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">Our Work</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Portfolio</h2>
          </div>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium font-body transition-all duration-300 ${
                  active === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project list — editorial style */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="divide-y divide-border"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex items-center gap-6 py-8 cursor-pointer hover:pl-4 transition-all duration-500"
                >
                  <span className="text-3xl md:text-4xl font-display font-bold text-muted-foreground/30 group-hover:text-foreground transition-colors duration-500 min-w-[3rem]">
                    {p.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        {p.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-secondary text-muted-foreground font-body">
                        {p.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-body max-w-md">
                      {p.desc}
                    </p>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight size={20} className="text-foreground" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
