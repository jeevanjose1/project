import React from "react";
import Input from "../../components/Input";
import "./registerStyle.scss";
import img from "../../assets/login.png";
import Button from "../../components/Button";

const Register = (): React.JSX.Element => {
  return (
    <main className="register">
      <section className="container reg-container">
        <div className="form">
          <div className="heading">
            <h1>Unlock Exclusive Benefits</h1>
          </div>
          <form action="">
            <div className="input">
              <label>Phone Number</label>
              <div className="input-container">
                <div>
                  <Input placeholder="+91" />
                </div>
                <Input placeholder="Enter Phone Number" />
              </div>
            </div>
            <div className="input">
              <label>Name</label>
              <div className="input-container">
               
                <Input placeholder="Enter Name" />
              </div>
            </div>

            <div className="input">
              <label>Email ( Optional )</label>
              <div className="input-container">
               
                <Input placeholder="Enter Email" />
              </div>
            </div>

            <div>
                <Button text={'Continue'}/>
            </div>
            <p className="otp">Get ready to receive a secret OTP on your phone</p>
          </form>
        </div>

        <div className="line"></div>

        <div className="image">
          <img src={img} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Register;
