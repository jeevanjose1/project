import React from "react";

import "./mainStyle.scss";
import mainImage from "../../assets/login1.svg";
import Button from "../../components/Button";
import Carousel from "../../components/Carousel";
const Main = (): React.JSX.Element => {
  return (
    <main>
      <section className="container main-section-one">
        <div className="image">
          <img src={mainImage} alt="" />
        </div>
        <div className="content">
          <div>
            <h4 className="sub-head">New Arrival</h4>
            <div className="line"></div>
            <h1 className="main-head">Community Membership</h1>
            <p className="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button text={"Join Now"} />
          </div>
        </div>
      </section>

      <section className="section-two">
      <div className="under-lay"></div>
        <div className=" container main-section-two">
          
          <div className="content">
            <h1>Unlock Premium Features</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock,
            </p>
            <div className="btns">
              <Button text={"Unlock Now"} />
              <Button text={"Details"} />
            </div>
          </div>

          <div className="carousel">
            <Carousel />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
