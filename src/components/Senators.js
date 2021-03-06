import React, { useState } from 'react';

import Pagination from './Pagination';

const Senators = (props) => {
    const [senatorsCurrentPage, setSenatorsCurrentPage] = useState(1);
    const [senatorsPageSize, setSenatorsPageSize] = useState(5);

    const { senators } = props;
    if (!senators) return <p>Something went wrong...</p>;

    const indexLast = senatorsCurrentPage * senatorsPageSize;
    const indexFirst = indexLast - senatorsPageSize;
    const current = senators.objects.slice(indexFirst, indexLast);

    return (
        <div>
            <h1 className="text-center">Current U.S. Senators</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col">Name</th>
                        <th scope="col">Party</th>
                        <th scope="col">State</th>
                    </tr>
                </thead>
                <tbody>
                {current.map((senator) => (
                    <tr key={senator.person.bioguideid}>
                        <td>
                            <img className="img-thumbnail" src={(() => {
                                const urlArray = senator.person.link.split('/');
                                const id = urlArray[urlArray.length - 1];
                                return `https://www.govtrack.us/static/legislator-photos/${id}-50px.jpeg`;
                            })()} alt={'Senator ' + senator.person.lastname}></img>
                        </td>
                        <td><p className="lead">{senator.person.firstname} {senator.person.lastname}</p></td>
                        <td>{senator.party}</td>
                        <td>{senator.state}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination currentPage={senatorsCurrentPage} itemsPerPage={senatorsPageSize} totalItems={senators.objects.length} paginate={setSenatorsCurrentPage} />
        </div>
    )
};

export default Senators;
