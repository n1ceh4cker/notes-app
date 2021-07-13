import React from 'react'
import { Avatar, Card, Colors, IconButton, Paragraph } from 'react-native-paper'

function NoteCard({ note, deleteNote }) {
  let avatarStyle 
  if(note.category==='work') avatarStyle = { backgroundColor: Colors.green700 }
  else if(note.category==='money') avatarStyle = { backgroundColor: Colors.blue700 }
  else avatarStyle = { backgroundColor: Colors.red700 }
  return (
    <Card style={{ margin:5 }} >
      <Card.Title
        title={note.title}
        titleNumberOfLines={2}
        subtitle={note.category}
        left={(props) => <Avatar.Text {...props} label={note.category[0].toUpperCase()} style={avatarStyle} />}
        right={(props) => <IconButton {...props} icon='delete' onPress={() => deleteNote(note.id)} />}
        />
      <Card.Content>
        <Paragraph>
          {note.content}
        </Paragraph>
      </Card.Content>
    </Card>
  )
}

export default NoteCard
