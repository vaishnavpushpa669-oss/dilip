import { motion } from 'motion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  PenTool, 
  Palette, 
  Layout, 
  Image, 
  Lightbulb,
  Globe, 
  Smartphone, 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  ChevronDown
} from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import BackgroundEffects from './components/BackgroundEffects';
import ProjectDetail from './pages/ProjectDetail';
import { Project, Skill } from './types';

const projects: Project[] = [
  {
    id: "echo-room",
    title: "“Coffee Worth a Second Sip.”",
    category: "Immersive Audio",
    image: "https://i.ibb.co/pB5rMzML/Screenshot-2.png",
    description: "A minimalist coffee design featuring a warm cup of espresso surrounded by soft, earthy tones. The visual promotes the idea that great coffee deserves a second chance, highlighting the concept of Second Sip in a clean and modern style.",
    features: ["Minimalist Design", "Strong Central Focus", "Clear Brand Message"],
    tags: ["Adobe Photoshop", "Blender", "Typography Tools"],
    link: "#"
  },
  {
    id: "rewritten-studio-2",
    title: "Rewritten Studio",
    category: "Fashion Studio",
    image: "https://i.ibb.co/mFvXTDjV/Screenshot-3.png",
    description: "This modern fashion poster features a clean, minimal layout with neutral tones and bold typography. The balanced composition keeps the focus on the outfit while creating a premium and contemporary brand feel. Designed to reflect simplicity, comfort, and modern lifestyle aesthetics, it showcases strong visual hierarchy and professional branding.",
    features: ["1️⃣ Minimalist Aesthetic", "2️⃣ Strong Typography Hierarchy", "3️⃣ Modern Fashion Positioning"],
    tags: ["Adobe Photoshop", "Blender", "Studio Photography Setup"],
    link: "#",
    github: "#"
  },
  {
    id: "urbansip",
    title: "URBANSIP",
    category: "Brand Identity",
    image: "https://i.ibb.co/V0jwSxgW/SIP-FRESH-1.jpg",
    description: "A fresh and modern promotional design for URBANSIP Cold Pressed Juice that highlights purity and natural energy. The vibrant orange bottle is centered against a minimal textured background, surrounded by real ingredients like orange, apple, ginger, turmeric, and mint to visually communicate freshness. Bold typography and warm tones reinforce the message of “100% cold-pressed” and “No preservatives,” creating a clean and impactful product advertisement.",
    features: ["1 Clean & Minimal Layout", "2 Natural & Fresh Visual Elements", "3 Strong Typography & Branding"],
    tags: ["Photoshop", "Illustrator", "Typography"],
    link: "#",
    github: "#"
  },
  {
    id: "swifty",
    title: "SWIFTY",
    category: "Brand Identity",
    image: "https://i.ibb.co/RTm5TS8j/Screenshot-5.png",
    description: "A delivery rider on a red scooter speeds through a motion-blurred highway at night. Bold text reads “FASTEST DELIVERY – 15 minutes or less” with the brand name “SWIFTY,” highlighting quick and efficient service.",
    features: ["1 Ultra-Fast Delivery", "2 Reliable Service", "3 Efficient Network"],
    tags: ["GPS Tracking", "AI Routing", "Mobile App System"],
    link: "#",
    github: "#"
  },
  {
    id: "aerofit",
    title: "AEROFIT",
    category: "Fitness Motivation",
    image: "https://i.ibb.co/Z1V10dp3/6.png",
    description: "A motivational fitness poster showing a silhouette of a runner training alone at night. The bold headline reads “NO DAYS OFF” with the inspiring line “Train hard even when no one is watching.” The dark, moody background highlights dedication, discipline, and determination, with the brand name “AEROFIT” displayed at the bottom.",
    features: ["1 Motivational Message", "2 Strong Visual Impact", "3 Brand Focused Design"],
    tags: ["Adobe Photoshop", "Blender", "Studio Photography Setup"],
    link: "#",
    github: "#"
  },
  {
    id: "project-1",
    title: "3D Design Showcase",
    category: "Brand Poster",
    image: "https://i.ibb.co/JW45XdSr/porjct-1.png",
    description: "A bold and creative brand poster designed to capture attention and communicate a strong visual message.",
    features: ["1. Detailed 3D Modeling", "2. Realistic Materials & Textures", "3. Clean Product Presentation"],
    tags: ["Blender", "Adobe Photoshop"],
    link: "#",
    github: "#"
  },
  {
    id: "project-2",
    title: "3D Visualization",
    category: "Brand Poster",
    image: "https://i.ibb.co/ZRvTtGL9/New-Project-8.jpg",
    description: `This project is a 3D product visualization of a modern gaming headset inspired by the design style of Razer. The focus of this work was to create a clean and premium presentation that highlights the product’s form, materials, and details. I developed the model with smooth surfaces and realistic proportions, then applied carefully crafted materials to achieve a sleek black finish with subtle reflections.

The lighting setup was designed to emphasize the curves and textures of the headset while maintaining a minimal and professional studio environment. Along with the main hero render, multiple close-up shots were created to showcase important design elements such as the ear cushions, logo, and microphone.

This project demonstrates my skills in 3D modeling, material creation, lighting, and product rendering to produce high-quality visuals suitable for modern product presentations and portfolios.`,
    features: ["1. High-Quality 3D Modeling", "Professional Studio Lighting", "Realistic Materials & Textures"],
    tags: ["Blender", "Adobe Photoshop"],
    link: "#",
    github: "#"
  },
  {
    id: "project-3",
    title: "“Pure Sound, Minimal Design.” 🎧",
    category: "Product Poster",
    image: "https://i.ibb.co/3m0JqQ6Z/New-Project-9.jpg",
    description: "This image showcases a modern pair of wireless earbuds with their charging case in a clean, minimalist studio setting. The monochrome gray aesthetic highlights the sleek design, smooth curves, and compact form of the earbuds. Multiple angles of the product emphasize its premium finish and ergonomic structure, making it ideal for modern audio experiences.",
    features: ["Wireless Earbuds Design", "Portable Charging Case", "Minimalist Product Display"],
    tags: ["Adobe Photoshop", "Blender"],
    link: "#",
    github: "#"
  }
];

