import { useState } from "react";

const Joke = (props: any) => {
  const [isShown, setIsShown] = useState(false);

  const handleOnClick = () => {
    setIsShown((prevState) => !prevState);
  };

  const [messages, setMessages] = useState(["Okay", "Cool"]);

  return (
    <div className="p-2 m-3">
      <h2 className="text-2xl font-bold">{props.setup}</h2>
      {isShown && <p>{props.punchline}</p>}
      <button
        className="border-2 p-3 my-2 bg-blue-300 hover:bg-blue-600"
        onClick={handleOnClick}
      >
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      <hr />
      {messages.length > 0 ? (
        <h1 className="text-2xl">
          You have {messages.length} unread{" "}
          {messages.length === 1 ? "message" : "messages"}!
        </h1>
      ) : (
        <h1 className="text-2xl">You are all caught up!</h1>
      )}
    </div>
  );
};

export default Joke;
