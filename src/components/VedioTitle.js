const VideoTitle = ({ title, overView }) => {
  return (
    <div className=" bg-gradient-to-r from-black flex flex-col pt-[20%] px-12 absolute text-white w-screen aspect-video">
      <p className="text-xl font-bold">{title}</p>
      <p className="py-6 text-lg w-1/4">{overView}</p>
      <div className=" flex flex-row w-96">
        <button className="p-4 text-black rounded-lg bg-white w-1/2 hover:bg-opacity-70">
          Play
        </button>
        <button className="p-4 mx-2 text-white bg-gray-500 rounded-lg bg-opacity-50 w-1/2 ">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
