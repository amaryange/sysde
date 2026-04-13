import { Row } from "reactstrap";
import Filter from "./Filter";
import Location from "./Location";
import JobTitleClass from "./JobTitle";
import Industry from "./Industry";
import SkillClass from "./Skill";

const Sidebar = () => {
  return (
    <Row>
      <Filter />
      <Location />
      <JobTitleClass />
      <Industry />
      <SkillClass />
    </Row>
  );
};

export default Sidebar;
