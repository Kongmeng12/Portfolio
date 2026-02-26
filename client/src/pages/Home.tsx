import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, ExternalLink, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Glassmorphism with Gradient Depth
 * - Dark gradient background with glassmorphic cards
 * - Smooth animations and layered depth effects
 * - Purple-to-cyan gradient accents
 * - Professional, forward-thinking aesthetic
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "PHP Laravel",
      // description: "A modern PHP Laravel application with RESTful API endpoints, database migrations, and authentication.",
      tags: ["PHP", "Laravel framework"],
      link: "/img/iss.png",
      image: "/img/iss.png",
    },
    {
      title: "Mobile App",
      // description: "A cross-platform mobile app built with Flutter, featuring a sleek UI, smooth animations, and integration with Firebase for real-time data syncing.",
      tags: ["Dart", "Flutter"],
      link: "img/cafe.png",
      image: "/img/cafe.png",
    },
    {
      title: "PHP",
      // description: "A dynamic PHP web application with a custom-built CMS, user authentication, and responsive design. The project includes a rich admin dashboard for content management and analytics.",
      tags: ["html","php","css","js"],
      link: "img/mp.png",
      image: "/img/mp.png",}
  ];

  const skills = [
    { category: "Frontend", items: ["React", "HTML", "CSS",  "JavaScript",  "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Express", "Python",] },
    { category: "Tools & DevOps", items: ["Git", "Docker", "Laravel framework"] },
    { category: "Other", items: ["Framework Flutter", "React Native"] },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 gradient-text" />
            <span className="text-lg font-bold gradient-text">MyPortfolio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-white/10 p-4 space-y-4">
            <a href="#about" className="block hover:text-primary transition-colors">About</a>
            <a href="#projects" className="block hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="block hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="block hover:text-primary transition-colors">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/Qmu7Ima7Lcqx5Cj4u7hNAk/sandbox/wKokc1CkDVq5je7KYouXNd-img-1_1772097274000_na1fn_aGVyby1ncmFkaWVudC1hYnN0cmFjdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUW11N0ltYTdMY3F4NUNqNHU3aE5Bay9zYW5kYm94L3dLb2tjMUNrRFZxNWplN0tZb3VYTmQtaW1nLTFfMTc3MjA5NzI3NDAwMF9uYTFmbl9hR1Z5YnkxbmNtRmthV1Z1ZEMxaFluTjBjbUZqZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BUEDXrVXAWnVkyeD4Yj1Nm0Y4Yb02EybNbYyB1DqpZFABz0z3nOD6wFbuIo53dZ4qLTWu2tJ2VI4ZU1IiYElsoZZ1DBDsRfchUIbNR0L44tgVjEpTZpXa96L2HOTejNJl~t~hqNDhChi1Cr4u4afhsgoBe5sApITaFHHq6b3jVp76aOodkPilNKAUf8bt36EbzIniRPeppkwP8BTIlnq76Acb4qNRrnBHz7aD7qHt~Bw1XUPoek4K3NM~jPE3DiTZ8wN40A0t1IJFApjs0s6HlAC0whIOwuk4HuLMQp2y7xU~Ks7piDsIl3sUlkqQv28UTHGaHrfleOPONIbcj8jXg__"
            alt="Hero background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container max-w-4xl mx-auto text-center slide-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            I'm Kongmeng xiong Software Developers
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            I like in building modern and responsive web applications and Mobile applications.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              Get In Touch
            </Button>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <img
                src="/img/me.jpg"
                alt="Developer workspace"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-foreground/90">
                I am passionate Front-end developer with a focus on building modern and responsive web application. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences.
              </p>
              <p className="text-lg text-foreground/90">
                My journey in tech started with a curiosity about how things work. Today, I combine that curiosity with technical expertise to deliver high-quality solutions that exceed expectations.
              </p>
              <p className="text-lg text-foreground/90">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            {/* ສ່ວນທີ່ເພີ່ມ Stats ເຂົ້າໄປ */}
  <div className="grid grid-cols-3 gap-4 pt-4">
    <div className="text-center">
      <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
      <p className="text-sm text-gray-400">Years Experience</p>
    </div>
    <div className="text-center">
      <h3 className="text-3xl font-bold text-emerald-400">50+</h3>
      <p className="text-sm text-gray-400">Years Completed</p>
    </div>
    <div className="text-center">
      <h3 className="text-3xl font-bold text-blue-400">3+</h3>
      <p className="text-sm text-gray-400">Happy client</p>
    </div>
  </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="glass-card overflow-hidden group fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                    View Image <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="glass-card p-6 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="bg-primary/10 text-foreground px-3 py-1 rounded-lg text-sm hover:bg-primary/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Let's Work Together</h2>
          <p className="text-xl text-foreground/80 mb-12">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <p className="text-xl text-foreground/80 mb-12">
            MY Phonenumber: 02028881722
             </p>

          <div className="flex flex-wrap gap-6 justify-center mb-12">
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/kongmeng.xiong.284589?sfnsn=wa&mibextid=RUbZ1f"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/20 rounded-full transition-all text-[#1877F2]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <span className="font-medium">Facebook</span>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/anuz_?igsh=cGQ2ZW9pb25ua3RjbQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#E4405F]/10 hover:bg-[#E4405F]/20 border border-[#E4405F]/20 rounded-full transition-all text-[#E4405F]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span className="font-medium">Instagram</span>
            </a>

            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="container text-center text-foreground/60">
          <p>&copy; 2024 Full Stack Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
