import React from "react";
import Table from "./Table";

export default function Posts({
  postsIsLoading,
  postsFetchError,
  postsTab,
  posts,
}) {
  return (
    <div className={postsTab ? "postsContent" : ""}>
      {!postsIsLoading ? (
        postsFetchError ? (
          <p style={{ color: "red" }}>{`Error: ${postsFetchError}`}</p>
        ) : postsTab ? (
          <table>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Post</th>
            </tr>
            {posts.map((data) => (
              <Table key={data.id} data={data} />
            ))}
          </table>
        ) : (
          <></>
        )
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}
