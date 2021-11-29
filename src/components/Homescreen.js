import React from "react";
import { newsSVG, dataSVG, crudSVG } from "../images/svgs/landingPageSVG";
// COMPONENTS
import SignInForm from "./users/SignInForm";

export default function Homescreen() {
  return (
    <main className="bg-secondary rounded-md px-5">
      <section className="py-20 flex justify-center flex-col items-center">
        <h1 className="text-3xl capitalize tracking-wider mb-10 ">
          all the market info you need at a glance
        </h1>

        <h2 className="text-xl capitalize mb-10 tracking-wider">
          Real time stock quotes & news tailored to your holdings
        </h2>

        <SignInForm />
      </section>

      <section className="py-10 rounded-md flex lg:flex-row flex-col  items-center text-center">
        <div className="features-card">
          {dataSVG}
          <div className="features-copy">
            <strong className="features-header">Follow your favorites</strong>
            <p className="features-body">
              Get real time prices on your watchlists without having to login to
              your brokerage
            </p>
          </div>
        </div>
        <div className="features-card ">
          {newsSVG}
          <div className="features-copy">
            <strong className="features-header">
              Stay Informed on your holdings
            </strong>
            <p className="features-body">
              Create custom newsfeeds based on the watchlists you create
            </p>
          </div>
        </div>
        <div className="features-card">
          {crudSVG}
          <div className="features-copy">
            <strong className="features-header">
              Create, read, update and delete
            </strong>
            <p className="features-body">
              Enjoy the power of web-industry standard features at your
              fingertips!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
