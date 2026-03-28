import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi, I'm ${form.name}. ${form.message}`);
    window.open(`https://wa.me/917358782202?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Contact Us</h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimatedSection direction="left">
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { key: "name" as const, placeholder: "Your Name", type: "text" },
                { key: "email" as const, placeholder: "Your Email", type: "email" },
              ].map((f) => (
                <input
                  key={f.key}
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  value={form[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all font-body"
                />
              ))}
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none font-body"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-body"
              >
                <Send size={18} /> Send Message
              </motion.button>
            </form>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="space-y-8">
              {[
                { icon: Phone, label: "Phone", value: "+91 7358782202", href: "tel:+917358782202" },
                { icon: Mail, label: "Email", value: "info@bench2boss.com", href: "mailto:info@bench2boss.com" },
                { icon: MapPin, label: "Location", value: "Tamil Nadu, India", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 flex-shrink-0">
                    <c.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">{c.label}</p>
                    <p className="font-medium text-foreground font-body">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
