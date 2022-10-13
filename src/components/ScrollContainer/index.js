import {
  SafeAreaView,
  SrollView,
  StyleSheet
} from 'react-native';

const ScrollContainer = (props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SrollView style={styles.mainContainer}>
        {props.children}
      </SrollView>
    </SafeAreaView>
  )
}

export default ScrollContainer;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },

  mainContainer: {
    paddingHorizontal: 15
  }
});