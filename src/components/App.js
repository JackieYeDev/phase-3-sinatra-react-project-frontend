import React, { createRef, useEffect, useState } from "react";
import NoteViewer from "./NoteViewer";
import NoteMenu from "./NoteMenu";
import { Button, Divider, Grid, Segment, Sticky } from "semantic-ui-react";

function App() {
  const contextRef = createRef();
  const [notes, setNotes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [activeNote, setActiveNote] = useState({});

  useEffect(() => {
    fetch("http://localhost:9292/notes")
      .then((res) => res.json())
      .then((notes) => setNotes(notes))
      .catch((err) => console.error(err));
    fetch("http://localhost:9292/authors")
      .then((res) => res.json())
      .then((authors) => setAuthors(authors))
      .catch((err) => console.error(err));
  }, []);

  function handleNoteClick(note) {
    setActiveNote({ ...note });
  }

  // const filteredNotes = notes.findAll((note) => note.author_id == );

  const activeAuthor = authors.find(
    (author) => author.id == activeNote.author_id
  );

  return (
    <>
      <Divider horizontal />
      <Grid container divided relaxed columns={2} stackable>
        <Grid.Column width={6}>
          <Segment>
            <Sticky context={contextRef}>
              <NoteMenu
                authors={authors}
                notes={notes}
                handleNoteClick={handleNoteClick}
              />
              <Button color={"green"}>New Note</Button>
              <Button color={"green"}>New Author</Button>
            </Sticky>
          </Segment>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <NoteViewer activeNote={activeNote} author={activeAuthor} />
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default App;
