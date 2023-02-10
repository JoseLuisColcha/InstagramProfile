import React, { useState } from "react";
import "../styles/like-compo.css";

const LikeCompo = () => {
  const initialState = {
    like: false,
    likeCount: 0,
    save: false,
  };

  const [state, setState] = useState(initialState);

  const changeState = () => {
    setState((prevState) => ({
      ...prevState,
      like: !prevState.like,
      likeCount:
        prevState.like === false
          ? prevState.likeCount + 1
          : prevState.likeCount - 1,
    }));
  };

  const changeSaveState = () => {
    setState((prevState) => ({
      ...prevState,
      save: !prevState.save,
    }));
  };

  return (
    <div className="footer">
      <div className="footer-icons">
        <span
          className={state.like ? "corazon_active" : "corazon"}
          id="corazon"
          onClick={changeState}
        ></span>
        <span className="burbuja" id=""></span>
        <span className="enviar" id=""></span>
        <div className="guardar-icon-container">
          <span
            className={state.save ? "guardar_active" : "guardar"}
            id="guardar"
            onClick={changeSaveState}
          ></span>
        </div>
      </div>
      <div className="caption-container">
        <h4>
          <span>{state.likeCount}</span> Likes
        </h4>
        <div className="caption">
          <h4>Mono_felix</h4>
          <span>Hola Estoy muy feliz!!! aprediendo React Js</span>
        </div>
      </div>
    </div>
  );
};

export default LikeCompo;
