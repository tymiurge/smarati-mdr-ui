import React from "react";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Danger from "components/Typography/Danger.jsx";
import Warning from "@material-ui/icons/Warning";
import Icon from "@material-ui/core/Icon";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import PropTypes from "prop-types";

const propTypes = {
  classes: PropTypes.object.isRequired
};

const MemoCard = props => {
  const { classes } = props;
  return (
    <Card>
      <CardBody>Virtualization</CardBody>
    </Card>
  );
};

MemoCard.propTypes = propTypes;

export default withStyles(dashboardStyle)(MemoCard);
