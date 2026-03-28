import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Users, Target, Zap, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import logo from "@/assets/logo.png";

const values = [
  { icon: Target, title: "Vision", desc: "Transforming careers with strategic precision" },
  { icon: Zap, title: "Innovation", desc: "Cutting-edge digital solutions for growth" },
  { icon: Users, title: "Collaboration", desc: "Building success through strong partnerships" },
  { icon: Award, title: "Excellence", desc: "Delivering premium quality in everything" },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(target / 40);
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-display font-bold text-foreground">
      {count}{suffix}
    </span>
  );
}

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">Who We Are</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">About Bench2Boss</h2>
        </div>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <AnimatedSection direction="left">
          <div className="flex justify-center">
            <motion.div
              className="relative p-8 rounded-2xl bg-primary border border-border"
              whileHover={{ rotate: 2, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={logo}
                alt="Bench2Boss"
                className="w-80 mx-auto brightness-0 invert"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg font-body">
              Bench2Boss is a premium branding and digital services company founded by
              <strong className="text-foreground"> Karthi M</strong> &{" "}
              <strong className="text-foreground">Rajarajan M</strong>. We specialize in
              transforming careers and businesses through strategic branding, innovative
              digital solutions, and professional consulting.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              Our mission is simple — take you from the bench to the boss seat with
              solutions that are bold, sophisticated, and results-driven.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Value cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {values.map((v, i) => (
          <AnimatedSection key={v.title} delay={i * 0.1} direction="scale">
            <motion.div
              className="p-6 rounded-xl bg-card border border-border text-center card-hover"
              whileHover={{ y: -8 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <v.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.1}>
            <div className="text-center">
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-sm text-muted-foreground mt-2 font-body">{s.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
