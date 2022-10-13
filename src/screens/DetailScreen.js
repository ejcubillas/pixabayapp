import { useState, useContext } from 'react';
import { 
  TouchableOpacity, 
  Text,
  StyleSheet,
  Pressable,
  View,
  Image
} from 'react-native';
import Container from '../components/Container';
import { ResultContext } from '../context/ResultContext';

const DetailScreen = (props) => {
  const { setResult } = useContext(ResultContext);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  const handleTagPress = (tag) => {
    setResult([]);
    props.navigation.navigate('ResultScreen', {
      keyword: tag
    });
  }

  return (
    <Container>
      <View
        style={styles.imageContainer}
        onLayout={({nativeEvent}) => {
          setImageWidth(nativeEvent.layout.width);
          setImageHeight((props.route.params.imageHeight / props.route.params.imageWidth) * nativeEvent.layout.width);
        }}
      >
        <Image
          source={{
            uri: props.route.params.imageURL
          }}
          style={{
            height: imageHeight,
            width: imageWidth
          }}
        />
      </View>
      <View style={styles.authorContainer}>
        <Image
          source={{
            uri: props.route.params.userIMG
          }}
          style={styles.authorImg}
        />
        <Text>{props.route.params.user}</Text>
      </View>
      <View style={styles.tagsContainer}>
        {props.route.params.tags.map((val, i) => {
          return (
            <Pressable
              style={styles.tags}
              key={i}
              onPress={() => handleTagPress(val)}
            >
              <Text>{val}</Text>
            </Pressable>
          )
        })}
      </View>
    </Container>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%'
  },

  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },

  authorImg:  {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 15
  },

  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  tags: {
    padding: 4,
    paddingHorizontal: 8,
    backgroundColor: '#eee',
    marginRight: 8,
    marginVertical: 4,
    borderRadius: 15
  }
});