import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({itemPerPage, items}) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(()=>{
        const endOffset = itemOffset + itemPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset))
    },[])

  return (
    <>
        <ReactPaginate />
    </>
  )
}

export default Pagination