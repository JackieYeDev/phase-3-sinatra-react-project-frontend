import React, { useEffect, useState } from "react";
import { Select } from "semantic-ui-react";

function UserSelect() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  useEffect(() => {
    /*
     * FETCH userList from Sinatra API after render
     * {key: "", value: "", text: ""}
     */
  }, {});
  return (
    <Select
      placeholder="Filter an existing user"
      options={[
        { key: "test", value: "test", text: "test" },
        { key: "testing", value: "testing", text: "testing" },
      ]}
      fluid
    />
  );
}

export default UserSelect;
