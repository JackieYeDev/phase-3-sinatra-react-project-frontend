import React, { createRef, useEffect, useState } from "react";
import NoteViewer from "./NoteViewer";
import NoteMenu from "./NoteMenu";
import {
  Button,
  Divider,
  Grid,
  Image,
  Loader,
  Segment,
  Sticky,
} from "semantic-ui-react";
import NewAuthor from "./NewAuthor";
import NewNote from "./NewNote";

function App() {
  const contextRef = createRef();
  const [notes, setNotes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [activeNote, setActiveNote] = useState({});
  const [selection, setSelection] = useState("");

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
    setSelection("ActiveNote");
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
              <Button color={"green"} onClick={() => setSelection("NewNote")}>
                New Note
              </Button>
              <Button color={"green"} onClick={() => setSelection("NewAuthor")}>
                New Author
              </Button>
            </Sticky>
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
            {selection === "NewNote" && <NewNote />}
            {selection === "NewAuthor" && (
              <NewAuthor authors={authors} setAuthors={setAuthors} />
            )}
            {selection === "ActiveNote" && (
              <NoteViewer activeNote={activeNote} author={activeAuthor} />
            )}
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default App;
