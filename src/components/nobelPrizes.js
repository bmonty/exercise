import React, { useState } from 'react';

import LaureateTable from './laureateDisplay';
import Pagination from './Pagination';

const NobelPrizes = (props) => {
    const [nobelPrizesCurrentPage, setNobelPrizesCurrentPage] = useState(1);
    const [nobelPrizePageSize, setNobelPrizePageSize] = useState(5);

    const { nobelPrizes } = props;
    if (!nobelPrizes) return <p>Something went wrong...</p>;

    const indexLast = nobelPrizesCurrentPage * nobelPrizePageSize;
    const indexFirst = indexLast - nobelPrizePageSize;
    const current = nobelPrizes.prizes.slice(indexFirst, indexLast);

    return (
        <div>
            <h1 className="text-center">Nobel Prizes</h1>
            <Pagination currentPage={nobelPrizesCurrentPage} itemsPerPage={nobelPrizePageSize} totalItems={nobelPrizes.prizes.length} paginate={setNobelPrizesCurrentPage} />
            {current.map((prize) => (
                <div key={prize.year + prize.category}>
                    <h2 className="text-center">{prize.year} - {prize.category}</h2>
                    <LaureateTable laureates={prize.laureates} />
                </div>
            ))}
        </div>
    )
};

export default NobelPrizes;
