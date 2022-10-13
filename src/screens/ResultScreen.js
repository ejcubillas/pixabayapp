import { useEffect, useState, useContext } from 'react';
import { 
  TouchableOpacity, 
  Text,
  StyleSheet,
  Pressable,
  View,
  Image
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Container from '../components/Container';
import { ResultContext } from '../context/ResultContext'; 
import { PIXABAY, PIXABAY_API_KEY } from '@env';
const ResultScreen = (props) => {
  const { setResult, result } =  useContext(ResultContext);
  const [nextPage, setNextPage] = useState(1);
  const [thumbnailSize, setThumbnailSize] = useState(0);
  useEffect(() => {
    getData();
  }, [props.route.params.keyword]);

  const getData = () => {
    fetch(`${PIXABAY}?key=${PIXABAY_API_KEY}&q=${props.route.params.keyword}&page=${nextPage}`, {
      method: 'GET',
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setResult([...result, ...data.hits]);
      setNextPage(nextPage + 1);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const handleImagePress = (item) => {
    props.navigation.navigate('DetailScreen', {
      tags: item.tags.split(", "),
      imageURL: item.largeImageURL,
      imageWidth: item.imageWidth,
      imageHeight: item.imageHeight,
      user: item.user,
      userIMG: item.userImageURL
    })
  }

  const renderItem = ({item}) => {
    return (
      <Pressable
        style={{
          width: thumbnailSize/2,
          height: thumbnailSize/2,
          padding: 5
        }}
        onPress={() => handleImagePress(item)}
      >
        <Image
          source={{
            uri: item.webformatURL
          }}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </Pressable>
      
    )
  }
  return (
    <Container>
      <Text>Showing results for: {props.route.params.keyword}</Text>
      <FlatList
        renderItem={renderItem}
        numColumns={2}
        data={result}
        keyExtractor={item => item.id}
        onLayout={({nativeEvent}) => {
          setThumbnailSize(nativeEvent.layout.width);
        }}
        onEndReachedThreshold={0.5}
        onEndReached={getData}
      />
     
    </Container>
  );
}

export default ResultScreen;