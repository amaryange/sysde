//@ts-nocheck
import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { StarRatingData } from "@/Data/BonusUiData/Rating";
import React, { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const StarRating = () => {
  const [rating, setRating] = useState(1);

  return (
    <Col md="6">
      <Card>
      <CardHeaderCommon title='tar Rating Bar' description2={StarRatingData} />
        <CardBody>
          <div className="rating">
            <Rating initialRating={rating} emptySymbol="text-primary star fa fa-star-o fa-2x" fullSymbol="text-primary star fa fa-star fa-2x" onChange={(rate) => setRating(rate)} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StarRating;
