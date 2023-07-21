function Posting (prop){
    return(
        <div style={{borderRadius:'5px', boxShadow:'grey 0px 0px 5px',padding:'10px', maxWidth:'400px',margin:'10px'}}>
            <h2>{prop.data.price}</h2>
            <img src={prop.data.imageURL} alt={prop.data.imageURL} style={{width:'200px'}}/>
            <h1>{prop.data.title}</h1>
            <p>{prop.data.description}</p>
        </div>
    )
}
export default Posting