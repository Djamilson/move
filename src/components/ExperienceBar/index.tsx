import React from 'react';
import { challengesData } from '../../hooks/challengesContext';
import { Container, PercentFromNexLevel, PercentToNexLevel } from './styles';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = challengesData();

  const percentToNexLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <PercentFromNexLevel percentFromNexLevel={Number(percentToNexLevel)} />
        <PercentToNexLevel>{currentExperience} xp</PercentToNexLevel>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
};

export default ExperienceBar;
