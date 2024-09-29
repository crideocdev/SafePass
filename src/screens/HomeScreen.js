import React from 'react';
import {Text,SafeAreaView } from 'react-native';

//componentes 
import SearchBar from '../components/searchBar';
import NewNoteButton from '../components/newNoteButton';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-customColor-100">
        <SearchBar/>
        <Text className = "text-customColor-300">Welcome to the Home Screen!</Text>
        <NewNoteButton onPress={() => navigation.navigate("Note")}/>
    </SafeAreaView>
  );
};

export default HomeScreen;
