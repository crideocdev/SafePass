import {SafeAreaView } from 'react-native';
import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//componentes
import TitleText from '../components/titleText';
import BodyNote from '../components/noteBody';
import SaveButton from '../components/saveButton';

const NoteScreen = () => {

    //logica de guardado de la nota
    const [note,setNote] = useState('');
    const [savedNote,setSavedNote]=useState('');
    const [titleNote,setTitleNote]=useState('');

    //obtenemos el titulo
    const changeTitleNote=(title)=>{
        setTitleNote(title);
    }

    //obtenemos la nota
    const changeBodyNote=(body)=>{
        setNote(body);
    }

    console.log(titleNote);
    console.log(note);
    //guardar la nota
    const saveNote = async () => {
        try {
          await AsyncStorage.setItem(titleNote, titleNote+":"+note); // Almacena la nota con la clave 'userNote'
          alert('Nota guardada con éxito');
        } catch (error) {
          console.error('Error al guardar la nota', error);
        }
      };

  return (
    <SafeAreaView className="flex-1 p-5 bg-customColor-100">
      <TitleText onChangeText={changeTitleNote} />
      <BodyNote onChangeText={changeBodyNote} />
      <SaveButton onPress={saveNote} />
    </SafeAreaView>
  );
}

export default NoteScreen