import { NextRequest, NextResponse } from 'next/server';

const wordDatabase: Record<string, any[]> = {
  en: [
    { id: '1', word: 'Hello', translation: 'Merhaba', pronunciation: '/həˈloʊ/', example: 'Hello, how are you?', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '2', word: 'Good morning', translation: 'Günaydın', pronunciation: '/ɡʊd ˈmɔːrnɪŋ/', example: 'Good morning, everyone!', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '3', word: 'Thank you', translation: 'Teşekkürler', pronunciation: '/θæŋk juː/', example: 'Thank you for your help.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '4', word: 'How are you?', translation: 'Nasılsın?', pronunciation: '/haʊ ɑːr juː/', example: 'How are you doing today?', category: 'greeting', difficulty: 'easy', mastered: true },
    { id: '5', word: 'Goodbye', translation: 'Hoşça kal', pronunciation: '/ɡʊdˈbaɪ/', example: 'Goodbye, see you tomorrow.', category: 'greeting', difficulty: 'easy', mastered: true },
    { id: '6', word: 'Please', translation: 'Lütfen', pronunciation: '/pliːz/', example: 'Please help me.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '7', word: 'Sorry', translation: 'Özür dilerim', pronunciation: '/ˈsɑːri/', example: 'Sorry for the mistake.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '8', word: 'Excuse me', translation: 'Afedersiniz', pronunciation: '/ɪkˈskjuːz miː/', example: 'Excuse me, where is the bathroom?', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '9', word: 'Yes', translation: 'Evet', pronunciation: '/jes/', example: 'Yes, I agree.', category: 'greeting', difficulty: 'easy', mastered: true },
    { id: '10', word: 'No', translation: 'Hayır', pronunciation: '/noʊ/', example: 'No, I disagree.', category: 'greeting', difficulty: 'easy', mastered: true },
    { id: '11', word: 'Water', translation: 'Su', pronunciation: '/ˈwɔːtər/', example: 'Can I have some water?', category: 'food', difficulty: 'easy', mastered: false },
    { id: '12', word: 'Food', translation: 'Yemek', pronunciation: '/fuːd/', example: 'The food is delicious.', category: 'food', difficulty: 'easy', mastered: false },
    { id: '13', word: 'Bread', translation: 'Ekmek', pronunciation: '/bred/', example: 'I want some bread.', category: 'food', difficulty: 'easy', mastered: false },
    { id: '14', word: 'Coffee', translation: 'Kahve', pronunciation: '/ˈkɒfi/', example: 'I love coffee.', category: 'food', difficulty: 'easy', mastered: true },
    { id: '15', word: 'Tea', translation: 'Çay', pronunciation: '/tiː/', example: 'Would you like some tea?', category: 'food', difficulty: 'easy', mastered: true },
    { id: '16', word: 'House', translation: 'Ev', pronunciation: '/haʊs/', example: 'My house is big.', category: 'travel', difficulty: 'easy', mastered: false },
    { id: '17', word: 'Car', translation: 'Araba', pronunciation: '/kɑːr/', example: 'I drive a car.', category: 'travel', difficulty: 'easy', mastered: false },
    { id: '18', word: 'Airport', translation: 'Havalimanı', pronunciation: '/ˈerpɔːrt/', example: 'The airport is far.', category: 'travel', difficulty: 'medium', mastered: false },
    { id: '19', word: 'Hotel', translation: 'Otel', pronunciation: '/hoʊˈtel/', example: 'I stayed at a hotel.', category: 'travel', difficulty: 'easy', mastered: false },
    { id: '20', word: 'Restaurant', translation: 'Restoran', pronunciation: '/ˈrestərɑːnt/', example: 'Let's go to a restaurant.', category: 'food', difficulty: 'medium', mastered: false }
  ],
  es: [
    { id: '1', word: 'Hola', translation: 'Merhaba', pronunciation: '/ˈola/', example: '¡Hola! ¿Cómo estás?', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '2', word: 'Buenos días', translation: 'Günaydın', pronunciation: '/ˈbwenos ˈdias/', example: 'Buenos días a todos.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '3', word: 'Gracias', translation: 'Teşekkürler', pronunciation: '/ˈɡɾa.θjas/', example: 'Gracias por tu ayuda.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '4', word: '¿Cómo estás?', translation: 'Nasılsın?', pronunciation: '/ˈkomo esˈtas/', example: '¿Cómo estás hoy?', category: 'greeting', difficulty: 'easy', mastered: true },
    { id: '5', word: 'Adiós', translation: 'Hoşça kal', pronunciation: '/aˈðjos/', example: 'Adiós, hasta mañana.', category: 'greeting', difficulty: 'easy', mastered: true },
    { id: '6', word: 'Por favor', translation: 'Lütfen', pronunciation: '/poɾ faˈβoɾ/', example: 'Por favor, ayúdame.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '7', word: 'Perdón', translation: 'Özür dilerim', pronunciation: '/peɾˈðon/', example: 'Perdón por el error.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '8', word: 'Disculpe', translation: 'Afedersiniz', pronunciation: '/disˈkulpe/', example: 'Disculpe, ¿dónde está el baño?', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '9', word: 'Sí', translation: 'Evet', pronunciation: '/si/', example: 'Sí, estoy de acuerdo.', category: 'greeting', difficulty: 'easy', mastered: true },
    { id: '10', word: 'No', translation: 'Hayır', pronunciation: '/no/', example: 'No, no estoy de acuerdo.', category: 'greeting', difficulty: 'easy', mastered: true }
  ],
  de: [
    { id: '1', word: 'Hallo', translation: 'Merhaba', pronunciation: '/ˈhalo/', example: 'Hallo, wie geht es dir?', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '2', word: 'Guten Morgen', translation: 'Günaydın', pronunciation: '/ˈɡuːtn̩ ˈmɔʁɡn̩/', example: 'Guten Morgen an alle.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '3', word: 'Danke', translation: 'Teşekkürler', pronunciation: '/ˈdaŋkə/', example: 'Danke für deine Hilfe.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '4', word: 'Wie geht es dir?', translation: 'Nasılsın?', pronunciation: '/viː ɡeːt ɛst diːɐ̯/', example: 'Wie geht es dir heute?', category: 'greeting', difficulty: 'medium', mastered: true },
    { id: '5', word: 'Auf Wiedersehen', translation: 'Hoşça kal', pronunciation: '/aʊ̯f ˈviːdɐˌzeːən/', example: 'Auf Wiedersehen, bis morgen.', category: 'greeting', difficulty: 'medium', mastered: true }
  ],
  fr: [
    { id: '1', word: 'Bonjour', translation: 'Merhaba', pronunciation: '/bɔ̃.ʒuʁ/', example: 'Bonjour, comment allez-vous?', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '2', word: 'Bon matin', translation: 'Günaydın', pronunciation: '/bɔ̃ ma.tɛ̃/', example: 'Bon matin à tous.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '3', word: 'Merci', translation: 'Teşekkürler', pronunciation: '/mɛʁ.si/', example: 'Merci pour votre aide.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '4', word: 'Comment allez-vous?', translation: 'Nasılsınız?', pronunciation: '/kɔ.mɑ̃.ta.le.vu/', example: 'Comment allez-vous aujourd\'hui?', category: 'greeting', difficulty: 'medium', mastered: true },
    { id: '5', word: 'Au revoir', translation: 'Hoşça kal', pronunciation: '/o ʁə.vwaʁ/', example: 'Au revoir, à demain.', category: 'greeting', difficulty: 'easy', mastered: true }
  ],
  tr: [
    { id: '1', word: 'Merhaba', translation: 'Hello', pronunciation: '/merˈhaba/', example: 'Merhaba, nasılsın?', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '2', word: 'Günaydın', translation: 'Good morning', pronunciation: '/ɟyˈnajdɯn/', example: 'Günaydın herkese.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '3', word: 'Teşekkürler', translation: 'Thank you', pronunciation: '/teˈʃekːyʁleɾ/', example: 'Yardımın için teşekkürler.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '4', word: 'Nasılsın?', translation: 'How are you?', pronunciation: '/naˈsɯɫsɯn/', example: 'Nasılsın bugün?', category: 'greeting', difficulty: 'easy', mastered: true },
    { id: '5', word: 'Hoşça kal', translation: 'Goodbye', pronunciation: '/hoʃˈtʃa kaɫ/', example: 'Hoşça kal, görüşürüz.', category: 'greeting', difficulty: 'easy', mastered: true }
  ],
  it: [
    { id: '1', word: 'Ciao', translation: 'Merhaba', pronunciation: '/ˈtʃa.o/', example: 'Ciao, come stai?', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '2', word: 'Buongiorno', translation: 'Günaydın', pronunciation: '/buonˈdʒorno/', example: 'Buongiorno a tutti.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '3', word: 'Grazie', translation: 'Teşekkürler', pronunciation: '/ˈɡrattsje/', example: 'Grazie per il tuo aiuto.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '4', word: 'Arrivederci', translation: 'Hoşça kal', pronunciation: '/arrivederci/', example: 'Arrivederci, a domani.', category: 'greeting', difficulty: 'medium', mastered: true }
  ],
  pt: [
    { id: '1', word: 'Olá', translation: 'Merhaba', pronunciation: '/oˈla/', example: 'Olá, como você está?', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '2', word: 'Bom dia', translation: 'Günaydın', pronunciation: '/bõ̞ ˈdi.a/', example: 'Bom dia a todos.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '3', word: 'Obrigado', translation: 'Teşekkürler', pronunciation: '/obɾiˈɡadu/', example: 'Obrigado pela sua ajuda.', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '4', word: 'Tchau', translation: 'Hoşça kal', pronunciation: '/tʃaw/', example: 'Tchau, até amanhã.', category: 'greeting', difficulty: 'easy', mastered: true }
  ],
  ja: [
    { id: '1', word: 'こんにちは', translation: 'Merhaba', pronunciation: '/konnichiwa/', example: 'こんにちは、お元気ですか？', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '2', word: 'おはよう', translation: 'Günaydın', pronunciation: '/ohayou/', example: 'おはようございます。', category: 'greeting', difficulty: 'medium', mastered: false },
    { id: '3', word: 'ありがとう', translation: 'Teşekkürler', pronunciation: '/arigatou/', example: '助けてくれてありがとう。', category: 'greeting', difficulty: 'easy', mastered: false },
    { id: '4', word: '元気ですか', translation: 'Nasılsın?', pronunciation: '/genki desu ka/', example: '今日は元気ですか？', category: 'greeting', difficulty: 'medium', mastered: true },
    { id: '5', word: 'さようなら', translation: 'Hoşça kal', pronunciation: '/sayounara/', example: 'さようなら、また明日。', category: 'greeting', difficulty: 'medium', mastered: true }
  ]
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get('language') || 'en';
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '20');

  let words = wordDatabase[language] || wordDatabase.en;

  if (category) {
    words = words.filter(w => w.category === category);
  }

  words = words.slice(0, limit);

  return NextResponse.json(words);
}
