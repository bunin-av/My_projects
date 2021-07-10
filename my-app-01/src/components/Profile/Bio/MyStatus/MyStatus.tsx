import React from "react";

type MyStatusPropsType = {
    updateMyStatus: (statusText: string) => void
    status: string
}
//functional component
// function MyStatus(props: MyStatusPropsType) {
//     const [editMode, setEditMode] = useState(false)
//     const [statusText, setStatusText] = useState(props.status || 'Change status')
//
//     useEffect(()=>{
//         setStatusText(props.status)
//     }, [props.status])
//
//     const statusStyle = {
//         color: (statusText === 'Change status') ? 'gray' : 'white'
//     }
//
//     return (
//       <div>
//           {(editMode)
//             ? <div>
//                 <input type="text"
//                        value={statusText}
//                        autoFocus={true}
//                        onChange={(e) => setStatusText(e.target.value)}
//                        onBlur={() => {
//                            setEditMode(false)
//                            props.updateMyStatus(statusText)
//                        }}
//                        onFocus={(e) => e.target.select()}
//                 />
//             </div>
//             : <div style={statusStyle} onClick={() => setEditMode(true)}>
//                 {statusText}
//             </div>
//           }
//       </div>
//     )
// }

type MyStatusStateType = {
    editMode: boolean
    status: string
}

//class component
class MyStatus extends React.Component<MyStatusPropsType, MyStatusStateType> {
    constructor(props: MyStatusPropsType) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status || 'Change status'
        }
    }

    setEditMode = (value: boolean) => {
        this.setState({
            editMode: value
        })
    }

    setStatus = (text: string) => {
        this.setState({
            status: text
        })
    }

    componentDidUpdate(prevProps: Readonly<MyStatusPropsType>, prevState: Readonly<MyStatusStateType>, snapshot?: any): void {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        const statusStyle = {
            color: (this.state.status === 'Change status') ? 'gray' : 'white'
        }
        return (
          <div>
              {(this.state.editMode)
                ? <div>
                    <input type="text"
                           value={this.state.status}
                           autoFocus={true}
                           onChange={(e) => this.setStatus(e.target.value)}
                           onBlur={() => {
                               this.setEditMode(false)
                               this.props.updateMyStatus(this.state.status)
                           }}
                           onFocus={(e) => e.target.select()}
                    />
                </div>
                : <div style={statusStyle} onClick={() => this.setEditMode(true)}>
                    {this.state.status}
                </div>
              }
          </div>
        );
    }
}


export default MyStatus;