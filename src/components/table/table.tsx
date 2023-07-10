import { IStats } from "../../utils/types";

interface props {
  data: IStats | undefined;
  title: string;
}

function Table({ data, title }: props) {
  return (
    <table border={1} cellSpacing={0} align="center">
      <tr>
        <td align="center" height={50}>
          <b>Measures</b>
        </td>
        {data &&
          Object.keys(data).map((d) => (
            <td colSpan={3} align="center" height={50} width={200}>
              Class {d}
            </td>
          ))}
      </tr>
      <tr>
        <td align="center" height={50}>
          <b>{title} Mean</b>
        </td>
        {data &&
          Object.keys(data).map((d: any) => (
            <td colSpan={3} align="center" height={50} width={200}>
              {data[parseInt(d)].mean.toFixed(3)}
            </td>
          ))}
      </tr>
      <tr>
        <td align="center" height={50}>
          <b>{title} Median</b>
        </td>
        {data &&
          Object.keys(data).map((d: any) => (
            <td colSpan={3} align="center" height={50} width={200}>
              {data[parseInt(d)].median.toFixed(3)}
            </td>
          ))}
      </tr>
      <tr>
        <td align="center" height={50}>
          <b>{title} Mode</b>
        </td>
        {data &&
          Object.keys(data).map((d: any) => (
            <td colSpan={3} align="center" height={50} width={200}>
              {data[parseInt(d)].mode.map((m, i) => (
                <span>
                  {" "}
                  {m.toFixed(3)}
                  {i !== data[parseInt(d)].mode.length - 1 && `,`}
                </span>
              ))}
            </td>
          ))}
      </tr>
    </table>
  );
}

export default Table;
