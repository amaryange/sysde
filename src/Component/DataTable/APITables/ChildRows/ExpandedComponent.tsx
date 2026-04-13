import { ExtraInfo, ExtraInformation, FullName } from "@/Constant";

const ExpandedComponent = ({ data }: any) => {
  return (
    <table cellPadding={5} cellSpacing={0} border={0} style={{ paddingLeft: 50 }}>
      <tbody>
        <tr>
          <td>ID:</td>
          <td>{data.id}</td>
        </tr>
        <tr>
          <td>{FullName}:</td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td>{ExtraInfo}:</td>
          <td>{ExtraInformation}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpandedComponent;
