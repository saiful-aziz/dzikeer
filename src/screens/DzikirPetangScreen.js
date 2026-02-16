import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import DzikirCard from '../components/DzikirCard';
import dzikirPetangData from '../data/dzikirPetang.json';
import {DB} from '../utils/database';

const DzikirPetangScreen = () => {
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    const progress = await DB.getTodayProgress('petang');
    const completed = progress.filter(p => p.isCompleted).length;
    setCompletedCount(completed);
  };

  const handleDzikirComplete = () => {
    setCompletedCount(prev => prev + 1);
  };

  const totalDzikir = dzikirPetangData.length;
  const progressPercentage = Math.round((completedCount / totalDzikir) * 100);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🌆 Dzikir Petang</Text>
        <Text style={styles.subtitle}>Setelah Shalat Ashar</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, {width: `${progressPercentage}%`}]}
            />
          </View>
          <Text style={styles.progressText}>
            {completedCount} / {totalDzikir} selesai
          </Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}>
        {dzikirPetangData.map(dzikir => (
          <DzikirCard
            key={dzikir.id}
            dzikir={dzikir}
            type="petang"
            onComplete={handleDzikirComplete}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2196f3',
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    textAlign: 'right',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
});

export default DzikirPetangScreen;
