import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";

function Main({handleCardClick}) {
    return(
        <main>
            <WeatherCard />        
        <section className="cards">
            <p className="cards__text">You may want to wear</p>
            <ul className="cards__listt">
                {defaultClothingItmes.map((item)=>{
                    return(
                       <ItemCard key={item._id} item={item} handleCardClick={handleCardClick}/>
                    )
                })}
            </ul>  
        </section>
        </main>
    )
}

export default Main;