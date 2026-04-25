import { NextRequest, NextResponse } from 'next/server';

// Mock user progress data
let userProgress = {
  xp: 1250,
  streak: 7,
  dailyGoal: 3,
  dailyCompleted: 2,
  languages: {
    en: { wordsLearned: 120, progress: 35 },
    es: { wordsLearned: 285, progress: 62 },
    de: { wordsLearned: 45, progress: 15 },
    fr: { wordsLearned: 192, progress: 48 },
    tr: { wordsLearned: 456, progress: 78 },
    it: { wordsLearned: 78, progress: 22 },
    pt: { wordsLearned: 65, progress: 18 },
    ja: { wordsLearned: 188, progress: 41 }
  }
};

export async function GET() {
  return NextResponse.json(userProgress);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { action, language, xp: xpGain, wordId } = body;

  if (action === 'complete_flashcard') {
    userProgress.xp += xpGain || 10;
    userProgress.dailyCompleted += 1;

    if (userProgress.dailyCompleted >= userProgress.dailyGoal) {
      userProgress.streak += 1;
      userProgress.dailyCompleted = 0;
    }

    if (language && userProgress.languages[language]) {
      userProgress.languages[language].wordsLearned += 1;
      userProgress.languages[language].progress = Math.min(
        userProgress.languages[language].progress + 1,
        100
      );
    }
  } else if (action === 'reset_daily') {
    userProgress.dailyCompleted = 0;
  }

  return NextResponse.json(userProgress);
}
