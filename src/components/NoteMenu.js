import React, { useState } from "react";
import UserSelect from "./UserSelect";
import { Button, Image, Input, Loader, Menu } from "semantic-ui-react";

function NoteMenu(props) {
  const [selectedUser, setSelectedUser] = useState("");
  function handleUserSelect(event, data) {
    const value = data.value; // User ID
    setSelectedUser(value);
  }

  return (
    <>
      {props.notes ? (
        props.notes.map((note) => {
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
    </>
  );
}

export default NoteMenu;
