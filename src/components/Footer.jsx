import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  Code2,
  Sparkles,
  ExternalLink,
  Coffee,
  Calendar,
  MapPin,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/SulavMaharjan",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sulav-maharjan-358209371/",
    },
    {
      icon: <Facebook size={20} />,
      label: "Facebook",
      href: "https://www.facebook.com/sulav.maharjan.937456",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      href: "mailto:sulavmaharjan87@gmail.com",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const techStack = [
    "Reactjs",
    "Tailwindcss",
    "Html/Css",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "ASP.net",
    "Git/Github",
    "Figma",
    "Trello",
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300 pt-16 pb-10 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <Code2 className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sulav's Portfolio
                <Sparkles className="inline-block ml-2" size={18} />
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Crafting exceptional digital experiences with modern technologies.
              Passionate about building innovative solutions.
            </p>
            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {link.icon}
                  </span>
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 py-2"
                  >
                    <ExternalLink
                      size={14}
                      className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="group-hover:translate-x-2 transition-transform">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="group relative px-3 py-2 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-lg text-sm text-gray-300 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </span>
              ))}
            </div>
          </div>

          {/* Contact/Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail size={18} className="text-blue-400" />
                <span>sulavmaharjan87@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <MapPin size={18} className="text-green-400" />
                <span>Based in Lalitpur, Bagmati, Nepal</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Calendar size={18} className="text-yellow-400" />
                <span>Available for job or freelance </span>
              </div>
            </div>
            <button className="group w-full px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-lg font-medium transition-all duration-300 border border-gray-700 hover:border-blue-500/30 flex items-center justify-center space-x-2">
              <Mail size={18} />
              <a href="mailto:sulavmaharjan87@gmail.com">
                <span>Send Message</span>
              </a>
              <ExternalLink
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gray-950 text-gray-500">
              <Coffee size={20} className="inline-block mx-2" />
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {currentYear} SulavMaharjan's Portfolio. All rights reserved.
              <span className="mx-2">•</span>
              <span className="inline-flex items-center">
                Crafted with{" "}
                <Heart
                  className="mx-1"
                  size={14}
                  fill="#ef4444"
                  color="#ef4444"
                />{" "}
                using React.js & Tailwind
              </span>
            </p>
          </div>

          <div className="flex items-center space-x-8">
            <button
              onClick={scrollToTop}
              className="group relative p-3 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900/30 hover:to-purple-900/30 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp
                className="text-gray-400 group-hover:text-white transition-colors"
                size={20}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>

        {/* Status indicator */}
        <div className="mt-8 pt-6 border-t border-gray-800/30 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs text-gray-500">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span>Currently available for new projects</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div>
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
