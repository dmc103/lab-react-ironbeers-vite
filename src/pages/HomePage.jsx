
import { Link } from 'react-router-dom';
import allBeers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

function HomePage() {
    return (
        <div>
        <section>
            <img src={allBeers} alt="all beers" />
            <h2>All Beers</h2>
            <Link to="/beers">All Beers</Link>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatem, voluptate, voluptatum, quia quos voluptatibus
                officiis, quod natus consequatur quibusdam quae doloribus
                repellendus. Quisquam, voluptatem. 
            </p>
        </section>

        <section>
            <img src={randomBeer} alt="random beer" />
            <h2>Random Beer</h2>
            <Link to="/random-beer">Random Beer</Link>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatem, voluptate, voluptatum, quia quos voluptatibus
                officiis, quod natus consequatur quibusdam quae doloribus
                repellendus. Quisquam, voluptatem. 
            </p>
        </section>

        <section>
            <img src={newBeer} alt="new beer" />
            <h2>New Beer</h2>
            <Link to="/new-beer">New Beer</Link>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatem, voluptate, voluptatum, quia quos voluptatibus
                officiis, quod natus consequatur quibusdam quae doloribus
                repellendus. Quisquam, voluptatem. 
            </p>
        </section>

        </div>
    );

}

export default HomePage;
