import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;

    return (
        <div
            className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
            // style={{
            //     backgroundColor: '#f0f0f0',
            // }}
        >
            <img
                className="res-logo rounded-lg"
                src={CDN_URL + cloudinaryImageId}
            />

            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    );
};

// export const withPromotedLabel = (RestaurantCard) => {
//     return (prop) => {
//         return (
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCard {...prop} />
//             </div>
//         );
//     }
// }

export default RestaurantCard;
