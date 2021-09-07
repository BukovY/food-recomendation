import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

type nutritionBlockType = {
  title: string;
  value: number;
  unit: string;
};

const useStyles = makeStyles(() => ({
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const NutritionBlockItem: FC<nutritionBlockType> = ({ title, value, unit }) => {
  const classes = useStyles();
  return (
    <Box className={classes.item}>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="h5">{value}</Typography>
      <Typography variant="body1">{unit}</Typography>
    </Box>
  );
};
export default NutritionBlockItem;
