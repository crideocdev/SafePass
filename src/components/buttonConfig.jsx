import { View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import {Icon} from 'react-native-elements';

//Boton en la parte superior
const ConfigButton=({onPress})=>{
  return(
  <View className="flex-1 items-end">
     <TouchableOpacity
      onPress={onPress}
    >
      <Icon name="gear" type="font-awesome" size={40} color="#F7F7FF" />
    </TouchableOpacity>
  </View>
  );
};

export default ConfigButton;