import React, { useState } from "react";
import UserSelect from "./UserSelect";
import { Button, Image, Input, Loader, Menu } from "semantic-ui-react";

function NoteMenu(props) {
  const [activeNote, setActiveNote] = useState("");

  // const handleItemClick = (e, { name }) => {
  //   setActiveNote(name);
  //   console.log(e);
  // };

  const handleItemClick = (note) => {
    console.log("NoteMenu is called");
    props.handleNoteClick(note);
  };

  return (
    <Menu vertical fluid>
      <Menu.Item onClick={handleItemClick}>Notes App</Menu.Item>
      <Menu.Item>
        <UserSelect authors={props.authors} />
        <Button attached={"bottom"}>Load</Button>
      </Menu.Item>
      <Menu.Item>
        <Input placeholder={"Search by title"}></Input>
        <Button attached={"bottom"}>Search</Button>
      </Menu.Item>

      {props.notes ? (
        props.notes.map((note) => {
          const authorName = props.authors.find(
            (author) => author.id == note.author_id
          );
          return (
            <Menu.Item key={note.id} onClick={() => handleItemClick(note)}>
              {authorName ? authorName.name : "No Author"} - {note.title}
            </Menu.Item>
          );
        })
      ) : (
        //  For some reason this does not load if props.notes is [] or null
        <Menu.Item>
          <Loader active />
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Menu.Item>
      )}
    </Menu>
  );
}

export default NoteMenu;
