import React from "react";
import UserForm from "./components/Form/UserForm";
import AddedUsers from "./components/Users/AddedUsers";
function App(props: any) {
  return (
    <div>
      <UserForm />
      <AddedUsers />
    </div>
  );
}

export default App;
