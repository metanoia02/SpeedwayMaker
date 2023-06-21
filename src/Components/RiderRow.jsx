import { PropTypes } from "prop-types";

/**
 * Models the api's TeamRiderDTO.
 */
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

/**
 * A table row of the rider score table.
 * @param {propTypes} props 
 */
export function RiderRow(props) {
  return (
    <>
      <tr>
        <td>{props.position}</td>
        <td>
          {(props.rider.nickname // TODO: Remove this logic to api DTO, all names not needed.
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