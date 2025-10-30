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

const LinkComponent: React.FC<{children: React.ReactNode}> = ({children}) => (
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
          <fbt desc="Basic welcome message">
            Welcome to our React Native app!
          </fbt>
        </Text>
      </View>

      {/* 2. Parameters with fbt:param */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Parameters</Text>
        <Text style={styles.text}>
          <fbt desc="Welcome message with user name">
            Hello <fbt:param name="userName">{mockUser.name}</fbt:param>, 
            welcome back!
          </fbt>
        </Text>
      </View>

      {/* 3. Components as parameters */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. React Components</Text>
        <Text style={styles.text}>
          <fbt desc="Welcome message with user component">
            Welcome back, <UserNameComponent name={mockUser.name} />!
            Check out your <LinkComponent children={undefined}>dashboard</LinkComponent>.
          </fbt>
        </Text>
      </View>

      {/* 4. Lists & Conjunctions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Lists & Conjunctions</Text>
        <Text style={styles.text}>
          <fbt desc="Players in game">
            <fbt:list
              items={players}
              conjunction="and"
              delimiter="comma"
              name="playerList"
            /> joined the game.
          </fbt>
        </Text>

        <Text style={styles.text}>
          Using list function: {list(players, 'or', 'comma')}
        </Text>
      </View>

      {/* 5. Pluralization */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Pluralization</Text>
        <Text style={styles.text}>
          <fbt desc="Item count">
            You have
            <fbt:plural
              count={itemCount}
              many="items"
              name="itemCount"
              showCount="ifMany"
            >
              one item
            </fbt:plural>
            in your cart.
          </fbt>
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
          <fbt desc="Bot game confirmation">
            Do you want to play against
            <fbt:plural
              count={botCount}
              many="bots"
              name="numberOfBots"
              showCount="ifMany"
            >
              a bot
            </fbt:plural>?
          </fbt>
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
          <fbt desc="Photo sharing text">
            <fbt:param name="name">{mockUser.name}</fbt:param>
            shared
            <fbt:pronoun
              type="possessive"
              gender={mockUser.pronounGender}
              human
            />
            photo with you.
          </fbt>
        </Text>
        
        <Text style={styles.text}>
          <fbt desc="User activity">
            <fbt:param name="name">{mockUser.name}</fbt:param>
            updated
            <fbt:pronoun
              type="possessive"
              gender={mockUser.pronounGender}
              human
            />
            profile.
          </fbt>
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
