
import React, { useEffect, useState, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronDown } from 'lucide-react';

interface TerminalProps {
  aboutText: string;
}

const Terminal: React.FC<TerminalProps> = ({ aboutText }) => {
  const [typedWhoami, setTypedWhoami] = useState('');
  const [showPrompt, setShowPrompt] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const whoamiCommand = 'whoami';
    let index = 0;

    // Type the whoami command
    const typeInterval = setInterval(() => {
      setTypedWhoami(whoamiCommand.substring(0, index + 1));
      index++;

      if (index >= whoamiCommand.length) {
        clearInterval(typeInterval);
        
        // After typing is complete, wait and then show output
        setTimeout(() => {
          setShowPrompt(false);
          setShowOutput(true);
          
          // Check if content is scrollable after output is shown
          setTimeout(() => {
            const scrollElement = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollElement) {
              const hasScroll = scrollElement.scrollHeight > scrollElement.clientHeight;
              setShowScrollIndicator(hasScroll);
            }
          }, 100);
        }, 500);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const isNearBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 20;
    setShowScrollIndicator(!isNearBottom && target.scrollHeight > target.clientHeight);
  };

  return (
    <div className="bg-terminal-bg p-4 rounded-md w-full h-full overflow-hidden font-mono text-sm md:text-base relative">
      <div className="flex space-x-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      
      <ScrollArea ref={scrollAreaRef} className="h-[calc(100%-2rem)] text-terminal-text">
        <div className="pr-4" onScroll={handleScroll}>
          <pre className="terminal-pre">
            <span className="text-terminal-prompt">user@victor</span>
            <span className="text-terminal-text">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-terminal-text">$ </span>
            <span className="text-terminal-command">{typedWhoami}</span>
            {showPrompt && <span className="cursor"></span>}
          </pre>
          
          {showOutput && (
            <div className="mt-2 text-terminal-output">
              <p className="mb-4">Victor Januário</p>
              <p className="mb-2 text-terminal-text whitespace-pre-wrap">{aboutText}</p>
              <div className="mt-4">
                <pre className="terminal-pre">
                  <span className="text-terminal-prompt">user@victor</span>
                  <span className="text-terminal-text">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-terminal-text">$ </span>
                  <span className="cursor"></span>
                </pre>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-4 right-4">
          <ChevronDown className="w-5 h-5 text-terminal-prompt animate-bounce" strokeWidth={3} />
        </div>
      )}
      
      {/* Bottom fade gradient for scroll indication */}
      {showScrollIndicator && (
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-terminal-bg to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export default Terminal;
