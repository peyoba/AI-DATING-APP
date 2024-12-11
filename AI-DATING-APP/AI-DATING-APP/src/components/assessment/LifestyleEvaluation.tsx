import React, { useState } from 'react';
import { useAssessment } from '../../contexts/AssessmentContext';
import styles from './LifestyleEvaluation.module.css';

interface LifestyleQuestion {
  id: string;
  text: string;
  category: 'health' | 'routine' | 'social' | 'work' | 'leisure';
}

const lifestyleQuestions: LifestyleQuestion[] = [
  {
    id: 'L1',
    text: '我每天坚持锻炼',
    category: 'health'
  },
  {
    id: 'L2',
    text: '我有规律的作息时间',
    category: 'routine'
  },
  {
    id: 'L3',
    text: '我经常参加社交活动',
    category: 'social'
  },
  // ... 更多问题
];

export const LifestyleEvaluation: React.FC = () => {
  const { updateLifestyleResults } = useAssessment();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, score: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: score
    }));
  };

  const calculateResults = () => {
    const categories = {
      health: { total: 0, count: 0 },
      routine: { total: 0, count: 0 },
      social: { total: 0, count: 0 },
      work: { total: 0, count: 0 },
      leisure: { total: 0, count: 0 }
    };

    Object.entries(answers).forEach(([id, score]) => {
      const category = lifestyleQuestions.find(q => q.id === id)?.category;
      if (category) {
        categories[category].total += score;
        categories[category].count += 1;
      }
    });

    const results = Object.entries(categories).reduce((acc, [key, value]) => {
      acc[key as keyof typeof categories] = value.count ? Math.round((value.total / value.count) * 20) : 0;
      return acc;
    }, {} as Record<string, number>);

    updateLifestyleResults(results);
    return results;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>生活方式评估</h2>
      
      {!showResult ? (
        <>
          <div className={styles.questions}>
            {lifestyleQuestions.map(question => (
              <div key={question.id} className={styles.questionItem}>
                <p className={styles.questionText}>{question.text}</p>
                <div className={styles.options}>
                  {[1, 2, 3, 4, 5].map(score => (
                    <button
                      key={score}
                      className={`${styles.option} ${
                        answers[question.id] === score ? styles.selected : ''
                      }`}
                      onClick={() => handleAnswer(question.id, score)}
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <button
            className={styles.submitButton}
            onClick={() => setShowResult(true)}
            disabled={Object.keys(answers).length < lifestyleQuestions.length}
          >
            查看结果
          </button>
        </>
      ) : (
        <div className={styles.results}>
          <h3>您的生活方式分析结果</h3>
          <ul>
            {Object.entries(calculateResults()).map(([key, value]) => (
              <li key={key}>{key}: {value}</li>
            ))}
          </ul>
          <button
            className={styles.retakeButton}
            onClick={() => {
              setShowResult(false);
              setAnswers({});
            }}
          >
            重新测试
          </button>
        </div>
      )}
    </div>
  );
}; 