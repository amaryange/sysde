//@ts-nocheck
import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { PillRatingData } from "@/Data/BonusUiData/Rating";
import React, { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const PillRating = () => {
  const [rating, setRating] = useState(1);
  const pillData = ["A", "B", "C", "D", "E"];

  return (
    <Col md="6">
      <Card>
      <CardHeaderCommon title='Pill Rating Bar' description2={PillRatingData} />
        <CardBody>
          <div className="rating pill-rating-list">
            <Rating initialRating={rating} emptySymbol={pillData.map((n: string) => (<span className="pill-rating" key={n}>{n}</span>))}
              fullSymbol={pillData.map((n: string) => (<span className="pill-rating br-current" key={n}>{n}</span>))}
              onClick={(rate) => setRating(rate)}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillRating;
