import React, {useState} from "react";
import styles from "./Bio.module.scss"
import MyStatus from "./MyStatus/MyStatus";
import UserStatus from "./UserStatus/UserStatus";
import EditProfileForm, {UserInfoDataType} from "./EditProfileForm/EditProfileForm";


const Bio = (props: any) => {
    const [editMode, setEditMode] = useState(false)

    const loadPhoto = ((e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.files && e.target.files.length &&
        props.loadPhoto(e.target.files[0])
    })

    const loadInfo = (info: UserInfoDataType,
                      callback: (err: { [key: string]: string }) => void) => {
        props.updateMyProfileInfo(info, callback, () => setEditMode(false))
    }

    return (
        <div className={styles.Bio}>
            <h3>{props.fullName}</h3>
            {!props.isUser
                ? <MyStatus
                    updateMyStatus={props.updateMyStatus}
                    status={props.userStatus}/>
                : <UserStatus status={props.userStatus}/>
            }
            {!props.isUser && <input type={'file'} onChange={loadPhoto}/>}
            {!props.isUser && <button onClick={() => setEditMode(!editMode)}>Edit</button>}
            <hr/>
            {editMode
                ? <EditProfileForm
                    {...props}
                    saveInfo={loadInfo}/>
                : <UserInfo {...props}/>}
        </div>
    )
}

type UserInfoType = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: any
    //     {
    //     github: string
    //     vk: string
    //     facebook: string
    //     instagram: string
    //     twitter: string
    //     website: string
    //     youtube: string
    //     mainLink: string
    // }
}

function UserInfo(props: UserInfoType) {
    return <>
        <div><b>About me</b>: {props.aboutMe}</div>
        <div><b>Looking for a job</b>: {props.lookingForAJob ? 'Yes' : 'No'}</div>
        {props.lookingForAJob &&
        <div><b>My professional skills</b>: {props?.lookingForAJobDescription}</div>}
        <b>Contacts</b>:
        {props.contacts && Object.keys(props.contacts).map((el: string) => {
            return <Contacts key={el} contactTitle={el} contactValue={props.contacts[el]}/>
        })}
    </>
}


function Contacts(props: { contactTitle: string, contactValue: string }) {
    return <div style={{paddingLeft: '20px'}}>{props.contactTitle}: {props.contactValue}</div>
}

export default Bio;