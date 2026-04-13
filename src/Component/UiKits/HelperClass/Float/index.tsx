import React from 'react';

import { Float } from '@/Constant';
import CommonHeaderClass2 from '../Common/CommonHeaderClass2';

const FloatCard = () => {
  return (
    <CommonHeaderClass2 title={Float}>
      {`.f-left {
        float: left;
        }
        .f-right {
        float: right;
        }
        .f-none {
        float: none;
        }
      `}
    </CommonHeaderClass2>
  );
};

export default FloatCard;
