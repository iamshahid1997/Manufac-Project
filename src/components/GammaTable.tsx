import { IStats } from "../utils/types";
import Table from "./table/table";

interface props {
  data: IStats | undefined;
}

function GammaTable({ data }: props) {
  return (
    <div>
      <p style={{textAlign: 'center'}}>Gamma Table</p>
      <Table data={data} title="Gamma" />
    </div>
  );
}

export default GammaTable;
