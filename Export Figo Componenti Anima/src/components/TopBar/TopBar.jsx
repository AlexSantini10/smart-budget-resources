/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChartSquare2 } from "../../icons/ChartSquare2";
import { EmptyWallet3 } from "../../icons/EmptyWallet3";
import { ReceiptItem3 } from "../../icons/ReceiptItem3";
import "./style.css";

export const TopBar = ({ page, className }) => {
  return (
    <div className={`top-bar ${className}`}>
      <div className={`overlap-group-6 ${page}`}>
        {["conti", "statistiche", "transazioni"].includes(page) && (
          <div className="tabs-2">
            <div className="home-tab-2">
              <div className="text-wrapper-34">Home</div>
              <div className="instance-node">
                <img className="subtract-2" alt="Subtract" src="/img/subtract-4.svg" />
              </div>
            </div>
            <div className="transazioni-2">
              <div className="text-wrapper-35">Transazioni</div>
              <ReceiptItem3 className="instance-node" />
            </div>
            <div className="conti-2">
              <div className="text-wrapper-36">Conti</div>
              <EmptyWallet3 className="instance-node" />
            </div>
            <div className="statistiche-2">
              <div className="text-wrapper-37">Statistiche</div>
              <ChartSquare2 className="instance-node" />
            </div>
          </div>
        )}

        {page === "home" && (
          <>
            <div className="background-2" />
            <div className="tabs-3">
              <div className="home-tab-3">
                <div className="text-wrapper-34">Home</div>
                <div className="instance-node">
                  <img className="subtract-2" alt="Subtract" src="/img/subtract-3.svg" />
                </div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-35">Transazioni</div>
                <ReceiptItem3 className="instance-node" />
              </div>
              <div className="div-2">
                <div className="text-wrapper-36">Conti</div>
                <EmptyWallet3 className="instance-node" />
              </div>
              <div className="div-2">
                <div className="text-wrapper-37">Statistiche</div>
                <ChartSquare2 className="instance-node" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

TopBar.propTypes = {
  page: PropTypes.oneOf(["home", "statistiche", "conti", "transazioni"]),
};
