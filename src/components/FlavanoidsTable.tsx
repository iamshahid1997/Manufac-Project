import React from "react";
import { IStats } from "../utils/types";
import Table from "./table/table";

interface props {
  data: IStats | undefined;
}

function FlavanoidsTable({ data }: props) {
  return (
    <div>
      <p style={{textAlign: 'center'}}>Flavanoids Table</p>
      <Table data={data} title="Flavanoids" />
    </div>
  );
}

export default FlavanoidsTable;
