import React from "react";
import Table from "./Table";

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
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Username</th>
              <th>Company</th>
              <th>Website</th>
            </tr>
            {users.map((data) => (
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
