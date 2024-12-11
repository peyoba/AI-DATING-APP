import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AssessmentState {
  personalityResults: Record<string, number>;
  valueResults: Record<string, number>;
  interestResults: Record<string, number>;
  lifestyleResults: Record<string, number>;
  relationshipResults: Record<string, number>;
}

interface AssessmentContextType {
  state: AssessmentState;
  updatePersonalityResults: (results: Record<string, number>) => void;
  updateValueResults: (results: Record<string, number>) => void;
  updateInterestResults: (results: Record<string, number>) => void;
  updateLifestyleResults: (results: Record<string, number>) => void;
  updateRelationshipResults: (results: Record<string, number>) => void;
  resetResults: () => void;
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export const AssessmentProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [state, setState] = useState<AssessmentState>({
    personalityResults: {},
    valueResults: {},
    interestResults: {},
    lifestyleResults: {},
    relationshipResults: {}
  });

  const updatePersonalityResults = (results: Record<string, number>) => {
    setState(prev => ({
      ...prev,
      personalityResults: results
    }));
  };

  const updateValueResults = (results: Record<string, number>) => {
    setState(prev => ({
      ...prev,
      valueResults: results
    }));
  };

  const updateInterestResults = (results: Record<string, number>) => {
    setState(prev => ({
      ...prev,
      interestResults: results
    }));
  };

  const updateLifestyleResults = (results: Record<string, number>) => {
    setState(prev => ({
      ...prev,
      lifestyleResults: results
    }));
  };

  const updateRelationshipResults = (results: Record<string, number>) => {
    setState(prev => ({
      ...prev,
      relationshipResults: results
    }));
  };

  const resetResults = () => {
    setState({
      personalityResults: {},
      valueResults: {},
      interestResults: {},
      lifestyleResults: {},
      relationshipResults: {}
    });
  };

  return (
    <AssessmentContext.Provider
      value={{
        state,
        updatePersonalityResults,
        updateValueResults,
        updateInterestResults,
        updateLifestyleResults,
        updateRelationshipResults,
        resetResults
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}; 