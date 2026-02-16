import AsyncStorage from '@react-native-async-storage/async-storage';

// Database Schema untuk Dzikeer App
// Collections:
// 1. dzikir_progress: Menyimpan progress dzikir harian
// 2. user_settings: Pengaturan notifikasi dan preferensi

export const DatabaseSchema = {
  // Progress dzikir per hari
  dzikirProgress: {
    id: 'string', // format: YYYY-MM-DD_dzikirId_type (pagi/petang)
    date: 'string', // YYYY-MM-DD
    dzikirId: 'number',
    type: 'string', // 'pagi' atau 'petang'
    currentCount: 'number',
    targetCount: 'number',
    isCompleted: 'boolean',
    completedAt: 'timestamp',
  },
  
  // Pengaturan user
  userSettings: {
    notificationEnabled: 'boolean',
    morningNotificationTime: 'string', // HH:mm format
    eveningNotificationTime: 'string', // HH:mm format
    hapticFeedback: 'boolean',
    fontSize: 'string', // 'small', 'medium', 'large'
  }
};

// Helper functions untuk database operations
export const DB = {
  // Save dzikir progress
  async saveDzikirProgress(dzikirId, type, currentCount, targetCount) {
    try {
      const today = new Date().toISOString().split('T')[0];
      const key = `progress_${today}_${dzikirId}_${type}`;
      const data = {
        id: key,
        date: today,
        dzikirId,
        type,
        currentCount,
        targetCount,
        isCompleted: currentCount >= targetCount,
        completedAt: currentCount >= targetCount ? Date.now() : null,
      };
      await AsyncStorage.setItem(key, JSON.stringify(data));
      return data;
    } catch (error) {
      console.error('Error saving progress:', error);
      throw error;
    }
  },

  // Get dzikir progress for today
  async getDzikirProgress(dzikirId, type) {
    try {
      const today = new Date().toISOString().split('T')[0];
      const key = `progress_${today}_${dzikirId}_${type}`;
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting progress:', error);
      return null;
    }
  },

  // Get all progress for today
  async getTodayProgress(type) {
    try {
      const today = new Date().toISOString().split('T')[0];
      const allKeys = await AsyncStorage.getAllKeys();
      const todayKeys = allKeys.filter(key => 
        key.startsWith(`progress_${today}`) && key.endsWith(`_${type}`)
      );
      const items = await AsyncStorage.multiGet(todayKeys);
      return items.map(([key, value]) => JSON.parse(value));
    } catch (error) {
      console.error('Error getting today progress:', error);
      return [];
    }
  },

  // Save user settings
  async saveSettings(settings) {
    try {
      await AsyncStorage.setItem('user_settings', JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
      throw error;
    }
  },

  // Get user settings
  async getSettings() {
    try {
      const data = await AsyncStorage.getItem('user_settings');
      return data ? JSON.parse(data) : {
        notificationEnabled: true,
        morningNotificationTime: '06:00',
        eveningNotificationTime: '16:00',
        hapticFeedback: true,
        fontSize: 'medium',
      };
    } catch (error) {
      console.error('Error getting settings:', error);
      return null;
    }
  },

  // Clear old progress (older than 7 days)
  async clearOldProgress() {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      const progressKeys = allKeys.filter(key => key.startsWith('progress_'));
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      
      const keysToDelete = progressKeys.filter(key => {
        const dateStr = key.split('_')[1];
        const keyDate = new Date(dateStr);
        return keyDate < sevenDaysAgo;
      });
      
      if (keysToDelete.length > 0) {
        await AsyncStorage.multiRemove(keysToDelete);
      }
    } catch (error) {
      console.error('Error clearing old progress:', error);
    }
  }
};
