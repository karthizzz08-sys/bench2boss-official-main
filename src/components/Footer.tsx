import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <img src={logo} alt="Bench2Boss" className="h-14 mb-4 brightness-0 invert" />
          <p className="text-sm text-primary-foreground/60 leading-relaxed font-body max-w-xs">
            From the bench to the boss seat — your transformation starts here.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60 font-body">
            <li>+91 7358782202</li>
            <li>info@bench2boss.com</li>
            <li>Tamil Nadu, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-xs text-primary-foreground/40 font-body">
          © {new Date().getFullYear()} Bench2Boss. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
