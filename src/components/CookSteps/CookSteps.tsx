import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
type cookStepsType = {
  steps: Array<string>;
};
const useStyles = makeStyles(() => ({
  step: {
    display: "grid",
    gridTemplateColumns: "20px 1fr",
  },
}));
const CookSteps: FC<cookStepsType> = ({ steps }) => {
  const classes = useStyles();
  return (
    <>
      {steps.map((el, index) => (
        <Box key={el} className={classes.step}>
          <Typography variant="body1">{index + 1}) </Typography>
          <Typography variant="body1">{el}</Typography>
        </Box>
      ))}
    </>
  );
};

export default CookSteps;
