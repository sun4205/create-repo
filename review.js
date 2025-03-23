import "./savedArticles.css";
import NewsCard from "../NewsCard/NewsCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedArticles({ savedArticles }) {
  console.log("savedArticles:", savedArticles);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    return(
         <div className='savedArticles__container'>
             <p className='savedArticles__title'>Saved articles</p>
             <p className='savedArticles__numberSaved'>{currentUser.username}, you have {savedArticles.length} saved articles</p>
            <p className='savedArticles__by'>By keywords: <span className='savedArticles__keywords'> {savedArticles.map(article => article.keywords).join(", ")}</span></p>

             <ul className='savedArticles__lists'>
            {savedArticles.map((article, index) => (
           <NewsCard
             key={index}
            image={article.urlToImage}
             date={article.date}
             title={article.title}
             description={article.description}
             source={article.source.name}
           saveBtnImage={article.saveBtnImage}
          />
         ))}
             </ul>
         </div>
    )
  }

export default SavedArticles;
