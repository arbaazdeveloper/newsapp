import React   from 'react'
//import PropTypes from 'prop-types'

const NewsItem=(props)=>  {
    
  //  static propTypes = { }
   

  
        let {image,heading,newsdescription,url,author,published}=props
        return (
                        <div className="news-box">
                            <img src={image} alt="" />
                            <h3>{heading}...</h3>
                            <p>{newsdescription}...</p>
                            <p>Published :{new Date(published).toGMTString()}</p>
                            <strong>{author}</strong>
                            <a  rel="noreferrer" href={url} target="_blank">Read More</a>
                        </div>
                        

        )
    
}

export default NewsItem
