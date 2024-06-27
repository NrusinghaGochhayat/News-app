import React, {useState} from 'react'
import NewsItem from '../NewsItem'
import { useEffect } from 'react'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

const News = (props) => {
    
    const [articles, setArticles] = useState([])
    const [loading, setloading] = useState(false)

    const updateNews = async ()=> {
        setloading(true)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&apiKey=8a156f77cbaf435b8b4ee308ca6ddedb`
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setloading(false)        
    }

    useEffect(() => {
        updateNews(); 
    }, [])
    return (
        <div className='container'>
            <h4 className='text-center my-4'>News-Top Headlines</h4>
           {loading && <Spinner/>}
            <div className="row">
            {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <NewsItem title = {element.title?element.title.slice(0,30):""}
                     description={element.description?element.description:""} imgUrl={element.urlToImage} url = {element.url}/>
                </div>

            })}
            </div>

        </div>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News
