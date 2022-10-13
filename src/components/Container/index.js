import {
  SafeAreaView,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const Container = (props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.mainContainer}>
        {props.children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Container;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },

  mainContainer: {
    flex: 1,
    paddingHorizontal: 15
  }
});