import { NextResponse } from 'next/server';

export async function GET() {
  const languages = [
    {
      id: 'en',
      code: 'en',
      name: 'English',
      flag: '🇬🇧',
      level: 'Beginner',
      progress: 35,
      wordsLearned: 120
    },
    {
      id: 'es',
      code: 'es',
      name: 'Spanish',
      flag: '🇪🇸',
      level: 'Intermediate',
      progress: 62,
      wordsLearned: 285
    },
    {
      id: 'de',
      code: 'de',
      name: 'German',
      flag: '🇩🇪',
      level: 'Beginner',
      progress: 15,
      wordsLearned: 45
    },
    {
      id: 'fr',
      code: 'fr',
      name: 'French',
      flag: '🇫🇷',
      level: 'Intermediate',
      progress: 48,
      wordsLearned: 192
    },
    {
      id: 'tr',
      code: 'tr',
      name: 'Turkish',
      flag: '🇹🇷',
      level: 'Advanced',
      progress: 78,
      wordsLearned: 456
    },
    {
      id: 'it',
      code: 'it',
      name: 'Italian',
      flag: '🇮🇹',
      level: 'Beginner',
      progress: 22,
      wordsLearned: 78
    },
    {
      id: 'pt',
      code: 'pt',
      name: 'Portuguese',
      flag: '🇵🇹',
      level: 'Beginner',
      progress: 18,
      wordsLearned: 65
    },
    {
      id: 'ja',
      code: 'ja',
      name: 'Japanese',
      flag: '🇯🇵',
      level: 'Intermediate',
      progress: 41,
      wordsLearned: 188
    }
  ];

  return NextResponse.json(languages);
}
