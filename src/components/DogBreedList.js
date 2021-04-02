import React from 'react';
import { Link } from "react-router-dom";
import capitalizeFirstLetter from '../helperFunctions/capitalizeFirstLetter';

/**
 * DogBreedList.
 *
 * Component that iterates over dog breeds data and renders dog breed list
 *
 * @example
 * <DogBreedList />
 */

export default function DogBreedList({ dogCollection = [] }) {

    // iterate over dog collection data and renders list with all main breeds to index page
    const renderBreed = dogCollection.map(breed => (
        <ul>
            <li key={breed}>
                <Link to={breed}>
                    <h2>{capitalizeFirstLetter(breed)}</h2>
                </Link>
            </li>
        </ul>
    ));

    return (
        <div className='breed-list'>
            {renderBreed}
        </div>
    );
};