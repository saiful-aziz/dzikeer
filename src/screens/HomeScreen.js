import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.appTitle}>Dzikeer</Text>
          <Text style={styles.subtitle}>Panduan Dzikir Harian</Text>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={[styles.menuCard, styles.morningCard]}
            onPress={() => navigation.navigate('DzikirPagi')}>
            <Text style={styles.menuIcon}>🌅</Text>
            <Text style={styles.menuTitle}>Dzikir Pagi</Text>
            <Text style={styles.menuDesc}>Setelah Shalat Subuh</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuCard, styles.eveningCard]}
            onPress={() => navigation.navigate('DzikirPetang')}>
            <Text style={styles.menuIcon}>🌆</Text>
            <Text style={styles.menuTitle}>Dzikir Petang</Text>
            <Text style={styles.menuDesc}>Setelah Shalat Ashar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuCard, styles.doaCard]}
            onPress={() => navigation.navigate('DoaHarian')}>
            <Text style={styles.menuIcon}>🤲</Text>
            <Text style={styles.menuTitle}>Doa Harian</Text>
            <Text style={styles.menuDesc}>Kumpulan Doa Sehari-hari</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuCard, styles.settingsCard]}
            onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.menuIcon}>⚙️</Text>
            <Text style={styles.menuTitle}>Pengaturan</Text>
            <Text style={styles.menuDesc}>Notifikasi & Preferensi</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            "Barangsiapa berdzikir kepada Allah, maka Allah akan mengingatnya"
          </Text>
          <Text style={styles.footerSource}>(HR. Bukhari & Muslim)</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  appTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  menuContainer: {
    gap: 16,
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  morningCard: {
    borderLeftWidth: 6,
    borderLeftColor: '#ff9800',
  },
  eveningCard: {
    borderLeftWidth: 6,
    borderLeftColor: '#2196f3',
  },
  doaCard: {
    borderLeftWidth: 6,
    borderLeftColor: '#9c27b0',
  },
  settingsCard: {
    borderLeftWidth: 6,
    borderLeftColor: '#607d8b',
  },
  menuIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  menuDesc: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    marginTop: 40,
    padding: 20,
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#2e7d32',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  footerSource: {
    fontSize: 12,
    color: '#666',
  },
});

export default HomeScreen;
