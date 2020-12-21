import React from 'react';
import { Link } from 'react-router-dom';

import useGoogleSearch from '../../hooks/useGoogleSearch/useGoogleSearch';
import { useStateValue } from '../../StateContext';

function SearchResult() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term); // LIVE API Call

    console.log(data);

    return (
        <div className="searchResult">
            <h1>Search Result Page</h1>
        </div>
    )
}

export default SearchResult; 