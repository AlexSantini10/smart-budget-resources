/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Category } from "../../icons/Category";
import { Coin } from "../../icons/Coin";
import { Export1 } from "../../icons/Export1";
import { Profile2User1 } from "../../icons/Profile2User1";
import { Watch } from "../../icons/Watch";
import "./style.css";

export const Property = ({
  className,
  icon = <Watch className="icon-instance-node" />,
  vuesaxLinear = "/img/vuesax-linear-setting-2.png",
}) => {
  return (
    <div className={`property ${className}`}>
      <div className="top-content">
        <div className="overlap-group">
          <img className="profile-image" alt="Profile image" src="/img/profile-image-1.png" />
          <div className="text-wrapper">Mario Rossi</div>
        </div>
      </div>
      <div className="main-content">
        <div className="overlap">
          <div className="rectangle" />
          <div className="contatti">
            <div className="div">Contatti</div>
            <Profile2User1 className="icon-instance-node" />
          </div>
          <div className="debiti-crediti">
            <div className="text-wrapper-2">Debiti/Crediti</div>
            {icon}
          </div>
          <div className="budgets">
            <div className="text-wrapper-3">Budgets</div>
            <Coin className="icon-instance-node" />
          </div>
          <div className="categorie">
            <div className="text-wrapper-4">Categorie</div>
            <Category className="icon-instance-node" />
          </div>
          <div className="il-mio-profilo">
            <div className="il-mio-profilo-2"> Il mio profilo</div>
            <img className="icon-instance-node" alt="Vuesax linear" src={vuesaxLinear} />
          </div>
        </div>
        <div className="esporta-dati">
          <div className="text-wrapper-5">Esporta dati</div>
          <Export1 className="icon-instance-node" />
        </div>
      </div>
    </div>
  );
};

Property.propTypes = {
  vuesaxLinear: PropTypes.string,
};
