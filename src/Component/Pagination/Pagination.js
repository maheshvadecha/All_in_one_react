import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { DOTS } from '../assets/pagination/DOTS';
import { usePagination} from '../assets/pagination/usePagination'

const Pagination = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, } = props;
  const paginationRange = usePagination({ currentPage, pageSize, totalCount, siblingCount });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrivious = () =>{
    onPageChange(currentPage-1)
  }

  let lastPage = paginationRange[paginationRange.length -1]
  return (
    <ul>
      <li
        onClick={onPrivious}>Privious</li>
      {
        paginationRange.map((pageNumber)=>{
          if(pageNumber === DOTS) {
            return <li>...</li>
          }
          return (
            <>
            <li onSelect={pageNumber === currentPage} onClick={() => onPageChange(pageNumber)}>{pageNumber}</li>
            <li onClick={onNext}>Next</li>
            </>
    
          )
        })
      }
    </ul>
  )
}

export default Pagination;  