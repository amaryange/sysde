import React from 'react'
import { Edit } from 'react-feather';

const Timeline6 = () => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-movie bg-danger bounce-in ">
        <Edit />
      </div>
      <div className="cd-timeline-content">
        <h4 className="vertical-timeline-element-subtitle">Final Section</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum providentrerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minusveritatis qui ut.</p>
        <span className="cd-date">Feb 26</span>
      </div>
    </div>
  );
}

export default Timeline6