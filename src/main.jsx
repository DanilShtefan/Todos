import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {alert(`Правила пользования сайти:
      Все данные сохраняются в localstorage,
      Двойной клик - редактировать заметку,
      Кнопка добавить открывается поле для ввода текста,
      Кнопка настройки открывается список доп. функций,
      Поиск ищет по заголовоку.
      `)}
    <App />
  </React.StrictMode>
);
