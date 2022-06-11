import './UserList.css'
import UserItem from '../UserItem/UserItem';

const UserList = (props) => {
    return (
        
            <ul className="user-list">
                {props.users.map((user) => {
                    return (
                    <UserItem key={user.blockId} username={user.username} age={user.age} message={user.message} />
                    )
                })}
            </ul>
        
    )
}

export default UserList;