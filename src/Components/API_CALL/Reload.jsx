import Api_call from "./Api";

const Reload = async (videos, setVideos, search_list, setSearch_list) => {
  setSearch_list([]);
  Object.keys(videos).forEach((key) => {
    setSearch_list(search_list.push(videos[key].keyword));
  });
  setVideos([]);
  for (let i = 0; i < search_list.length; i++) {
    Api_call(videos, setVideos, search_list[i]);
  }
  console.log(videos);
};

export default Reload;
