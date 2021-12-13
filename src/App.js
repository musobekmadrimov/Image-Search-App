import React, { useState } from "react";
import axios from "axios";
import { SRLWrapper } from "simple-react-lightbox";
import Footer from './Footer'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Header from './Header'
import "./main.scss";
// import "./main.css";

function App() {
  const [image, setImage] = useState("");
  const [result, setResult] = useState([]);
  const accessKey = "jNavCO-RQsXknWMieAPyTxp3B1ssjgENkX23oSZtliY";

  const getValue = (event) => {
    setImage(event.target.value);
  };

  const getImages = () => {
    const urlAPI = `https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=${accessKey}`;
    console.log(urlAPI);
    axios.get(urlAPI).then((res) => {
      setResult(res.data.results);
    });
  };

  return (
    <SRLWrapper>
      <>
      <Header />
        <div className="formSection">
          <input
            type="text"
            name="image"
            placeholder="Search any image"
            onChange={getValue}
          />
          <button onClick={getImages} type="submit">
            Search
          </button>
        </div>
        <div className="result">
          {result.map((image, id) => {
            return (
              <div className="card" key={id}>
                <a href="!#">
                  <LazyLoadImage
                    className="resultImage"
                    src={image.urls.full}
                    effect="blur"
                    delayTime="300"
                  />
                  <p className="username">Photo by {image.user.name}</p>
                </a>
              </div>
            );
          })}
        </div>
      </>
      <Footer />
    </SRLWrapper>
  );
}

export default App;
