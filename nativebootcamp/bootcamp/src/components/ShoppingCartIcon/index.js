import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

function ShoppingCartIcon() {
  const cartItems = useSelector(state => state);

  // console.log("cartItems",cartItems.length)

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{marginRight: 10}}
      onPress={() => navigation.navigate('Cart')}>
      <View
        style={{
          position: 'absolute',
          height: 30,
          width: 30,
          borderRadius: 15,
          backgroundColor: 'green',
          zIndex: 2,
          right: 26,
          bottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color:"white", fontWeight: "bold"}}>{cartItems ? cartItems.length : 0 }</Text>
      </View>
      <Icons
        name="ios-cart"
        size={35}
        style={{marginRight: 10}}
        color={'white'}
      />
    </TouchableOpacity>
  );
}

export default ShoppingCartIcon;
