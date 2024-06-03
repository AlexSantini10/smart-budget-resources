import React from "react";
import { AddButton } from "../../components/AddButton";
import { BottomBar } from "../../components/BottomBar";
import { Categoria } from "../../components/Categoria";
import { Checkbox } from "../../components/Checkbox";
import { DebitoCredito } from "../../components/DebitoCredito";
import { DropdownMenu } from "../../components/DropdownMenu";
import { EsempioStatistiche } from "../../components/EsempioStatistiche";
import { FormLanding } from "../../components/FormLanding";
import { Header } from "../../components/Header";
import { Lista } from "../../components/Lista";
import { Property } from "../../components/Property";
import { PulsanteAnnulla } from "../../components/PulsanteAnnulla";
import { PulsanteAnnullaWrapper } from "../../components/PulsanteAnnullaWrapper";
import { PulsanteConferma } from "../../components/PulsanteConferma";
import { SaldoHomePage } from "../../components/SaldoHomePage";
import { SchedaBudget } from "../../components/SchedaBudget";
import { SottoCategoria } from "../../components/SottoCategoria";
import { TipoTransazione } from "../../components/TipoTransazione";
import { TopBar } from "../../components/TopBar";
import { Watch1 } from "../../icons/Watch1";
import "./style.css";

export const ComponentsFrame = () => {
  return (
    <div className="components-frame">
      <div className="div-3">
        <Property
          className="side-bar"
          icon={<Watch1 className="watch-1" />}
          vuesaxLinear="/img/vuesax-linear-setting-2-1.png"
        />
        <Header
          className="header-instance"
          img="/img/line-2-stroke-1.svg"
          lineStroke="/img/line-3-stroke-1.svg"
          lineStroke1="/img/line-3-stroke-1.svg"
          unionClassName="design-component-instance-node"
        />
        <BottomBar className="bottom-bar-instance" />
        <div className="frame-2">
          <SchedaBudget
            budgetNonSpeso="/img/budget-non-speso-1.svg"
            budgetSpeso="/img/budget-speso-2.svg"
            rispettato="si"
          />
          <SchedaBudget rispettato="no" />
        </div>
        <div className="tipo-transazione-2">
          <TipoTransazione className="design-component-instance-node-2" entrata={false} />
          <TipoTransazione className="tipo-transazione-instance" entrata />
        </div>
        <SottoCategoria className="sotto-categoria-instance" />
        <PulsanteConferma className="pulsante-conferma-instance" />
        <PulsanteAnnulla className="pulsante-annulla-instance" />
        <AddButton className="add-button-instance" />
        <Lista className="lista-instance" />
        <div className="debito-credito-2">
          <DebitoCredito className="tipo-credito" tipo="credito" />
          <DebitoCredito className="design-component-instance-node-2" tipo="debito" />
        </div>
        <Categoria className="categoria-instance" />
        <PulsanteAnnullaWrapper className="pulsante-annulla-2" />
        <div className="top-bar-2">
          <TopBar className="top-bar-instance" page="statistiche" />
          <TopBar className="page-conti-2" page="conti" />
          <TopBar className="page-transazioni" page="transazioni" />
          <TopBar className="design-component-instance-node-2" page="home" />
        </div>
        <Checkbox
          basesCheckboxBasesIconWrapperColor="/img/color-19.svg"
          className="checkbox-instance"
          label
          labelClassName="checkbox-3"
          radioWrapperClassName="checkbox-2"
          selected
          stateProp="default"
          text="segna come completata"
        />
        <DropdownMenu className="dropdown-menu-instance" />
        <SaldoHomePage className="saldo-home-page-instance" />
        <EsempioStatistiche className="esempio-statistiche-instance" />
        <FormLanding className="form-landing-instance" />
      </div>
    </div>
  );
};
