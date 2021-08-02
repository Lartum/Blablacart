import { useState } from "react";
import {
  Button,
  Container,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import {
  AddressForm,
  OrderSummary,
  PaymentOptions,
} from "../components/Checkout";
import Navbar from "../components/Navbar";
import { useCart } from "../contexts/cart-context";
import checkoutStyles from "../styles/checkoutStyles";
import PricingBar from "../components/PricingBar";

function getSteps() {
  return ["Address", "Order Summary", "Payment Options"];
}
const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <OrderSummary />;
    case 2:
      return <PaymentOptions />;
    default:
      return "Unknown step";
  }
};
export default function Checkout() {
  const classes = checkoutStyles();
  const [cart, , ,] = useCart(useCart);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  let totalItems = 0,
    totalPrice = 0;
  if (cart.length > 0) {
    cart.map(({ quantity, price }) => {
      totalItems = totalItems + quantity;
      return (totalPrice = (totalPrice + price * 75) * quantity);
    });
  }
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      return alert("payment finished");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Navbar hideSidebar={true} showBackButton={true} />
      <Container>
        <div className={classes.root}>
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            style={{ maxWidth: 800, flexGrow: 1 }}
          >
            {steps.map((label, index) => (
              <Step>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          <PricingBar totalItems={totalItems} totalPrice={totalPrice} />
        </div>
      </Container>
    </>
  );
}
