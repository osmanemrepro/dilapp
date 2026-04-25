import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Zap, Globe, Rocket, Code, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-zinc-950/80 sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Smartphone className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
              <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                MobilUygulama
              </span>
            </div>
            <Button variant="ghost" size="sm" className="text-zinc-600 dark:text-zinc-400">
              Başla
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm">
              <Zap className="h-4 w-4 text-zinc-900 dark:text-zinc-50" />
              <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                Next.js + Tailwind CSS ile Modern Web Uygulaması
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Mobil Uygulama
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-400 dark:from-zinc-300 dark:to-zinc-500">
                {" "}Nasıl Yapılır?
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-400 px-4">
              Next.js 16 ve modern web teknolojileri ile mobil uyumlu, hızlı ve kullanıcı dostu web uygulamaları geliştirin.
              Tüm cihazlarda mükemmel görünen, responsive tasarımlar oluşturun.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base">
                <Rocket className="mr-2 h-5 w-5" />
                Hemen Başla
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 h-12 text-base">
                <Code className="mr-2 h-5 w-5" />
                Kodları Gör
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Neden Next.js ile Mobil Uygulama?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Modern web teknolojileri ile native benzeri deneyim sunun
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                </div>
                <CardTitle className="text-lg">Responsive Tasarım</CardTitle>
                <CardDescription>
                  Mobile-first yaklaşımı ile tüm ekran boyutlarında mükemmel görünen tasarımlar
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                </div>
                <CardTitle className="text-lg">Hızlı Performans</CardTitle>
                <CardDescription>
                  Otomatik optimizasyon, kod bölmeleri ve sunucu bileşenleriyle süper hız
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                </div>
                <CardTitle className="text-lg">Cross-Platform</CardTitle>
                <CardDescription>
                  Tek kod tabanı ile iOS, Android ve tüm tarayıcılarda çalışır
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                </div>
                <CardTitle className="text-lg">Modern Teknoloji</CardTitle>
                <CardDescription>
                  React, TypeScript, Tailwind CSS ile geliştirme kolaylığı
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                </div>
                <CardTitle className="text-lg">shadcn/ui Bileşenleri</CardTitle>
                <CardDescription>
                  Hazır, özelleştirilebilir ve erişilebilir UI bileşenleri
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                </div>
                <CardTitle className="text-lg">Kolay Dağıtım</CardTitle>
                <CardDescription>
                  App Store'a gerek yok, URL ile erişim ve PWA desteği
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Steps Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl mb-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Nasıl Başlarım?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              4 basit adımda mobil uyumlu web uygulamanı oluştur
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "1",
                title: "Next.js Projesi Başlat",
                description: "Terminal'de `bunx create-next-app@latest my-app` komutunu çalıştır"
              },
              {
                step: "2",
                title: "Tailwind CSS Kur",
                description: "Modern responsive tasarım için Tailwind CSS'i yapılandır"
              },
              {
                step: "3",
                title: "Bileşenler Ekle",
                description: "shadcn/ui gibi bileşen kütüphaneleri ile hızlı geliştirme"
              },
              {
                step: "4",
                title: "Test ve Dağıt",
                description: "Mobil testler yap ve Vercel'e deploy et"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white dark:bg-zinc-950 rounded-xl border-2 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-zinc-950 py-8 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            © 2025 MobilUygulama. Next.js 16 ile geliştirildi.
          </p>
        </div>
      </footer>
    </div>
  );
}
