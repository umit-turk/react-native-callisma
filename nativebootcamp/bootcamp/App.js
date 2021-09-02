import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  Appearance,
  useColorScheme,
  SectionList,
} from 'react-native';
import Welcome, {SayThank, SayHello} from './src/components/Welcome';
import CustomText from './src/components/customText/index';

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const App = () => {
  const apiURL = 'https://random-data-api.com/api/users/random_user?size=20';

  const [data, setData] = useState([]);

  const isDarkMode = useColorScheme() === 'dark';
  console.log({isDarkMode});

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const response = await axios.get(apiURL);
    setData(response.data);
  };

  useEffect(() => {
    // axios.get(apiURL).then(response => console.log("Data", response.data))
    fetchData();
  }, []);

  const keyExtractor = (item, index) => `${item.uid}_index${index}`;

  function Item({avatar, first_name, last_name}) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 100, height: 100}} source={{uri: avatar}} />
        <CustomText
          text={`${first_name} ${last_name}`}
          containerStyle={{margin: 5}}
          isDarkMode={isDarkMode}
        />
        {/* <Text style={[{margin: 5}, isDarkMode ? {color: "#fff"} : {color: "#000"}]}>
          {first_name} {last_name}
        </Text> */}
      </View>
    );
  }

  const Product = ({ title }) => (
    <View >
      <Text style={{color: "red", textAlign: "center"}} >{title}</Text>
    </View>
  );

  const renderItem = ({item, index}) => {
    // console.log(`Items : ${JSON.stringify(item, null, 4)} ${index}`);
    return (
      // <View style={{justifyContent: 'center', alignItems: 'center'}}>
      //   <Text style={{margin: 5}}>
      //     {item.first_name} {item.last_name}
      //   </Text>
      //   <Image style={{width: 100, height: 100}} source={{uri: item.avatar}} />
      // </View>
      <Item
        avatar={item.avatar}
        first_name={item.first_name}
        last_name={item.last_name}
      />
    );
  };

  return (
    <SafeAreaView>
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
      </View>
      
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Product title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{color: "blue", textAlign: "center"}} >{title}</Text>
      )}
    />

      <FlatList
        refreshing={true}
        data={data}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View>
            {/* <Text>Yükleniyor</Text> */}
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
      />
    </SafeAreaView>
  );
};

export default App;
