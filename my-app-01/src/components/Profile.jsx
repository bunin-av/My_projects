import React from "react";

const Profile = ()=>{
  return <div className="content">
    <div id="mainImg">
      {/*<img src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg" alt=""/>*/}
    </div>
    <div id="ava">
      <img
          src="http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1"
          alt=""/>
    </div>
    <div id="ava_description">
      <h3>Alex B.</h3>
      <ul>
        <li>Date of Birth: 05.05.1990</li>
        <li>City: Moscow</li>
        <li>Web-site: none</li>
      </ul>
    </div>
    <div id="posts">
      <h3>My posts</h3>
      <input type="text" placeholder="Your news..." id="news"/>
      <div id="send">
        <input type="submit" value="Send" id="sendButton"/>
      </div>
      <div id="newPosts">
        New
      </div>
      <div id="oldPosts">
        Old
      </div>
    </div>
  </div>
}

export default Profile;