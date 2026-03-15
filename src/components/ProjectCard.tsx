import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  [key: string]: any;
}

export default function ProjectCard({ id, title, category, image, description, tags, link, github }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden"
    >
      <Link to={`/project/${id}`} className="block">
        <div className="aspect-video overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>

        <div className="p-6">
          <span className="text-xs font-mono text-accent-orange uppercase tracking-widest mb-2 block">{category}</span>
          <h3 className="text-xl font-display font-bold mb-2 group-hover:text-accent-orange transition-colors">{title}</h3>
          <p className="text-white/60 text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 rounded text-white/40">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
