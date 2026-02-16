# Arsitektur Aplikasi Dzikeer

## 📐 Struktur Navigasi

```
┌─────────────────────────────────────┐
│         Home Screen                 │
│  ┌───────────────────────────────┐  │
│  │  🌅 Dzikir Pagi               │  │
│  │  Setelah Shalat Subuh         │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │  🌆 Dzikir Petang             │  │
│  │  Setelah Shalat Ashar         │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │  🤲 Doa Harian                │  │
│  │  Kumpulan Doa Sehari-hari     │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │  ⚙️ Pengaturan                │  │
│  │  Notifikasi & Preferensi      │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
           │
           ├──────────────┬──────────────┐
           ▼              ▼              ▼
    ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
    │ Dzikir Pagi │ │Dzikir Petang│ │ Doa Harian  │
    │             │ │             │ │             │
    │ Progress:   │ │ Progress:   │ │ (Coming     │
    │ ▓▓▓▓░░░░    │ │ ▓▓▓▓▓░░░    │ │  Soon)      │
    │ 4/10        │ │ 5/10        │ │             │
    │             │ │             │ │             │
    │ ┌─────────┐ │ │ ┌─────────┐ │ │             │
    │ │ Dzikir  │ │ │ │ Dzikir  │ │ │             │
    │ │ Card 1  │ │ │ │ Card 1  │ │ │             │
    │ │ Counter │ │ │ │ Counter │ │ │             │
    │ └─────────┘ │ │ └─────────┘ │ │             │
    │ ┌─────────┐ │ │ ┌─────────┐ │ │             │
    │ │ Dzikir  │ │ │ │ Dzikir  │ │ │             │
    │ │ Card 2  │ │ │ │ Card 2  │ │ │             │
    │ │ Counter │ │ │ │ Counter │ │ │             │
    │ └─────────┘ │ │ └─────────┘ │ │             │
    └─────────────┘ └─────────────┘ └─────────────┘
```

## 🗄️ Database Schema Detail

### AsyncStorage Keys Structure

```
user_settings                          → User preferences
progress_YYYY-MM-DD_1_pagi            → Dzikir #1 pagi progress
progress_YYYY-MM-DD_1_petang          → Dzikir #1 petang progress
progress_YYYY-MM-DD_2_pagi            → Dzikir #2 pagi progress
...
```

### Data Models

#### 1. DzikirProgress Model
```typescript
interface DzikirProgress {
  id: string;              // "progress_2024-01-15_1_pagi"
  date: string;            // "2024-01-15"
  dzikirId: number;        // 1, 2, 3, ...
  type: 'pagi' | 'petang'; // Type of dzikir
  currentCount: number;    // Current counter value
  targetCount: number;     // Target from jumlahPengulangan
  isCompleted: boolean;    // true if currentCount >= targetCount
  completedAt: number | null; // Timestamp when completed
}
```

#### 2. UserSettings Model
```typescript
interface UserSettings {
  notificationEnabled: boolean;      // Enable/disable notifications
  morningNotificationTime: string;   // "06:00" format
  eveningNotificationTime: string;   // "16:00" format
  hapticFeedback: boolean;           // Enable/disable vibration
  fontSize: 'small' | 'medium' | 'large'; // Text size preference
}
```

#### 3. Dzikir Data Model
```typescript
interface Dzikir {
  id: number;
  judul: string;              // Title of dzikir
  teksArab: string;           // Arabic text
  transliterasi: string;      // Latin transliteration
  terjemahan: string;         // Indonesian translation
  jumlahPengulangan: number;  // Repetition count (1, 3, 7, 100, etc)
  keutamaan: string;          // Benefits/virtues
  dalil: string;              // Hadith reference
}
```

## 🔄 Data Flow

### 1. Loading Dzikir List
```
Screen Mount
    ↓
Load dzikirPagi.json / dzikirPetang.json
    ↓
For each dzikir:
    ↓
Check AsyncStorage for today's progress
    ↓
Display with current count
```

### 2. Counter Interaction
```
User taps counter button
    ↓
Increment count
    ↓
Trigger haptic feedback (vibrate 50ms)
    ↓
Save to AsyncStorage
    ↓
Check if completed (count >= target)
    ↓
Update UI (show checkmark if completed)
    ↓
Update progress bar
```

### 3. Daily Reset
```
App Launch
    ↓
Check date
    ↓
If new day: Progress automatically resets
(AsyncStorage keys are date-specific)
    ↓
Old progress (>7 days) cleaned up
```

## 🎨 Component Hierarchy

```
App
└── AppNavigator (NavigationContainer)
    ├── HomeScreen
    │   └── Menu Cards (4 buttons)
    │
    ├── DzikirPagiScreen
    │   ├── Header (with progress bar)
    │   └── ScrollView
    │       └── DzikirCard[] (10 cards)
    │           ├── Arabic Text
    │           ├── Transliteration
    │           ├── Translation
    │           ├── Keutamaan Box
    │           └── Counter Button
    │
    └── DzikirPetangScreen
        ├── Header (with progress bar)
        └── ScrollView
            └── DzikirCard[] (10 cards)
```

## 📦 Dependencies

### Core Dependencies
- `react-native`: Framework utama
- `@react-navigation/native`: Navigasi antar screen
- `@react-navigation/native-stack`: Stack navigator
- `@react-native-async-storage/async-storage`: Local storage

### Supporting Dependencies
- `react-native-screens`: Native screen optimization
- `react-native-safe-area-context`: Safe area handling

## 🔔 Notification System (Planned)

```
Notification Service
    ↓
Check user settings
    ↓
Schedule notifications:
    - Morning: After Subuh (default 06:00)
    - Evening: After Ashar (default 16:00)
    ↓
On notification tap:
    ↓
Open respective dzikir screen
```

## 🎯 Future Enhancements

1. **Doa Harian Screen**
   - Doa sebelum tidur
   - Doa bangun tidur
   - Doa makan & minum
   - Doa masuk & keluar rumah
   - Doa perjalanan

2. **Statistics Screen**
   - Weekly completion rate
   - Streak counter
   - Monthly summary

3. **Settings Screen**
   - Notification time customization
   - Font size adjustment
   - Theme selection (light/dark)
   - Language preference

4. **Bookmark Feature**
   - Mark favorite dzikir
   - Quick access to bookmarked items

5. **Audio Playback**
   - Listen to dzikir pronunciation
   - Repeat mode for memorization

## 📱 Platform Support

- ✅ Android (API 21+)
- ✅ iOS (iOS 13+)
- 📱 Responsive design for all screen sizes
- 🌐 RTL support for Arabic text

## 🔐 Data Privacy

- ✅ All data stored locally (AsyncStorage)
- ✅ No internet connection required
- ✅ No user tracking or analytics
- ✅ No personal data collection
