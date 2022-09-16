import React, { useState } from "react";
import { TextField, Button, Stepper, Step, StepLabel } from "@material-ui/core";

import "../styles/MultiStepForm.css";

import ToggleButtons from "./ToggleButtons";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function getSteps() {
  return ["", "", "", ""];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <div className="page-content-1">
            <h1 className="line_1">Welcome! First things first...</h1>
            <h3 className="line_2">You can change them later</h3>
            <TextField
              id="first-name"
              label="Full Name"
              variant="outlined"
              placeholder="Enter Your Full Name"
              fullWidth
              margin="normal"
              name="fullName"
              style={{
                width: "50vh",
                display: "grid",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <TextField
              id="last-name"
              label="Display Name"
              variant="outlined"
              placeholder="Enter Your Display Name"
              fullWidth
              margin="normal"
              name="displayName"
              style={{
                width: "50vh",
                display: "grid",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
        </>
      );

    case 1:
      return (
        <>
          <h1 className="line_1">Let's set up a home for all your work</h1>
          <h3 className="line_2">
            You can always create another workspace later.
          </h3>
          <TextField
            id="workspaceName"
            label="Workspace Name"
            variant="outlined"
            placeholder="Enter Your Workspace Name"
            fullWidth
            margin="normal"
            name="workspaceName"
            style={{
              width: "50vh",
              display: "grid",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: "2vh",
              alignItems: "center",
              width: "50vh",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <p
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginRight: "0",

                backgroundColor: "#F8F9FC",
                border: "1px solid #CCCCCC",
                paddingTop: "2vh",
                paddingBottom: "2vh",
                paddingLeft: "1vh",
                paddingRight: "1vh",
                alignContent: "center",
                alignItems: "center",
                opacity: " 85%",
                fontFamily: "Inter",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                color: "black",
              }}
            >
              www.eden.com/
            </p>

            <TextField
              id="phone-number"
              label="Workspace URL (optional)"
              variant="outlined"
              placeholder="Enter Your Workspace URL"
              fullWidth
              margin="normal"
              name="phoneNumber"
              style={{
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
          </div>
        </>
      );
    case 2:
      return (
        <>
          <h1 className="line_1">How are you planning to use Eden</h1>
          <h3 className="line_2">
            We'll streamline your setup experience accordingly.
          </h3>
          <div
            style={{
              display: "incline ",
              marginLeft: "7vh",
              marginRight: "auto",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <ToggleButtons />
          </div>
        </>
      );
    case 3:
      return (
        <>
          <CheckCircleIcon
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
            }}
            sx={{
              color: "#674DE4",
              fontSize: "10vh",
              marginTop: "5vh",
              marginBottom: "2vh",
              onClick: function (e) {},
            }}
          />
          <h1 className="line_1">Congraulations, Eren!</h1>
          <h3 className="line_2">
            You have completed onboarding, you can start using the eden
          </h3>
        </>
      );
    default:
      return "";
  }
}

const LinaerStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);

  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleLast = () => {};

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <>
        <form>{getStepContent(activeStep)}</form>

        <Button
          onClick={activeStep === steps.length - 1 ? handleLast : handleNext}
          className="nextButton"
          style={{
            marginTop: "5vh",

            backgroundColor: "#674DE4",
            paddingTop: "2vh",
            paddingBottom: "2vh",
            color: "white",
            fontFamily: "Inter",
            textTransform: "capitalize",
            width: "50vh",
            display: "grid",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {activeStep === steps.length - 1 ? "Launch Eden" : "Create Workspace"}
        </Button>
      </>
    </div>
  );
};

export default LinaerStepper;
