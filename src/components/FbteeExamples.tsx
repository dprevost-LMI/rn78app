import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {fbt, fbs, list} from 'fbtee';

// Mock user data
const mockUser = {
  name: 'Alice',
  pronounGender: 1, // GENDER_FEMALE
};

// Simple component to demonstrate fbt:param with components
const UserNameComponent: React.FC<{name: string}> = ({name}) => (
  <Text style={{fontWeight: 'bold', color: 'blue'}}>{name}</Text>
);

const LinkComponent: React.FC<{children?: React.ReactNode}> = ({children}) => (
  <Text style={{color: 'blue', textDecorationLine: 'underline'}}>{children}</Text>
);

const FbteeExamples: React.FC = () => {
  const [itemCount, setItemCount] = useState(1);
  const [botCount, setBotCount] = useState(1);
  const [players] = useState(['Alice', 'Bob', 'Charlie']);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.mainTitle}>fbtee React Native Examples</Text>

      {/* 1. Basic fbt usage */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Basic fbt</Text>
        <Text style={styles.text}>
          {fbt('Welcome to our React Native app!', 'Basic welcome message')}
        </Text>
      </View>

      {/* 2. Parameters with fbt:param */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Parameters</Text>
        <Text style={styles.text}>
          {fbt('Hello ' + fbt.param('userName', mockUser.name) + ', welcome back!', 'Welcome message with user name')}
        </Text>
      </View>

      {/* 3. Components as parameters */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. React Components</Text>
        <Text style={styles.text}>
          {fbt('Welcome back, ' + fbt.param('userName', <UserNameComponent name={mockUser.name} />) + '! Check out your ' + fbt.param('dashboardLink', <LinkComponent>dashboard</LinkComponent>) + '.', 'Welcome message with user component')}
        </Text>
      </View>

      {/* 4. Lists & Conjunctions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Lists & Conjunctions</Text>
        <Text style={styles.text}>
          {fbt(fbt.list('playerList', players, 'and', 'comma') + ' joined the game.', 'Players in game')}
        </Text>

        <Text style={styles.text}>
          Using list function: {list(players, 'or', 'comma')}
        </Text>
      </View>

      {/* 5. Pluralization */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Pluralization</Text>
        <Text style={styles.text}>
          {fbt('You have ' + fbt.plural('one item', itemCount, { many: 'items', showCount: 'ifMany', name: 'itemCount' }) + ' in your cart.', 'Item count')}
        </Text>
        
        <View style={styles.buttonRow}>
          <Button
            title={fbs('Add Item', 'Add item button')}
            onPress={() => setItemCount(itemCount + 1)}
          />
          <Button
            title={fbs('Remove Item', 'Remove item button')}
            onPress={() => setItemCount(Math.max(0, itemCount - 1))}
          />
        </View>
        
        <Text style={styles.text}>
          {fbt('Do you want to play against ' + fbt.plural('a bot', botCount, { many: 'bots', showCount: 'ifMany', name: 'numberOfBots' }) + '?', 'Bot game confirmation')}
        </Text>
        
        <View style={styles.buttonRow}>
          <Button
            title={fbs('Add Bot', 'Add bot button')}
            onPress={() => setBotCount(botCount + 1)}
          />
          <Button
            title={fbs('Remove Bot', 'Remove bot button')}
            onPress={() => setBotCount(Math.max(1, botCount - 1))}
          />
        </View>
      </View>

      {/* 6. Pronouns */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>6. Pronouns</Text>
        <Text style={styles.text}>
          {fbt(fbt.param('name', mockUser.name) + ' shared ' + fbt.pronoun('possessive', mockUser.pronounGender, { human: true }) + ' photo with you.', 'Photo sharing text')}
        </Text>
        
        <Text style={styles.text}>
          {fbt(fbt.param('name', mockUser.name) + ' updated ' + fbt.pronoun('possessive', mockUser.pronounGender, { human: true }) + ' profile.', 'User activity')}
        </Text>
      </View>

      {/* 7. Plain Text Usage (fbs) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>7. Plain Text (fbs)</Text>
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel={fbs('Save document', 'Save button accessibility label')}
        >
          <Text style={styles.buttonText}>
            {fbs('Save', 'Save button text')}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  section: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
    color: '#34495e',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FbteeExamples;
