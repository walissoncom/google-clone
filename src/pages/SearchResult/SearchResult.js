import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import useGoogleSearch from '../../hooks/useGoogleSearch/useGoogleSearch';
import { useStateValue } from '../../StateContext';

import Search from '../../components/Search/Search';
import SearchOption from '../../components/SearchOption/SearchOption';

import './SearchResult.css';

function SearchResult() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term); // LIVE API Call

    console.log(data);

    return (
        <div className="searchResult">
            <div className="searchResult__header">
                <Link to="/">
                    <img className="searchResult__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Logo" />
                </Link>

                <div className="searchResult__headerBody">
                    <Search hideButtons />

                    <div className="searchResult__options">
                        <div className="searchResult__optionsLeft">
                            <SearchOption title="All" icon={<SearchIcon />} />
                            <SearchOption title="News" icon={<DescriptionIcon />} />
                            <SearchOption title="Images" icon={<ImageIcon />} />
                            <SearchOption title="Shopping" icon={<LocalOfferIcon />} />
                            <SearchOption title="Maps" icon={<RoomIcon />} />
                            <SearchOption title="More" icon={<MoreVertIcon />} />
                        </div>
                        <div className="searchResult__optionsRight">
                            <SearchOption title="Settings" />
                            <SearchOption title="Tools" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="searchResult__items">

            </div>
        </div>
    )
}

export default SearchResult;