import { PropTypes } from "prop-types";

HeatRow.propTypes = {
  useSpan: PropTypes.bool,
  heat: PropTypes.string,
  riderNo: PropTypes.string,
  riderName: PropTypes.string,
  gateL: PropTypes.string,
  gateR: PropTypes.string,
  colour: PropTypes.string,
};

export function HeatRow(props) {
  return (
    <>
      <tr>
        {props.useSpan && <td rowSpan="2">{props.heat}</td>}
        <td bgcolor={props.colour}></td>
        <td>{props.riderNo}</td>
        <td>{props.riderName}</td>
        <td></td>
        <td>{props.gateL}</td>
        <td>{props.gateR}</td>
        <td></td>
        {props.useSpan && <td rowSpan="2"></td>}
        {props.useSpan && <td rowSpan="2"></td>}
      </tr>
    </>
  )
}
