export const StepNames = {
  Home: "Home",
  SignIn: "SignIn",
  CheckOut: "CheckOut",
};

export const InitSteps = [
  { index: 1, name: StepNames.Home, path: "/home", data: null },
  { index: 2, name: StepNames.SignIn, path: "/signin", data: null },
  { index: 3, name: StepNames.CheckOut, path: "/checkout", data: null },
];

export const GetStepByIndex = (index, steps) => {
  const step = steps.find((s) => s.index === index);
  return step ? step : null;
};
