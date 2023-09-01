import memeIcon from "../assets/meme.png";

export const Header = () => {
  return (
    <div className="flex pl-5 h-16 bg-gradient-to-r from-[#711F8D] to-[#A818DA] text-white">
      <div className="flex items-center w-full">
        <img src={memeIcon} alt="memeicon" />
        <h1 className="pl-2 text-lg">Meme Generator</h1>
      </div>
      <div className="flex justify-end w-full text-base pr-5 items-center">
        <p>React Course - Project 3</p>
      </div>
    </div>
  );
};
