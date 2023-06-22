/**
 * A table heading row for the list of heats.
 */

export function HeatHeading() {
    return (
        <>
            <tr>
                <th>HEAT</th>
                <th>COL.</th>
                <th>NO.</th>
                <th className="rider">RIDERS</th>
                <th className="rider">SUBSTITUTE</th>
                <th colSpan="2">GATE</th>
                <th>PTS</th>
                <th>H</th>
                <th>A</th>
            </tr>
        </>
    )
}
