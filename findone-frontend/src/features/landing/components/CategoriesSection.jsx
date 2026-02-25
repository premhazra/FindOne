import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '@components/common/SectionHeader';
import { CATEGORIES } from '@data/categories';
import { cn } from '@utils/cn';

const colorMap = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'group-hover:bg-blue-100', ring: 'group-hover:ring-blue-200' },
  green: { bg: 'bg-emerald-50', text: 'text-emerald-600', hover: 'group-hover:bg-emerald-100', ring: 'group-hover:ring-emerald-200' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', hover: 'group-hover:bg-amber-100', ring: 'group-hover:ring-amber-200' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-600', hover: 'group-hover:bg-pink-100', ring: 'group-hover:ring-pink-200' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', hover: 'group-hover:bg-violet-100', ring: 'group-hover:ring-violet-200' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', hover: 'group-hover:bg-emerald-100', ring: 'group-hover:ring-emerald-200' },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function CategoriesSection() {
  return (
    <section className="section section--gray" id="categories">
      <div className="container-app">
        <SectionHeader
          overline="CATEGORIES"
          title="Browse by service category"
          subtitle="From home repairs to tech support — find the right skilled professional for any job."
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {CATEGORIES.map(({ id, name, count, icon: Icon, color }) => {
            const c = colorMap[color] || colorMap.blue;
            return (
              <motion.div
                key={id}
                variants={cardVariants}
                className="group bg-white rounded-2xl border border-slate-100 p-5 lg:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-slate-200 hover:-translate-y-1"
              >
                <div
                  className={cn(
                    'w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ring-0 ring-transparent',
                    c.bg, c.text, c.hover, c.ring,
                    'group-hover:ring-4 group-hover:scale-110'
                  )}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-dark group-hover:text-primary-600 transition-colors">{name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-slate-400">{count} workers</span>
                  <ArrowRight size={14} className="text-slate-300 group-hover:text-primary-500 transition-all duration-300 group-hover:translate-x-0.5" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary-600 bg-primary-50 rounded-xl hover:bg-primary-100 transition-all duration-200 group"
          >
            View All Categories
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
