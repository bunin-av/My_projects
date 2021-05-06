import React, {useState} from "react";


function MyStatus(props: any) {
    const [editMode, setEditMode] = useState(false)
    const [statusText, setStatusText] = useState(props.status)

    const statusStyle = {
        color: (statusText === 'Set status') ? 'gray' : 'white'
    }

    return (
      <div>
          {(editMode)
            ? <div>
                <input type="text"
                       value={statusText}
                       autoFocus={true}
                       onChange={(e) => setStatusText(e.target.value)}
                       onBlur={() => setEditMode(false)}
                       onFocus={(e) => e.target.select()}
                />
            </div>
            : <div style={statusStyle} onClick={() => setEditMode(true)}>
                {statusText}
            </div>
          }
      </div>
    )
}

export default MyStatus;