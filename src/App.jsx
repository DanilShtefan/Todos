import { useState } from "react";
import "./App.scss";
import { Modal } from "./components/modal/modal";
import { Header } from "./components/header/header";
import { TodoList } from "./components/todoList/todoList";

function App() {
  const [data, setData] = useState(
    localStorage.data ? JSON.parse(localStorage.getItem("data")) : []
  );

  const [input, setInput] = useState({
    title: "",
    message: "",
    timeDate: "2024-07-19T13:00",
  });
  const [modalActive, setModalActive] = useState({ boolean: false }); // модальное окно для добавления заметок
  const [optionsActive, setOptionsActive] = useState(false); // стейт для открытия и закрытия окна настройки
  const [refresh, setRefresh] = useState(true); // для обновления всех состояний
  const [serch, setSerch] = useState("");

  localStorage.setItem("data", JSON.stringify(data));

  return (
    <div className="app">
      <Header
        data={data}
        setData={setData}
        setModalActive={setModalActive}
        optionsActive={optionsActive}
        setOptionsActive={setOptionsActive}
        serch={serch}
        setSerch={setSerch}
      />
      <TodoList
        data={data}
        setData={setData}
        refresh={refresh}
        setRefresh={setRefresh}
        serch={serch}
      />
      <Modal
        input={input}
        setInput={setInput}
        modalActive={modalActive}
        setModalActive={setModalActive}
        setData={setData}
        data={data}
      />
    </div>
  );
}

export default App;
