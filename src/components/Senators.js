import React from 'react';

const Senators = (props) => {
    const { senators } = props;
    if (!senators) return <p>Something went wrong...</p>;

    return (
        <div>
            <center><h1>Current Senators</h1></center>
            <table>
                <tbody>
                {senators.objects.map((senator) => (
                    <tr key={senator.person.bioguideid}>
                        <td><img src={(() => {
                            const urlArray = senator.person.link.split('/');
                            const id = urlArray[urlArray.length - 1];
                            return `https://www.govtrack.us/static/legislator-photos/${id}-100px.jpeg`;
                        })()} alt={'Senator ' + senator.person.lastname}></img></td>
                        <td><h5>{senator.person.firstname} {senator.person.lastname}</h5></td>
                        <td>{senator.party}</td>
                        <td>{senator.state}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default Senators;
