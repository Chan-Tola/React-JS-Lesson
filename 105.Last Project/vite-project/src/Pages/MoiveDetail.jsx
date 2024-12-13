import { useParams } from "react-router-dom";
import CardData from "../Components/Data/CardData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pigination from "../Components/Pigination";
const MoiveDetail = () => {
  const { id } = useParams();
  // after have tha data from the CardData so
  // I have to using method find to find the element and return the value it by array
  const movies = CardData.find((e) => e.id == id);
  // after that I have the acess the from the cardData
  const { title, ep = 0, image, description } = movies;
  // I have create a currentPage that value default it 1
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 12;
  // Calculate episodes for pagination
  const indexOfLastPost = currentPage * postPerPage;
  // for example if current page is 2 so the indexofLastPost is gonna be 24
  const indexofFirstPost = indexOfLastPost - postPerPage;
  // ex: indexlastofPost = 24 => indexofFirstPost = 24 - 12 = 12
  const currentEpisodes = Array.from({ length: ep }).slice(
    // Array.from it where that we can get the length of array from the ep
    indexofFirstPost,
    indexOfLastPost
  );

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <main className="flex flex-col lg:flex-row bg-[#101010] justify-between h-auto lg:h-screen p-4 lg:p-[10rem] gap-4 pt-[7rem]">
        {/* Left Section for Movie Picture */}
        <section className="w-full lg:w-2/3 flex flex-col justify-center items-center rounded-lg shadow-md overflow-hidden">
          <img
            src={image}
            className="h-64 lg:h-full w-full object-cover"
            alt="moviePic"
          />
          <p className="text-sm lg:text-base text-white mb-6 leading-relaxed">
            {description}
          </p>
        </section>

        {/* Right Section for Content */}
        <section className="w-full lg:w-1/3 p-6 bg-[#303030] rounded-lg shadow-md flex flex-col">
          <h1 className="text-2xl lg:text-4xl font-light mb-4 text-white">
            {title}
          </h1>
          <div className="mb-4 w-28 h-10 flex items-center justify-center bg-yellow-600 text-white font-bold rounded-lg shadow-lg">
            Episodes {ep}
          </div>
          <center className="text-white">
            <h1 className="text-4xl font-thin tracking-wide capitalize mb-4 relative">
              Playlist
              <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></span>
            </h1>
          </center>
          <Pigination
            postPerPage={postPerPage}
            totalPost={ep}
            pagination={handlePagination}
          />
          {/* Episode List */}
          <div className="grid grid-cols-6 gap-2 py-5">
            {currentEpisodes.map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-12 h-12 bg-gray-700 text-white font-serif rounded-lg hover:bg-red-700 transition"
              >
                {indexofFirstPost + index + 1}
              </div>
            ))}
          </div>

          <Link to="/">
            <button className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-700 transition font-medium">
              Back to Home
            </button>
          </Link>
        </section>
      </main>
    </>
  );
};

export default MoiveDetail;
