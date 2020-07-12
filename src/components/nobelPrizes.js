import React from 'react';

import LaureateTable from './laureateDisplay';

const NobelPrizes = (props) => {
    const { nobelPrizes } = props;
    if (!nobelPrizes) return <p>Something went wrong...</p>;

    return (
        <div>
            <h1 className="text-center">Nobel Prizes</h1>
            {nobelPrizes.prizes.map((prize) => (
                <div key={prize.year + prize.category}>
                    <h2 className="text-center">{prize.year} - {prize.category}</h2>
                    <LaureateTable laureates={prize.laureates} />
                </div>
            ))}
        </div>
    )
};

export default NobelPrizes;
