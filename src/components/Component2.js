import React, { Component } from "react";
import { Spring } from "react-spring";

export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>
                Lorem ipsumPravougli trougao Glavni članak: Pravougli trougao
                Pravougli trougao ima jedan unutrašni ugao od 90 stepeni (pravi
                ugao). Stranica koja se nalazi nasuprot pravog ugla se naziva
                hipotenuza, i to je najduža stranica u pravouglom trouglu. Druge
                dvije stranice se zovu katete. Obim je O = a + b + c Pravougli
                trougao ima jedan unutrašni ugao od 90 stepeni (pravi ugao).
                Stranica koja se nalazi nasuprot pravog ugla se naziva
                hipotenuza, i to je najduža stranica u pravouglom trouglu. Druge
                dvije stranice se zovu katete. Obim je O = a + b + c
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component3
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0"
};
const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};
export default Component2;
