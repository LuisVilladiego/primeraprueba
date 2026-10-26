export interface ScoreQuestion {
  id: string;
  points: number;
  correctAnswer: string | string[];
}

export interface ExamScore {
  correct: number;
  total: number;
  percentage: number;
}

export function scoreExam(questions: ScoreQuestion[], answers: Record<string, string>): ExamScore {
  let correct = 0;
  let total = 0;

  for (const question of questions) {
    total += question.points;
    const userAnswer = answers[question.id];
    const expected = question.correctAnswer;
    const matches = Array.isArray(expected)
      ? JSON.stringify(userAnswer) === JSON.stringify(expected)
      : userAnswer === expected;
    if (matches) correct += question.points;
  }

  return {
    correct,
    total,
    percentage: total === 0 ? 0 : Math.round((correct / total) * 100),
  };
}
