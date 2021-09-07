import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import NutritionBlockItem from "./NutritionBlockItem/NutritionBlockItem";
import { makeStyles } from "@material-ui/core/styles";

type nutritionBlockType = {
  block: {
    cCal: number;
    protein: number;
    fat: number;
    carbohydrate: number;
  };
};

const useStyles = makeStyles(() => ({
  nutrients: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  header: {
    textAlign: "center",
    fontSize: "18px",
  },
}));
const NutritionBlock: FC<nutritionBlockType> = ({ block }) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="body1" className={classes.header}>
        Энергетическая ценность на порцию
      </Typography>
      <Box className={classes.nutrients}>
        <NutritionBlockItem
          title="Калорийность"
          value={block.cCal}
          unit="ККал"
        />
        <NutritionBlockItem title="Белки" value={block.protein} unit="Грамм" />
        <NutritionBlockItem title="Жиры" value={block.fat} unit="Грамм" />
        <NutritionBlockItem
          title="Углеводы"
          value={block.carbohydrate}
          unit="Грамм"
        />
      </Box>
    </Box>
  );
};
export default NutritionBlock;
