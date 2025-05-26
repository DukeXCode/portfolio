import {Code, Languages, Terminal} from 'lucide-react';
import {SiGithub} from "@icons-pack/react-simple-icons";
import ProjectCard, {Project} from "./ProjectCard.tsx";
import {useTranslation} from "react-i18next";
import {i18n} from "i18next";

const LandingPage = () => {
  const {t, i18n} = useTranslation();

  return (
      <div className="min-h-screen bg-gray-900">
        {/* Minimal Navigation */}
        <nav className="flex items-center justify-between p-6">
          <div className="font-mono text-xl text-purple-500">&gt; dukex</div>
          <div className="flex gap-4">
            <div className="p-2 text-gray-400 rounded-lg hover:text-purple-400 hover:bg-gray-800">
              <Languages className="w-5 h-5" onClick={() => switchLanguage(i18n)}/>
            </div>
            <a href="https://github.com/DukeXCode"
               className="p-2 text-gray-400 rounded-lg hover:text-purple-400 hover:bg-gray-800">
              <SiGithub className="w-5 h-5"/>
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="px-6 py-12">
          <div className="space-y-6 mx-auto max-w-4xl">
            <div className="font-mono text-2xl text-purple-400">~/portfolio $</div>
            <h1 className="text-4xl font-bold text-white">
              Naïm Giger
            </h1>
            <p className="text-xl text-gray-300">
              {t('slogan')}<br/>
              {t('currently')}
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-mono text-2xl text-purple-400">
              ~/projects $
            </h2>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                  <ProjectCard key={index} project={project}/>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-mono text-2xl text-purple-400">
              ~/skills $
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {skills.map((category, index) => (
                  <div key={index} className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-400">{category.name}</h3>
                    <ul className="mt-2 space-y-1 text-gray-300">
                      {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-gray-500"/>
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
                Made with React & Tailwind CSS
              </div>
              <Terminal className="w-5 h-5 text-purple-500"/>
            </div>
          </div>
        </footer>
      </div>
  );
};

// Data

// Using an empty string as github or demo automatically hides the icon
const projects: Project[] = [
  {
    name: "Flag Quiz",
    descriptionKey: "flagQuizDescription",
    tech: ["Angular", "TypeScript", "Supabase", "Docker", "Nginx"],
    github: "",
    demo: "https://flag-quiz.dukex.ch/"
  },
  {
    name: "Cloud Condense",
    descriptionKey: "cloudCondenseDescription",
    tech: ["Vue", "TypeScript", "Java", "Spring Boot", "Microsoft SQL", "Docker"],
    github: "https://github.com/jzelAdmin2006/Hackathon2023-CloudCondense",
    demo: ""
  },
  {
    name: "Portfolio",
    descriptionKey: "portfolioDescription",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/DukeXCode/portfolio",
    demo: ""
  }
];

const skills = [
  {
    name: "Frontend",
    items: ["Angular", "Vue", "React", "TypeScript", "Node.js", "AG Grid", "Tailwind CSS"]
  },
  {
    name: "Backend",
    items: ["Java", "Kotlin", "Spring Boot", "PostgreSQL", "Gradle"]
  },
  {
    name: "DevOps",
    items: ["Docker", "Kubernetes", "Jenkins", "Linux"]
  },
  {
    name: "Business Intelligence",
    items: ["Qlik Sense", "Microsoft SQL"]
  },
  {
    name: "Mobile Apps",
    items: ["Ionic", "Capacitor"]
  },
];

const switchLanguage = async (i18n: i18n) => {
  const lng = i18n.language === "en" ? "de" : "en";
  await i18n.changeLanguage(lng);
}

export default LandingPage;