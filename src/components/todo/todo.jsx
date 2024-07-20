import "./todo.scss";
import Close from "../image/close.svg";
import { useState } from "react";
import CheckMark from "../image/checkMark.svg";
import CrossMark from "../image/crossMark.svg";

export function Todo({ el, data, setData, refresh, setRefresh }) {
  const [input, setInput] = useState({ title: "", message: "" }); // инпут для редактирования
  function deleteItem(id) {
    if (confirm("Вы точно хотите удалить?")) {
      setData(data.filter((el) => el.id != id));
    }
  }
  return (
    <div className="todo">
      <div
        onDoubleClick={() => {
          el.redactorOptionsBool = true;
          setInput({ title: el.title, message: el.message }); // доделать чтобы input принимал {title,message}, возможно передать input через прос и удалить текущий (подумать на удалением!)
          setRefresh(!refresh);
        }}
      >
        <div className="todo__title">
          {el.redactorOptionsBool ? (
            <input
              minLength={1}
              maxLength={38}
              onChange={(e) => {
                setInput({ title: e.target.value, message: input.message });
              }}
              value={input.title}
              className="todo__title-edit todo__title"
            ></input>
          ) : (
            <div className="todo__title-inner">
              {el.taskStatus ? (
                <div className="todo__title__check-mark">
                  <img
                    className="todo__img"
                    onDoubleClick={(e) => e.stopPropagation()}
                    onClick={() => {
                      el.taskStatus = false;
                      el.day = `${
                        new Date().getDate() > 9
                          ? new Date().getDate()
                          : String("0") + new Date().getDate()
                      }`;
                      el.hours = `${
                        new Date().getHours() > 9
                          ? new Date().getHours()
                          : String("0") + new Date().getHours()
                      }`;
                      el.minutes = `${
                        new Date().getMinutes() > 9
                          ? new Date().getMinutes()
                          : String("0") + new Date().getMinutes()
                      }`;
                      setRefresh(!refresh);
                    }}
                    src={CheckMark}
                  />
                </div>
              ) : (
                <div className="todo__title__check-mark">
                  <img
                    className="todo__img"
                    onDoubleClick={(e) => e.stopPropagation()}
                    onClick={() => {
                      el.taskStatus = true;
                      el.day = `${
                        new Date().getDate() > 9
                          ? new Date().getDate()
                          : String("0") + new Date().getDate()
                      }`;
                      el.hours = `${
                        new Date().getHours() > 9
                          ? new Date().getHours()
                          : String("0") + new Date().getHours()
                      }`;
                      el.minutes = `${
                        new Date().getMinutes() > 9
                          ? new Date().getMinutes()
                          : String("0") + new Date().getMinutes()
                      }`;
                      setRefresh(!refresh);
                    }}
                    src={CrossMark}
                  ></img>
                </div>
              )}
              <p className="todo__title-text">{el.title}</p>
            </div>
          )}
        </div>
        <p className="todo__message">
          {el.redactorOptionsBool ? (
            <textarea
              className="todo__title-edit todo__message"
              onChange={(e) => {
                setInput({ title: input.title, message: e.target.value });
              }}
              value={input.message}
            ></textarea>
          ) : (
            el.message
          )}
        </p>
        <button onClick={() => deleteItem(el.id)} className="todo__btn">
          <img src={Close}></img>
        </button>
        {el.redactorOptionsBool ? (
          <button
            className="todo__add-btn"
            onClick={(item) => {
              input.title == (undefined || "")
                ? ((el.title = "Без названия"),
                  (el.message = input.message),
                  (el.redactorOptionsBool = false),
                  setRefresh(""))
                : ((el.redactorOptionsBool = false),
                  (el.message = input.message),
                  (el.title = input.title),
                  setRefresh(!refresh));
            }}
          >
            Сохранить редактирование
          </button>
        ) : (
          <p className="todo__message-date">
            {el.taskStatus
              ? `Добавлена: ${el.fullDate} / Выполнена: ${el.fullYear}-${el.month}-${el.day}-${el.hours}:${el.minutes}`
              : `Добавлена: ${el.fullDate} / Выполнить: ${el.timeDate
                  .split("T")
                  .join("-")}`}
          </p>
        )}
      </div>
    </div>
  );
}
