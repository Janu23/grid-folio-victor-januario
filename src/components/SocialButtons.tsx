
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

const SocialButtons = () => {
  const { toast } = useToast();
  const { language } = useLanguage();

  const handleEmailClick = () => {
    const email = 'victor@exemplo.com'; // Substitua pelo seu email real
    navigator.clipboard.writeText(email);
    
    toast({
      title: language === 'en' ? 'Email copied!' : 'Email copiado!',
      description: language === 'en' ? 'The email has been copied to your clipboard.' : 'O email foi copiado para sua área de transferência.',
    });
  };

  return (
    <div className="flex gap-4 justify-center mt-4">
      <Button
        variant="outline"
        size="lg"
        className="rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
        asChild
      >
        <a 
          href="https://linkedin.com/in/seuusuario" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
        asChild
      >
        <a 
          href="https://github.com/seuusuario" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Github size={20} />
          GitHub
        </a>
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
        onClick={handleEmailClick}
      >
        <Mail size={20} className="mr-2" />
        Email
      </Button>
    </div>
  );
};

export default SocialButtons;
