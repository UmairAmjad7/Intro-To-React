function Junk({jnk,handleButton}) {
    return <>
    <li class="list-group-item">{jnk}    
    </li>
    <button className="btn btn-warning" onClick={handleButton}>BUY</button>
    </>
}
export default Junk;