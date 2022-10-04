import React, { useState } from "react";
import { Button, Form, TextArea } from "semantic-ui-react";

function NewAuthor(props) {
  const [formData, setFormData] = useState({ authorName: "" });
  function createAuthor(e) {
    e.preventDefault();
    fetch("http://localhost:9292/authors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.authorName,
      }),
    })
      .then((res) => res.json())
      .then((newAuthor) => {
        const authorsList = props.authors.concat(newAuthor);
        props.setAuthors(authorsList);
        console.log(newAuthor);
      })
      .finally(() => setFormData({ ...formData, authorName: "" }))
      .catch((err) => console.error(err));
  }
  return (
    <Form onSubmit={(e) => createAuthor(e)}>
      <Form.Field>
        <label>New Author</label>
        <input
          placeholder="Author's Name"
          value={formData.authorName}
          onChange={(e) =>
            setFormData({ ...formData, authorName: e.target.value })
          }
        />
      </Form.Field>
      <Button color={"green"} type={"submit"}>
        Save
      </Button>
    </Form>
  );
}

export default NewAuthor;
