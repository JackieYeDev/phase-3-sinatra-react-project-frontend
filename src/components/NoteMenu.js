import React, { useState } from "react";
import UserSelect from "./UserSelect";
import { Button, Image, Input, Loader, Menu } from "semantic-ui-react";

function NoteMenu(props) {
  const [activeNote, setActiveNote] = useState("");

  const handleItemClick = (e, { name }) => {
    setActiveNote(name);
    console.log(e);
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
            <Menu.Item key={note.id}>
              {authorName ? authorName.name : "No Author"} - {note.title}
            </Menu.Item>
          );
        })
      ) : (
        <Menu.Item>
          <Loader active />
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Menu.Item>
      )}
    </Menu>
  );
}

export default NoteMenu;
