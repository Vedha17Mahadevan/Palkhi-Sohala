import React from 'react';
import { useRouter } from '../../context/NavigationContext';
import SubchapterRituals from './subchapters/SubchapterRituals';
import SubchapterDindi from './subchapters/SubchapterDindi';
import SubchapterDevotions from './subchapters/SubchapterDevotions';
import SubchapterArrivalSeva from './subchapters/SubchapterArrivalSeva';

export const LivingTraditionsSection: React.FC = () => {
  const { currentPath } = useRouter();

  if (currentPath.includes('dindi')) {
    return <SubchapterDindi />;
  }
  if (currentPath.includes('devotional')) {
    return <SubchapterDevotions />;
  }
  if (currentPath.includes('arrival') || currentPath.includes('seva')) {
    return <SubchapterArrivalSeva />;
  }

  return <SubchapterRituals />;
};

export default LivingTraditionsSection;
