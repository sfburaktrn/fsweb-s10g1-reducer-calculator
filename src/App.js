import React from "react";
import { useReducer } from "react";
import reducer, { initialState } from "./reducers";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import {
  addOne,
  applyNumber,
  clear,
  change,
  memoryEkleme,
  memoryCagir,
  memoryClean,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function sayiClick(sayi) {
    dispatch(applyNumber(sayi));
  }

  function islemD(islem) {
    dispatch(change(islem));
  }

  function C() {
    dispatch(clear());
  }

  function memoryC() {
    dispatch(memoryClean());
  }

  function memoryRC() {
    dispatch(memoryCagir());
  }

  function memoryP() {
    dispatch(memoryEkleme());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={() => memoryP()} value={"M+"} />
              <CalcButton onClick={() => memoryRC()} value={"MR"} />
              <CalcButton onClick={() => memoryC()} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => sayiClick(1)} value={1} />
              <CalcButton onClick={() => sayiClick(2)} value={2} />
              <CalcButton onClick={() => sayiClick(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => sayiClick(4)} value={4} />
              <CalcButton onClick={() => sayiClick(5)} value={5} />
              <CalcButton onClick={() => sayiClick(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => sayiClick(7)} value={7} />
              <CalcButton onClick={() => sayiClick(8)} value={8} />
              <CalcButton onClick={() => sayiClick(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={() => islemD("+")} value={"+"} />
              <CalcButton onClick={() => islemD("*")} value={"*"} />
              <CalcButton onClick={() => islemD("-")} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => C()} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
