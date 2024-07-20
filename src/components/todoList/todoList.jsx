import { Todo } from "../todo/todo";
import "./todoList.scss";
import Noted from "../image/noted.svg";

export function TodoList({ data, setData, refresh, setRefresh, serch }) {
  return (
    <>
      <div className="todos">
        {data.length >= 1 ? (
          data
            .filter((item) =>
              serch === "" ? item : item.title.toLowerCase().includes(serch)
            )
            .map((el) => (
              <Todo
                key={el.id}
                el={el}
                setData={setData}
                data={data}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            ))
        ) : (
          <div className="todos__inner">
            <p className="todos__text">
              Чтобы создать заметку, нажмите кнопку создания заметки
            </p>
            <img className="todos__image" src={Noted}></img>
          </div>
        )}
      </div>
    </>
  );
}
