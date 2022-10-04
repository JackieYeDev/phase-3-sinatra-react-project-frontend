import React, { useState } from "react";
import UserSelect from "./UserSelect";
import { Button, Image, Input, Loader, Menu } from "semantic-ui-react";

function NoteMenu(props) {
  const [selectedUser, setSelectedUser] = useState("");
  function handleUserSelect(event, data) {
    const value = data.value;
    setSelectedUser(value);
  }

  const filteredNotes = props.notes.filter((note) =>
    selectedUser == "" ? true : note.author_id == selectedUser
  );

  return (
    <Menu vertical fluid>
      <Menu.Item>Notes App</Menu.Item>
      <Menu.Item>
        <UserSelect
          authors={props.authors}
          handleUserSelect={handleUserSelect}
        />
      </Menu.Item>

      {props.notes ? (
        filteredNotes.map((note) => {
          const authorName = props.authors.find(
            (author) => author.id == note.author_id
          );
          return (
            <Menu.Item
              key={note.id}
              onClick={() => props.handleNoteClick({ ...note })}
            >
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
