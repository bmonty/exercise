import React from 'react';

import LaureateTable from './laureateDisplay';

const NobelPrizes = (props) => {
    const { nobelPrizes } = props;
    if (!nobelPrizes) return <p>Something went wrong...</p>;

    return (
        <div>
            <center><h1>Nobel Prizes</h1></center>
            {nobelPrizes.prizes.map((prize) => (
                <div key={prize.year + prize.category}>
                    <h2>{prize.year} - {prize.category}</h2>
                    <LaureateTable laureates={prize.laureates} />
                </div>
            ))}
        </div>
    )
};

export default NobelPrizes;
