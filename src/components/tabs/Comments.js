import React from "react";

export default function Comments({
  commentsIsLoading,
  commentsFetchError,
  commentsTab,
  comments,
}) {
  return (
    <div
      style={{ color: "#916046" }}
      className={commentsTab ? "commentsContent" : ""}
    >
      {!commentsIsLoading ? (
        commentsFetchError ? (
          <p style={{ color: "red" }}>{`Error: ${commentsFetchError}`}</p>
        ) : commentsTab ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{JSON.stringify(comment)}</li>
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
