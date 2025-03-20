import React from 'react'
import "./index.css"

const Pagination = ({totalPosts,PostPerpage, setCurrentPage, currentPage}) => {
    const pages = []

   for(let i=1; i<= Math.ceil(totalPosts/PostPerpage); i++){
    pages.push(i)
   }

  return (
    <div className='pagination'>
        {pages.map((each,index) =>{
            return <button type='button'  key={index} className={each == currentPage ? "active" : "btn"} onClick={() =>setCurrentPage(each)}>{each}</button>
        })}
    </div>
  )
}

export default Pagination