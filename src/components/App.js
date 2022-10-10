import React, { createRef, useEffect, useState } from "react";
import NoteViewer from "./NoteViewer";
import NoteMenu from "./NoteMenu";
import {
  Button,
  Divider,
  Grid,
  Image,
  Loader,
  Menu,
  Segment,
  Sticky,
} from "semantic-ui-react";
import NewAuthor from "./NewAuthor";
import NewNote from "./NewNote";
import UserSelect from "./UserSelect";

function App() {
  const [notes, setNotes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [activeNote, setActiveNote] = useState({});
  const [selection, setSelection] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/authors")
      .then((res) => res.json())
      .then((authors) => setAuthors(authors))
      .catch((err) => console.error(err));
  }, []);

  function handleNoteClick(note) {
    setSelection("ActiveNote");
    setActiveNote({ ...note });
  }

  function handleUserSelect(event, data) {
    const value = data.value; // User ID
    setSelectedUser(value);
    if (value == false) {
      setNotes([]);
      return null;
    }
    fetch(`http://localhost:9292/authors/${value}`)
      .then((res) => res.json())
      .then((data) => setNotes(data.notes))
      .catch((err) => console.error(err));
  }
  function handleNewNote(newNote) {
    setNotes([...notes, newNote]);
    setSelection("ActiveNote");
    setActiveNote(newNote);
  }

  function handleNoteUpdate(updatedNote) {
    const updatedNoteList = notes.map((note) =>
      note.id == updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNoteList);
  }

  function deleteAuthor() {
    fetch(`http://localhost:9292/authors/${selectedUser}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((author) => {
        const updatedList = authors.filter((a) => a.id !== author.id);
        setAuthors(updatedList);
      });
  }
  function deleteNote() {
    fetch(`http://localhost:9292/notes/${activeNote.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((notes) => {
        const updatedList = notes.filter((n) => n.id !== n.id);
        setAuthors(updatedList);
      });
  }
  const activeAuthor = authors.find(
    (author) => author.id == activeNote.author_id
  );

  return (
    <>
      <Divider horizontal />
      <Grid container divided relaxed columns={2} stackable>
        <Grid.Column width={6}>
          <Segment>
            <Menu vertical fluid>
              <Menu.Item>Notes App</Menu.Item>

              <Menu.Item>
                <UserSelect
                  authors={authors}
                  handleUserSelect={handleUserSelect}
                />
              </Menu.Item>
              <NoteMenu
                authors={authors}
                notes={notes}
                handleNoteClick={handleNoteClick}
              />
            </Menu>
            <Button color={"green"} onClick={() => setSelection("NewNote")}>
              New Note
            </Button>
            <Button color={"green"} onClick={() => setSelection("NewAuthor")}>
              New Author
            </Button>
            <Button color={"red"} onClick={() => deleteAuthor()}>
              Delete User
            </Button>
          </Segment>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            {selection === "" && (
              <>
                <Loader active />
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              </>
            )}
            {selection === "NewNote" && (
              <NewNote authors={authors} handleNewNote={handleNewNote} />
            )}
            {selection === "NewAuthor" && (
              <NewAuthor authors={authors} setAuthors={setAuthors} />
            )}
            {selection === "ActiveNote" && (
              <NoteViewer
                activeNote={activeNote}
                author={activeAuthor}
                handleNoteUpdate={handleNoteUpdate}
              />
            )}
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default App;
