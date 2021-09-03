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
} from 'react-native';
import Welcome, {SayThank, SayHello} from './src/components/Welcome';
import CustomText from './src/components/customText/index';
import {
  ThemeContext,
  ThemeProvider,
  useThemeContext,
} from './src/utils/theme/ThemeContext';

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

  useImperativeHandle(ref, () =>({
    value: () =>alert(text),
    focus: () => inputRef.current.focus(),
    characterCount: () => alert(`karakter sayısı ${text.length}`) || text.length,
  }), [])
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
  const {isDarkMode, theme, toggleTheme} = useContext(ThemeContext);

  const inputRef = useRef(null);

  const focus = () => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };

  const [pageSize, setPageSize] = useState(1)
  

  // useEffect(() => {
  //   axios.get(`${apiURL}?size=${pageSize}`).then(response => {
  //     response.data
  //   })
  // }, [pageSize]);

  // console.log(pageSize)

  

  const changePageSize = useCallback((page) => {
    console.log("render oldum change pagesize", page)
    setPageSize(page => page + 1);
  }, [pageSize]);

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
          <Button title="page size değiştir." onPress={() => changePageSize(pageSize)} />
          <CustomInput ref={inputRef} />
          <Button title="focus" onPress={() => inputRef?.current?.focus()} />
          <Button title="karakter sayım" onPress={() => inputRef?.current.characterCount()} />
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
          />
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
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
