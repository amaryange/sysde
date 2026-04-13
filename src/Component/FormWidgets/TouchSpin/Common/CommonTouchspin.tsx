import { CommonTouchspinProps } from "@/Type/Form";
import { Button, Input } from "reactstrap";

const CommonTouchspin = ({ decimal, val, step, setVal, vertical }: CommonTouchspinProps) => {
  const Minus = () => {
    if (decimal) {
      setVal(val - 0.25);
    } else if (step) {
      setVal(val - 10);
    } else {
      setVal(val - 1);
    }
    setVal(val - 1);
  };
  const Addition = () => {
    if (decimal) {
      setVal(val + 0.25);
    } else if (step) {
      setVal(val + 10);
    } else {
      setVal(val + 1);
    }
    setVal(val + 1);
  };
  return (
    <>
      {vertical ? (
        <Input className="touchspin" type="number" name="quantity" placeholder="80" style={{ display: "block" }} />
      ) : (
        <div className="input-group bootstrap-touchspin">
          <Button color="primary" className="bootstrap-touchspin-down" onClick={Minus}>
            <i className="fa fa-minus"></i>
          </Button>

          <Input className="touchspin text-center" type="text" name="quantity" style={{ display: "block" }} defaultValue={val} />

          <Button color="primary btn-square" className="bootstrap-touchspin-up" onClick={Addition}>
            <i className="fa fa-plus"></i>
          </Button>
        </div>
      )}
    </>
  );
};
export default CommonTouchspin;
