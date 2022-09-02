import React from "react";
import { Button, Form, TextArea } from "semantic-ui-react";
function NoteViewer(props) {
  return (
    <Form>
      <Form.Field>
        <label>Author</label>
        <input
          placeholder="Note Author"
          value={props.activeNote ? props.activeNote.author_id : ""}
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
      <Button>Save</Button>
      <Button>Cancel</Button>
    </Form>
  );
}

export default NoteViewer;
