import React, { createContext, useState } from 'react'

export const NoteContext = createContext()
function NoteContextProvider({ children }) {
  const [notes,setNotes] = useState([
    {
      id:7894563,
      title: "Find out your DNS server",
      content: "nmcli dev show | grep 'IP4.DNS'",
      category: "note"
    },
    {
      id: 1223466,
      category :"work",
      content: "add env file & deploy your app on netlify",
      title: "Deploy app" 
    },
    {
      id: 1245875,
      category: "work",
      content: "If you by mistake cancel gh-pages deploy then just delete the node_modules/.cache/gh-pages directory and it will work fine",
      title: "github pages deploy error resolved" 
    },
    {
      id: 1234567,
      category: "money",
      content: "https://www.howtoforge.com/tutorial/ubuntu-ruby-on-rails/",
      title: "Install ruby on rails" 
    },
    {
      id:7654123,
      category: "work",
      content: 'mongo "mongodb+srv://root_0:znTy8aQ5JLTxer5@dot-slash-4nrmd.mongodb.net/food?retryWrites=true&w=majority"',
      title: "Connecting to mongo" 
    }
  ])
  const addNote = (note) => {
    setNotes([...notes,note])
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id!==id)
    setNotes(newNotes)
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  )
}


export default NoteContextProvider