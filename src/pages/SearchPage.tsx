
import { useParams } from 'react-router-dom';
import { useSearchRestaurants } from '../api/RestaurantApi';


const SearchPage = () => {
  const{ city }=useParams();
  const {results,isLoading}=useSearchRestaurants(city);
  if(isLoading){
    <span>Loading...</span>
  }
if(!results?.data || !city){
  return <span>No results found</span>
}
  return (
/*     <div>
      <span>User research for {city} <span>{results?.data.map((restaurant)=><span>
        found - {restaurant.restaurantName},{restaurant.city}
      </span>)}</span></span>
    </div> */
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">
        insert cuisines here
      </div>
      <div id="main-content" className="flex flex-col gap-5">
            main Content
      </div>
    </div>
  )
}

export default SearchPage
