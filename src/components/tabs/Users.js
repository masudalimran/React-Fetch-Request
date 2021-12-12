import React from "react";

export default function Users({
  usersIsLoading,
  usersFetchError,
  usersTab,
  users,
}) {
  return (
    <div className={usersTab ? "usersContent" : ""}>
      {!usersIsLoading ? (
        usersFetchError ? (
          <p style={{ color: "red" }}>{`Error: ${usersFetchError}`}</p>
        ) : usersTab ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{JSON.stringify(user)}</li>
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
