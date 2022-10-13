import { useState, useContext } from 'react';
import { 
  TouchableOpacity, 
  Text,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import Container from '../components/Container';
import { ResultContext } from '../context/ResultContext';

const HomeScreen = (props) => {
  const { setResult } = useContext(ResultContext);
  const [keyword, setKeyword] = useState('');

  const handlePress = () => {
    setResult([]);
    props.navigation.navigate('ResultScreen', {
      keyword: keyword
    });
  }

  return (
    <Container>
      <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <TextInput
          placeholder='Search for image...'
          style={styles.input}
          onChangeText={setKeyword}
          value={keyword}
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={handlePress}
        >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      </View>
      
    </Container>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontWeight: '900',
    fontSize: 20,
    marginBottom: 15
  },

  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#222',
    borderRadius: 10,
    marginVertical: 2
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },

  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 0.5,
    borderColor: '#eee',
    borderRadius: 10,
    marginVertical: 2
  }
});