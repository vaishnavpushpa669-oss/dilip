import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, MessageCircle, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import BackgroundEffects from '../components/BackgroundEffects';
import { useEffect } from 'react';

interface ProjectDetailProps {
  projects: Project[];
}

export default function ProjectDetail({ projects }: ProjectDetailProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-accent-orange hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-accent-orange/30">
      <BackgroundEffects />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.button
          onClick={() => navigate(-1)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-white/60 hover:text-accent-orange transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-accent-orange font-mono text-sm uppercase tracking-[0.3em] mb-4 block">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
              {project.title}
            </h1>
            
            <div className="space-y-6 mb-12">
              <p className="text-xl text-white/80 font-light leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
              {project.longDescription && (
                <p className="text-white/40 leading-relaxed whitespace-pre-line">
                  {project.longDescription}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {(project.features || ["1️⃣ Minimalist Aesthetic", "2️⃣ Strong Typography Hierarchy", "3️⃣ Modern Fashion Positioning"]).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <ChevronRight size={14} className="text-accent-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-accent-orange text-white font-bold rounded-full flex items-center gap-2 hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all"
                >
                  Live Preview
                  <ExternalLink size={18} />
                </a>
              )}
              {project.github && (
                <a 
                  href="mailto:hello@oliver.com" 
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Let's Talk
                  <MessageCircle size={18} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
