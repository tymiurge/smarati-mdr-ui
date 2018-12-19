import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { MemoCard, MemoCardsBox, CardsGrid } from "./../controls";

const cardsData = [
  { id: 1, type: "box", content: "English 100 words", progress: 75 },
  { id: 2, type: "box", content: "Waiting For Godoth", progress: 43 },
  { id: 3, type: "box", content: "Linux commands", progress: 67 },
  { id: 4, type: "box", content: "Docker commands", progress: 34 },
  { id: 5, type: "box", content: "Spanish 100 words", progress: 2 },
  { id: 6, type: "box", content: "Spanish 1000 words", progress: 24 },
  { id: 7, type: "box", content: "Kubernetes commands", progress: 45 },
  { id: 8, type: "box", content: "English proverbs", progress: 45 },
  { id: 9, type: "box", content: "Spanish proverbs", progress: 39 },
  { id: 10, type: "box", content: "The door into the summer", progress: 88 },
  { id: 11, type: "card", content: "go", progress: 7 },
  { id: 12, type: "card", content: "move", progress: 7 },
  { id: 14, type: "card", content: "move", progress: 7 }
];

class Cards extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return <CardsGrid items={cardsData} />;
  }
}

export default withStyles(dashboardStyle)(Cards);
