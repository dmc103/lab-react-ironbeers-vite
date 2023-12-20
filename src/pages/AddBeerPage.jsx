import { useState } from "react";
import axios from "axios";


function AddBeerPage() {
    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    });

    const handleChange = (event) => {
        setNewBeer({ ...newBeer, [event.target.name]: event.target.value });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log('Error while creating new beer: ', error);
            });
    };


    return (
        <form onSubmit={handleSubmit} style={{ padding: '20px', backgroundColor: '#f7f7f7', maxWidth: '600px', margin: 'auto' }}>

        <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' }}>Name:</label>
            <input type="text" name="name" value={newBeer.name} onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' }}>Tagline:</label>
            <input type="text" name="tagline" value={newBeer.tagline} onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' }}>Description:</label>
            <textarea type="text" name="description" value={newBeer.description} onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' }}>First Brewed:</label>
            <input type="text" name="first_brewed" value={newBeer.first_brewed}onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' }}>Brewers Tips:</label>
            <input type="text" name="brewers_tips" value={newBeer.brewers_tips}onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' }}>Attenuation Level:</label>
            <input type="number" name="attenuation_level" value={newBeer.attenuation_level} onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '10px' }}>
            <label>Contributed By:</label>
            <input type="text" name="contributed_by" value={newBeer.contributed_by} onChange={handleChange} />
        </div>

            <button type="submit" style={{ padding: '10px 15px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>ADD NEW BEER</button>
        </form>
    )




}

export default AddBeerPage;
