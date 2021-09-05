import React, {useLayoutEffect} from 'react';
import {View, Text, Button} from 'react-native';

export default function DetailScreen(props) {
//   console.log('props detail', JSON.stringify(props.route.params, null, 4));

//   useLayoutEffect(() => {
//     //use layouteffect daha ekran oluşmadan çalışıryor ve arayüzde istediğimiz birşeyi değiştirebiliyoruz.
//     props.navigation.setOptions({title: `Detay ${props?.route?.params?.name}`});
//   }, [props.navigation, props.route]);

  return (
    <View>
      <Text>DetailScreen</Text>
      {/* <Text>Ad: {props?.route?.params?.name}</Text> */}
      <Button title="geri git" onPress={() => props.navigation.goBack()} />
      <Button
        title="customstack git"
        onPress={() => props.navigation.navigate('CustomStack')}
      />
    </View>
  );
}
