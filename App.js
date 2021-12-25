/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import Greeting from './components/Greeting';
import Box from './components/Box';
import Counter from './components/Counter';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  const onPress = () => {
    setVisible(!visible);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const name = 'JSX';

  return (
    <SafeAreaView style={styles.full}>
      <Greeting name={name} />
      <View>
        <Box rounded={true} size={'large'} color={'blue'}>
          sdf
        </Box>
      </View>
      <Button title={'토글'} onPress={onPress}></Button>
      <Box rounded={true} size={'large'} color={'orange'}></Box>
      {visible ? (
        <Box rounded={true} size={'large'} color={'blue'}></Box>
      ) : null}
      {visible && <Box rounded={true} size={'large'} color={'brown'}></Box>}
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  full: {
    flex: 1,
  },
});

export default App;
