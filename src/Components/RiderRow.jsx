import { PropTypes } from "prop-types";

RiderRow.propTypes = {
  teamId: PropTypes.number,
  position: PropTypes.number,
  rider: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    nickname: PropTypes.string,
    dob: PropTypes.string,
    region: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};

export function RiderRow(props) {
  return (
    <>
      <tr>
        <td>{props.position}</td>
        <td>
          {(props.rider.nickname
            ? props.rider.nickname
            : props.rider.firstName) +
            " " +
            props.rider.lastName}
        </td>
        <td>{/*props.ave*/}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </>
  )
}