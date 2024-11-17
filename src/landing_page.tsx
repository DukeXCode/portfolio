import { Github, Twitter, Code, ExternalLink, Mail, Terminal } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Minimal Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="font-mono text-xl text-purple-500">&gt; dukex</div>
        <div className="flex gap-4">
          <a href="https://github.com" className="p-2 text-gray-400 rounded-lg hover:text-purple-400 hover:bg-gray-800">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" className="p-2 text-gray-400 rounded-lg hover:text-purple-400 hover:bg-gray-800">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="mailto:hello@dukex.dev" className="p-2 text-gray-400 rounded-lg hover:text-purple-400 hover:bg-gray-800">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-6 py-24 mx-auto max-w-4xl">
        <div className="space-y-6">
          <div className="font-mono text-purple-400">~/portfolio $</div>
          <h1 className="text-4xl font-bold text-white">
            Full Stack Developer
          </h1>
          <p className="text-xl text-gray-300">
            Building scalable applications with modern tech stacks.
            Currently working with TypeScript, React, Node.js, and PostgreSQL.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-mono text-2xl text-white">
            ~/projects $
          </h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-6 transition-colors bg-gray-800 rounded-lg hover:bg-gray-800/80">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-gray-300">{project.description}</p>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-gray-400 hover:text-purple-400">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-purple-400">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 text-sm text-purple-300 bg-purple-900/30 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-mono text-2xl text-white">
            ~/stack $
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {techStack.map((category, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-400">{category.name}</h3>
                <ul className="mt-2 space-y-1 text-gray-300">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-gray-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-800">
            <div className="font-mono text-gray-400">
              Made with 💜 using React & Tailwind
            </div>
            <Terminal className="w-5 h-5 text-purple-500" />
          </div>
        </div>
      </footer>
    </div>
  );
};

// Data
const projects = [
  {
    name: "API Gateway",
    description: "High-performance API gateway with real-time monitoring and rate limiting.",
    tech: ["Go", "Redis", "Docker", "Prometheus"],
    github: "#",
    demo: "#"
  },
  {
    name: "Task Runner",
    description: "Distributed task processing system with fault tolerance and retry mechanisms.",
    tech: ["TypeScript", "Node.js", "RabbitMQ", "PostgreSQL"],
    github: "#",
    demo: "#"
  },
  {
    name: "Analytics Dashboard",
    description: "Real-time analytics dashboard with customizable metrics and alerts.",
    tech: ["React", "GraphQL", "TimescaleDB", "WebSocket"],
    github: "#",
    demo: "#"
  }
];

const techStack = [
  {
    name: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    name: "Backend",
    items: ["Node.js", "Go", "PostgreSQL", "Redis"]
  },
  {
    name: "DevOps",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD"]
  }
];

export default LandingPage;