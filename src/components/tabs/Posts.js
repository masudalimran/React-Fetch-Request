import React from "react";

export default function Posts({
  postsIsLoading,
  postsFetchError,
  postsTab,
  posts,
}) {
  return (
    <div style={{ color: "blue" }} className={postsTab ? "postsContent" : ""}>
      {!postsIsLoading ? (
        postsFetchError ? (
          <p style={{ color: "red" }}>{`Error: ${postsFetchError}`}</p>
        ) : postsTab ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{JSON.stringify(post)}</li>
            ))}
          </ul>
        ) : (
          <></>
        )
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}
