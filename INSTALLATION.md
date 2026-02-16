# 📱 Panduan Instalasi Dzikeer

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

### 1. Node.js & npm
```bash
# Cek versi Node.js (minimal v18)
node --version

# Cek versi npm
npm --version
```

Download dari: https://nodejs.org/

### 2. React Native CLI
```bash
npm install -g react-native-cli
```

### 3. Android Studio (untuk Android)
- Download dari: https://developer.android.com/studio
- Install Android SDK
- Setup Android Virtual Device (AVD)

### 4. Xcode (untuk iOS - Mac only)
- Download dari App Store
- Install Command Line Tools:
```bash
xcode-select --install
```

### 5. CocoaPods (untuk iOS)
```bash
sudo gem install cocoapods
```

## 🚀 Langkah Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/saiful-aziz/dzikeer.git
cd dzikeer/Dzikeer
```

### 2. Install Dependencies
```bash
npm install
# atau
yarn install
```

### 3. Install iOS Pods (Mac only)
```bash
cd ios
pod install
cd ..
```

## ▶️ Menjalankan Aplikasi

### Android

#### Menggunakan Emulator
1. Buka Android Studio
2. Start AVD (Android Virtual Device)
3. Jalankan perintah:
```bash
npm run android
```

#### Menggunakan Device Fisik
1. Aktifkan USB Debugging di HP Android
2. Hubungkan HP ke komputer via USB
3. Cek device terdeteksi:
```bash
adb devices
```
4. Jalankan aplikasi:
```bash
npm run android
```

### iOS (Mac only)

#### Menggunakan Simulator
```bash
npm run ios
```

#### Menggunakan Device Fisik
1. Buka `ios/Dzikeer.xcworkspace` di Xcode
2. Pilih device Anda
3. Klik tombol Run (▶️)

## 🔧 Troubleshooting

### Error: "Unable to resolve module"
```bash
# Clear cache
npm start -- --reset-cache

# Atau
watchman watch-del-all
rm -rf node_modules
npm install
```

### Error: "Command not found: react-native"
```bash
# Install React Native CLI globally
npm install -g react-native-cli
```

### Error: Android Build Failed
```bash
# Clean build
cd android
./gradlew clean
cd ..

# Rebuild
npm run android
```

### Error: iOS Build Failed
```bash
# Clean build
cd ios
rm -rf Pods
pod install
cd ..

# Rebuild
npm run ios
```

### Error: "Metro bundler not running"
```bash
# Start Metro manually
npm start

# Di terminal lain, jalankan:
npm run android
# atau
npm run ios
```

## 📦 Build APK/IPA

### Build Android APK (Release)
```bash
cd android
./gradlew assembleRelease
```
APK akan tersedia di: `android/app/build/outputs/apk/release/app-release.apk`

### Build iOS IPA (Release)
1. Buka `ios/Dzikeer.xcworkspace` di Xcode
2. Product → Archive
3. Distribute App

## 🔄 Update Aplikasi

```bash
# Pull perubahan terbaru
git pull origin main

# Install dependencies baru (jika ada)
npm install

# iOS: Update pods
cd ios && pod install && cd ..

# Jalankan ulang aplikasi
npm run android
# atau
npm run ios
```

## 📱 Instalasi di Device

### Android
1. Copy file `app-release.apk` ke HP
2. Buka file dan install
3. Jika ada warning "Install from unknown sources", aktifkan di Settings

### iOS
1. Gunakan TestFlight untuk distribusi beta
2. Atau gunakan Xcode untuk install langsung ke device

## 🆘 Bantuan Lebih Lanjut

Jika mengalami masalah:
1. Cek dokumentasi React Native: https://reactnative.dev/docs/environment-setup
2. Buka issue di GitHub: https://github.com/saiful-aziz/dzikeer/issues
3. Pastikan semua dependencies sudah terinstall dengan benar

## 📞 Kontak

Untuk bantuan lebih lanjut, silakan hubungi melalui GitHub Issues atau email.

---

**Barakallahu fiikum!** 🤲
