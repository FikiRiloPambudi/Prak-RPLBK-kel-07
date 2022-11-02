import React from "react";

function NewHook() {
  const [state, setState] = React.useState({
    nama: "",
    nim: "",
    kelompok: "",
  });
  const namaRef = React.useRef();
  const nimRef = React.useRef();
  const kelompokRef = React.useRef();

  function handleCheck() {
    if (state.nama === "") {
      alert("Nama tidak boleh kosong");
      namaRef.current.focus();
    } else if (state.nim === "") {
      alert("Nim tidak boleh kosong");
      nimRef.current.focus();
    } else if (state.kelompok === "") {
      alert("Kelompok tidak boleh kosong");
      kelompokRef.current.focus();
    } else {
      setState({
        ...state,
        ["nama"]: "",
        ["nim"]: "",
        ["kelompok"]: "",
      });
      alert("BERHASIL!");
    }
  }

  return (
    <div
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <br />
      <br />
      <input
        type="text"
        style={{ width: 300 }}
        ref={namaRef}
        value={state.nama}
        placeholder="Nama"
        onChange={(value) =>
          setState({ ...state, ["nama"]: value.target.value })
        }
      />
      <br />
      <input
        type="text"
        style={{ width: 300 }}
        ref={nimRef}
        value={state.nim}
        placeholder="NIM"
        onChange={(value) =>
          setState({ ...state, ["nim"]: value.target.value })
        }
      />
      <br />
      <input
        type="text"
        style={{ width: 300 }}
        ref={kelompokRef}
        value={state.kelompok}
        placeholder="Kel"
        onChange={(value) =>
          setState({ ...state, ["kelompok"]: value.target.value })
        }
      />
      <br />
      <input type="button" value="Cek Data" onClick={() => handleCheck()} />
    </div>
  );
}

export default NewHook;
