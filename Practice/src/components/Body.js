import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
// import useListOfRestaurants from '../utils/useListOfRestaurants';

let defResList = [];
let clicked = false;
const Body = () => {
  
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  // useEffect(() => {
  //   defResList = useListOfRestaurants();
  //   console.log(defResList); 
  //   setListOfRestaurants(defResList);
  // }, []);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    defResList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(defResList);
    console.log(defResList);
  }

  const onlineStatus = useOnlineStatus();
  if(!onlineStatus){
    return (
      <h1>Offline!!</h1>
    );
  }

  return (!listOfRestaurants.length)? <Shimmer /> :
   (
    <div className="body">  
      <div className="filter flex justify-center">
        <div className='searchbar p-4 m-4'>
          <input className="border border-solid border-black" id='search' defaultValue=""/>
          <button className="m-4 px-4 py-1 bg-green-100 rounded-xl" onClick={() => {
            const text = document.getElementById('search').value.toLowerCase();
            const filteredList = defResList.filter( (res) => 
            res.info.name.toLowerCase().includes(text)
            );

            if(!filteredList.length) {
              if(text !== '') alert('No results found!');
              setListOfRestaurants(defResList);
              return;
            }
            setListOfRestaurants(filteredList);
          }}> Search </button>
        </div>
        <div className="m-4 flex items-center">
          <button
            className="filter-btn m-4 px-4 py-1 bg-gray-100 rounded-xl"
            onClick={ () => {
              // * Filter logic
              clicked = !clicked;
              if (clicked) {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setListOfRestaurants(filteredList);
              } else {
                setListOfRestaurants(defResList);
              }
            }}
          >
            Toggle Top Rated
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-between px-8">
        {listOfRestaurants.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
