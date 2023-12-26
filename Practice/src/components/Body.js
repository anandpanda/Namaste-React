import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

let defResList = [];
let clicked = false;
const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    defResList = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(defResList);
    console.log(defResList);
  }
  return (!listOfRestaurants.length)? <Shimmer /> :
   (
    <div className="body">
      <div className="filter">
        <div className='searchbar'>
          <input id='search' defaultValue=""/>
          <button onClick={() => {
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
        {/* <div className='topRated'> */}
          <button
            className="filter-btn"
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
        {/* </div> */}
      </div>
      <div className="res-container">
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
