import React, { useState } from 'react';
import { useAssessment } from '../../contexts/AssessmentContext';
import styles from './ValueAssessment.module.css';

interface ValueQuestion {
  id: string;
  text: string;
  category: 'family' | 'career' | 'lifestyle' | 'growth' | 'social';
}

const valueQuestions: ValueQuestion[] = [
  {
    id: 'V1',
    text: '家庭对我来说非常重要',
    category: 'family'
  },
  {
    id: 'V2',
    text: '我重视事业的发展',
    category: 'career'
  },
  {
    id: 'V3',
    text: '我喜欢有规律的生活方式',
    category: 'lifestyle'
  },
  // ... 更多问题
];

export const ValueAssessment: React.FC = () => {
  const { updateValueResults } = useAssessment();
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
      family: { total: 0, count: 0 },
      career: { total: 0, count: 0 },
      lifestyle: { total: 0, count: 0 },
      growth: { total: 0, count: 0 },
      social: { total: 0, count: 0 }
    };

    Object.entries(answers).forEach(([id, score]) => {
      const category = valueQuestions.find(q => q.id === id)?.category;
      if (category) {
        categories[category].total += score;
        categories[category].count += 1;
      }
    });

    const results = Object.entries(categories).reduce((acc, [key, value]) => {
      acc[key as keyof typeof categories] = value.count ? Math.round((value.total / value.count) * 20) : 0;
      return acc;
    }, {} as Record<string, number>);

    updateValueResults(results);
    return results;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>价值观测评</h2>
      
      {!showResult ? (
        <>
          <div className={styles.questions}>
            {valueQuestions.map(question => (
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
            disabled={Object.keys(answers).length < valueQuestions.length}
          >
            查看结果
          </button>
        </>
      ) : (
        <div className={styles.results}>
          <h3>您的价值观分析结果</h3>
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