# Dzikeer - Aplikasi Dzikir Harian

Aplikasi mobile berbasis React Native untuk panduan dzikir pagi dan petang sesuai sunnah.

## 🌟 Fitur Utama

- **Dzikir Pagi**: Kumpulan dzikir setelah Shalat Subuh
- **Dzikir Petang**: Kumpulan dzikir setelah Shalat Ashar
- **Counter Digital**: Tasbih digital dengan haptic feedback untuk menghitung dzikir
- **Progress Tracking**: Simpan status dzikir yang sudah selesai dibaca hari ini
- **Konten Lengkap**: Teks Arab, transliterasi, terjemahan Indonesia, dan dalil setiap dzikir
- **Notifikasi**: Pengingat otomatis di waktu pagi dan sore (coming soon)

## 📱 Struktur Aplikasi

```
Dzikeer/
├── src/
│   ├── components/
│   │   └── DzikirCard.js          # Komponen kartu dzikir dengan counter
│   ├── data/
│   │   ├── dzikirPagi.json        # Data dzikir pagi
│   │   └── dzikirPetang.json      # Data dzikir petang
│   ├── navigation/
│   │   └── AppNavigator.js        # Navigasi aplikasi
│   ├── screens/
│   │   ├── HomeScreen.js          # Halaman utama
│   │   ├── DzikirPagiScreen.js    # Halaman dzikir pagi
│   │   └── DzikirPetangScreen.js  # Halaman dzikir petang
│   ├── services/
│   └── utils/
│       └── database.js            # Helper database AsyncStorage
└── App.tsx                        # Entry point aplikasi
```

## 🗄️ Database Schema

Aplikasi menggunakan AsyncStorage untuk menyimpan data lokal:

### 1. Dzikir Progress
```javascript
{
  id: 'YYYY-MM-DD_dzikirId_type',
  date: 'YYYY-MM-DD',
  dzikirId: number,
  type: 'pagi' | 'petang',
  currentCount: number,
  targetCount: number,
  isCompleted: boolean,
  completedAt: timestamp
}
```

### 2. User Settings
```javascript
{
  notificationEnabled: boolean,
  morningNotificationTime: 'HH:mm',
  eveningNotificationTime: 'HH:mm',
  hapticFeedback: boolean,
  fontSize: 'small' | 'medium' | 'large'
}
```

## 🚀 Instalasi

1. Clone repository:
```bash
git clone https://github.com/saiful-aziz/dzikeer.git
cd dzikeer/Dzikeer
```

2. Install dependencies:
```bash
npm install
# atau
yarn install
```

3. Install pods (iOS only):
```bash
cd ios && pod install && cd ..
```

4. Jalankan aplikasi:

**Android:**
```bash
npm run android
```

**iOS:**
```bash
npm run ios
```

## 📚 Sumber Dzikir

Semua dzikir dalam aplikasi ini bersumber dari:
- Al-Qur'an
- Hadist Shahih (Bukhari, Muslim, Abu Dawud, At-Tirmidzi, An-Nasa'i, Ibnu Majah)
- Kitab-kitab ulama salaf yang masyhur
- Dishahihkan oleh Syaikh Al-Albani rahimahullah

## 🎯 Alur Navigasi

```
Home Screen
├── Dzikir Pagi → List dzikir pagi dengan counter
├── Dzikir Petang → List dzikir petang dengan counter
├── Doa Harian → Kumpulan doa sehari-hari (coming soon)
└── Pengaturan → Notifikasi & preferensi (coming soon)
```

## 🔔 Fitur Notifikasi (Coming Soon)

- Notifikasi otomatis setelah waktu Subuh (default: 06:00)
- Notifikasi otomatis setelah waktu Ashar (default: 16:00)
- Pengaturan waktu notifikasi custom
- On/off notifikasi

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat Pull Request atau buka Issue untuk saran dan perbaikan.

## 📄 Lisensi

MIT License

## 📞 Kontak

Untuk pertanyaan atau saran, silakan hubungi melalui GitHub Issues.

---

**Barakallahu fiikum** 🤲

*"Barangsiapa berdzikir kepada Allah, maka Allah akan mengingatnya"* (HR. Bukhari & Muslim)
