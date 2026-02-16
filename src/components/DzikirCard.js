import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Vibration,
} from 'react-native';
import {DB} from '../utils/database';

const DzikirCard = ({dzikir, type, onComplete}) => {
  const [count, setCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    const progress = await DB.getDzikirProgress(dzikir.id, type);
    if (progress) {
      setCount(progress.currentCount);
      setIsCompleted(progress.isCompleted);
    }
  };

  const handlePress = async () => {
    if (isCompleted) return;

    const newCount = count + 1;
    setCount(newCount);

    // Haptic feedback
    Vibration.vibrate(50);

    const completed = newCount >= dzikir.jumlahPengulangan;
    setIsCompleted(completed);

    await DB.saveDzikirProgress(
      dzikir.id,
      type,
      newCount,
      dzikir.jumlahPengulangan,
    );

    if (completed && onComplete) {
      onComplete(dzikir.id);
    }
  };

  const resetCounter = async () => {
    setCount(0);
    setIsCompleted(false);
    await DB.saveDzikirProgress(dzikir.id, type, 0, dzikir.jumlahPengulangan);
  };

  return (
    <View style={[styles.card, isCompleted && styles.cardCompleted]}>
      <Text style={styles.title}>{dzikir.judul}</Text>
      
      <Text style={styles.arabic}>{dzikir.teksArab}</Text>
      
      <Text style={styles.transliterasi}>{dzikir.transliterasi}</Text>
      
      <Text style={styles.terjemahan}>{dzikir.terjemahan}</Text>
      
      <View style={styles.keutamaanBox}>
        <Text style={styles.keutamaanTitle}>Keutamaan:</Text>
        <Text style={styles.keutamaan}>{dzikir.keutamaan}</Text>
        <Text style={styles.dalil}>({dzikir.dalil})</Text>
      </View>

      <View style={styles.counterContainer}>
        <TouchableOpacity
          style={[styles.counterButton, isCompleted && styles.buttonCompleted]}
          onPress={handlePress}
          disabled={isCompleted}>
          <Text style={styles.counterText}>
            {count} / {dzikir.jumlahPengulangan}
          </Text>
          <Text style={styles.counterLabel}>
            {isCompleted ? '✓ Selesai' : 'Tap untuk hitung'}
          </Text>
        </TouchableOpacity>

        {isCompleted && (
          <TouchableOpacity style={styles.resetButton} onPress={resetCounter}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardCompleted: {
    backgroundColor: '#e8f5e9',
    borderColor: '#4caf50',
    borderWidth: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 12,
  },
  arabic: {
    fontSize: 24,
    textAlign: 'right',
    color: '#1a237e',
    marginBottom: 12,
    lineHeight: 40,
  },
  transliterasi: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 8,
  },
  terjemahan: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
    lineHeight: 20,
  },
  keutamaanBox: {
    backgroundColor: '#fff3e0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  keutamaanTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#e65100',
    marginBottom: 4,
  },
  keutamaan: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
  },
  dalil: {
    fontSize: 11,
    color: '#777',
    fontStyle: 'italic',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  counterButton: {
    flex: 1,
    backgroundColor: '#2e7d32',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonCompleted: {
    backgroundColor: '#4caf50',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  counterLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
  resetButton: {
    backgroundColor: '#ff9800',
    padding: 16,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  resetText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DzikirCard;
