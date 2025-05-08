
import React from 'react';
import Header from '@/components/Header';
import Terminal from '@/components/Terminal';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

const Index = () => {
  const aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at lacus eu urna fermentum fringilla. Proin ut orci nec tellus convallis faucibus eu at turpis. Suspendisse potenti. In eu urna vel ex ultrices efficitur nec nec nunc. Quisque vehicula eget nisi sit amet feugiat. Nulla facilisi. Donec elementum nisi non enim dapibus, quis viverra quam cursus. Maecenas nec lorem id turpis elementum auctor. Duis eu ipsum vitae arcu mollis tincidunt.";
  
  const projects = [
    {
      id: "project1",
      title: "E-commerce Platform",
      description: "Um sistema completo de e-commerce desenvolvido com React e Node.js, incluindo pagamentos online, gerenciamento de pedidos e painel administrativo.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "project2",
      title: "App de Finanças Pessoais",
      description: "Aplicativo mobile para controle de finanças pessoais com visualização de gráficos, categorizações automáticas e previsões de gastos.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "project3",
      title: "Sistema de Gestão Empresarial",
      description: "Software de gestão empresarial com módulos de RH, contabilidade, estoque e CRM integrados em uma única plataforma web.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <div className="grid-bg min-h-screen font-mono">
      <Header />

      <main className="container mx-auto px-4 pt-8">
        {/* Profile Section */}
        <section className="flex flex-col items-center mb-16 pt-8">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-black overflow-hidden mb-6">
            <img 
              src="/lovable-uploads/982b3f5f-ccc6-47b6-9a8e-c6f060587abe.png" 
              alt="Victor Januário" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Victor Januário</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">Desenvolvedor de Software</p>
        </section>

        {/* About Section */}
        <section className="mb-16" id="about">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b-2 border-black pb-2">About</h2>
          <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 md:p-6 h-72">
            <Terminal aboutText={aboutText} />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16" id="projects">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b-2 border-black pb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
