import React from 'react'
const NewsItem = (props) => {
    return (
        <div>
            <div className="card my-3" style={{ "width": "18rem", "height":"27rem" }}>
                <img style={{ "height": "10rem" }} src={!props.imgUrl ? "https://cdn.abcotvs.com/dip/images/14997057_062424-wpvi-travel-troubles-walter-5pm-CC-vid.jpg?w=1600" : props.imgUrl} />
                <div className="card-body">
                    <h5 className="card-title"style={{ "font-size": "medium" }} >{!props.title ? "Stock market today: Global sto" : props.title}...</h5>
                    <p className="card-text "style={{ "font-size": "smaller" }}>{!props.description ? "The short to mid-term future for SHIB looks bleak and here are the reasons why" : props.description.slice(0, 150)}</p>
                    <p class="card-text"><small className ="text-muted">By {!props.author? "Unknown":props.author } on {new Date(props.date).toGMTString()}</small></p>
                    <a href={props.url} target="_blank" className="btn btn-primary btn-sm">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
