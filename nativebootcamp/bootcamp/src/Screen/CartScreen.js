import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {REMOVE_FROM_CART} from '../redux/CartItems';
import Icons from '../Icons';
import { useNavigation } from '@react-navigation/core';

const CartScreen = props => {
  const dispatch = useDispatch();

  const navigation = useNavigation()

  const cartItems = useSelector(state => state);

  const removeItemFromCart = item =>
    dispatch({type: REMOVE_FROM_CART, payload: item});

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
          <TouchableOpacity
            style={styles.button}
            onPress={() => removeItemFromCart(item)}>
            <Text style={styles.buttonText}>Remove -</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      {cartItems.length !== 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => seperator()}
          renderItem={renderItem}
        />
      ) : (
        <View
          style={{
            marginTop: 200,
            justifyContent: 'center',
            color: 'black',
            alignItems: 'center',
          }}>
              <Icons name="cart" size={180} />
          <Text style={{marginVertical: 10}}>Sepetinizde ürün bulunmamaktadır.</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Book')}>
            <Text style={styles.buttonText}>Kitaplığıma dön</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

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
    position: 'absolute',
    top: 110,
    left: 10,
  },
  button: {
    backgroundColor: '#ff333390',
    borderRadius: 10,
    padding: 5,
  },
});
