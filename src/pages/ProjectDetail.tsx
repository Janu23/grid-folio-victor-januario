
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Mock project data - normally you would fetch this from an API or database
  const projectsData = {
    project1: {
      title: "E-commerce Platform",
      description: "Um sistema completo de e-commerce desenvolvido com React e Node.js, incluindo pagamentos online, gerenciamento de pedidos e painel administrativo.",
      fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec orci blandit finibus. Mauris euismod risus in dolor maximus, ac vestibulum nunc efficitur. Sed nec luctus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sagittis bibendum eros, ac scelerisque magna eleifend eu.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae sem eu nisi tincidunt egestas. Duis non nulla sed justo tincidunt suscipit. Maecenas at dictum orci, ut ullamcorper neque. Nulla facilisi. Vivamus eget aliquam est. Quisque nec lacus at lorem efficitur elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sit amet metus non velit pulvinar sollicitudin. Sed porttitor nulla nec dui finibus, vel dignissim lectus tempor.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "AWS S3"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com"
    },
    project2: {
      title: "App de Finanças Pessoais",
      description: "Aplicativo mobile para controle de finanças pessoais com visualização de gráficos, categorizações automáticas e previsões de gastos.",
      fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec orci blandit finibus. Mauris euismod risus in dolor maximus, ac vestibulum nunc efficitur. Sed nec luctus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sagittis bibendum eros, ac scelerisque magna eleifend eu.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae sem eu nisi tincidunt egestas. Duis non nulla sed justo tincidunt suscipit. Maecenas at dictum orci, ut ullamcorper neque. Nulla facilisi. Vivamus eget aliquam est. Quisque nec lacus at lorem efficitur elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sit amet metus non velit pulvinar sollicitudin. Sed porttitor nulla nec dui finibus, vel dignissim lectus tempor.",
      technologies: ["React Native", "Firebase", "Expo", "Victory Charts", "Plaid API"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com"
    },
    project3: {
      title: "Sistema de Gestão Empresarial",
      description: "Software de gestão empresarial com módulos de RH, contabilidade, estoque e CRM integrados em uma única plataforma web.",
      fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec orci blandit finibus. Mauris euismod risus in dolor maximus, ac vestibulum nunc efficitur. Sed nec luctus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sagittis bibendum eros, ac scelerisque magna eleifend eu.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae sem eu nisi tincidunt egestas. Duis non nulla sed justo tincidunt suscipit. Maecenas at dictum orci, ut ullamcorper neque. Nulla facilisi. Vivamus eget aliquam est. Quisque nec lacus at lorem efficitur elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sit amet metus non velit pulvinar sollicitudin. Sed porttitor nulla nec dui finibus, vel dignissim lectus tempor.",
      technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com"
    }
  };

  // @ts-ignore
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="grid-bg min-h-screen font-mono flex items-center justify-center">
        <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <Link to="/" className="inline-flex items-center text-black font-bold">
            <ArrowLeft className="mr-1 h-4 w-4" /> Voltar para a página inicial
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
          <ArrowLeft className="mr-1 h-4 w-4" /> Voltar para a página inicial
        </Link>

        <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          
          <div className="aspect-video w-full overflow-hidden mb-8 border border-black">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          
          <h2 className="text-xl font-bold mb-2">Descrição</h2>
          <p className="mb-6 whitespace-pre-wrap">{project.fullDescription}</p>
          
          <h2 className="text-xl font-bold mb-2">Tecnologias Utilizadas</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-200 border border-black text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-black text-white font-bold hover:bg-gray-800 transition-colors"
          >
            Ver Projeto
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
