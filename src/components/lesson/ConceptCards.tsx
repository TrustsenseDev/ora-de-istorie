import { motion } from 'motion/react';
import { Mountain, Landmark, Users } from 'lucide-react';

const iconMap: Record<string, any> = {
  mountain: Mountain,
  landmark: Landmark,
  users: Users,
};

interface ConceptCardsProps {
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export default function ConceptCards({ items }: ConceptCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
      {items.map((item, index) => {
        const Icon = iconMap[item.icon] || Landmark;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center hover:border-amber-500/30 transition-colors"
          >
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-400 mb-6 rotate-3 hover:rotate-6 transition-transform">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-4">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
