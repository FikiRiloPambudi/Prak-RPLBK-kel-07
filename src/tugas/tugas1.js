import React from "react";
import axios from "axios";
import { RootContext } from "../App";

function Tugas() {
  const [state, setState] = React.useState("");
  const [state2, setState2] = React.useState([]);
  const [ubah, setUbah] = React.useState(1);

  React.useEffect(() => {
    async function restData() {
      const getData = await axios
        .get("https://jakpost.vercel.app/api/category/world/americas")
        .then((data) => setState2(data.data.posts))
        .catch((er) => console.log(er.response));

      return getData;
    }
    if (ubah > 1) {
      restData();
    } else {
      setTimeout(setUbah(2), 10000);
    }
  }, [ubah]);

  return (
    <div
      style={{
        flex: 1,
        flexDirection: "col",
        backgroundColor: "#282c34",
        width: "50%",
      }}
    >
      <div
        style={{
          backgroundColor: "#2c9171",
          height: 250,
          borderRadius: 25,
          paddingLeft: 5,
        }}
      >
        <h3>Input type dengan Use State</h3>
        <input
          onChange={(data) => setState(data.target.value)}
          placeholder="ketik teks"
          style={{ width: "90%" }}
        />
        <h3>{state}</h3>
      </div>

      <div
        style={{
          backgroundColor: "#8e912c",
          height: 975,
          borderRadius: 25,
          paddingLeft: 5,
        }}
      >
        <h3>Penggunaan Use Effect</h3>
        {state2.length === 0 ? (
          <p>Tunggu tampilan data dengan UseEffect</p>
        ) : (
          state2.map((data, i) => {
            return (
              <div key={i}>
                <span>{data.title.slice(0, 50) + "..."}</span>
                <br />
              </div>
            );
          })
        )}
      </div>

      <RootContext.Consumer>
        {(value) => {
          return (
            <div
              style={{
                backgroundColor: "#912c2c",
                borderRadius: 25,
                paddingBottom: 1,
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              <h3>Use Context</h3>
              {value.data.length === 0 ? (
                <p>Buka halaman Use Context Terlebih dahulu</p>
              ) : (
                value.data.map((data, i) => {
                  return (
                    <p key={i}>
                      {data.nama +
                        ", " +
                        data.nim +
                        ", Kelompok " +
                        data.kelompok}
                    </p>
                  );
                })
              )}
            </div>
          );
        }}
      </RootContext.Consumer>
    </div>
  );
}

export default Tugas;