const skills: Skill[] = [
  { name: "3D Modeling", icon: <PenTool className="text-accent-blue" />, level: 95 },
  { name: "Lighting & Rendering", icon: <Palette className="text-accent-orange" />, level: 90 },
  { name: "Materials & Texturing", icon: <Image className="text-accent-green" />, level: 75 },
  { name: "Creative Concept Development", icon: <Lightbulb className="text-white" />, level: 85 },
];

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <BackgroundEffects />
        <Navbar />

        <Routes>
          <Route path="/" element={
            <main>
              {/* Hero Section */}
              <section id="home" className="min-h-screen flex flex-col justify-center items-start px-6 pt-20 max-w-7xl mx-auto w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-left relative max-w-2xl"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <span className="text-xs font-mono tracking-[0.2em] uppercase text-accent-orange">Available for new projects</span>
                  </motion.div>

                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tighter leading-none">
                    Brand Posters <br />
                    <span 
                      className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-blue to-accent-green animate-gradient-x"
                      style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                      That Get You Noticed
                    </span>
                  </h1>

                  <p className="max-w-xl text-[18px] text-[#aaaaaa] font-sans font-normal mb-10 leading-relaxed">
                    I design bold, creative posters that make your brand stand out, attract attention, and leave a lasting impression.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
                    <motion.a
                      href="#projects"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-accent-orange text-white font-bold rounded-full flex items-center gap-2 group shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all"
                    >
                      View Portfolio
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all"
                    >
                      Let's Talk
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
                >
                  <ChevronDown size={32} />
                </motion.div>
              </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl font-display font-bold sticky top-32 mb-12">
                about <br />
                Oliver Grant
              </h2>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="hidden md:block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                  alt="Brand Philosophy"
                  className="w-full rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,107,0,0.1)] grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div className="text-lg md:text-xl text-white/80 font-light space-y-6">
                <p>I am a passionate 3D graphic designer focused on creating clean and visually striking product renders.</p>
                <p>My work highlights strong modeling, realistic materials, and professional lighting.</p>
                <p>I enjoy transforming simple ideas into high-quality 3D visuals and product presentations.</p>
                <p>I am continuously learning and improving to create modern, impactful designs.</p>
              </div>
              <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-accent-orange font-display font-bold text-4xl mb-2">50+</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-accent-blue font-display font-bold text-4xl mb-2">12</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest">Awards & Recognition</p>
                </div>
                <div>
                  <h4 className="text-accent-green font-display font-bold text-4xl mb-2">92%</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 bg-zinc-900/30 border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">My <br /><span className="text-accent-blue">Expertise</span></h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                I turn ideas into visuals that communicate, inspire, and leave an impact. Here are the core skills I bring to every project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all group"
                >
                  <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="font-display font-bold mb-2">{skill.name}</h3>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-accent-blue to-accent-green"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Designs That Speak</h2>
              <p className="text-white/60 font-sans text-base max-w-2xl leading-relaxed">
                A portfolio of bold, creative projects crafted to grab attention, communicate your brand’s story, and leave a lasting impression
              </p>
            </div>
            <div className="h-px flex-1 bg-white/10 mx-8 hidden md:block" />
            <div className="text-right">
              <span className="text-5xl font-display font-bold text-white/5">01</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-orange via-accent-blue to-accent-green" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">READY TO <br /><span className="text-accent-orange">COLLABORATE?</span></h2>
              <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
                Whether you have a specific project in mind or just want to explore possibilities, I'm always open to interesting conversations.
              </p>
              
              <a 
                href="mailto:og769515@gmail.com" 
                className="inline-flex items-center gap-4 text-2xl md:text-4xl font-display font-bold hover:text-accent-orange transition-colors group"
              >
                og769515@gmail.com
                <Mail className="group-hover:rotate-12 transition-transform" size={40} />
              </a>

              <div className="flex justify-center gap-8 mt-16">
                <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent-orange transition-all"><Github /></a>
                <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent-blue transition-all"><Linkedin /></a>
                <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent-green transition-all"><Twitter /></a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    } />
    <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
  </Routes>

  <footer className="py-12 px-6 border-t border-white/5 text-center">
    <p className="text-white/20 text-xs font-mono uppercase tracking-[0.3em]">
      &copy; 2026 OLIVER GRANT / ALL RIGHTS RESERVED / DESIGNED FOR THE FUTURE
    </p>
  </footer>
</div>
</Router>
  );
}
