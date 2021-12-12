export default function fetchtab({
  setUsersTab,
  setPostsTab,
  setCommentsTab,
  activeButton,
  setActiveButton,
}) {
  const enableUsers = () => {
    setUsersTab(true);
    setPostsTab(false);
    setCommentsTab(false);
    setActiveButton("usersButton");
  };
  const enablePosts = () => {
    setUsersTab(false);
    setPostsTab(true);
    setCommentsTab(false);
    setActiveButton("postsButton");
  };
  const enableComments = () => {
    setUsersTab(false);
    setPostsTab(false);
    setCommentsTab(true);
    setActiveButton("commentsButton");
  };
  return (
    <div className="fetchTab">
      <button
        className={
          activeButton === "usersButton" ? "usersButton active" : "usersButton"
        }
        onClick={enableUsers}
      >
        Users
      </button>
      <button
        className={
          activeButton === "postsButton" ? "postsButton active" : "postsButton"
        }
        onClick={enablePosts}
      >
        Posts
      </button>
      <button
        className={
          activeButton === "commentsButton"
            ? "commentsButton active"
            : "commentsButton"
        }
        onClick={enableComments}
      >
        Comments
      </button>
    </div>
  );
}
