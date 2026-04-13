import React from 'react';

import { FontStyle } from '@/Constant';
import CommonHeaderClass2 from '../../Common/CommonHeaderClass2';

const FontStyleCard = () => {
  return (
    <CommonHeaderClass2 title={FontStyle}>
      {`.f-s-normal {
        font-style: normal;
        }
        .f-s-italic {
        font-style: italic;
        }
        .f-s-oblique {
        font-style: oblique;
        }
        .f-s-initial {
        font-style: initial;
        }
        .f-s-inherit {
        font-style: inherit;
        }
    `}
    </CommonHeaderClass2>
  );
};

export default FontStyleCard;
