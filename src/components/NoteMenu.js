import React from "react";
import { Image, Loader, Menu } from "semantic-ui-react";

function NoteMenu(props) {
  return (
    <>
      {props.notes ? (
        props.notes.map((note) => {
          return (
            <Menu.Item
              key={note.id}
              onClick={() => props.handleNoteClick({ ...note })}
            >
              {props.author ? props.author : "No Author"} - {note.title}
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
