import styles from './FindFriends.module.scss';
import React from "react";
import axios from "axios";
import userPhoto from '../../assets/images/userS1.png'


class FindFriends extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount / 100);
        });
    }

    onPageChange = (pageNum: number) => {
        this.props.changePage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        let pagesAmount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesAmount; i++) {
            pages.push(i)
        }
        return (
          <div className={styles.wrapper}>
              <div className={styles.searchBar}>Search Alex's friends</div>
              <div>
                  {
                      pages.map(p => {
                          return (this.props.currentPage === p)
                            ? <span className={styles.selectedPage}>{p}</span>
                            : <span onClick={() => this.onPageChange(p)}>{p}</span>
                      })
                  }
              </div>
              {
                  this.props.users.map((u: any) => {
                      return (
                        <div className={styles.users} key={u.id}>
                            <div className={styles.userAva}>
                                <img src={u.photos.large != null ? u.photos.large : userPhoto} alt=""/>
                            </div>
                            <div className={styles.userInfo}>
                                <div>{u.name}</div>
                                <span>{"u.location.city"}, {"u.location.state"}</span>
                            </div>
                            <div className={styles.buttons}>
                                <div>
                                    <button onClick={() => this.props.toggleFriend(u.id)}>
                                        {u.followed ? 'Unfriend' : 'Add friend'}
                                    </button>
                                </div>
                                <div>
                                    <button>Message</button>
                                </div>
                            </div>
                        </div>
                      )
                  })
              }
          </div>
        )
    }
}

export default FindFriends;