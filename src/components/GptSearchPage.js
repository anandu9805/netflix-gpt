import { loginPageBg } from "../utils.js/constant";
const GptSearchPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="absolute -z-10 w-fit h-screen">
        <img alt="login-pg-bg" src={loginPageBg} />
      </div>
      <form className="bg-black rounded w-1/2 p-4 flex flex-row justify-between space-x-2">
        <input
          type="text"
          className="p-4 w-full focus:border-0 rounded placeholder:text-gray-700"
          placeholder="What would you like to watch?"
        />
        <button
          type="submit"
          className="bg-[#e50931]  p-4 rounded text-white font-medium opacity-100 "
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default GptSearchPage;
