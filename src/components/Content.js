import React, { useEffect, useState } from "react";
import Comments from "./tabs/Comments";
import Posts from "./tabs/Posts";
import Users from "./tabs/Users";

export default function Content({ usersTab, postsTab, commentsTab }) {
  // API LINKS
  const API_URL_USERS = "https://jsonplaceholder.typicode.com/users";
  const API_URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
  const API_URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments";

  // use states
  const [users, setUsers] = useState("");
  const [posts, setPosts] = useState("");
  const [comments, setComments] = useState("");

  const [usersFetchError, setUsersFetchError] = useState(null);
  const [postsFetchError, setPostsFetchError] = useState(null);
  const [commentsFetchError, setCommentsFetchError] = useState(null);

  const [usersIsLoading, setUsersIsLoading] = useState(true);
  const [postsIsLoading, setPostsIsLoading] = useState(true);
  const [commentsIsLoading, setCommentsIsLoading] = useState(true);

  //   use effects
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(API_URL_USERS);
        if (!response.ok) throw Error("Could Not Recieve Users From API");
        const u = await response.json();
        setUsers(u);
        setUsersFetchError(null);
      } catch (error) {
        setUsersFetchError(error.message);
      } finally {
        setUsersIsLoading(false);
      }
    };
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL_POSTS);
        if (!response.ok) throw Error("Could Not Recieve Posts From API");
        const p = await response.json();
        setPosts(p);
        setPostsFetchError(null);
      } catch (error) {
        setPostsFetchError(error.message);
      } finally {
        setPostsIsLoading(false);
      }
    };
    const fetchComments = async () => {
      try {
        const response = await fetch(API_URL_COMMENTS);
        if (!response.ok) throw Error("Could Not Recieve Comments From API");
        const c = await response.json();
        setComments(c);
        setCommentsFetchError(null);
      } catch (error) {
        setCommentsFetchError(error.message);
      } finally {
        setCommentsIsLoading(false);
      }
    };
    fetchUser();
    fetchPosts();
    fetchComments();
  }, []);

  return (
    <main>
      <Users
        usersIsLoading={usersIsLoading}
        usersFetchError={usersFetchError}
        usersTab={usersTab}
        users={users}
      />
      <Posts
        postsIsLoading={postsIsLoading}
        postsFetchError={postsFetchError}
        postsTab={postsTab}
        posts={posts}
      />
      <Comments
        commentsIsLoading={commentsIsLoading}
        commentsFetchError={commentsFetchError}
        commentsTab={commentsTab}
        comments={comments}
      />
    </main>
  );
}
