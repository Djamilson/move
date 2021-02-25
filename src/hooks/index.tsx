import React from 'react';

import { ChallengesProvider } from './challengesContext';

const AppProvider: React.FC = ({ children }) => {
  return <ChallengesProvider>{children}</ChallengesProvider>;
};
export default AppProvider;
