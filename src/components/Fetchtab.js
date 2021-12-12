import React from "react";

export default function fetchtab({ setUsersTab, setPostsTab, setCommentsTab }) {
  const enableUsers = () => {
    setUsersTab(true);
    setPostsTab(false);
    setCommentsTab(false);
  };
  const enablePosts = () => {
    setUsersTab(false);
    setPostsTab(true);
    setCommentsTab(false);
  };
  const enableComments = () => {
    setUsersTab(false);
    setPostsTab(false);
    setCommentsTab(true);
  };
  return (
    <div className="fetchTab">
      <button className="usersButton" onClick={enableUsers}>
        Users
      </button>
      <button className="postsButton" onClick={enablePosts}>
        Posts
      </button>
      <button className="commentsButton" onClick={enableComments}>
        Comments
      </button>
    </div>
  );
}
