import React, {useState} from 'react';
import Core from "./Core";

const Search = ({setStories}) => {
    function handleSearch(e){
        e.preventDefault();
        setStories(null);
        let data = {
            searchQuery: document.getElementById('search-input').value
        }
        let url = new URL(window.location.origin + '/api/histories/search/');
        let params = data;
        url.search = new URLSearchParams(params).toString();
        fetch(url)
            .then(res=>res.json())
            .then(data=>{
                setStories(data);
            }).catch(err=>{
            console.log(err.message);
        });

    }
    return (
        <div className='search-page'>
            <div className='search'>
                <form className="d-flex">
                    <input id='search-input' className="form-control me-2" type="search" placeholder="Пошук по всіх історіях" aria-label="Search"/>
                    <button className="btn btn-outline-success" onClick={handleSearch}>Пошук</button>
                </form>
            </div>
        </div>
    );
};

export default Search;
