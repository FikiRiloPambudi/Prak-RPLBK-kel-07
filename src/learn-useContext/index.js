import React, { useState, useContext } from "react";
import "./index.css";
import { RootContext } from "../App";

const themes = {
  light: {
    id: 1,
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    id: 2,
    foreground: "#ffffff",
    background: "#222222",
  },
};

const dataContext = [
  {
    nama: "Fiki Rilo Pambudi",
    nim: "21120119120001",
    kelompok: "07",
  },
  {
    nama: "Abdullah Azzam Farid Ma’ruf",
    nim: "21120119130071",
    kelompok: "07",
  },
  {
    nama: "Reehan Putra Perdana",
    nim: "21120119130047",
    kelompok: "07",
  },
  {
    nama: "Ghaly Wisnu Aryawira",
    nim: "21120119140139",
    kelompok: "07",
  },
];

const ThemeContext = React.createContext(themes.light);

export default function Index() {
  const [theme, setTheme] = useState(themes.dark);
  const changeTheme = () => {
    if (theme.id === themes.light.id) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  return (
    <div>
      <RootContext.Consumer>
        {(value) => {
          value.isiData(dataContext);
        }}
      </RootContext.Consumer>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div
          className="Main"
          style={{ background: theme.background, color: theme.foreground }}
        >
          <p className="Text">Theme by useContext</p>
          <p>KELOMPOK07</p>
          <ThemedButton />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

function ThemedButton() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button
      className="Button"
      style={{ background: theme.background, color: theme.foreground }}
      onClick={changeTheme}
    >
      i am styled by theme context!
    </button>
  );
}
