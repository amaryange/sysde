//@ts-nocheck
import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { BarRatingData } from "@/Data/BonusUiData/Rating";
import React, { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const SimpleRatingBar = () => {
  const [rating, setRating] = useState(8);

  return (
    <Col md="6">
      <Card>
      <CardHeaderCommon title='1 to 10 Rating Bar' description2={BarRatingData} />
        <CardBody>
          <div className="rating">
            <Rating stop={10} initialRating={rating} emptySymbol="br-selected" fullSymbol="br-selected br-current" onChange={(rate) => setRating(rate)} />
            <span className="current-rating">{rating}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleRatingBar;
