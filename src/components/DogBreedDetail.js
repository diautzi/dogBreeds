import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import formatBreedName from '../helperFunctions/formatBreedName';

/**
 * DogBreedDetail.
 *
 * Page that displays four(4) random pictures of a specific breed to users
 *
 * @example
 * <DogBreedDetail />
 */

export default function DogBreedDetail() {
    const history = useHistory();
    const [dogPics, setDogPics] = useState([]);
    const breed = history.location.pathname;

    useEffect(() => {
        fetch(`https://dog.ceo/api/breed${breed}/images/random/4`)
            .then(res => res.json()) 
            .then(dogPics => setDogPics(dogPics.message))
            .catch(e => console.error(e))
    }, []);

    // function to navigates back to the breed index page
    const renderBack = () => {
        history.push('/');
    };

    // iterates over docPics data and renders pics to page
    const renderDogPics = dogPics.map(breed => (
        <div className='pictures-list'>
            <img
                height={500}
                src={breed}
                alt='cute dog pics'
            />
        </div>
    ));
    
    return (
        <div>
            <div className='App'>
                <h1>{formatBreedName(breed)}</h1>
                <Button onClick={renderBack}>Back to Index</Button>
            </div>
            {renderDogPics}
        </div>
    );
};