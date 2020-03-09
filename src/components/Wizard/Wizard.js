import React from "react";
import StepWizard from "react-step-wizard";
import PropTypes from "prop-types";
import Welcome from "./steps/Welcome";
import HowTo from "./steps/HowTo";
import Find from "./steps/Find";
import Results from "./steps/Results";
import "./transitions.scss";
import "./Wizard.scss";

const Wizard = ({ onEnd }) => {
  const animations = {
    enterRight: `animated enterRight`,
    enterLeft: `animated enterLeft`,
    exitRight: `animated exitRight`,
    exitLeft: `animated exitLeft`,
    intro: `animated intro`
  };
  return (
    <StepWizard className="wizard-container" transitions={animations}>
      <Welcome className="step"></Welcome>
      <HowTo className="step"></HowTo>
      <Find className="step"></Find>
      <Results className="step" onEnd={onEnd}></Results>
    </StepWizard>
  );
};

Wizard.propTypes = {
  onEnd: PropTypes.func
};

export default Wizard;
