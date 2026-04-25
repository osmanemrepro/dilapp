'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Languages, 
  BookOpen, 
  Brain, 
  Trophy, 
  Star, 
  ArrowRight, 
  Volume2,
  RotateCcw,
  CheckCircle2,
  TrendingUp,
  Flame,
  Target,
  Loader2
} from 'lucide-react';

type Language = {
  id: string;
  code: string;
  name: string;
  flag: string;
  level: string;
  progress: number;
  wordsLearned: number;
};

type Flashcard = {
  id: string;
  word: string;
  translation: string;
  example: string;
  pronunciation: string;
  category?: string;
  difficulty?: string;
  mastered: boolean;
};

type UserProgress = {
  xp: number;
  streak: number;
  dailyGoal: number;
  dailyCompleted: number;
  languages: Record<string, { wordsLearned: number; progress: number }>;
};

type View = 'home' | 'flashcards' | 'loading';

export default function LanguageLearningApp() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [currentView, setCurrentView] = useState<View>('home');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [streak, setStreak] = useState(7);
  const [xp, setXp] = useState(1250);
  const [dailyGoal, setDailyGoal] = useState(3);
  const [dailyCompleted, setDailyCompleted] = useState(2);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch languages on mount
  useEffect(() => {
    fetchLanguages();
    fetchProgress();
  }, []);

  // Fetch flashcards when language is selected
  useEffect(() => {
    if (selectedLanguage) {
      fetchFlashcards(selectedLanguage.code);
    }
  }, [selectedLanguage]);

  const fetchLanguages = async () => {
    try {
      const response = await fetch('/api/languages');
      const data = await response.json();
      setLanguages(data);
    } catch (error) {
      console.error('Failed to fetch languages:', error);
    }
  };

  const fetchProgress = async () => {
    try {
      const response = await fetch('/api/progress');
      const data: UserProgress = await response.json();
      setXp(data.xp);
      setStreak(data.streak);
      setDailyGoal(data.dailyGoal);
      setDailyCompleted(data.dailyCompleted);
    } catch (error) {
      console.error('Failed to fetch progress:', error);
    }
  };

  const fetchFlashcards = async (languageCode: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/words?language=${languageCode}&limit=10`);
      const data = await response.json();
      setFlashcards(data);
      setCurrentCardIndex(0);
      setShowTranslation(false);
    } catch (error) {
      console.error('Failed to fetch flashcards:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateProgress = async (action: string) => {
    try {
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action,
          language: selectedLanguage?.code,
          xp: 10
        })
      });
      const data: UserProgress = await response.json();
      setXp(data.xp);
      setStreak(data.streak);
      setDailyGoal(data.dailyGoal);
      setDailyCompleted(data.dailyCompleted);
    } catch (error) {
      console.error('Failed to update progress:', error);
    }
  };

  const handleSelectLanguage = (lang: Language) => {
    setSelectedLanguage(lang);
    setCurrentView('flashcards');
  };

  const handleFlipCard = () => {
    setShowTranslation(!showTranslation);
  };

  const handleNextCard = () => {
    updateProgress('complete_flashcard');
    setShowTranslation(false);
    setCurrentCardIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handleResetProgress = () => {
    setCurrentCardIndex(0);
    setShowTranslation(false);
  };

  const renderLoadingView = () => (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <Loader2 className="h-12 w-12 animate-spin text-zinc-900 dark:text-zinc-50" />
      <p className="text-zinc-600 dark:text-zinc-400">Yükleniyor...</p>
    </div>
  );

  const currentCard = flashcards[currentCardIndex];

  const renderHomeView = () => (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-orange-500 to-amber-500 border-0 text-white">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <Flame className="h-5 w-5" />
              <span className="text-sm font-medium">Streak</span>
            </div>
            <div className="text-3xl font-bold">{streak} gün</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-violet-500 border-0 text-white">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="h-5 w-5" />
              <span className="text-sm font-medium">XP</span>
            </div>
            <div className="text-3xl font-bold">{xp.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Goal */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5" />
              Günlük Hedef
            </CardTitle>
            <Badge variant="secondary">
              {dailyCompleted}/{dailyGoal}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all"
              style={{ width: `${(dailyCompleted / dailyGoal) * 100}%` }}
            />
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {dailyCompleted >= dailyGoal ? '🎉 Hedef tamamladın!' : `${dailyGoal - dailyCompleted} ders kaldı`}
          </p>
        </CardContent>
      </Card>

      {/* Continue Learning */}
      {selectedLanguage && (
        <Card className="border-2 border-zinc-200 dark:border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Öğrenmeye Devam Et
            </CardTitle>
            <CardDescription>
              {selectedLanguage.flag} {selectedLanguage.name} - {selectedLanguage.level}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">{selectedLanguage.progress}% tamamlandı</span>
              </div>
              <Badge variant="outline">{selectedLanguage.wordsLearned} kelime</Badge>
            </div>
            <Button 
              className="w-full" 
              onClick={() => setCurrentView('flashcards')}
            >
              Devam Et
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Languages Grid */}
      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Languages className="h-5 w-5" />
          Dil Seç
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {languages.map((lang) => (
            <Card 
              key={lang.id}
              className={`cursor-pointer transition-all hover:scale-105 ${
                selectedLanguage?.id === lang.id 
                  ? 'border-2 border-zinc-900 dark:border-zinc-50' 
                  : 'border-2 border-zinc-200 dark:border-zinc-800'
              }`}
              onClick={() => handleSelectLanguage(lang)}
            >
              <CardContent className="p-4">
                <div className="text-3xl mb-2">{lang.flag}</div>
                <h3 className="font-semibold text-sm">{lang.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <Badge variant="secondary" className="text-xs">
                    {lang.level}
                  </Badge>
                  <span className="text-xs text-zinc-600 dark:text-zinc-400">
                    {lang.progress}%
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFlashcardsView = () => {
    if (isLoading) {
      return renderLoadingView();
    }

    if (!currentCard) {
      return (
        <div className="text-center space-y-4">
          <p className="text-zinc-600 dark:text-zinc-400">Kart bulunamadı.</p>
          <Button variant="outline" onClick={() => setCurrentView('home')}>
            ← Geri Dön
          </Button>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setCurrentView('home')}
          >
            ← Geri
          </Button>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              {selectedLanguage?.flag} {selectedLanguage?.name}
            </Badge>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
          <span>Kart {currentCardIndex + 1}/{flashcards.length}</span>
          <span className="flex items-center gap-1">
            <Trophy className="h-4 w-4" />
            {xp} XP
          </span>
        </div>

        {/* Flashcard */}
        <Card 
          className={`min-h-[320px] cursor-pointer transition-all hover:scale-[1.02] ${
            showTranslation ? 'bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-50 dark:to-zinc-100' : 'bg-white dark:bg-zinc-950'
          }`}
          onClick={handleFlipCard}
        >
          <CardContent className="p-6 flex flex-col items-center justify-center h-full">
            {!showTranslation ? (
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">{selectedLanguage?.flag}</div>
                <h2 className="text-3xl font-bold">{currentCard.word}</h2>
                {currentCard.pronunciation && (
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {currentCard.pronunciation}
                  </p>
                )}
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    // TTS would go here
                  }}
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  Dinle
                </Button>
                <p className="text-xs text-zinc-400 mt-4">
                  Çevirmek için tıkla
                </p>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">🇹🇷</div>
                <h2 className="text-3xl font-bold text-white dark:text-zinc-900">
                  {currentCard.translation}
                </h2>
                {currentCard.example && (
                  <p className="text-zinc-300 dark:text-zinc-600 italic">
                    "{currentCard.example}"
                  </p>
                )}
                {currentCard.mastered && (
                  <Badge variant="secondary" className="bg-green-500 text-white">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Öğrenildi
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={handleResetProgress}
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Sıfırla
          </Button>
          <Button 
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
            onClick={handleNextCard}
          >
            Sonraki
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* Card Progress Dots */}
        <div className="flex justify-center gap-2">
          {flashcards.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentCardIndex 
                  ? 'w-6 bg-zinc-900 dark:bg-zinc-50' 
                  : 'bg-zinc-300 dark:bg-zinc-700'
              }`}
            />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2">
          <Card className="text-center p-3">
            <div className="text-2xl font-bold text-green-500">
              {flashcards.filter(c => c.mastered).length}
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">Öğrenildi</div>
          </Card>
          <Card className="text-center p-3">
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {flashcards.length}
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">Toplam</div>
          </Card>
          <Card className="text-center p-3">
            <div className="text-2xl font-bold text-purple-500">
              {flashcards.length > 0 ? Math.round((flashcards.filter(c => c.mastered).length / flashcards.length) * 100) : 0}%
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">Başarı</div>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-zinc-50 to-white dark:from-black dark:to-zinc-900">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-zinc-950/80 sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('home')}>
              <Brain className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
              <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                LucidaClone
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                {xp}
              </Badge>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentView === 'home' && renderHomeView()}
        {currentView === 'flashcards' && renderFlashcardsView()}
        {currentView === 'loading' && renderLoadingView()}
      </main>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-zinc-950 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Lucida benzeri dil öğrenme uygulaması
          </p>
        </div>
      </footer>
    </div>
  );
}
