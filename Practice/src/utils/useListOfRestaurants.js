let defResList = [];

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await data.json();
  defResList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
}

const useListOfRestaurants = () => {
    fetchData();
    console.log(defResList);
    return defResList;
}

export default useListOfRestaurants;