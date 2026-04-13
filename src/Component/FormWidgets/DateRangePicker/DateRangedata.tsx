import { Fragment, useEffect, useState } from "react";
import DateRangePicker from "./DateRangePicker";
import PredefinedRanges from "./PredefinedRanges";

const DateRangedata = () => {
  const [dateRange, setDateRange] = useState<any>([null, null]);
  const [startDate, endDate] = dateRange;
  var date1 = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();
  const startDate1 = date1 - 1 + "/" + month + "/" + year;
  const todayDate = date1 + "/" + month + "/" + year;
  const last7day = date1 - 7 + "/" + month + "/" + year;
  const last30day = date1 - 30 + "/" + month + "/" + year;
  useEffect(() => {}, [startDate1, todayDate, last7day]);
  const handleChange = (date: string) => {
    if (date === "Today") {
      alert(`'Today's date is :${todayDate}`);
    } else if (date === "Yesterday") {
      alert(`'Yesterday's Date was:${startDate1}`);
    } else if (date === "Last 7 Days") {
      alert(`'Last 7 date' :${last7day}`);
    } else if (date === "Last 30 Days") {
      alert(`'Last 30 Days':${last30day}`);
    }
  };
  return (
    <Fragment>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        setDateRange={setDateRange}
      />
      <PredefinedRanges startDate1={startDate1} handleChange={handleChange} />
    </Fragment>
  );
};
export default DateRangedata;
