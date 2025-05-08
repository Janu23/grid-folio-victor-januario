
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();

  // Mock project data with translations
  const projectsData = {
    project1: {
      en: {
        title: "E-commerce Platform",
        description: "A complete e-commerce system developed with React and Node.js, including online payments, order management and admin panel.",
        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec orci blandit finibus. Mauris euismod risus in dolor maximus, ac vestibulum nunc efficitur. Sed nec luctus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sagittis bibendum eros, ac scelerisque magna eleifend eu.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae sem eu nisi tincidunt egestas. Duis non nulla sed justo tincidunt suscipit. Maecenas at dictum orci, ut ullamcorper neque. Nulla facilisi. Vivamus eget aliquam est. Quisque nec lacus at lorem efficitur elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sit amet metus non velit pulvinar sollicitudin. Sed porttitor nulla nec dui finibus, vel dignissim lectus tempor.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "AWS S3"],
        linkText: "View Project"
      },
      pt: {
        title: "Plataforma de E-commerce",
        description: "Um sistema completo de e-commerce desenvolvido com React e Node.js, incluindo pagamentos online, gerenciamento de pedidos e painel administrativo.",
        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec orci blandit finibus. Mauris euismod risus in dolor maximus, ac vestibulum nunc efficitur. Sed nec luctus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sagittis bibendum eros, ac scelerisque magna eleifend eu.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae sem eu nisi tincidunt egestas. Duis non nulla sed justo tincidunt suscipit. Maecenas at dictum orci, ut ullamcorper neque. Nulla facilisi. Vivamus eget aliquam est. Quisque nec lacus at lorem efficitur elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sit amet metus non velit pulvinar sollicitudin. Sed porttitor nulla nec dui finibus, vel dignissim lectus tempor.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "API Stripe", "AWS S3"],
        linkText: "Ver Projeto"
      },
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com"
    },
    project2: {
      en: {
        title: "Personal Finance App",
        description: "Mobile application for personal finance control with chart visualization, automatic categorization and expense forecasts.",
        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec orci blandit finibus. Mauris euismod risus in dolor maximus, ac vestibulum nunc efficitur. Sed nec luctus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sagittis bibendum eros, ac scelerisque magna eleifend eu.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae sem eu nisi tincidunt egestas. Duis non nulla sed justo tincidunt suscipit. Maecenas at dictum orci, ut ullamcorper neque. Nulla facilisi. Vivamus eget aliquam est. Quisque nec lacus at lorem efficitur elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sit amet metus non velit pulvinar sollicitudin. Sed porttitor nulla nec dui finibus, vel dignissim lectus tempor.",
        technologies: ["React Native", "Firebase", "Expo", "Victory Charts", "Plaid API"],
        linkText: "View Project"
      },
      pt: {
        title: "App de Finanças Pessoais",
        description: "Aplicativo mobile para controle de finanças pessoais com visualização de gráficos, categorizações automáticas e previsões de gastos.",
        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec orci blandit finibus. Mauris euismod risus in dolor maximus, ac vestibulum nunc efficitur. Sed nec luctus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sagittis bibendum eros, ac scelerisque magna eleifend eu.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae sem eu nisi tincidunt egestas. Duis non nulla sed justo tincidunt suscipit. Maecenas at dictum orci, ut ullamcorper neque. Nulla facilisi. Vivamus eget aliquam est. Quisque nec lacus at lorem efficitur elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sit amet metus non velit pulvinar sollicitudin. Sed porttitor nulla nec dui finibus, vel dignissim lectus tempor.",
        technologies: ["React Native", "Firebase", "Expo", "Victory Charts", "API Plaid"],
        linkText: "Ver Projeto"
      },
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com"
    },
    project3: {
      en: {
        title: "Business Management System",
        description: "Business management software with HR, accounting, inventory and CRM modules integrated into a single web platform.",
        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec orci blandit finibus. Mauris euismod risus in dolor maximus, ac vestibulum nunc efficitur. Sed nec luctus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sagittis bibendum eros, ac scelerisque magna eleifend eu.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae sem eu nisi tincidunt egestas. Duis non nulla sed justo tincidunt suscipit. Maecenas at dictum orci, ut ullamcorper neque. Nulla facilisi. Vivamus eget aliquam est. Quisque nec lacus at lorem efficitur elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sit amet metus non velit pulvinar sollicitudin. Sed porttitor nulla nec dui finibus, vel dignissim lectus tempor.",
        technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
        linkText: "View Project"
      },
      pt: {
        title: "Sistema de Gestão Empresarial",
        description: "Software de gestão empresarial com módulos de RH, contabilidade, estoque e CRM integrados em uma única plataforma web.",
        fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec orci blandit finibus. Mauris euismod risus in dolor maximus, ac vestibulum nunc efficitur. Sed nec luctus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sagittis bibendum eros, ac scelerisque magna eleifend eu.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae sem eu nisi tincidunt egestas. Duis non nulla sed justo tincidunt suscipit. Maecenas at dictum orci, ut ullamcorper neque. Nulla facilisi. Vivamus eget aliquam est. Quisque nec lacus at lorem efficitur elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sit amet metus non velit pulvinar sollicitudin. Sed porttitor nulla nec dui finibus, vel dignissim lectus tempor.",
        technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
        linkText: "Ver Projeto"
      },
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com"
    }
  };

  const currentLang = language === 'en' ? 'en' : 'pt';
  // @ts-ignore
  const project = id && projectsData[id] ? projectsData[id][currentLang] : null;
  
  const backText = language === 'en' ? 'Back to home page' : 'Voltar para a página inicial';
  const projectNotFoundText = language === 'en' ? 'Project not found' : 'Projeto não encontrado';
  const descriptionText = language === 'en' ? 'Description' : 'Descrição';
  const technologiesText = language === 'en' ? 'Technologies Used' : 'Tecnologias Utilizadas';

  if (!project) {
    return (
      <div className="grid-bg min-h-screen font-mono flex items-center justify-center">
        <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-2xl font-bold mb-4">{projectNotFoundText}</h1>
          <Link to="/" className="inline-flex items-center text-black font-bold">
            <ArrowLeft className="mr-1 h-4 w-4" /> {backText}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid-bg min-h-screen font-mono">
      <Header />

      <main className="container mx-auto px-4 pt-8 pb-16">
        <Link to="/" className="inline-flex items-center text-black font-bold mb-8 hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" /> {backText}
        </Link>

        <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          
          <div className="aspect-video w-full overflow-hidden mb-8 border border-black">
            <img 
              src={id && projectsData[id] ? projectsData[id].image : ''} 
              alt={project.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <h2 className="text-xl font-bold mb-2">{descriptionText}</h2>
          <p className="mb-6 whitespace-pre-wrap">{project.fullDescription}</p>
          
          <h2 className="text-xl font-bold mb-2">{technologiesText}</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech: string, index: number) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-200 border border-black text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <a 
            href={id && projectsData[id] ? projectsData[id].link : '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-black text-white font-bold hover:bg-gray-800 transition-colors"
          >
            {project.linkText}
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
