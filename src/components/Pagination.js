import React from 'react'
import './Pagination.css';

function Pagination({postPerPage,totalPosts,setcurrentPage,currentPage,paginate}) {
    let pageNumber = []
    for(let i=1;i<=Math.ceil(totalPosts / postPerPage); i++){
        pageNumber.push(i)
    }

  return (
    <div className='pagination mb-3'>
      
            {
               pageNumber.map((page,index)=>{
                return <button key={index} onClick={()=>setcurrentPage(page)} className={page === currentPage? 'active':''}>
                  {page}</button>
               })
            }
      
    </div>
  )
}

export default Pagination