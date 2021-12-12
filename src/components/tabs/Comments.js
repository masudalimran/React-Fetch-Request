import React from "react";
import Table from "./Table";

export default function Comments({
  commentsIsLoading,
  commentsFetchError,
  commentsTab,
  comments,
}) {
  return (
    <div className={commentsTab ? "commentsContent" : ""}>
      {!commentsIsLoading ? (
        commentsFetchError ? (
          <p style={{ color: "red" }}>{`Error: ${commentsFetchError}`}</p>
        ) : commentsTab ? (
          <table>
            <tr>
              <th>ID</th>
              <th>Comment Title</th>
              <th>Email</th>
              <th>Comment ID</th>
              <th>Comment</th>
            </tr>
            {comments.map((data) => (
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
