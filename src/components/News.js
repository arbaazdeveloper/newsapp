import React,{useEffect,useState}  from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=>{
   
     
  
        
        
    const [articles, setarticle] = useState([])    
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(true)
    const [totalResult, settotalResult] = useState(0)
         
          
        
       
      

  
    
  const updateNews= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=58a82b8d725945889eb753ad82e7b690&pageSize=${props.pageSize}`;
    let data= await fetch(url)
    let parseData= await data.json();
    setarticle(parseData.articles)
    settotalResult(parseData.totalResult)
    setloading(false)

  }

   useEffect(()=> {
    document.title=`${props.category}-News Dose`
    updateNews();
   }, [])
  
    
    const nextHandle=async()=>{
        
        if(page+1>Math.ceil(totalResult/props.pageSize)){}
        else{
       
        let url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=58a82b8d725945889eb753ad82e7b690&page=${page+1}&pageSize=${props.pageSize}`
        setloading(true)
        let data= await fetch(url)
        let parseData= await data.json();

        setpage(page+1);
        setarticle(parseData.articles)
        setloading(false)

        
         //   setState(page:state.page+1;)   
           // updateNews()
         
    }}
    const prevHandle=async()=>{
      
        setloading(true)
        let url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=58a82b8d725945889eb753ad82e7b690&page=${page-1}&pageSize=${props.pageSize}`
        let data= await fetch(url)
       
        let parseData= await data.json();

        setpage(page-1);
        setarticle(parseData.articles)
        setloading(false)


         // setState(page:page-1;)   
          //updateNews();
           
        
    }
 const capitalize=(string)=>{
     return string.charAt(0).toUpperCase()+string.slice(1);
    
}

const fetchMoreData= async()=>{
        
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=58a82b8d725945889eb753ad82e7b690&page=${page+1}&pageSize=${props.pageSize}`;
        let data= await fetch(url)
        let parseData= await data.json();

        setarticle(articles.concat(parseData.articles))
        settotalResult(parseData.totalResult)
        setpage(page+1)
        setloading(false)}

 
   
  

 
 
        return (
            <div>

                    {loading===true && < Spinner/>}
                    <h1 className="text-center">Top Headlines of {props.category==="general"?"Today":capitalize(props.category)}</h1>
                                <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResult}
          loader={<Spinner/>}

        >     
         <div className="container">
                    <div className="row">
                        {articles.map((element)=>{
                            return  <  div className="col-md-4" key={element.url}>
                            <NewsItem  image={!element.urlToImage?'https://blogger.googleinercontent.com/img/a/AVvXsEhiFZua2TKlWOHoZ5qipQ8zBVpSMbXNdxOFJmwNkddvji4GqJRO4SonCCmwV_IBrxtHCb2UlJ850RuZPY75s54QZkedzrYthaQqoo4tuOD3zUbMhTGxJ2T-rFtSu8I1vRJY9RtH8dWw7_5XtGfoeUvJuAWZU-U9XLsHKTKffBSWD6G9su34rjkO0sYD-w=w1200-h630-p-k-no-nu':element.urlToImage} 
                             
                            heading={element.title} 
                            newsdescription={element.description}
                            published={element.publishedAt}
                            author={!element.author?'Unknown':element.author }
                             url={element.url}/>
                            </div>

                        })}
                        
            </div>    
                    </div>
                    </InfiniteScroll> 
                     
                   <div className="container-fluid page-change">
                       <button disabled={page<=1} onClick={prevHandle} className="page-change-btn">Previous</button>
                       <p>{page}</p>
                       <button onClick={nextHandle}  className="page-change-btn">Next</button>
                   </div>
                </div>
                
              
           
        )
    }

    
export default News
