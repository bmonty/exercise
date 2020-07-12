import React from 'react';

const LaureateTable = (props) => {
    const { laureates } = props;
    if (!laureates) return <p>Loading...</p>

    return (
        <table>
            <tbody>
            {laureates.map((laureate) => (
                <tr>
                    <td>{laureate.firstname} {laureate.surname}</td>
                    <td>{laureate.motivation}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default LaureateTable;
