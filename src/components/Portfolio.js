import React from "react";
import movieapp from "../assets/portfolio/movie.jpg";
import social from "../assets/portfolio/social.jpg";
import todo from "../assets/portfolio/todo.jpg";
import foodorder from "../assets/portfolio/foodorder.jpg";
import menufilter from "../assets/portfolio/menufilter.jpg";
import dashboard from "../assets/portfolio/dashboard.jpg";

const Portfolio = () => {
  const [demolinks, Setdemolinks] = React.useState("");
  const [codelinks, Setcodelinks] = React.useState("");
  const portfolios = [
    {
      id: 1,
      pname: "Movie Application",
      src: movieapp,
      demolink: "https://favmovieshub.netlify.app/",
      codelink: "https://github.com/vilasmathpati/movieapplication",
    },
    {
      id: 2,
      pname: "Food Order App",
      src: foodorder,
      //   codelink: "https://github.com/vilasmathpati/tesla-clone",
      //   demolink: "https://tesla-clone-design.netlify.app/",

      demolink: "https://myfoodorder.netlify.app/",
      codelink: "https://github.com/vilasmathpati/food-order-app",
    },
    {
      id: 3,
      pname: "To-Do-List",
      src: todo,
      codelink: "https://github.com/vilasmathpati/to-do-list",
      demolink: "https://my-to-do-vilas.netlify.app",
    },
    {
      id: 4,
      pname: "Hotel Menu Filter",
      src: menufilter,

      demolink: "https://hotelmenufilter.netlify.app",
      codelink: "https://github.com/vilasmathpati/menu-filter",
    },
    {
      id: 5,
      pname: "Social Media",
      src: social,
      demolink: "https://socialmediasample.netlify.app",
      codelink: "https://github.com/vilasmathpati/material-ui-project2",
    },
    {
      id: 6,
      pname: "Simple Dashboard",
      src: dashboard,

      demolink: " https://dashboard-demo-app.netlify.app/",
      codelink: "https://github.com/vilasmathpati/dashboard",
    },
  ];

  const demolinkhandler = (id) => {
    const newone = portfolios.find((item) => item.id === id);

    Setdemolinks(newone.demolink);
  };

  const codelinkhandler = (id) => {
    const newone = portfolios.find((item) => item.id === id);

    Setcodelinks(newone.codelink);
  };

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b  from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, pname }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className="flex items-center justify-center m-4">
                <p>{pname}</p>
              </div>

              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => demolinkhandler(id)}
                >
                  <a href={demolinks} target="_blank" rel="noreferrer">
                    demo
                  </a>
                </button>
                <button
                  onClick={() => codelinkhandler(id)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  <a href={codelinks} target="_blank" rel="noreferrer">
                    code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
