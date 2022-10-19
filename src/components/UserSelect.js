import React from "react";
import { Select } from "semantic-ui-react";

function UserSelect(props) {
  return (
    <Select
      onChange={props.handleUserSelect}
      placeholder="Select an existing user to view notes or delete"
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
  );
}

export default UserSelect;
