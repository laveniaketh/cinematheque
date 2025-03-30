import React from "react";
import { Carousel } from "flowbite-react";

const MovieSelection = () => {
  const movies = [
    {
      title: "Movie 1",
      year: "2024",
      director: "John Doe",
      plot: "A thrilling story of adventure and discovery.",
      image: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    },
    {
      title: "Movie 2",
      year: "2023",
      director: "Jane Smith",
      plot: "An emotional journey of love and sacrifice.",
      image: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    },
    {
      title: "Movie 3",
      year: "2022",
      director: "Emily Johnson",
      plot: "A science fiction tale that questions reality.",
      image: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    },
    {
      title: "Movie 4",
      year: "2021",
      director: "Robert Brown",
      plot: "A mysterious thriller with unexpected twists.",
      image: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    },
    {
      title: "Movie 5",
      year: "2020",
      director: "Anna Wilson",
      plot: "A heartwarming comedy about family and friendship.",
      image: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
    },
  ];

  return (
    <div className="w-full h-screen">
      <Carousel
        slideInterval={5000}
        className="w-full h-full overflow-hidden hide-scrollbar"
        indicators={false}
      >
        {movies.map((movie, index) => (
          <div key={index} className="relative w-full h-full">
            {/* Movie Image */}
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            {/* Movie Details */}
            <div className="absolute bottom-0 left-0 right-0  p-6 text-white">
              <h2 className="text-4xl font-bold">{movie.title}</h2>
              <p className="text-lg">
                {movie.year} • Directed by {movie.director}
              </p>
              <p className="text-md mt-2">{movie.plot}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSelection;
