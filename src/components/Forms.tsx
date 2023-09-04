import { useState } from "react";
import all_memes from "../data/MemesData";

export const Forms = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage:
      "https://programmerhumor.io/wp-content/uploads/2023/08/programmerhumor-io-frontend-memes-java-memes-8ac2dd859afd129-758x920.jpg",
  });

  const handleClick = () => {
    const memesArray = all_memes.data.memes;
    const random_no = Math.floor(Math.random() * memesArray.length);

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memesArray[random_no].url,
      };
    });
  };

  console.log(meme);
  function handleChange(event: any) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <div className="pt-8 px-16">
      <div>
        <div className="flex">
          <input
            type="text"
            placeholder=""
            className="border-2 w-full h-10 pl-4"
            value={meme.topText}
            onChange={handleChange}
            name="topText"
          />
          <input
            type="text"
            placeholder=""
            className="border-2 w-full ml-4 h-10 pl-4"
            value={meme.bottomText}
            onChange={handleChange}
            name="bottomText"
          />
        </div>
        <p>
          <button
            className="h-10 w-full mt-4 bg-gradient-to-r from-[#711F8D] to-[#A818DA] text-white rounded"
            onClick={handleClick}
          >
            Get a random meme image
          </button>
        </p>
      </div>

      <div className="mt-8 w-full h-h-[800px] flex relative">
        <img src={meme.randomImage} alt="Img" className="w-max h-full m-auto" />
        <h2 className="absolute top-3 font-bold">{meme.topText}</h2>
        <h2 className="absolute bottom-1/2 font-bold">{meme.bottomText}</h2>
      </div>
    </div>
  );
};
