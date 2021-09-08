import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { RootState } from "../../redux/store";
import { setSearchValue } from "../../redux/actions/userData";

const useStyles = makeStyles((theme) => ({
  search: {
    marginBottom: "10px",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    display: "block",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "@media screen and (max-width: 670px)": {
        width: "100%",
      },
    },
  },
}));

const IngredientSearch: FC = () => {
  const classes = useStyles();
  const { search } = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();

  return (
    <form>
      <Box className={classes.search}>
        <Box className={classes.searchIcon}>
          <SearchIcon />
        </Box>
        <InputBase
          onChange={(el) => dispatch(setSearchValue(el.target.value))}
          value={search}
          placeholder="Поиск по ингредиентам, просто начните вводить..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </Box>
    </form>
  );
};
export default IngredientSearch;
