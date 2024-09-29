import { Text, View,TextInput } from "react-native";
import React, { Component } from "react";
import {Icon} from 'react-native-elements';

//boton de config
import ButtonConfig from '../components/buttonConfig';

const searchBar = ({})=>{
    return (
      <View className="flex-row items-center">
        <View className="flex-row my-5 p-2 w-10/12 border border-customColor-300 rounded items-center">
          <Icon name="search" size={20} color="gray" className="mr-2" />
                  <TextInput
                    className="flex-1 text-customColor-300 "
                    placeholder="Buscar"
                    placeholderTextColor="#F7F7FF"
                    // value={search}
                    // onChangeText={text => setSearch(text)}
                  />
        </View>
          <ButtonConfig  />
      </View>
    );
};

export default searchBar;
