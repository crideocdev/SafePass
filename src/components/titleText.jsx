import { View, TextInput } from 'react-native'
import React, { useState } from 'react'

const titleText = ({onChangeText}) => {

  const [title,setTitle]=useState('');

  const changeTitleNote=(titleText)=>{
    setTitle(titleText);
    onChangeText(titleText);
  }

  return (
    <View className="items-end">
      <TextInput
        className="my-20 p-2 w-7/12 text-xl border text-customColor-300 border-customColor-300"
        placeholder="Título"
        placeholderTextColor="#F7F7FF"
        value={title}
        onChangeText={changeTitleNote}/>
    </View>
  );
}

export default titleText;