import React, { useState, useEffect } from 'react';
import { Search, Segment } from 'semantic-ui-react';

// import components
import DogBreedList from './DogBreedList';

/**
 * DogBreedIndex.
 *
 * Home Page that display a list of all available dog breeds and allows user to filter list and look for a specific breed
 *
 * @example
 * <DogBreedIndex />
 */

export default function DogBreedIndex() {
    const [dogCollectionData, setDogCollectionData] = useState({});
    const dogCollection = Object.keys(dogCollectionData);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      fetch('https://dog.ceo/api/breeds/list/all')
          .then(res => res.json())
          .then(dogCollectionData => setDogCollectionData(dogCollectionData.message))
          .catch(e => console.error(e))
  }, []);

    //set search term state
    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    };

    // function to filter users desired breed to be able to render and display only needed data to page
    const desiredBreed = dogCollection.filter(dog =>
        dog.includes(searchTerm)
    );

    return (
        <div>
            <div className='App'>
                <Segment inverted>
                    <h1>Dog Breeds Index</h1>
                    <Search
                        placeholder='Look for a breed'
                        showNoResults={false}
                        onSearchChange={handleSearchTerm}
                    />
                </Segment>
            </div>
            <DogBreedList dogCollection={desiredBreed}/>
        </div>
    );
};