import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json?.data);
    }

    if(resInfo === null) return <Shimmer/>;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0].card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(', ')} | {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <div className="menu-items">
                <ul>
                    {itemCards.map((item) => 
                        <li key={item?.card?.info?.id}>
                            {item?.card?.info?.name} - Rs.{item?.card?.info?.price/100}
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;