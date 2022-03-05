const Pagination = ({skip, setSkip, data}) => {
    const handleClickNext = () => {
        setSkip((Number(skip)+1))
    };
    const handleClickPrevious = () => {
        setSkip((Number(skip)-1))
    };
    return (
        <div className="pagination">
            <button disabled={skip > 1? false: true} onClick={handleClickPrevious}>{"<< PREVIOUS"}</button>
            <button disabled={skip*100 < data.count? false: true} onClick={handleClickNext}>{"NEXT >>"}</button>
        </div>
    )
};

export default Pagination;