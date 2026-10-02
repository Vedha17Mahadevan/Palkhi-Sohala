import React from 'react';
import { Palkhi } from '../../types';
import PalkhiCard from './PalkhiCard';

interface PalkhiGridProps {
  palkhis: Palkhi[];
  onSelectPalkhi: (palkhi: Palkhi) => void;
  className?: string;
  revealCards?: boolean;
}

export const PalkhiGrid: React.FC<PalkhiGridProps> = ({ 
  palkhis, 
  onSelectPalkhi, 
  className = "palkhis-directory-grid",
  revealCards = false 
}) => {
  return (
    <div className={className}>
      {palkhis.map((palkhi) => (
        <PalkhiCard
          key={palkhi.id}
          palkhi={palkhi}
          onSelect={onSelectPalkhi}
          reveal={revealCards}
        />
      ))}
    </div>
  );
};

export default PalkhiGrid;
