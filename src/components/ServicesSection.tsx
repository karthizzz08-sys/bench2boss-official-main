import { motion } from "framer-motion";
import { Palette, Globe, TrendingUp, Briefcase, Code, Megaphone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  { icon: Palette, title: "Brand Identity", desc: "Logo design, visual identity systems, and brand guidelines that make you unforgettable." },
  { icon: Globe, title: "Web Development", desc: "Modern, responsive websites built for performance, aesthetics, and conversions." },
  { icon: TrendingUp, title: "Digital Marketing", desc: "SEO, social media strategy, and paid campaigns that drive real results." },
  { icon: Briefcase, title: "Career Consulting", desc: "Resume building, interview prep, and career strategy for ambitious professionals." },
  { icon: Code, title: "App Development", desc: "Custom mobile and web applications tailored to your business needs." },
  { icon: Megaphone, title: "Social Media", desc: "Content creation, community management, and social branding that engages." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Our Services</h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08} direction="scale">
            <motion.div
              className="group relative p-8 rounded-xl bg-background border border-border overflow-hidden card-hover cursor-pointer"
              whileHover={{ y: -10 }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-secondary group-hover:bg-primary-foreground/20 flex items-center justify-center mb-6 transition-colors duration-500">
                  <s.icon size={28} className="text-foreground group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed font-body transition-colors duration-500">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
