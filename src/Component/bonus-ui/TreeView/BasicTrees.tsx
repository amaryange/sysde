import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { BasicTreeData, TreeViewList } from "@/Data/BonusUiData/BasicCard";
import { BasicTreesProp } from "@/Type/BonusUi";
import cx from "classnames";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { FaCheckSquare, FaMinusSquare, FaSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { Card, CardBody } from "reactstrap";

export const ArrowIcon: React.FC<BasicTreesProp> = ({ isOpen, className }) => {
  const baseClass = "arrow";
  const classes = cx(baseClass, { [`${baseClass}--closed`]: !isOpen }, { [`${baseClass}--open`]: isOpen }, className);
  return <IoMdArrowDropright className={classes} />;
};

export const CheckBoxIcon = ({ variant, ...rest }: BasicTreesProp) => {
  switch (variant) {
    case "all":
      return <FaCheckSquare color="#308e87" {...rest} />;
    case "none":
      return <FaSquare color="white" {...rest} style={{ border: "1px solid #80808069" }} />;
    case "some":
      return <FaMinusSquare {...rest} color="#308e87" />;
    default:
      return null;
  }
};

const BasicTrees = () => {
  const treeData = flattenTree(TreeViewList);

  return (
    <Card>
      <CardHeaderCommon title="Basic Tree" description={BasicTreeData} />
      <CardBody>
        <div className="tree-container">
          <div className="checkbox">
            <TreeView
              data={treeData}
              aria-label="Checkbox tree"
              multiSelect
              propagateSelect
              propagateSelectUpwards
              togglableSelect
              defaultSelectedIds={[4, 9]}
              expandedIds={[1, 2, 6, 10, 14, 27]}
              nodeRenderer={({ element, isBranch, isExpanded, isSelected, isHalfSelected, getNodeProps, level, handleSelect, handleExpand }) => {
                return (
                  <div {...getNodeProps({ onClick: handleExpand })} style={{ marginLeft: 40 * (level - 1), marginTop: 5 }} className="d-flex align-items-center">
                    {isBranch && <ArrowIcon isOpen={isExpanded} />}
                    <CheckBoxIcon
                      className="checkbox-icon "
                      onClick={(e: any) => {
                        handleSelect(e);
                        e.stopPropagation();
                      }}
                      variant={isHalfSelected ? "some" : isSelected ? "all" : "none"}
                    />
                    <span className="name">{element.name}</span>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BasicTrees;
