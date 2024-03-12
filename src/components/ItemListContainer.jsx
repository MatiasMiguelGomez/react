import "../App.css";

export const ItemListContainer = (props) => {
  console.log(props)
  
  return (<div className="itemListContainer">
      <p className="blanco">{props.greetings}</p>
    </div>)
    }
  

