import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../redux/CartItems';
import Books from '../utils/Data';

const BookScreen = () => {
    const  dispatch = useDispatch()

    const addItemToCart = (item) => dispatch({type:ADD_TO_CART, payload: item})

  const seperator = () => {
    return (
      <View style={{borderBottomWidth: 1, borderBottomColor: '#a9a9a9'}} />
    );
  };
  const renderItem = ({item}) => (
    <View style={styles.bookItemContainer}>
      <Image source={{uri: item.thumbnailUrl}} style={styles.thumbnail} />
      <View style={styles.bookItemMetaContainer}>
        <Text style={styles.textTitle}>{item.title}</Text>
        <Text style={styles.textAuthor}>{item.author}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => addItemToCart(item)}>
          <Text style={styles.buttonText}>Add +</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={Books}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => seperator()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: '400',
  },
  textAuthor: {
    fontSize: 18,
    fontWeight: '200',
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10,
  },
  buttonContainer: {
      position: "absolute",
      top: 110,
      left: 10,
  },
  button: {
      backgroundColor: '#24a0ed',
      borderRadius: 10,
      padding: 5,
  }
});
