import ItemList from "./ItemList";
import { useState } from 'react';


const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false);

    const toggleShowItems = () => {
        setShowItems(!showItems);
    }

    return (

        <div className="w-8/12 mx-auto my-4 bg-[#fafff5] shadow-xl p-4 ">
            <div className="flex justify-between cursor-pointer" 
                onClick={toggleShowItems}>
                <span className="font-bold text-lg">
                    {data?.title} ({data?.itemCards?.length})
                </span>
                <span>🔽</span>
            </div>
            { showItems && <ItemList items={data?.itemCards} /> }
        </div>
    );
}

export default RestaurantCategory;