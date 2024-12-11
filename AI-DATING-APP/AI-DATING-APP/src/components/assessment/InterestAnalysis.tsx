import React, { useState } from 'react';
import { useAssessment } from '../../contexts/AssessmentContext';
import styles from './InterestAnalysis.module.css';

interface InterestQuestion {
  id: string;
  text: string;
  category: 'arts' | 'sports' | 'technology' | 'travel' | 'music';
}

const interestQuestions: InterestQuestion[] = [
  {
    id: 'I1',
    text: '我喜欢参加艺术活动',
    category: 'arts'
  },
  {
    id: 'I2',
    text: '我热爱运动',
    category: 'sports'
  },
  {
    id: 'I3',
    text: '我对科技充满兴趣',
    category: 'technology'
  },
  // ... 更多问题
];

export const InterestAnalysis: React.FC = () => {
  const { updateInterestResults } = useAssessment();
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
      arts: { total: 0, count: 0 },
      sports: { total: 0, count: 0 },
      technology: { total: 0, count: 0 },
      travel: { total: 0, count: 0 },
      music: { total: 0, count: 0 }
    };

    Object.entries(answers).forEach(([id, score]) => {
      const category = interestQuestions.find(q => q.id === id)?.category;
      if (category) {
        categories[category].total += score;
        categories[category].count += 1;
      }
    });

    const results = Object.entries(categories).reduce((acc, [key, value]) => {
      acc[key as keyof typeof categories] = value.count ? Math.round((value.total / value.count) * 20) : 0;
      return acc;
    }, {} as Record<string, number>);

    updateInterestResults(results);
    return results;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>兴趣爱好分析</h2>
      
      {!showResult ? (
        <>
          <div className={styles.questions}>
            {interestQuestions.map(question => (
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
            disabled={Object.keys(answers).length < interestQuestions.length}
          >
            查看结果
          </button>
        </>
      ) : (
        <div className={styles.results}>
          <h3>您的兴趣爱好分析结果</h3>
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