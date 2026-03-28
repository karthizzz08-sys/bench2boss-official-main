import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/917358782202"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl"
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 2, repeat: Infinity }}
    whileHover={{ scale: 1.15 }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} className="text-primary-foreground" />
  </motion.a>
);

export default WhatsAppButton;
