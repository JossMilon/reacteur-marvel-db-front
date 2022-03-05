const Search = ({placeholder, setSearch, setSkip}) => {
    const handleSearch = (e) => {
        setSearch(e.target.value); 
        //Each time search is used, we'll initialize the pagination
        setSkip(1);
    };
    return (
        <div className="search">
            <input onChange={handleSearch} type="text" placeholder={placeholder} />
        </div>
    )
};

export default Search;