import React from 'react';

import { Position } from '@/Constant';
import CommonHeaderClass2 from '../Common/CommonHeaderClass2';

const PositionCard = () => {
  return (
    <CommonHeaderClass2 title={Position}>{`.p-static {
        position: static;
        }
        .p-absolute {
        position: absolute;
        }
        .p-fixed {
        position: fixed;
        }
        .p-relative {
        position: relative;
        }
        .p-initial {
        position: initial;
        }
        .p-inherit {
        position: inherit;
        }
`}</CommonHeaderClass2>
  );
};

export default PositionCard;
