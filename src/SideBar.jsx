import Help from "./Help"

function SideBar() {
    return (
        <div style={{width:'25vw'}}>
            <h1>furniture</h1>
            <div>
                <button>All</button>
                <button>Owner</button>
                <button>Dealer</button>
            </div>
            <div>
                <div>
                    <input type="checkbox" name="titles" id="" />
                    <span>Seach</span>
                </div>
                <div>
                    <input type="checkbox" name="titles" id="" />
                    <span>image</span>
                </div>
                <div>
                    <input type="checkbox" name="titles" id="" />
                    <span>Posted today</span>
                </div>
                <div>
                    <input type="checkbox" name="titles" id="" />
                    <span>Bundle Diplicates</span>
                </div>
            </div>
            <Help />
        </div>
    )
}
export default SideBar