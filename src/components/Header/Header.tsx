import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Container } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ListAltIcon from "@material-ui/icons/ListAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";
import KitchenIcon from "@material-ui/icons/Kitchen";
import ErrorIcon from "@material-ui/icons/Error";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setPagination, setSearchValue } from "../../redux/actions/userData";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      justifyContent: "space-between",
    },
    header: {
      marginBottom: "10px",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header: FC = () => {
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  const selectPath = (str: string) => {
    dispatch(setPagination(1));
    dispatch(setSearchValue(""));
    history.push(str);
  };

  return (
    <AppBar position="static" className={classes.header}>
      <Container>
        <Toolbar className={classes.root}>
          <IconButton
            className={classes.menuButton}
            onClick={() => selectPath("/")}
          >
            <HomeIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.menuButton}
            onClick={() => selectPath("/ingredients")}
          >
            <ListAltIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.menuButton}
            onClick={() => selectPath("/favorite")}
          >
            <FavoriteIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.menuButton}
            onClick={() => selectPath("/cook")}
          >
            <KitchenIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.menuButton}
            onClick={() => selectPath("/shopping")}
          >
            <AddShoppingCartIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.menuButton}
            onClick={() => selectPath("/danger")}
          >
            <ErrorIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
