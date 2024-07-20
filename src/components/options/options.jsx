import "./options.scss";
import Close from "../image/close.svg";

export function Options({
  data,
  setData,
  optionsActive,
  setOptionsActive,
  setModalActive,
}) {
  function deleteAll() {
    if (confirm("Вы точно хотите удалить все заметки"))
      setData(data.filter((el) => !el.id));
  }
  function completedTaskDelete() {
    if (confirm("Вы точно хотите удалить выполненные заметки?"))
      setData(data.filter((el) => !el.taskStatus));
  }
  function dateSort() {
    setData(
      data
        .sort(
          (a, b) =>
            a.timeDate
              .split("-")
              .join("")
              .split("T")
              .join("")
              .split(":")
              .join("") -
            b.timeDate
              .split("-")
              .join("")
              .split("T")
              .join("")
              .split(":")
              .join("")
        )
        .filter((el) => el)
    );
  }
  function falsySort() {
    setData(
      data.sort((a, b) => a.taskStatus - b.taskStatus).filter((el) => el)
    );
  }
  return (
    <div className={optionsActive ? "options active" : "options"}>
      <div
        className={
          optionsActive ? "options__content active" : "options__content"
        }
      >
        <button
          onClick={() => setOptionsActive(false)}
          className="options__close-btn"
        >
          <img src={Close}></img>
        </button>
        <button
          className="options-btn"
          onClick={() => setModalActive({ boolean: true })}
        >
          <p className="options__text">Добавить заметку</p>
        </button>
        <button className="options-btn" onClick={() => deleteAll()}>
          <p className="options__text">Удалить все</p>
        </button>
        <button className="options-btn" onClick={() => completedTaskDelete()}>
          <p className="options__text">Удалить выполненные</p>
        </button>
        <button className="options-btn">
          <p className="options__text" onClick={() => dateSort()}>
            Сортировать по времени
          </p>
        </button>
        <button className="options-btn" onClick={() => falsySort()}>
          <p className="options__text">Сортировать по готовности</p>
        </button>
      </div>
    </div>
  );
}
