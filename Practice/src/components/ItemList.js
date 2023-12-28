import {CDN_URL} from '../utils/constants.js';

const ItemList = ({items}) => {
    return(
        
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id}
                    className="p-2 m-2 text-left border-gray-200 border-b-2 flex justify-between">
                    
                    <div className="w-5/6">
                        <div className="my-2 font-bold text-[#3e4152]">{item?.card?.info?.name} <br/> ₹ {item?.card?.info?.price/100}</div> 
                        <div className="pr-4 mb-2 text-[#282c3f85]">{item?.card?.info?.description}</div>
                    </div>
                    <div className="w-1/6">
                        <img className="rounded-md max-h-[90%]" src={CDN_URL+item?.card?.info?.imageId}></img>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default ItemList;