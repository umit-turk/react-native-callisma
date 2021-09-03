import axios from 'axios';
import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  Appearance,
  useColorScheme,
  SectionList,
  Switch,
  StyleSheet,
  TextInput,
  Button,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';
import Welcome, {SayThank, SayHello} from './src/components/Welcome';
import CustomText from './src/components/customText/index';
import {
  ThemeContext,
  ThemeProvider,
  useThemeContext,
} from './src/utils/theme/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storageKey = 'projectTracker';
const otherKey = 'otherKey';
// const DATA = [
//   {
//     title: "Main dishes",
//     data: ["Pizza", "Burger", "Risotto"]
//   },
//   {
//     title: "Sides",
//     data: ["French Fries", "Onion Rings", "Fried Shrimps"]
//   },
//   {
//     title: "Drinks",
//     data: ["Water", "Coke", "Beer"]
//   },
//   {
//     title: "Desserts",
//     data: ["Cheese Cake", "Ice Cream"]
//   }
// ];

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const [text, setText] = useState('');

  useImperativeHandle(
    ref,
    () => ({
      value: () => alert(text),
      focus: () => inputRef.current.focus(),
      characterCount: () =>
        alert(`karakter sayısı ${text.length}`) || text.length,
    }),
    [],
  );
  return (
    <TextInput
      onChangeText={setText}
      value={text}
      ref={inputRef}
      style={{borderWidth: 1, margin: 10, padding: 20, borderRadius: 10}}
    />
  );
});

