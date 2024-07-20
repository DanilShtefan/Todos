import "./header.scss";
import Add from "../image/add.svg";
import OptionsSvg from "../image/options.svg";
import { Options } from "../options/options";

export function Header({
  data,
  setData,
  setModalActive,
  optionsActive,
  setOptionsActive,
  serch,
  setSerch,
}) {
  return (
    <div className="header">
      <h1 className="header__title">Todos</h1>
      <div className="header__inner">
        <button
          className="header__wrapper-btn"
          onClick={() => setModalActive({ boolean: true })}
        >
          <img className="header__add-btn" src={Add}></img>
        </button>
        <input
          className="header__wrapper-input"
          onChange={(e) => setSerch(e.target.value)}
          value={serch}
        ></input>
        <button
          className="header__wrapper-btn"
          onClick={() => setOptionsActive(!optionsActive)}
        >
          <img className="header__options-btn" src={OptionsSvg}></img>
        </button>
        <Options
          data={data}
          setData={setData}
          optionsActive={optionsActive}
          setOptionsActive={setOptionsActive}
          setModalActive={setModalActive}
        />
      </div>
    </div>
  );
}
