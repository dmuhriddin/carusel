import Slider from "react-slick";
import "./App.css";

function App() {
  const images = [
    {
      id: 1,
      img: "https://i.pinimg.com/564x/72/f1/27/72f127200274628eff1494797a8c9e21.jpg",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/97/1d/ed/971dedd139b4043aa256722c0f217162.jpg",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/ce/59/50/ce5950f6c03b35344939e14655bf0f79.jpg",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/564x/b9/f6/5c/b9f65c07a60bf8b8c015343cb286c5e6.jpg",
    },
    {
      id: 5,
      img: "https://i.ytimg.com/vi/RyEQvRdi5ZQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGH8gUygkMA8=&rs=AOn4CLBPOJ5-zqTH74TIY9tMkFCQ4Se5VA",
    },
    {
      id: 6,
      img: "https://animeojisan.files.wordpress.com/2023/06/otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken-12-di-adios-a-mi-cobardia-2.jpg",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <Slider {...settings} className="slider">
        {images.map((item) => (
          <div key={item.img} className="slider__item">
            <img src={item.img} alt="carusel img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
