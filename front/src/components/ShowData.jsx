import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
export default function ShowData(props) {
    const theme = useContext(GlobalContext)
    console.log(theme);
    
  async function readData() {
    try {
      const res = await fetch("http://localhost:5000/data", {
        headers: {
          "content-type": "application/json",
        },
        method: "GET",
      });
      const json = await res.json();
      // console.log(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    readData();
    console.log(data);
  });

  return (
    <div>
      <table className="table-auto p-2  min-h-screen font-semibold min-w-full">
        <thead className="border">
          <tr>
            <th>Event ID</th>
            <th className="">Year</th>
            <th>Country</th>
            <th>City</th>
            <th>Attack Type</th>
            <th>Motive</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            <tr>
              <td>{trrorist.eventid} </td>
              <td>{row.iyear} </td>
              <td>{row.country_txt} </td>
              <td>{row.city} </td>
              <td>{row.attacktype1_txt} </td>
              <td>{row.motive} </td>
            </tr>;
          })}
          <tr className="border">
            <td>{props.eventid}</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr className="border">
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr className="border">
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr className="border">
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr className="border">
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr className="border">
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
