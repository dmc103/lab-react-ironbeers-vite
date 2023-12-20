import { useState, useEffect } from "react";
import axios from "axios";


function RandomBeersPage() {
    const [beer, setBeer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => {
            setBeer(response.data);
            setLoading(false);
        })
    
            .catch(error => {
                console.error('Error fetching data: ', error);  
                setError(error);
                setLoading(false);
            });

        }, []);

        if(loading) return <div>Loading...</div>;
        if(error) return <div>Error loading beer details{error.message}</div>;

        return (
            <div>
                {beer && (
                    <>
                    <img src={beer.image_url} alt={beer.name} style={{height: '200px'}}/>
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>{beer.description}</p>
                    <p>First Brewed: {beer.first_brewed}</p>
                    <p>Attentuation Level: {beer.attenuation_level}</p>
                    <p><small>Contributed by: {beer.contributed_by}</small></p>
                    </>
                )}
            </div>
        );


}



export default RandomBeersPage;
