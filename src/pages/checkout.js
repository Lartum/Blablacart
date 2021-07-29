import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
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
  const [cart, addProduct, removeProduct, handleQuantityChange] =
    useCart(useCart);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
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
      <Navbar hideSidebar={true} />
      <Container>
        <div
          className={classes.root}
          style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
        >
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
          <Paper
            style={{
              padding: "12px 30px",
              flexGrow: 1,
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              gap: 30,
              height: "fit-content",
              minWidth: 250,
              maxWidth: 250,
            }}
          >
            <Box>
              <Typography
                variant="body1"
                color="primary"
                style={{ fontWeight: "bold", textTransform: "capitalize" }}
              >
                Price Details
              </Typography>
              <Divider style={{ marginTop: 12 }} />
            </Box>
            <Box>
              <Typography>
                Price (<span>{cart.length} item</span>)
              </Typography>
            </Box>
            <Box>
              <Typography>Delivery Charges</Typography>
            </Box>
            <Box>
              <Typography>Total Payable</Typography>
            </Box>
          </Paper>
        </div>
      </Container>
    </>
  );
}
