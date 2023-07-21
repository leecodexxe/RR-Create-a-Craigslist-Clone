import Posting from "./Posting"
function Gallary() {
    const craigPost = require('./postings.js')

    let postList = craigPost.postings.map((data,i)=>{
        return <Posting data={data} key={i} />
    })
    return(
        <div>
        <h1>Gallary</h1>
        <div style={{display:'flex'}}>
        {postList}
        </div>
        </div>
    )
}
export default Gallary