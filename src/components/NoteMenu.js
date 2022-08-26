import React, { useState } from "react";
import UserSelect from "./UserSelect";
import {
  Button,
  ButtonGroup,
  Image,
  Input,
  Loader,
  Menu,
  MenuItem,
} from "semantic-ui-react";

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
        <UserSelect />
        <Button attached={"bottom"}>Load</Button>
      </Menu.Item>
      <Menu.Item>
        <Input placeholder={"Search by title"}></Input>
        <Button attached={"bottom"}>Search</Button>
      </Menu.Item>
      <Menu.Item>
        {props.notes ? (
          ""
        ) : (
          <>
            <Loader active />
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </>
        )}
      </Menu.Item>
    </Menu>
  );
}

export default NoteMenu;
