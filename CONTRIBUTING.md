# 🤝 Panduan Kontribusi

Terima kasih atas minat Anda untuk berkontribusi pada aplikasi Dzikeer! Setiap kontribusi sangat berarti untuk pengembangan aplikasi ini.

## 📋 Cara Berkontribusi

### 1. Fork Repository
```bash
# Fork repository melalui GitHub UI
# Kemudian clone fork Anda
git clone https://github.com/YOUR_USERNAME/dzikeer.git
cd dzikeer/Dzikeer
```

### 2. Buat Branch Baru
```bash
git checkout -b feature/nama-fitur
# atau
git checkout -b fix/nama-bug
```

### 3. Lakukan Perubahan
- Tulis kode yang bersih dan mudah dibaca
- Ikuti style guide yang ada
- Tambahkan komentar jika diperlukan

### 4. Commit Perubahan
```bash
git add .
git commit -m "feat: menambahkan fitur X"
# atau
git commit -m "fix: memperbaiki bug Y"
```

### 5. Push ke Fork Anda
```bash
git push origin feature/nama-fitur
```

### 6. Buat Pull Request
- Buka repository asli di GitHub
- Klik "New Pull Request"
- Pilih branch Anda
- Jelaskan perubahan yang Anda buat

## 📝 Commit Message Convention

Gunakan format berikut untuk commit message:

```
<type>: <subject>

<body> (optional)
```

### Types:
- `feat`: Fitur baru
- `fix`: Perbaikan bug
- `docs`: Perubahan dokumentasi
- `style`: Perubahan format kode (tidak mengubah logika)
- `refactor`: Refactoring kode
- `test`: Menambah atau memperbaiki test
- `chore`: Perubahan konfigurasi atau maintenance

### Contoh:
```bash
feat: menambahkan fitur bookmark dzikir
fix: memperbaiki counter yang tidak reset
docs: update README dengan panduan instalasi
style: format kode dengan prettier
```

## 🎯 Area Kontribusi

### 1. Konten Dzikir & Doa
- Menambahkan dzikir baru dengan dalil shahih
- Memperbaiki transliterasi
- Menambahkan terjemahan yang lebih baik
- Menambahkan keutamaan dan dalil

**Format JSON:**
```json
{
  "id": 11,
  "judul": "Nama Dzikir",
  "teksArab": "النص العربي",
  "transliterasi": "Transliterasi Latin",
  "terjemahan": "Terjemahan Indonesia",
  "jumlahPengulangan": 1,
  "keutamaan": "Keutamaan dzikir ini...",
  "dalil": "HR. Bukhari (1234)"
}
```

### 2. Fitur Baru
- Doa harian
- Statistik dzikir
- Audio pronunciation
- Dark mode
- Multi-language support

### 3. UI/UX Improvements
- Desain yang lebih baik
- Animasi yang smooth
- Accessibility improvements

### 4. Bug Fixes
- Perbaiki bug yang ada
- Optimasi performa
- Memory leak fixes

### 5. Dokumentasi
- Perbaiki typo
- Tambahkan contoh
- Terjemahan dokumentasi

## ✅ Checklist Sebelum Submit PR

- [ ] Kode berjalan tanpa error
- [ ] Tidak ada warning di console
- [ ] Sudah test di Android dan iOS (jika memungkinkan)
- [ ] Dokumentasi sudah diupdate (jika perlu)
- [ ] Commit message mengikuti convention
- [ ] Kode sudah di-format dengan baik

## 🔍 Code Review Process

1. Maintainer akan review PR Anda
2. Mungkin ada request untuk perubahan
3. Setelah approved, PR akan di-merge
4. Kontribusi Anda akan masuk ke aplikasi!

## 📚 Sumber Referensi

Untuk konten dzikir dan doa, pastikan menggunakan sumber yang shahih:

### Kitab Hadist:
- Shahih Bukhari
- Shahih Muslim
- Sunan Abu Dawud
- Sunan At-Tirmidzi
- Sunan An-Nasa'i
- Sunan Ibnu Majah

### Kitab Dzikir:
- Hisnul Muslim (Benteng Muslim)
- Al-Adzkar An-Nawawiyah
- Al-Wabil Ash-Shayyib (Ibnu Qayyim)

### Verifikasi:
- Pastikan hadist dishahihkan oleh ulama muktabar
- Cantumkan sumber dengan jelas
- Jika ada perbedaan pendapat, pilih yang paling shahih

## 🚫 Yang Tidak Boleh Dilakukan

- ❌ Menambahkan dzikir tanpa dalil shahih
- ❌ Mengubah teks Arab tanpa verifikasi
- ❌ Menambahkan fitur yang bertentangan dengan syariat
- ❌ Copy-paste kode tanpa memahami
- ❌ Menambahkan dependency yang tidak perlu

## 💡 Tips untuk Kontributor Baru

1. Mulai dari issue yang berlabel "good first issue"
2. Baca dokumentasi dengan teliti
3. Jangan ragu untuk bertanya
4. Test perubahan Anda dengan baik
5. Satu PR untuk satu fitur/fix

## 📞 Komunikasi

- GitHub Issues: Untuk bug report dan feature request
- Pull Request: Untuk diskusi kode
- Email: Untuk pertanyaan umum

## 🎖️ Contributors

Terima kasih kepada semua kontributor yang telah membantu pengembangan Dzikeer!

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- Daftar kontributor akan ditambahkan di sini -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## 📄 Lisensi

Dengan berkontribusi, Anda setuju bahwa kontribusi Anda akan dilisensikan di bawah MIT License.

---

**Jazakumullahu khairan** atas kontribusi Anda! 🤲

Semoga aplikasi ini bermanfaat dan menjadi amal jariyah bagi kita semua.
