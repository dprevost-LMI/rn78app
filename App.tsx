/**
 * Sample React Native App with fbtee
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {LocaleContextProvider} from './src/fbteeInit';
import FbteeExamples from './src/components/FbteeExamples';
import SimpleExample from './src/components/SimpleExample';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'simple' | 'examples'>('simple');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'simple':
        return <SimpleExample />;
      case 'examples':
        return <FbteeExamples />;
      default:
        return <SimpleExample />;
    }
  };

  return (
    <LocaleContextProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        
        {/* Navigation Menu */}
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={[
              styles.menuButton,
              currentView === 'simple' && styles.activeMenuButton,
            ]}
            onPress={() => setCurrentView('simple')}
          >
            <Text style={[
              styles.menuButtonText,
              currentView === 'simple' && styles.activeMenuButtonText,
            ]}>
              Simple Example
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuButton,
              currentView === 'examples' && styles.activeMenuButton,
            ]}
            onPress={() => setCurrentView('examples')}
          >
            <Text style={[
              styles.menuButtonText,
              currentView === 'examples' && styles.activeMenuButtonText,
            ]}>
              fbtee Examples
            </Text>
          </TouchableOpacity>
        </View>

        {/* Current View */}
        <View style={styles.contentContainer}>
          {renderCurrentView()}
        </View>
      </SafeAreaView>
    </LocaleContextProvider>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  menuButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  activeMenuButton: {
    backgroundColor: '#007AFF',
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  activeMenuButtonText: {
    color: '#ffffff',
  },
  contentContainer: {
    flex: 1,
  },
});

export default App;
