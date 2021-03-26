import React from "react";
import styles from "./Profile.module.css"

const Profile = ()=>{
  return <div className={styles.content}>
    <div className={styles.mainImg}>
      {/*<img src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg" alt=""/>*/}
    </div>
    <div className={styles.ava}>
      <img
          src="http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1"
          alt=""/>
    </div>
    <div className={styles.ava_description}>
      <h3>Alex B.</h3>
      <ul>
        <li>Date of Birth: 05.05.1990</li>
        <li>City: Moscow</li>
        <li>Web-site: none</li>
      </ul>
    </div>
    <div className={styles.posts}>
      <h3>My posts</h3>
      <input type="text" placeholder="Your news..." className={styles.news}/>
      <div id="send">
        <input type="submit" value="Send" className={styles.sendButton}/>
      </div>
      <div className={styles.newPosts}>
        New
      </div>
      <div className={styles.oldPosts}>
        Old
      </div>
    </div>
  </div>
}

export default Profile;