declare module 'react-ratings-declarative' {
  import React from 'react';

  interface Ratings {
    rating: number;
    changeRating: (newRating: number) => void;
    productName: string;
    productReview: string;
  }

  export class Ratings extends React.Component<RatingsProps> {
    static Widget: React.FC;
  }

  export default StarRatings;
}
