import { motion } from 'motion/react';
import { Flag, Flame, Users, Crown, Sword, Map, Scroll, Star, Hammer, Check, Mountain, Landmark } from 'lucide-react';

const iconMap: Record<string, any> = {
  flag: Flag,
  flame: Flame,
  users: Users,
  crown: Crown,
  sword: Sword,
  map: Map,
  scroll: Scroll,
  star: Star,
  hammer: Hammer,
  check: Check,
  mountain: Mountain,
  landmark: Landmark
};

interface TimelineProps {
  items: {
    year: string;
    title: string;
    description: string;
    icon: string;
  }[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative py-10">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500/30 to-transparent -translate-x-1/2"></div>
      
      <div className="space-y-12">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon] || Star;
          const isEven = index % 2 === 0;
          
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}
            >
              {/* Center Node */}
              <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-slate-950 border-4 border-slate-900 rounded-full flex items-center justify-center -translate-x-1/2 shadow-[0_0_15px_rgba(245,158,11,0.2)] z-10">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              {/* Content Card */}
              <div className="w-full pl-20 md:pl-0 md:w-1/2 flex flex-col pt-2">
                <div className={`bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/[0.07] hover:border-amber-500/30 transition-colors ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                  <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 text-sm font-bold rounded-lg mb-4 border border-amber-500/20">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
