import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';

//Boton flotante para agregar notas
const BottomButton = ({onPress}) => {
  return (
    <View className="flex-1">
    {/* El botón está posicionado de forma absoluta en la parte inferior derecha */}
    <TouchableOpacity
      className="absolute bottom-9 right-4 w-20 h-20 bg-customColor-200 opacity-95 justify-center items-center rounded-full"
      onPress={onPress}
    >
      <Icon name="plus" type="font-awesome" size={30} color="white" />
    </TouchableOpacity>
  </View>
  );
};

export default BottomButton;
