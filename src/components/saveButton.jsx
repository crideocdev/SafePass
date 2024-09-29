import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const saveButton = ({onPress}) => {
  return (
    <View className="items-center">
            <TouchableOpacity 
                className="border bg-customColor-200 top-1/3 h-14 w-4/5 justify-center"
            onPress={onPress}>
                <Text className="text-2xl text-customColor-500 text-center font-bold">
                    Guardar
                </Text>
            </TouchableOpacity>
       </View>
  )
}

export default saveButton