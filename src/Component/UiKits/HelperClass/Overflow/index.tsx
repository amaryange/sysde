import React from 'react';

import { Overflow } from '@/Constant';
import CommonHeaderClass2 from '../Common/CommonHeaderClass2';

const OverflowCard = () => {
  return (
    <CommonHeaderClass2 title={Overflow}>
      {`.o-hidden {
        overflow: hidden;
        }
        .o-visible {
        overflow: visible;
        }
        .o-auto {
        overflow: auto;
        }
      `}
    </CommonHeaderClass2>
  );
};

export default OverflowCard;
