import { motion } from "framer-motion";
import { Shield, Clock, Lightbulb, HeartHandshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: Shield, title: "Trusted Expertise", desc: "Years of proven results across branding and digital services." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect deadlines and deliver projects on schedule, every time." },
  { icon: Lightbulb, title: "Creative Solutions", desc: "Unique, tailored approaches that set you apart from the competition." },
  { icon: HeartHandshake, title: "Client First", desc: "Your success is our priority — we build lasting partnerships." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">Our Edge</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Why Choose Us</h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.title} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
            <motion.div
              className="p-8 rounded-xl bg-background border border-border card-hover"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-5">
                <r.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{r.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
