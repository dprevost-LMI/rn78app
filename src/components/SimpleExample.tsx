import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {fbs, fbt} from 'fbtee';

const SimpleExample: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {'Simple fbtee Example'}
      </Text>

      <Text style={styles.title}>
        {fbt('Simple fbtee Example', 'Simple example title')}
      </Text>



       <Text style={styles.text}>
        {fbt('This is a simple internationalization example using fbtee.', 'Description text')}
      </Text>

      <Text style={styles.counter}>
        Count: {count}
      </Text>

      <Button
        title={fbs('Increment', 'Button to increment counter')}
        onPress={() => setCount(count + 1)}
      />

      <Button
        title={fbs('Reset', 'Button to reset counter')}
        onPress={() => setCount(0)}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  counter: {
    fontSize: 18,
    marginVertical: 20,
  },
});

export default SimpleExample;
