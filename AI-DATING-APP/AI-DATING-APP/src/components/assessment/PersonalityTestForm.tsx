import React, { useState } from 'react';
import { RadarChart } from '../charts/RadarChart';
import styles from './PersonalityTestForm.module.css';

interface Question {
  id: string;
  text: string;
  category: 'E' | 'O' | 'C' | 'A' | 'N';
}

const questions: Question[] = [
  {
    id: 'E1',
    text: '我喜欢参加社交活动',
    category: 'E'
  },
  {
    id: 'O1',
    text: '我对新事物充满好奇',
    category: 'O'
  },
  {
    id: 'C1',
    text: '我做事有计划和条理',
    category: 'C'
  },
  // ... 更多问题
];

export const PersonalityTestForm: React.FC = () => {
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
      E: { total: 0, count: 0 },
      O: { total: 0, count: 0 },
      C: { total: 0, count: 0 },
      A: { total: 0, count: 0 },
      N: { total: 0, count: 0 }
    };

    Object.entries(answers).forEach(([id, score]) => {
      const category = id[0] as keyof typeof categories;
      categories[category].total += score;
      categories[category].count += 1;
    });

    return Object.entries(categories).map(([key, value]) => ({
      name: getTraitName(key),
      value: value.count ? Math.round((value.total / value.count) * 20) : 0
    }));
  };

  const getTraitName = (key: string): string => {
    const names = {
      E: '外向性',
      O: '开放性',
      C: '尽责性',
      A: '亲和性',
      N: '情绪稳定性'
    };
    return names[key as keyof typeof names];
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>性格特质测试</h2>
      
      {!showResult ? (
        <>
          <div className={styles.questions}>
            {questions.map(question => (
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
            disabled={Object.keys(answers).length < questions.length}
          >
            查看结果
          </button>
        </>
      ) : (
        <div className={styles.results}>
          <RadarChart 
            data={calculateResults()} 
            title="性格特质分析"
          />
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