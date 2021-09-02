import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import {COLORS, FONTS, SIZES, icons, images} from '../constans/index';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 18}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

export default function Home() {
  const profileData = {
    name: 'Username',
    point: 200,
  };

  const bookOtherWordsForHome = {
    id: 1,
    bookName: 'lorem ipsum1',
    bookCover: images.otherWordsForHome,
    rating: 4.5,
    language: 'eng',
    author: 'Seith Ferid',
    genre: ['Adventure', 'Drama'],
    readed: '13k',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTinColor: '#000',
  };

  const bookTheMetropolis = {
    id: 2,
    bookName: 'lorem ipsum2',
    bookCover: images.theMetropolist,
    rating: 4.5,
    language: 'eng',
    author: 'Seith Ferid',
    genre: ['Adventure', 'Drama'],
    readed: '13k',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTinColor: '#000',
  };
  const bookTheTinyDragon = {
    id: 3,
    bookName: 'lorem ipsum3',
    bookCover: images.theTinyDragon,
    rating: 4.5,
    language: 'eng',
    author: 'Seith Ferid',
    genre: ['Adventure', 'Drama'],
    readed: '13k',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTinColor: '#000',
  };

  const myBooksData = [
    {
      ...bookOtherWordsForHome,
      completion: '75%',
      lastRead: '3d 5h',
    },
    {
      ...bookTheMetropolis,
      completion: '23%',
      lastRead: '10d 5h',
    },
    {
      ...bookTheTinyDragon,
      completion: '10%',
      lastRead: '1d 2h',
    },
  ];

  const categoriesData = [
      {
          id: 1,
          categoryName: "Best Seller",
          books: [
              bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon
          ]
      },
      {
          id: 2,
          categoryName: "The Latest",
          books: [
              bookTheMetropolis
          ]
      },
      {
          id: 3,
          categoryName: "Coming Soon",
          books: [
              bookTheTinyDragon
          ]
      }
    ]

  const [profile, setProfile] = useState(profileData);
  const [myBooks, setMyBooks] = useState(myBooksData);
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(1)

  function renderHeader(profile) {
    return (
      <View style={styles.render_header}>
        {/* greetings */}
        <View style={styles.greeting}>
          <View style={{marginRight: SIZES.padding}}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>Good Morning</Text>
            <Text style={{...FONTS.h3, color: COLORS.white}}>
              {profile.name}
            </Text>
          </View>
        </View>

        {/* points */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20,
          }}
          onPress={() => {
            console.log('hello');
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{width: 25, height: 25}}
              />
            </View>
            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.body3,
              }}>
              {profile.point} point{' '}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButtonSection() {
    return (
      <View style={{flex: 1, justifyContent: 'center', padding: SIZES.padding}}>
        <View
          style={{
            flexDirection: 'row',
            height: 70,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
          }}>
          {/* claim */}

          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('claim')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.claim_icon}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                Claim
              </Text>
            </View>
          </TouchableOpacity>

          {/* divider */}
          <LineDivider />
          {/* get point */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('get point')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                Get Point
              </Text>
            </View>
          </TouchableOpacity>
          {/* Divider */}
          <LineDivider />
          {/* My card */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('my card')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                My Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderMyBookSection (myBooks)  {

    const renderItem = ({item, index}) => {
        return (
        <TouchableOpacity
        style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius
        }}
        onPress= {() => console.log("my books")}
        >

            {/* Book Cover */}
            <Image
                source={item.bookCover}
                resizeMode = "cover"
                style = {{
                    width: 180,
                    height: 250,
                    borderRadius: 20,
                }}
            />
            {/* book info */}
            <View style={{marginTop: SIZES.radius, flexDirection: "row", alignItems: "center"}}>
                <Image 
                source={icons.clock_icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray
                }}
                />
                <Text style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>{item.lastRead}</Text>

                <Image
                    source={icons.page_icon}
                    style={{
                        marginLeft:SIZES.radius,
                        width: 20,
                        height: 20,
                        tintColor: COLORS.lightGray
                    }}
                />
                <Text style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>{item.completion}</Text>

            </View>
        </TouchableOpacity>
        )
          }
    return (
      <View style={{flex: 1}}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.h2, color: COLORS.white}}>My books</Text>
          <TouchableOpacity
          onPress={() => console.log("See more")}
          >
              <Text style={{...FONTS.body3, color: COLORS.lightGray, alignSelf: "flex-start", textDecorationLine: "underline"}}>see more</Text>
          </TouchableOpacity>
        </View>

        {/* books */}
          <View style={{flex: 1, marginTop: SIZES.padding}}>
            <FlatList
                data={myBooks}
                renderItem={renderItem}
                keyExtractor= {item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
          </View>

      </View>
    );
  };

  function renderCategoryHeader() {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity>
                
            </TouchableOpacity>
        )
    }

      return (
          <View style={{flex: 1, paddingLeft: SIZES.padding}}>
              <FlatList 
                data={categories}
                showsHorizontalScrollIndicator
                renderItem= {renderItem}
                keyExtractor={item => `${item.id}`}
              />
          </View>
      )
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* header section */}
      <View style={{height: 200}}>
        {renderHeader(profile)}
        {renderButtonSection()}
      </View>
      {/* Body Section */}

      <ScrollView style={{marginTop: SIZES.radius}}>
        {/* Book section */}
        <View>{renderMyBookSection(myBooks)}</View>
        {/* category section */}
        <View style={{marginTop: SIZES.padding}}>
            <View>
                {renderCategoryHeader()}
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  render_header: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  greeting: {
    flex: 1,
  },
});
