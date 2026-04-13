import { useState } from 'react';
import { Button, CardBody } from 'reactstrap';
import { Copy, CopyFromParagraph } from '@/Constant';
import { toast } from 'react-toastify';

const ClipboardParaGraphCardBody = () => {
   const ClipBoardParaGraph: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const [clipBoardValues, setClipBoardValues] = useState({ value: ClipBoardParaGraph, copied: false });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(clipBoardValues.value);
      setClipBoardValues({ ...clipBoardValues, copied: true });

      setTimeout(() => {
        setClipBoardValues({ ...clipBoardValues, copied: false });
      }, 2000);
    } catch (err) {
      toast.error("Failed to copy text: " + err);
    }
  };

  return (
    <CardBody>
      <div className="clipboaard-container">
        <p className="card-description">{CopyFromParagraph}</p>
        <h6 className="border rounded  f-w-300">{ClipBoardParaGraph}</h6>
        <div className="mt-3">
          <Button className="btn-clipboard" color="primary" onClick={handleCopy}>
            <i className="fa fa-copy"></i> {Copy}
          </Button>
        </div>
      </div>
    </CardBody>
  );
};
export default ClipboardParaGraphCardBody;
