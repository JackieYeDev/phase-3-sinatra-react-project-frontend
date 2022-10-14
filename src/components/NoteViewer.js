import React, { useEffect, useState } from "react";
import { Button, Form, TextArea } from "semantic-ui-react";
function NoteViewer(props) {
  const [formData, setFormData] = useState({
    note_id: props.activeNote.id,
    author_id: props.activeNote ? props.activeNote.author_id : "",
    name: props.author ? props.author.name : "",
    title: props.activeNote ? props.activeNote.title : "",
    content: props.activeNote ? props.activeNote.content : "",
  });
  useEffect(() => {
    setFormData({
      note_id: props.activeNote.id,
      author_id: props.activeNote ? props.activeNote.author_id : "",
      name: props.author ? props.author.name : "",
      title: props.activeNote ? props.activeNote.title : "",
      content: props.activeNote ? props.activeNote.content : "",
    });
  }, [props]);
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/notes/${formData.note_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: formData.note_id,
        title: formData.title,
        content: formData.content,
      }),
    })
      .then((res) => res.json())
      .then((note) => props.handleNoteUpdate(note))
      .catch((err) => console.error(err));
  }
  return (
    <Form>
      <Form.Field>
        <label>Author ID</label>
        <input placeholder="Author ID" value={formData.author_id} disabled />
      </Form.Field>
      <Form.Field>
        <label>Author Name</label>
        <input placeholder="Note Author" value={formData.name} disabled />
      </Form.Field>
      <Form.Field>
        <label>Title</label>
        <input
          placeholder="Note Title"
          value={formData.title}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Content</label>
        <TextArea
          placeholder="Content of note ..."
          value={formData.content}
          onChange={(e) => {
            setFormData({ ...formData, content: e.target.value });
          }}
        ></TextArea>
      </Form.Field>
      <Button color={"green"} onClick={handleSubmit}>
        Save
      </Button>
      <Button color={"red"} onClick={props.handleNoteDelete}>
        Delete
      </Button>
    </Form>
  );
}

export default NoteViewer;