const App = () => {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState();

  const setItem = async val => {
    try {
      const jsonData = JSON.stringify(val);
      console.log('jsonData', jsonData);
      await AsyncStorage.setItem(otherKey, inputValue);
      setValue(jsonData);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };
  const getItem = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(storageKey);
      setValue(jsonData);

      console.log('response', jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  const mergeItem = async val => {
    try {
      const jsonData = JSON.stringify(val);

      await AsyncStorage.mergeItem(storageKey, jsonData);

      const storageData = await AsyncStorage.getItem(storageKey);

      setValue(storageData);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem(storageKey);
      setValue(null);
    } catch (error) {
      console.log(`removeItem: ${error}`);
    }
  };

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      setValue(null);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  // const multiGate = async () => {
  //   try {
  //     const response = await AsyncStorage.multiGet([storageKey, otherKey]);
  //     console.log('Multiget Response :', response);
  //   } catch (error) {
  //     console.log('multigate', multiGate);
  //   }
  // };

  // const multiRemove = async () => {
  //   try {
  //     await AsyncStorage.multiRemove([storageKey, otherKey]);
  //     setValue(null);
  //   } catch (error) {
  //     console.log('multigate', multiRemove);
  //   }
  // };

  // const multiSet = async (projectValue, otherValue) => {
  //   try {
  //     console.log('type of values: ', typeof projectValue, typeof otherValue);
  //     const projectvaluestring = JSON.stringify(projectValue);
  //     const othervaluestring = JSON.stringify(otherValue);
  //     const keyValue = [
  //       [storageKey, projectvaluestring],
  //       [otherKey, othervaluestring],
  //     ];
  //    await AsyncStorage.multiSet(keyValue);
  //     setValue(projectvaluestring);
  //   } catch (error) {
  //     console.log('multigate', multiSet);
  //   }
  // };

  useEffect(() => {
    getItem();
  }, []);

  console.log(AsyncStorage);

  const {isDarkMode, theme, toggleTheme} = useContext(ThemeContext);

  const inputRef = useRef(null);

  const focus = () => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };

  const [pageSize, setPageSize] = useState(1);

  // useEffect(() => {
  //   axios.get(`${apiURL}?size=${pageSize}`).then(response => {
  //     response.data
  //   })
  // }, [pageSize]);

  // console.log(pageSize)

  const changePageSize = useCallback(
    page => {
      console.log('render oldum change pagesize', page);
      setPageSize(page => page + 1);
    },
    [pageSize],
  );

  const apiURL = 'https://random-data-api.com/api/users/random_user';

  // const [data, setData] = useState([]);

  // console.log({isDarkMode});

  // const [loading, setLoading] = useState(false);

  // const fetchData = async () => {
  //   const response = await axios.get(apiURL);
  //   setData(response.data);
  // };

  // useEffect(() => {
  //   // axios.get(apiURL).then(response => console.log("Data", response.data))
  //   fetchData();
  // }, []);

  // const keyExtractor = (item, index) => `${item.uid}_index${index}`;

  // function Item({avatar, first_name, last_name}) {
  //   return (
  //     <View style={{justifyContent: 'center', alignItems: 'center'}}>
  //       <Image style={{width: 100, height: 100}} source={{uri: avatar}} />
  //       <CustomText
  //         text={`${first_name} ${last_name}`}
  //         containerStyle={{margin: 5}}
  //         isDarkMode={isDarkMode}
  //       />
  //       {/* <Text style={[{margin: 5}, isDarkMode ? {color: "#fff"} : {color: "#000"}]}>
  //         {first_name} {last_name}
  //       </Text> */}
  //     </View>
  //   );
  // }

  // const Product = ({ title }) => (
  //   <View >
  //     <Text style={{color: "red", textAlign: "center"}} >{title}</Text>
  //   </View>
  // );

  // const renderItem = ({item, index}) => {
  //   // console.log(`Items : ${JSON.stringify(item, null, 4)} ${index}`);
  //   return (
  //     // <View style={{justifyContent: 'center', alignItems: 'center'}}>
  //     //   <Text style={{margin: 5}}>
  //     //     {item.first_name} {item.last_name}
  //     //   </Text>
  //     //   <Image style={{width: 100, height: 100}} source={{uri: item.avatar}} />
  //     // </View>
  //     <Item
  //       avatar={item.avatar}
  //       first_name={item.first_name}
  //       last_name={item.last_name}
  //     />
  //   );
  // };

  return (
    
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? "height" : "padding"}
     keyboardVerticalOffset={Platform.OS === "ios" ? 44 : 0}
    >
      <ScrollView>
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View>
        <View style={{marginVertical: 25}}>
          <Welcome isDarkMode={isDarkMode} />
        </View>
        <View>
          <SayThank isDarkMode={isDarkMode} />
        </View>
        <View>
          <SayHello isDarkMode={isDarkMode} />
        </View>
        <View>
          <TextInput
            placeholder="asyncstorage"
            style={{borderWidth: 1, height: 40, marginHorizontal: 10}}
            onChangeText={setInputValue}
          />
          <TextInput
            placeholder="asyncstorage"
            style={{borderWidth: 1, height: 40, marginHorizontal: 10, marginVertical:25}}
            onChangeText={setInputValue}
          />
          <TextInput
            placeholder="asyncstorage"
            style={{borderWidth: 1, height: 40, marginHorizontal: 10, marginVertical:25}}
            onChangeText={setInputValue}
          />
          <TextInput
            placeholder="asyncstorage"
            style={{borderWidth: 1, height: 40, marginHorizontal: 10, marginVertical:25}}
            onChangeText={setInputValue}
          />
           <TextInput
            placeholder="asyncstorage"
            style={{borderWidth: 1, height: 40, marginHorizontal: 10, marginVertical:25}}
            onChangeText={setInputValue}
          />
           <TextInput
            placeholder="asyncstorage"
            style={{borderWidth: 1, height: 40, marginHorizontal: 10, marginVertical:25}}
            onChangeText={setInputValue}
          />
          <TextInput
            placeholder="asyncstorage"
            style={{borderWidth: 1, height: 40, marginHorizontal: 10, marginVertical:25}}
            onChangeText={setInputValue}
          />
          
          
         
          {/* <Button
            title="async storage set item"
            onPress={() =>
              setItem({name: 'umit', surname: 'türk', hobbies: 'spor,software'})
            }
          />
          <Button title="async storage get item" onPress={() => getItem()} />
          <Button
            title="async storage merge item"
            onPress={() => mergeItem({age: 16, hobbies: 'spor,software'})}
          />
          <Button
            title="async storage remove item"
            onPress={() => removeItem()}
          /> */}
          {/* <Button
            title="async storage multigate item"
            onPress={() => multiGate()}
          /> */}
          {/* <Button
            title="async storage multiset item"
            onPress={() =>
              multiSet(
                {name: 'umit', surname: 'türk', hobbies: 'spor,software'},
                {name: 'ahmet', surname: 'yasar', hobbies: 'spor,software'},
              )
            }
          /> */}
          {/* <Button title="async storage clear item" onPress={() => clearAll()} /> */}
          {/* <Button
            title="async storage multiremove item"
            onPress={() => multiRemove()}
          /> */}
        {/* </View>
        <View>
          <Button
            title="page size değiştir."
            onPress={() => changePageSize(pageSize)}
          />
          <Text>current value: {value}</Text>
          <CustomInput ref={inputRef} />
          <Button title="focus" onPress={() => inputRef?.current?.focus()} />
          <Button
            title="karakter sayım"
            onPress={() => inputRef?.current.characterCount()}
          />
          <Button title="value" onPress={() => inputRef?.current?.value()} />
        </View>
        <Text>Dark Mode {`${isDarkMode}`}</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomText
            text={`Katılımcı listem`}
            containerStyle={{fontWeight: 'bold', fontSize: 30}}
          /> */}
          <Switch
            onValueChange={
              value => toggleTheme()
              //console.log(value) || setSwitchValue(value)
            }
            value={isDarkMode}
          />
        </View>
      </View>

      {/* <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Product title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{color: "blue", textAlign: "center"}} >{title}</Text>
      )}
    /> */}

      {/* <FlatList
        refreshing={true}
        data={data}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View>
           
            <CustomText
              text={`YÜKLENİYOR...`}
              containerStyle={{margin: 5}}
              isDarkMode={isDarkMode}
            />
          </View>
        )}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 30}}></Text>
            <CustomText
              text={`Katılımcı listem`}
              containerStyle={{fontWeight: 'bold', fontSize: 30}}
              isDarkMode={isDarkMode}
            />
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            <Text>Katılımcı sayısı: {data.length}</Text>
          </View>
        )}
        isDarkMode={isDarkMode}
      /> */}
    </SafeAreaView>
    </ScrollView>
    </KeyboardAvoidingView>
    
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
