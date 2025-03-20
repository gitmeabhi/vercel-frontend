import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./home.css"
import Pagination from '../Pagination'
import Slider from "react-slick"
import Popup from "reactjs-popup"


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'reactjs-popup/dist/index.css'

const Home = () => {

    const[dataArray,setDataArray] = useState([])
    
    const[currentPage,setCurrentPage] = useState(1)
    const[postPerPage] = useState(10)

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    const newData = dataArray.slice(firstPostIndex,lastPostIndex)
   

    const settings = {
        slidesToShow:4,
        slidesToScroll:1,
        dots:false
    }
    
    useEffect(() =>{
        axios.get("http://localhost:3000/details")
        .then(res =>{
            setDataArray(res.data)
            console.log(res.data)
        }
    )
        .catch(err => console.log(err))
    },[])

    
    

  return (
    <div className='home-container'>
        <h1 className='homes'>home</h1>
        <div className='contain'>
        <ul className='userlist'>
            {newData.map((each) =>(
                <li key={each.id} className='items'>{each.name.toUpperCase()}</li>
            ))}
        </ul>
        <Pagination totalPosts={dataArray.length} currentPage ={currentPage} PostPerpage ={postPerPage} setCurrentPage={setCurrentPage} />

        <br/>

        <Popup model trigger={
            
            <button type='button' className='btn-primary'>Popup</button>
        } >
            {close =>(
                <>
                <p>hello this is popup</p>
                <button type='buton' onClick={() => close()}>close</button>
                </>
            )}

        </Popup>

        <br/>
        <div className="slider-container">
        <Slider {...settings}>

        {
            dataArray.map((each,index) =>{
                return <h3 key={index}>{each.name}</h3>
            })
        }

        </Slider>
        </div>


        </div>
        
    </div>
  )
}

export default Home