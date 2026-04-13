import React, { Fragment, useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const CountdownData = () => {
  const [countdown, setCountdown] = useState(49);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const Completionist = () => <span>{'You are good to go!'}</span>;

  const renderer = ({ total, days, hours, minutes, seconds, milliseconds, completed }: any) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div>
          <ul>
            <li>
              <span id='days' className='time digits'>
                {days}
              </span>
              <span className='title'>{'days'}</span>
            </li>
            <li>
              <span className='time digits' id='hours'>
                {hours}
              </span>
              <span className='title'>{'Hours'}</span>
            </li>
            <li>
              <span className='time digits' id='minutes'>
                {minutes}
              </span>
              <span className='title'>{'Minutes'}</span>
            </li>
            <li>
              <span className='time digits' id='seconds'>
                {seconds}
              </span>
              <span className='title'>{'Seconds'}</span>
            </li>
          </ul>
        </div>
      );
    }
  };

  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  const coundown = new Date(year, month, day + 10).getTime();

  return (
    <Fragment>
      <Countdown date={coundown} renderer={renderer} />
    </Fragment>
  );
};

export default CountdownData;
