import React, { useEffect, useState } from "react";
import { Select } from "semantic-ui-react";

function UserSelect(props) {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  useEffect(() => {
    /*
     * FETCH userList from Sinatra API after render
     * {key: "", value: "", text: ""}
     */
  }, []);
  return (
    <Select
      placeholder="Filter an existing user"
      options={props.authors.map((author) => {
        return { key: author.id, value: author.name, text: author.name };
      })}
      fluid
    />
  );
}

export default UserSelect;
