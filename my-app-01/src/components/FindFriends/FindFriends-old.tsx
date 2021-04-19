import styles from './FindFriends.module.scss';
import React from "react";
import axios from "axios";
import userPhoto from '../../assets/images/userS1.png'

// props.setUsers([
//     {
//         id: 1,
//         avaUrl: 'https://e-finland.ru/media/images/img_11/1930-6.jpg',
//         userName: 'Ivan Klimchuk',
//         location: {state: 'Ukraine', city: 'Kiev'},
//         status: 'I am the boss',
//         friend: false,
//     },
//     {
//         id: 2,
//         avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThe_PDLW4jcNRNTVNKia1MAInSv5o8CPp62CV803022gJBgLPdew5Xqsa6FzZHxF5fT9I&usqp=CAU',
//         userName: 'Ivan Klimchuk',
//         location: {state: 'Ukraine', city: 'Kiev'},
//         status: 'I am the boss',
//         friend: false,
//     },
//     {
//         id: 3,
//         avaUrl: 'https://fazarosta.com/wp-content/uploads/2018/09/jeto-vam-ne-babochki-v-zhivote-chto-chuvstvuet-muzhchina-kogda-hochet-zhenshhinu-1-945x630.jpg',
//         userName: 'Ivan Klimchuk',
//         location: {state: 'Ukraine', city: 'Kiev'},
//         status: 'I am the boss',
//         friend: false,
//     },
//     {
//         id: 4,
//         avaUrl: 'https://lh3.googleusercontent.com/proxy/y2oxCIHa_UuhvstO7XvcfC4jCxOc7IX4i-g0pEoO4veLBcnU_Pvwp5hty9zFpWn704ijnTHGMTyJhtcArLviYTPI03X8mlA9BRp9MRx0yAV2sYaiho50z_Ocf5pJg11xa2YjElpn6c5Hbv11-eSePT-1PnlXKRgmx8t-PstvT3DTSjGgwPEU0gp16DtslfffCSg0c-AikncRWVy61aRHHA835ngTybZolHEs2sTj',
//         userName: 'Ivan Klimchuk',
//         location: {state: 'Ukraine', city: 'Kiev'},
//         status: 'I am the boss',
//         friend: false,
//     }
// ],)
const FindFriendsOld = (props: any) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            props.setUsers(response.data.items);
        })
    }


    return <div className={styles.wrapper}>
        <div className={styles.searchBar}>Search Alex's friends</div>
        {
            props.users.map((u: any) => {
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
                              <button onClick={() => props.toggleFriend(u.id)}>
                                  {(!u.friend) ? 'Add friend' : 'Unfriend'}
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
}


export default FindFriendsOld;