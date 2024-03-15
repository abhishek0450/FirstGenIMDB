import PropTypes from "prop-types";

function Pagination({ nextPage, prevPage, page }) {
  return (
    <div>
      <div className="text-xl font-bold text-white text-center w-full bg-gray-900/60  p-1 mt-10 mb-10">
        <span className="m-10" onClick={prevPage}>
          <i className="fa-solid fa-backward"></i>
        </span>
        <span className="font-bold">{page}</span>

        {/* <input type="number" className="w-12 text-center text-blue-400" value = {page} onChange = {(e)=>setPage(e.target.value)} min={1} max={500}/> */}

        <span className="m-10" onClick={nextPage}>
          <i className="fa-solid fa-forward"></i>
        </span>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Pagination;
