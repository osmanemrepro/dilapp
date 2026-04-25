# GitHub'a Yükleme Rehberi

## 1. GitHub Repo Oluşturun

1. https://github.com/new adresine gidin
2. Repository name girin: `dil-ogrenme-uygulamasi`
3. "Public" veya "Private" seçin
4. "Create repository" butonuna tıklayın

## 2. GitHub Remote'ı Ekleyin

GitHub repo oluşturduktan sonra, bu komutları terminalde çalıştırın:

```bash
# GitHub URL'nizi buraya ekleyin
git remote add origin https://github.com/KULLANICI_ADINIZ/dil-ogrenme-uygulamasi.git

# Değişiklikleri görüntüleyin
git status

# Tüm dosyaları ekleyin
git add .

# Commit yapın
git commit -m "Initial commit: Dil öğrenme uygulaması"

# GitHub'a gönderin
git push -u origin main
```

## 3. GitHub'a Yüklendiğinde

- https://github.com/KULLANICI_ADINIZ/dil-ogrenme-uygulamasi adresinden projenizi görebilirsiniz
- Vercel'e otomatik deploy edebilirsiniz

## Güvenlik Notu

- Token paylaşmayın (özellikle herkese açık ortamlarda)
- SSH key kullanmak daha güvenlidir
- Private repo kullanın hassas projeler için
