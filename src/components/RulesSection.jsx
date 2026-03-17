import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const rules = [
  "Teams may contain 1–4 participants",
  "All coding must happen during the hackathon",
  "Projects must be web-based applications",
  "Teams must submit: GitHub repository, Live demo link, Project description",
  "Use of open-source libraries is allowed",
  "Plagiarism or copied projects will result in disqualification",
  "Judges' decisions are final",
];

const criteria = [
  { label: "Innovation & Creativity", value: 30 },
  { label: "Technical Implementation", value: 30 },
  { label: "UI/UX Design", value: 20 },
  { label: "Impact & Practical Use", value: 20 },
];

const RulesSection = () => (
  <section id="rules" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">Protocol</p>
        <h2 className="section-title">Rules & Judging</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Rules */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-surface p-6"
        >
          <h3 className="font-heading font-semibold text-lg mb-4">Mission Parameters</h3>
          <ul className="space-y-3">
            {rules.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Judging */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-surface p-6"
        >
          <h3 className="font-heading font-semibold text-lg mb-4">Evaluation Matrix</h3>

          <div className="space-y-5">

            {criteria.map((c) => (
              <div key={c.label}>

                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{c.label}</span>
                  <span className="text-accent font-mono text-cyan-400">{c.value}%</span>
                </div>

                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>

                <div className="w-full h-[10px] bg-white/10 rounded-[10px] overflow-hidden">
                  <div
                    className="h-full rounded-[10px] bg-gradient-to-r from-cyan-300 to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-700 ease-out"
                    style={{ width: `${c.value}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default RulesSection;