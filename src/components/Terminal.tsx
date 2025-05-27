
import React, { useEffect, useState } from 'react';

interface TerminalProps {
  aboutText: string;
}

const Terminal: React.FC<TerminalProps> = ({ aboutText }) => {
  const [typedWhoami, setTypedWhoami] = useState('');
  const [showPrompt, setShowPrompt] = useState(true);
  const [showOutput, setShowOutput] = useState(false);

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
        }, 500);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="bg-terminal-bg p-4 rounded-md w-full h-full overflow-hidden font-mono text-sm md:text-base">
      <div className="flex space-x-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-terminal-text">
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
            <p className="mb-2 text-terminal-text">{aboutText}</p>
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
    </div>
  );
};

export default Terminal;
