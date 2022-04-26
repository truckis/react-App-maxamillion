import './Card.css'
// Need the whitespace after 'card ' in classes const

function Card(props){
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
};

export default Card;