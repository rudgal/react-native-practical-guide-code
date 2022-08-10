import { View, Text, StyleSheet } from 'react-native';

function GameScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>Game Screen!</Text>
      {/*GUESS*/}
      <View>
        <Text>Higher or lower?</Text>
        {/*+*/}
        {/*-*/}
      </View>
      <View>{/*LOG ROUNDS*/}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
