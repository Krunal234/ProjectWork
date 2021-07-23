import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import tomJerry from "../images/tomJerry.jpg";
import blackPanther from "../images/blackPanther.jpg";
import blackWidow from "../images/blackWidow.jpg";
import doctorStrange from "../images/doctorStrange.jpg";
import gif1 from "../images/gif1.gif";
import falcon from "../images/falcon.jpg";
import lucifer from "../images/lucifer.jpg";

export default class Slider extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".slider");
      var instances = M.Slider.init(elems, { height: 720 });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="slider">
          <ul className="slides">
            <li>
              <img src={tomJerry} alt="" />
              <div className="caption center-align" style={{ color: "black" }}>
                <h3>Hello Everyone!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Watch all new picture of natural enemies of real world.
                </h5>
              </div>
            </li>
            <li>
              <img src={blackPanther} alt="" />
              <div className="caption left-align green-text">
                <h2>Kala Chittah</h2>
                <h2 className="light brown-text text-lighten-3">
                  Me hu kala, mera bap kala, aakha khandan kala.
                </h2>
              </div>
            </li>
            <li>
              <img src={blackWidow} alt="" />
              <div className="caption right-align">
                <h3>Kali Vidhva</h3>
                <h5 className="light grey-text text-lighten-3">
                  Mera nam kali vidhva, par kis andhe ko me kali dikhai deti hu?
                </h5>
              </div>
            </li>
            <li>
              <img src={doctorStrange} alt="" />
              <div className="caption center-align">
                <h3>Doctor Ajib</h3>
                <h5 className="light grey-text text-lighten-3">
                  Mereko bohut chud machti hai, isliye showoff krte krte hath
                  per tudva liye.
                </h5>
              </div>
            </li>
            <li>
              <img src={gif1} alt="" />
              <div className="caption center-align">
                <h3>Bijli ho to eisi!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Lag gaye 440 volt chhune se tere.
                </h5>
              </div>
            </li>
            <li>
              <img src={falcon} alt="" />
              <div className="caption left-align">
                <h3>Kale bhaio ki fauj aur me oneman army!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Kala Captain hu me.
                </h5>
              </div>
            </li>
            <li>
              <img src={lucifer} alt="" />
              <div className="caption left-align">
                <h3>Muje nhi jante?</h3>
                <h5 className="light grey-text text-lighten-3">
                  Apne baap ko pu6na me kaun hu.
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
