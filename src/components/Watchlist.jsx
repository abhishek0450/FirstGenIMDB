const Watchlist = () => {


  return (
    

    <>
      <div className="flex flex-warp justify-center m-4 ">
        <div className="flex justify-center items-center bg-blue-400 rounded-xl  font-bold text-white h-[3rem] w-[9rem] mx-2">Action</div>
        <div className="flex justify-center items-center bg-gray-400/50 rounded-xl  font-bold text-white h-[3rem] w-[9rem] mx-2">Action</div>
      </div>

      <div className="flex justify-center my-4 ">
        <input
          type="text"
          placeholder="Search movies"
          className="bg-gray-200 px-4 h-[3rem] w-[14rem] outline-none"
        />
      </div>
      <div className="flex border border-2 space-x-8 items-center m-8 rounded-lg">
        <table className="w-full text-center">
          <thead>
            <tr className="border-b-2">
              <th></th>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg"
                  alt="movie"
                  className="h-[6rem]  w-[6rem] flex justify-center"
                />
              </td>
              <td>Black Widow</td>
              <td>7.8</td>
              <td>80%</td>
              <td>Action</td>
              <td>
                <button className="bg-red-200 px-2 rounded-lg">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
