import React from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Note from "@material-ui/icons/Note";
//import CloseIcon from "@material-ui/icons/Close";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

const styles1 = () => ({
  icon: {
    fontSize: 20,
    marginRight: "6px"
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
  noMinWidth: {
    minWidth: "unset",
    paddingLeft: "12px",
    borderRadius: "0px"
  }
});

const MemoBox = props => {
  const { classes, className, content, ...other } = props;
  return (
    <div>
      <div style={{ height: "2px", backgroundColor: "#00acc1" }} />
      <SnackbarContent
        className={classNames(className, classes.noMinWidth)}
        aria-describedby="client-snackbar"
        message={
          <span className={classes.message}>
            <Note className={classNames(classes.icon)} />
            {content}
          </span>
        }
        {...other}
      />
    </div>
  );
};

export default withStyles(styles1)(MemoBox);
