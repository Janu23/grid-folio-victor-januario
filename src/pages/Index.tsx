
import React from 'react';
import Header from '@/components/Header';
import Terminal from '@/components/Terminal';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const Index = () => {
  const { t, language } = useLanguage();
  
  const aboutText = {
    en: "Full Stack Developer with experience in building mobile solutions (Android/Kotlin), robust backend systems (Kotlin/Java + Spring Framework), and web applications (React, Node.js, PHP/Laravel), always applying best practices like Clean Architecture, SOLID principles, and RESTful APIs. I work with cloud (AWS), databases (MySQL, PostgreSQL, MongoDB), and Power BI data analysis—turning numbers into strategic decisions. \n\nI've contributed to projects in civil engineering, energy management, and cultural preservation because I love diving into new domains and solving complex problems (and the simple ones too!). \n\nWhen I’m not coding, I play the trumpet, challenge people to chess (bring it on!), collect vinyl records, discuss books in my literary club, or learn something new.",
    pt: "Desenvolvedor Full Stack com experiência em criar soluções mobile (Android/Kotlin), backend robusto (Kotlin/Java + Spring Framework) e web (React, Node.js, PHP/Laravel), sempre aplicando boas práticas como Clean Architecture, SOLID e APIs RESTful. Trabalho com cloud (AWS), bancos de dados (MySQL, PostgreSQL e MongoDB) e análise de dados no Power BI, transformando números em decisões estratégicas. \n\nJá atuei em projetos de engenharia civil, gestão energética e preservação cultural, porque adoro aprender novos domínios e resolver problemas complexos (e os simples também!). \n\nQuando não estou codando, toco trompete, jogo xadrez (aceito desafios!), coleciono vinis, discuto livros no meu clube literário ou estou aprendendo alguma coisa nova."
  };
  
  const projects = [
    {
      id: "project1",
      title: language === 'en' ? "Cartography of Memories" : "Cartografia das Memórias",
      year: "2020",
      description: language === 'en' ? 
        "A collaborative project that transforms personal stories from the Covid-19 pandemic into an immersive sound map." : 
        "É um projeto colaborativo que transforma histórias pessoais da pandemia da Covid-19 em um mapa sonoro.",
      image: "/projects/p01-01cartografias.png",
    },
    {
      id: "project2",
      title: language === 'en' ? "Quizz App" : "Quizz App",
      year: "2024",
      description: language === 'en' ? 
        "Developed Quizz App as an interactive educational game testing knowledge of all 26 Brazilian state flags plus the Federal District. Combines learning with fun through visual identification challenges." : 
        "Desenvolvi o Quizz App como um jogo educativo interativo que testa conhecimentos sobre as bandeiras dos 26 estados brasileiros e do Distrito Federal. O aplicativo combina aprendizagem com diversão através de um desafio de identificação visual.",
      image: "/projects/p02-01quizz.jpg",
    },
    {
      id: "project3",
      title: language === 'en' ? "Mega Sorte" : "Mega Sorte",      
      year: "2023",
      description: language === 'en' ? 
        "Developed Mega Sorte as a study project to enter Android development with Kotlin. The app generates random combinations of 6 numbers for lottery games, featuring an intuitive interface and simple functionality." : 
        "Desenvolvi o Mega Sorte como um projeto de estudo para ingressar no desenvolvimento Android com Kotlin. O aplicativo gera combinações aleatórias de 6 números, simulando jogos de loteria, com interface intuitiva e funcionalidades simples.",
      image: "/projects/p03-01mega.png",
    },
    {
      id: "project4",
      title: language === 'en' ? "Creative Thinking" : "Mente Criativa",
      year: "2024",
      description: language === 'en' ? 
        "A space for critical-creative reflection on how technology and society shape each other." : 
        "É um espaço de reflexão onde examino as complexas relações entre tecnologia e sociedade através de uma perspectiva crítica e criativa.",
      image: "/projects/p04-01mente.png",
    }
  ].sort((a, b) => b.year.localeCompare(a.year)); 

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
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            {language === 'en' ? 'Software Developer' : 'Desenvolvedor de Software'}
          </p>
        </section>

        {/* About Section */}
        <section className="mb-16" id="about">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b-2 border-black pb-2">
            {t('about')}
          </h2>
          <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 md:p-6 h-96">
            <Terminal aboutText={aboutText[language]} />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16" id="projects">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b-2 border-black pb-2">
            {t('projects')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                year={project.year}
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
