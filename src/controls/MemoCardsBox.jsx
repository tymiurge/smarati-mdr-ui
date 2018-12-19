import React from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import FolderIcon from "@material-ui/icons/Folder";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

const styles1 = () => ({
  info: {
    backgroundColor: "#00acc1"
  },
  icon: {
    fontSize: 26,
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
  },
  cardProgressBackground: {
    backgroundColor: "#00acc1"
  }
});

const MemoCardBox = props => {
  const { classes, className, content, ...other } = props;
  return (
    <div>
      <div style={{ height: "3px", backgroundColor: "rgb(49, 49, 49)" }} />
      <SnackbarContent
        className={classNames(className, classes.noMinWidth, classes.info)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <FolderIcon className={classNames(classes.icon)} />
            {content}
          </span>
        }
        {...other}
      />
    </div>
  );
};

export default withStyles(styles1)(MemoCardBox);
