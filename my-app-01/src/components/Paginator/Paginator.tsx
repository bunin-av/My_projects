import styles from './Paginator.module.scss';
import React from "react";

type PaginatorProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (page: number) => void
}


const Paginator = (props: PaginatorProps) => {
    let pagesAmount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i)
    }
    return (
      <div>
          {
              pages.map((p, i) => {
                  return (props.currentPage === p)
                    ? <span className={styles.selectedPage} key={i}>{p}</span>
                    : <span onClick={() => props.onPageChange(p)} key={i}>{p}</span>
              })
          }
      </div>
    )
}


export default Paginator;