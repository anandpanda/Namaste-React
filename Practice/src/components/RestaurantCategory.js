import ItemList from "./ItemList"

const RestaurantCategory = ({ data, showItemsBool, setShowItems }) => {

    const toggleShowItems = () => {
        if(!showItemsBool)
            setShowItems();
        else
            setShowItems(null);

        showItemsBool = !showItemsBool;
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
            { showItemsBool && <ItemList items={data?.itemCards} /> }
        </div>
    );
}

export default RestaurantCategory;