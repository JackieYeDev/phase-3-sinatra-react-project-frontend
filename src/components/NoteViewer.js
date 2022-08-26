import React from "react";
import { Button, Form, TextArea } from "semantic-ui-react";
function NoteViewer() {
  return (
    <Form>
      <Form.Field>
        <label>Author</label>
        <input placeholder="Note Author" />
      </Form.Field>
      <Form.Field>
        <label>Title</label>
        <input placeholder="Note Title" />
      </Form.Field>
      <Form.Field>
        <label>Content</label>
        <TextArea placeholder="Content of note ..."></TextArea>
      </Form.Field>
      <Button>Save</Button>
      <Button>Cancel</Button>
    </Form>
  );
}

export default NoteViewer;
