import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            setBeers(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data: ', error);
            setError(error);
            setLoading(false);
        });


}, [])

if(loading) return <div>Loading...</div>;
if(error) return <div>Error!</div>;

return (
    <div>
    {beers.map((beer) => (
        <div key={beer._id} style={{ marginBottom: '20px'}}>
        <img src={beer.image_url} alt={beer.name} style={{height: '100px'}}/>
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p><small>Contributed by: {beer.contributed_by}</small></p>
        <Link to={`/beers/${beer._id}`}>Beer details</Link>
        <hr />

        </div>
    ))}

    </div>
)


}


export default AllBeersPage;
