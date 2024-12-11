import React, { useState } from 'react';
import { useAssessment } from '../../contexts/AssessmentContext';
import styles from './RelationshipPotential.module.css';

interface RelationshipQuestion {
  id: string;
  text: string;
  category: 'communication' | 'trust' | 'intimacy' | 'conflict' | 'support';
}

const relationshipQuestions: RelationshipQuestion[] = [
  {
    id: 'R1',
    text: '我与伴侣之间的沟通顺畅',
    category: 'communication'
  },
  {
    id: 'R2',
    text: '我信任我的伴侣',
    category: 'trust'
  },
  {
    id: 'R3',
    text: '我与伴侣之间有亲密感',
    category: 'intimacy'
  },
  // ... 更多问题
];

export const RelationshipPotential: React.FC = () => {
  const { updateRelationshipResults } = useAssessment();
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
      communication: { total: 0, count: 0 },
      trust: { total: 0, count: 0 },
      intimacy: { total: 0, count: 0 },
      conflict: { total: 0, count: 0 },
      support: { total: 0, count: 0 }
    };

    Object.entries(answers).forEach(([id, score]) => {
      const category = relationshipQuestions.find(q => q.id === id)?.category;
      if (category) {
        categories[category].total += score;
        categories[category].count += 1;
      }
    });

    const results = Object.entries(categories).reduce((acc, [key, value]) => {
      acc[key as keyof typeof categories] = value.count ? Math.round((value.total / value.count) * 20) : 0;
      return acc;
    }, {} as Record<string, number>);

    updateRelationshipResults(results);
    return results;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>关系发展潜力分析</h2>
      
      {!showResult ? (
        <>
          <div className={styles.questions}>
            {relationshipQuestions.map(question => (
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
            disabled={Object.keys(answers).length < relationshipQuestions.length}
          >
            查看结果
          </button>
        </>
      ) : (
        <div className={styles.results}>
          <h3>您的关系发展潜力分析结果</h3>
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