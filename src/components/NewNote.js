import React, { useState } from "react";
import { Button, Form, Select, TextArea } from "semantic-ui-react";

function NewNote(props) {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    content: "",
  });
  function handleUserSelect(event, data) {
    const value = data.value; // Author ID
    setFormData({ ...formData, id: value });
  }
  function handleCreateNote(e) {
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:9292/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author_id: formData.id,
        title: formData.title,
        content: formData.content,
      }),
    })
      .then((res) => res.json())
      .then(() => console.log("Note Successfully Created"))
      .catch((err) => console.log(err));
  }
  return (
    <Form onSubmit={handleCreateNote}>
      <Form.Field>
        <label>Author ID</label>
        <input placeholder="Author ID" disabled={"true"} value={formData.id} />
      </Form.Field>
      <Form.Field>
        <label>Author Name</label>
        <Select
          onChange={handleUserSelect}
          placeholder="Select an existing author"
          options={[
            { key: "default", value: "", text: "" },
            ...props.authors.map((author, index) => ({
              key: index,
              value: author.id,
              text: author.name,
            })),
          ]}
          fluid
        />
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
      <Button color={"green"} type={"submit"}>
        Save
      </Button>
    </Form>
  );
}

export default NewNote;
