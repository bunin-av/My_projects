import React from "react";

type UserStatusPropsType = {
    status: string
}

function UserStatus(props: UserStatusPropsType) {
    const statusStyle = {color: (!props.status) ? 'gray' : 'white'}

    return (
      <div style={statusStyle} >
          {props.status || "has no status yet..."}
      </div>
    )
}

export default UserStatus