import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Fetchtab from "./components/Fetchtab";
import "./styles/fetch.css";

function App() {
  const [usersTab, setUsersTab] = useState(false);
  const [postsTab, setPostsTab] = useState(false);
  const [commetsTab, setCommentsTab] = useState(false);
  return (
    <div className="App">
      <Fetchtab
        setUsersTab={setUsersTab}
        setPostsTab={setPostsTab}
        setCommentsTab={setCommentsTab}
      />
      <Content
        usersTab={usersTab}
        postsTab={postsTab}
        commentsTab={commetsTab}
      />
    </div>
  );
}

export default App;
