import React from "react";
import { Image } from "react-bootstrap";
import { Figure, FigureCaption } from "react-bootstrap";
import logo from "../components/logo192.png";

export const Footer = () => {
  return (
    <div className="m-3">
      <p style={{ color: "#5096FF", fontWeight: "500" }}>Meet the Team</p>
      <div className="d-flex gap-5 justify-content-center">
        <Figure>
          <Image
            src={logo}
            roundedCircle
            style={{ border: "3px solid #5096FF", borderRadius: "10px" }}
          />
          <Figure.Caption className="text-center fw-bold">
            Person Name
          </Figure.Caption>
        </Figure>
        <Figure>
          <Image
            src={logo}
            roundedCircle
            style={{ border: "3px solid #5096FF", borderRadius: "10px" }}
          />
          <Figure.Caption className="text-center fw-bold">
            Person Name
          </Figure.Caption>
        </Figure>
        <Figure>
          <Image
            src={logo}
            roundedCircle
            style={{ border: "3px solid #5096FF", borderRadius: "10px" }}
          />
          <Figure.Caption className="text-center fw-bold">
            Person Name
          </Figure.Caption>
        </Figure>
        <Figure>
          <Image
            src={logo}
            roundedCircle
            style={{ border: "3px solid #5096FF", borderRadius: "10px" }}
          />
          <Figure.Caption className="text-center fw-bold">
            Person Name
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  );
};
