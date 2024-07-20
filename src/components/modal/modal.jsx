import "./modal.scss";

export function Modal({
  data,
  setData,
  input,
  setInput,
  modalActive,
  setModalActive,
}) {
  return (
    <div
      className={modalActive.boolean ? "modal active" : "modal"}
      onClick={() => setModalActive(false)}
    >
      <div
        className={
          modalActive.boolean ? "modal__content active" : "modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <input
          className={
            input.title == ""
              ? "modal__title-input modal__error"
              : "modal__title-input "
          }
          maxLength={38}
          placeholder="Заголовок"
          onChange={(e) =>
            setInput(
              input.message || input.timeDate
                ? {
                    title: e.target.value,
                    message: input.message,
                    timeDate: input.timeDate,
                  }
                : { title: e.target.value, message: "", timeDate: "" }
            )
          }
          value={input.title}
        ></input>
        <textarea
          placeholder="Введите текст..."
          className="modal__content-textarea"
          onChange={(e) =>
            setInput(
              input.title || input.timeDate
                ? {
                    message: e.target.value,
                    title: input.title,
                    timeDate: input.timeDate,
                  }
                : { message: e.target.value, title: "", timeDate: "" }
            )
          }
          value={input.message}
        ></textarea>
        <input
          className={
            input.timeDate == "2024-07-19T13:00"
              ? "modal__date-input modal__error"
              : "modal__date-input"
          }
          type="datetime-local"
          value={input.timeDate}
          onChange={(e) =>
            setInput(
              input.title || input.message
                ? {
                    timeDate: e.target.value,
                    message: input.message,
                    title: input.title,
                  }
                : { timeDate: e.target.value, title: "", message: "" }
            )
          }
        ></input>
        <button
          onClick={() => {
            (input.title || input.message) == "" ||
            input.timeDate == "2024-07-19T13:00"
              ? alert("Запоните все поля")
              : (setData((prevData) => [
                  ...prevData,
                  {
                    title: input.title,
                    message: input.message,
                    timeDate: input.timeDate,
                    id: `${Date.now().toString(36)}-${Math.random()
                      .toString(36)
                      .slice(2)}`,
                    redactorOptionsBool: false,
                    taskStatus: false,
                    fullYear: new Date().getFullYear(),
                    month: `${
                      new Date().getMonth() > 9
                        ? new Date().getMonth()
                        : String(0) + new Date().getMonth()
                    }`,
                    day: `${
                      new Date().getDate() > 9
                        ? new Date().getDate()
                        : String(0) + new Date().getDate()
                    }`,
                    hours: `${
                      new Date().getHours() > 9
                        ? new Date().getHours()
                        : String(0) + new Date().getHours()
                    }`,
                    minutes: `${
                      new Date().getMinutes() > 9
                        ? new Date().getMinutes()
                        : String(0) + new Date().getMinutes()
                    }`,
                    addTime: `${
                      new Date().getHours() > 9
                        ? new Date().getHours()
                        : String(0) + new Date().getHours()
                    }:${
                      new Date().getMinutes() > 9
                        ? new Date().getMinutes()
                        : String(0) + new Date().getMinutes()
                    }`,
                    fullDate:
                      new Date().getFullYear() +
                      "-" +
                      `${
                        new Date().getMonth() > 9
                          ? new Date().getMonth()
                          : String(0) + new Date().getMonth()
                      }` +
                      "-" +
                      `${
                        new Date().getDate() > 9
                          ? new Date().getDate()
                          : String(0) + new Date().getDate()
                      }` +
                      "-" +
                      `${
                        new Date().getHours() > 9
                          ? new Date().getHours()
                          : String(0) + new Date().getHours()
                      }:${
                        new Date().getMinutes() > 9
                          ? new Date().getMinutes()
                          : String(0) + new Date().getMinutes()
                      }`,
                  },
                ]),
                // setInput({
                //   title: "",
                //   message: "",
                //   timeDate: "2024-07-19T13:00",
                // }),
                setModalActive({ boolean: false }));
          }}
        >
          Создать
        </button>
      </div>
    </div>
  );
}
