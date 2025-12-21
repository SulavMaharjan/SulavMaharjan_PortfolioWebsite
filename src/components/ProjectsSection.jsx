import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Workbloom",
    description:
      "A MERN-stack Job Portal with admin and user roles. Admins manage jobs, companies, and applicants. Users create profiles, filter and bookmark jobs, and apply easily. The platform’s key feature is an intelligent skill-matching system that auto-applies to jobs with 70%+ match, sending the user’s CV and details to the job’s admin.",
    image: "/projects/project1.png",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Shadcnui",
      "Nodejs",
      "Expressjs",
      "Mongodb",
    ],
    demoURL: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Inkspire",
    description:
      "E-commerce platform for a private bookshop with user search, wishlists, orders, and automatic discounts (5% for 5+ books + 10% loyalty). Admins manage inventory and promotions, while staff verify in-store pickups. Users receive real-time notifications and email updates.",
    image: "/projects/project2.png",
    tags: ["Reactjs", "ASP .net core web api", "Postgresql"],
    demoURL: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Medicare",
    description:
      "Building upon a React.js foundation, I developed a responsive, single-page medical web application that prioritizes an attractive and user-friendly interface through clean layout and smooth navigation, this project focused on implementing modern design principles to deliver an optimal user experience for both patients and healthcare providers.",
    image: "/projects/project3.png",
    tags: ["Reactjs", "MantineUI"],
    demoURL: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully crafted with
          attention to details, performance, and user experienece.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/SulavMaharjan"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Checkout My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
