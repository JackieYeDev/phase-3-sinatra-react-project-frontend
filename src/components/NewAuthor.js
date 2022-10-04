import React, { useState } from "react";
import { Button, Form, TextArea } from "semantic-ui-react";

function NewAuthor() {
  const [formData, setFormData] = useState({ authorName: "" });
  return (
    <Form>
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
      <Button color={"green"}>Save</Button>
      <Button color={"red"}>Delete</Button>
    </Form>
  );
}

export default NewAuthor;
