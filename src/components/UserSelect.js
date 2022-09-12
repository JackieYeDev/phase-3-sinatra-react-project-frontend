import React, { useEffect, useState } from "react";
import { Select } from "semantic-ui-react";

function UserSelect(props) {
  useEffect(() => {
    /*
     * FETCH userList from Sinatra API after render
     * {key: "", value: "", text: ""}
     */
  }, []);

  return (
    <Select
      onChange={props.handleUserSelect}
      placeholder="Filter an existing user"
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
