import React from 'react';
import { FlatList, View } from 'react-native';
import NoteCard from '../components/NoteCard';
import { NoteContext } from '../context/NoteContext';

function HomeScreen({ navigation }) {
  return (
    <NoteContext.Consumer>{(context) => {
      const { notes, deleteNote } = context
      return(
        <View>
        <FlatList 
          keyExtractor={(item) => item.id.toString()}
          data={notes}
          renderItem={({item}) => (
          <NoteCard note={item} deleteNote={deleteNote} />
          )}
          />
        </View>
      )}}
    </NoteContext.Consumer>
  )
}

export default HomeScreen