import React from 'react';

const LaureateTable = (props) => {
    const { laureates } = props;
    if (!laureates) return <p>Loading...</p>

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Motivation</th>
                </tr>
            </thead>
            <tbody>
            {laureates.map((laureate) => (
                <tr key={laureate.id}>
                    <td>{laureate.firstname} {laureate.surname}</td>
                    <td>{laureate.motivation}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default LaureateTable;
