import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';



function BeerDetailsPage() {
    const [beer, setBeer] =useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { beerId } = useParams();


    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => {
            setBeer(response.data);
            setLoading(false);
        })

        .catch(error => {
            console.error('Error fetching data: ', error);  
            setError(error);
            setLoading(false);
        });
    }, [beerId]);

    if(loading) return <div>Loading...</div>;
    if(error) return <div>Error!{error.message}</div>;

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
            {beer && (
                <>
                <img src={beer.image_url} alt={beer.name} style={{height: '200px'}}/>
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                <p>First Brewed: {beer.first_brewed}</p>
                <p><small>Contributed by: {beer.contributed_by}</small></p>
                
                <br />
                <button>
                <Link to={`/beers`}>Back to List</Link>
                </button>
                </>
            )}
        </div>
    );

    
}

export default BeerDetailsPage;
