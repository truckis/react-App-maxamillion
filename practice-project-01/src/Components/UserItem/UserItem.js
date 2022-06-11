import './UserItem.css'

const UserItem = (props) => {
    return (
        <div>
            <div className="user-item">
                <h2>{props.username}</h2>
                <h4>{props.age} years old</h4>
                <label>Message</label>
                <p>{props.message}</p>
            </div>
            
        </div>
    )
}

export default UserItem;