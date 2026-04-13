import { Col, Card, CardBody, Button } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { CopyPortionFromParagraph } from '@/Constant';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ClipboardHighlight = () => {
    const ClipBoardParaGraph: string = "dolor ertrsiertertt amet";
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
    <Col sm="12" md="6">
      <Card>
        <CardHeaderCommon title={CopyPortionFromParagraph} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">Copy Portion From Paragraph</p>
            <h6 className="border rounded card-body f-w-300">
              Lorem ipsum <span className="bg-primary text-white p-1">{ClipBoardParaGraph}</span>, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <div className="mt-3">
                <Button className="btn-clipboard" color="primary" onClick={handleCopy}><i className="fa fa-copy"></i> Copy highlighted text</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ClipboardHighlight;
