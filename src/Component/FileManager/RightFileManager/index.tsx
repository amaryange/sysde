import React, { useState } from "react";
import { toast } from "react-toastify";
import { Card, Col, ListGroupItem } from "reactstrap";
import { AssetsImagePath } from "@/Constant";
import Image from "next/image";
import { FilesList } from "@/Data/FileManagerData";
import RightFileManagerHeaderSection from "./RightFileManagerHeaderSection";
import RightFileManagerBodySection from "./RightFileManagerBodySection";

const RightFileManager = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [myfile, setMyFile] = useState(FilesList);

  const fileList = myfile
    .filter((data) => {
      if (searchTerm == null) return data;
      else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return data;
      }
    })
    .map((data, i) => {
      return (
        <ListGroupItem className="file-box" key={i}>
          <div className="file-top">
            <i className={data.icon}></i>
            <i className="fa fa-ellipsis-v f-14 ellips"></i>
          </div>
          <div className="file-bottom">
            <h6>{data.name}</h6>
            <p className="mb-1">{data.size}</p>
            <p>
              {"last open"} : {data.modify}
            </p>
          </div>
        </ListGroupItem>
      );
    });
  const getFile = () => {
    document.getElementById("upfile")?.click();
  };
  const onFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    let myFiles = [...myfile];
    if (selectedFile !== null) {
      myFiles.push({
        id: myfile.length + 1,
        name: selectedFile.name,
        size: `${selectedFile.size}`,
        modify: `${selectedFile.lastModifiedDate}`,
        icon: "fa fa-file-text-o txt-info",
        folderClass: "",
        title: "",
        folderSize: "",
      });
      setMyFile(myFiles);
      toast.success("File Upload Successfully !");
    } else {
      toast.error("Please Select at least one file !");
    }
  };
  return (
    <Col xl="9" md="12">
      <div className="file-content">
        <Card>
          <RightFileManagerHeaderSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} getFile={getFile} onFileChange={onFileChange} onFileUpload={onFileUpload} />
          {fileList.length ? <RightFileManagerBodySection fileList={fileList} myfile={myfile} /> : <Image height={200} width={200} className="img-fluid m-auto" src={`${AssetsImagePath}/search-not-found.png`} alt="" unoptimized/>}
        </Card>
      </div>
    </Col>
  );
};
export default RightFileManager;
