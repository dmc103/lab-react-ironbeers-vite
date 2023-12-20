import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');


    const handleSearch = (event) => {
        setSearch(event.target.value);
    };



    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchBeers = async () => {
            try {
                const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`, { cancelToken: source.token })
                setBeers(response.data);
            }
            catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled: ', error.message);
                }
                else {
                    console.error('Error fetching beer data:', error);
                }
            }
            
};

if (search) {
    fetchBeers();
} else {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            setBeers(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching beer data: ', error);
            setError(error);
        })
}

return () => {
    source.cancel('Component is unmounted');
};


}, [search]);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;


return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
    }}>
    
    <input type="text" placeholder="search for a beer here" value={search} onChange={handleSearch} style={{ marginBottom: '20px', width: '100%', padding: '10px' }} />
    
    {beers.map((beer) => (
        <div key={beer._id} style={{ marginBottom: '20px'}}>
        <img src={beer.image_url} alt={beer.name} style={{height: '100px'}}/>
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p><small>Contributed by: {beer.contributed_by}</small></p>
        <br />
        <button>
        <Link to={`/beers/${beer._id}`}>Beer details</Link>
        </button>
        
        <hr />

    </div>


    ))}

    </div>
);


}


export default AllBeersPage;
