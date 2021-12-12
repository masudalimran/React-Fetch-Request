import React from "react";

export default function Table(data) {
  return (
    <>
      <tr className="FetchtableRow">
        <td>{data.data.id}</td>

        {/* Users & Comments */}
        {data.data.name ? <td>{data.data.name}</td> : <></>}
        {data.data.email ? <td>{data.data.email}</td> : <></>}

        {/* Posts */}
        {data.data.userId ? <td>{data.data.userId}</td> : null}
        {data.data.title ? <td>{data.data.title}</td> : null}

        {/* Comments */}
        {data.data.postId ? <td>{data.data.postId}</td> : null}
        {data.data.body ? <td>{data.data.body}</td> : null}

        {/* Users */}
        {data.data.phone ? <td>{data.data.phone}</td> : null}
        {data.data.address ? (
          <td>
            <tr>City: {data.data.address.city}</tr>
            <tr>Street: {data.data.address.street}</tr>
            <tr>Suite: {data.data.address.suite}</tr>
            <tr>Zipcode: {data.data.address.zipcode}</tr>
            <td>
              <tr>Latitude: {data.data.address.geo.lat}</tr>
              <tr>Longitude: {data.data.address.geo.lng}</tr>
            </td>
          </td>
        ) : null}
        {data.data.username ? <td>{data.data.username}</td> : null}
        {data.data.company ? (
          <td>
            <tr>Name: {data.data.company.name}</tr>
            <tr>Catch Phrase: {data.data.company.catchPhrase}</tr>
            <tr>BS: {data.data.company.bs}</tr>
          </td>
        ) : null}
        {data.data.website ? <td>{data.data.website}</td> : null}
      </tr>
    </>
  );
}
