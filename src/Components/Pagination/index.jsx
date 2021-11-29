import React, { useState, useEffect } from 'react'
import { BiArrowToRight, BiArrowToLeft, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { StyledPagination } from './StyledPagination';

export default function Pagination({ items, onPageChange, defPageSize }) {

    const [pager, setPager] = useState({})
    const [defaultProps, setDefaultProps] = useState({
        initialPage: 1,
        pageSize: defPageSize
    })

    useEffect(() => {
        if (items && items.length) {
            setPage(defaultProps.initialPage)
        }
        // remove this set state
        setDefaultProps({
            initialPage: 1,
            pageSize: defPageSize
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items])

    const setPage = (page) => {
        var newPager = pager;
        if (page < 1 || page > newPager.totalPages) {
            return;
        };

        newPager = getPager(items.length, page, defaultProps.pageSize);
        var pageOfItems = items.slice(newPager.startIndex, newPager.endIndex + 1);
        setPager(newPager)

        onPageChange(pageOfItems)
    }

    const getPager = (totalItems, currentPage, pageSize) => {
        currentPage = currentPage || 1;
        pageSize = pageSize || 10;

        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;

        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }


        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        return {
            totalItems,
            currentPage,
            pageSize,
            totalPages,
            startPage,
            endPage,
            startIndex,
            endIndex,
            pages
        }
    }

    return (
        <>
            {
                !pager.pages || pager.pages.length <= 1 ?
                    null
                    :
                    <StyledPagination>
                        <li className={`first ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                            <a href="#!" onClick={() => setPage(1)}>
                                <BiArrowToLeft />
                            </a>
                        </li>
                        <li className={`prev ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                            <a href="#!" onClick={() => setPage(pager.currentPage - 1)}>
                                <BiLeftArrowAlt />
                            </a>
                        </li>
                        {
                            pager.pages.map((page, index) => {
                                return (
                                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                                        <a href="#!" onClick={() => setPage(page)}>{page}</a>
                                    </li>
                                )
                            })
                        }
                        <li className={`next ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                            <a href="#!" onClick={() => setPage(pager.currentPage + 1)}>
                                <BiRightArrowAlt />
                            </a>
                        </li>
                        <li className={`last ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                            <a href="#!" onClick={() => setPage(pager.totalPages)}>
                                <BiArrowToRight />
                            </a>
                        </li>
                    </StyledPagination>
            }
        </>
    )
}
