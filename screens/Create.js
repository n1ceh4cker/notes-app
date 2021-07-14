import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, RadioButton, TextInput, Subheading, Headline } from 'react-native-paper';
import { NoteContext } from '../context/NoteContext';



function CreateScreen({ navigation }) {
  const [category, setCategory] = useState('work')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  return (
    <ScrollView style={{ margin: 15}}>
      <Headline style={{ textAlign: 'center' }}>
        Create Note
      </Headline>
      <TextInput
        mode='outlined'
        label='Title'
        value={title}
        style={{ marginBottom: 10 }}
        onChangeText={(e) => setTitle(e)}
        multiline
        numberOfLines={3}
        maxLength={100}
        />
      <TextInput
        mode='outlined'
        label='Content'
        value={content}
        style={{ marginBottom: 10 }}
        onChangeText={(e) => setContent(e)}
        multiline
        numberOfLines={8}
        />
      <Subheading>Category</Subheading>
      <RadioButton.Group
        onValueChange={(e) => setCategory(e)} 
        value={category}
        >        
        <RadioButton.Item label='Work' value='work' />
        <RadioButton.Item label='Note' value='note' />
        <RadioButton.Item label='Money' value='money' />        
      </RadioButton.Group>
      <NoteContext.Consumer>{(context) => {
        const { addNote } = context
        const handleSubmit = () => {
          addNote({id: Date.now(), title, content, category})
          setTitle('')
          setContent('')
          setCategory('work')
          navigation.navigate('Home')
        }
        return(
          <Button
            mode='contained'
            onPress={handleSubmit}
          >
          Submit
          </Button>
        )}}
      </NoteContext.Consumer>
    </ScrollView>
  )
}

export default CreateScreen