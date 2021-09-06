import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Movie from '../models/Movie';
export default function Home() {
  const [isloading, setIsloading] = useState(false);
  const [recentMovies, setRecentMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const data = [];

  useEffect(() => {
    const fetchMovie = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=f09748a87bae131ed1b4520b146b50ba")
        setPopularMovies(response.data)
        
    }
    fetchMovie()
  }, []);

  popularMovies.push(data)
console.log(data)
  return (
    <SafeAreaView style={styles.container}>
      <Text>{}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
