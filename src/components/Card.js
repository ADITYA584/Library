import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col justify-around md:text-lg lg:text-xl gap-5 border-2 p-4 h-[18rem]  rounded-lg border-black">
      <div>
        <h1 className="font-bold">Book title:</h1>
        <p>{props.book.title}</p>
      </div>
      <div>
        <h1>
          <span className="font-bold">Edition Count</span>:
          {props.book.edition_count}
        </h1>
      </div>
      {props.val === "search" ? (
        <button
          onClick={(e) => props.addHandler(e)}
          className=" border-none p-2 text-white font-bold bg-green-500 rounded-lg hover:bg-green-400"
        >
          Add to BookShelf
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
