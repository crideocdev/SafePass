import { View, Text,TextInput } from 'react-native'
import React,{useState} from 'react'

const noteBody = ({onChangeText}) => {

    const [body,setBody]=useState('');

    const changeBodyNote=(bodyText)=>{
        setBody(bodyText);
        onChangeText(bodyText);
    }

  return (
    <View>
      <Text className="text-4xl text-customColor-300">Nota</Text>
      <TextInput
        className="border text-lg bg-customColor-300 text-customColor-500 "
        multiline={true}
        numberOfLines={15}
        value={body}
        onChangeText={changeBodyNote}
      />
    </View>
  );
}

export default noteBody