const Shimmer = () => {
    const shimmerElements = [];
    for (let i = 0; i < 9; i++) {
        shimmerElements.push(
            <div key={i} className="shimmer h-96 w-56 bg-gray-100 m-6 rounded-xl"></div>
        );
    }

    return (
        <div className="shimmer-container h-full w-full flex flex-wrap justify-center items-center">
            {shimmerElements}
        </div>
    );
}

export default Shimmer;