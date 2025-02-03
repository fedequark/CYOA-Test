import React, { useState, useEffect } from 'react';
import { StoryNode, storyNodes } from '../data/storyData';
import { useToast } from '@/components/ui/use-toast';

const StoryGame = () => {
  const [currentNode, setCurrentNode] = useState<StoryNode>(storyNodes.start);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { toast } = useToast();

  const handleChoice = (nextNodeId: string) => {
    setIsTransitioning(true);
    console.log('Moving to node:', nextNodeId);
    
    setTimeout(() => {
      const nextNode = storyNodes[nextNodeId];
      if (nextNode) {
        setCurrentNode(nextNode);
        if (nextNodeId === 'start') {
          toast({
            title: "The story continues...",
            description: "Your journey begins anew.",
          });
        }
      } else {
        console.error('Node not found:', nextNodeId);
      }
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">
          Ciberincidente Falopa
        </h1>
        
        <div className={`story-text ${isTransitioning ? 'opacity-0' : 'fade-enter'}`}>
          {currentNode.text}
        </div>
        
        <div className="flex flex-col space-y-4 mt-8">
          {currentNode.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoice(choice.nextNode)}
              className="choice-button"
              disabled={isTransitioning}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryGame;
