import React, { useContext} from 'react'
import ReactPaginate from 'react-paginate'
import "../cssfiles/Pagination.css"
import { pageNumber } from './Context'


const Pagination = () => {
    const {page, setPage} = useContext(pageNumber)
    const handlePageClick = (data)=> {
      
      let currentPage = data.selected + 1;
      console.log("current page value in paginationn",currentPage);
      setPage(currentPage);
   }

  return (
    <div className='paginationdiv'>
        <ReactPaginate 
         previousLabel={'previous'}
         nextLabel={'next'}
         breakLabel={'...'}
         pageCount={90000}
         marginPagesDisplayed={3}
         pageRangeDisplayed={3}
         onPageChange={handlePageClick}
         containerClassName={'pagination justify-content-center'}
         pageClassName={'page-item'}
         pageLinkClassName={'page-link'}
         previousClassName={'page-item'}
         previousLinkClassName={'page-link'}
         nextClassName= {'page-item'}
         nextLinkClassName={'page-link'}
         breakClassName={'page-item'}
         breakLinkClassName={'page-link'}
         activeClassName={'active'}
         initialPage={page-1}
         
        
        />
      
    </div>
  )
}

export default Pagination