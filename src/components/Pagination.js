import React from 'react';
import { exportDefaultSpecifier } from '@babel/types';

const Pagination = ({currentPage, itemsPerPage, totalItems, paginate}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    // set up array to hold page numbers
    const pageNumbers = [];
    for(let i=1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    let showPageNumbers = [];
    if(pageNumbers.length > 20) {
        if (currentPage < 20) {
            showPageNumbers = pageNumbers.slice(0, 20);
        } else if (currentPage > (totalPages - 20)) {
            showPageNumbers = pageNumbers.slice(totalPages - 20, totalPages)
        } else {
            showPageNumbers = pageNumbers.slice(currentPage - 9, currentPage + 8)
        }
    } else {
        showPageNumbers = pageNumbers
    }

    return (
        <div>
            <ul className="pagination justify-content-center">
                <li className={"page-item " + (currentPage === 1 ? "disabled" : "")}>
                    <a onClick={() => paginate(currentPage - 1)} className="page-link" href="#">
                        <span>&laquo;</span>
                    </a>
                </li>
            {showPageNumbers.map(number => (
                <li className={"page-item " + (number === currentPage ? "active" : "")} key={number}>
                    <a onClick={() => paginate(number)} href="#" className="page-link">{number}</a>
                </li>
            ))}
                <li className={"page-item " + (currentPage === (Math.ceil(totalItems / itemsPerPage)) ? "disabled" : "")} >
                    <a onClick={() => paginate(currentPage + 1)} className="page-link" href="#">
                        <span>&raquo;</span>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Pagination;
