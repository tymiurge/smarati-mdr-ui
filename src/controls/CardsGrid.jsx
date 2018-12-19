import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
//import PropTypes from "prop-types";
import MemoCard from "./MemoCard";
import MemoCardsBox from "./MemoCardsBox";

const itemComponents = {
  box: MemoCardsBox,
  card: MemoCard
};

const CardsGrid = ({ items }) => {
  return (
    <div>
      <GridContainer>
        {items.map(item => {
          const Item = itemComponents[item.type];
          return (
            <GridItem
              key={item.id}
              xs={12}
              sm={6}
              md={3}
              style={{ marginTop: "6px" }}
            >
              <Item content={item.content} />
            </GridItem>
          );
        })}
        {/* <GridItem xs={12} sm={6} md={3} style={{ marginTop: "6px" }}>
          <MemoCard content="This is a success message!" />
        </GridItem>
        <GridItem xs={12} sm={6} md={3} style={{ marginTop: "6px" }}>
          <MemoCardsBox content="Waiting for Godoth" />
        </GridItem>
        <GridItem xs={12} sm={6} md={3} style={{ marginTop: "6px" }}>
          <MemoCard content="This is a success message!" />
        </GridItem>
        <GridItem xs={12} sm={6} md={3} style={{ marginTop: "6px" }}>
          <MemoCardsBox content="Waiting for Godoth" />
        </GridItem>
        <GridItem xs={12} sm={6} md={3} style={{ marginTop: "6px" }}>
          <MemoCard content="This is a success message!" />
        </GridItem>
        <GridItem xs={12} sm={6} md={3} style={{ marginTop: "6px" }}>
          <MemoCardsBox content="Waiting for Godoth" />
        </GridItem>
        <GridItem xs={12} sm={6} md={3} style={{ marginTop: "6px" }}>
          <MemoCard content="This is a success message!" />
        </GridItem>
        <GridItem xs={12} sm={6} md={3} style={{ marginTop: "6px" }}>
          <MemoCardsBox content="Waiting for Godoth" />
        </GridItem> */}
      </GridContainer>
    </div>
  );
};

export default CardsGrid;
