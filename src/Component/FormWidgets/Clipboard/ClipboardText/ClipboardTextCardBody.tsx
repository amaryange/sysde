import { useState } from 'react';
import { Button, CardBody, Input } from 'reactstrap';
import { Copy, Cut, CutcopyFromTextInput } from '@/Constant';
import { toast } from 'react-toastify';

const ClipboardTextCardBody = () => {
   const clipBoardTextParagraph: string = "A web designer must always enhance their work since creating websites is a creative effort. Therefore, a web designer must be more imaginative to produce exceptional results. Blogs about web design assist web designers in learning about new technologies, offer lessons, news, direction for a freebie, and much more. These blogs allow web designers to stay creative and improve their abilities. Therefore, advice from web design blogs is required to improve your business.";
   const [clipBoardValues, setClipBoardValues] = useState({ value: clipBoardTextParagraph, copied: false });
   const handleCopy = async () => {
     try {
       await navigator.clipboard.writeText(clipBoardValues.value);
       setClipBoardValues({ value: clipBoardValues.value, copied: true });
     } catch (err) {
       toast.error("Failed to copy text: " + err);
     }
   };

   const handleCut = async () => {
     try {
       await navigator.clipboard.writeText(clipBoardValues.value);
       setClipBoardValues({ value: "", copied: false });
     } catch (err) {
       toast.error("Failed to cut text: " + err);
     }
   };
  return (
    <CardBody>
      <div className="clipboaard-container">
        <p className="card-description">{CutcopyFromTextInput}</p>
        <Input type="text" placeholder="type some text to copy / cut" value={clipBoardValues.value} onChange={({ target: { value } }) => setClipBoardValues({ value, copied: false })} />
        <div className="mt-3">
          <Button className="btn-clipboard me-2" color="primary" onClick={handleCopy}>
            <i className="fa fa-copy"></i> {Copy}
          </Button>
          <Button className="btn-clipboard-cut" color="secondary" onClick={handleCut}>
            <i className="fa fa-cut"></i> {Cut}
          </Button>
        </div>
      </div>
    </CardBody>
  );
};

export default ClipboardTextCardBody;
