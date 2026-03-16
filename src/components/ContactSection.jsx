import { motion } from "framer-motion";
import { Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Communications</p>

  <h2 className="section-title mb-12">
    Contact Mission Control
  </h2>
        </motion.div>

        {/* Centered Contact Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-surface p-8 w-full max-w-lg flex flex-col justify-center space-y-8"
          >

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />

              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Email
                </div>

                <div className="text-sm font-mono tracking-wide">
                  devsprint@hackathon.com
                </div>
              </div>
            </div>

            {/* Event Type */}
            <div className="flex items-center gap-3">
              <Globe size={18} className="text-accent" />

              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Event Type
                </div>

                <div className="text-sm">
                  Online Hackathon
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;