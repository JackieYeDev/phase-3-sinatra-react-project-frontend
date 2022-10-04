import React from "react";
import { Button, Form, TextArea } from "semantic-ui-react";

function NewNote(props) {
  return (
    <Form>
      <Form.Field>
        <label>Author ID</label>
        <input
          placeholder="Author ID"
          value={props.activeNote ? props.activeNote.author_id : ""}
        />
      </Form.Field>
      <Form.Field>
        <label>Author Name</label>
        <input
          placeholder="Note Author"
          value={props.author ? props.author.name : ""}
        />
      </Form.Field>
      <Form.Field>
        <label>Title</label>
        <input
          placeholder="Note Title"
          value={props.activeNote ? props.activeNote.title : ""}
        />
      </Form.Field>
      <Form.Field>
        <label>Content</label>
        <TextArea
          placeholder="Content of note ..."
          value={props.activeNote ? props.activeNote.content : ""}
        ></TextArea>
      </Form.Field>
      <Button color={"green"}>Save</Button>
      <Button color={"red"}>Delete</Button>
    </Form>
  );
}

export default NewNote;
