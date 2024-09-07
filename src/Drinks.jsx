function Drinks({drin,handleButton}){

    return <><li className="list-group-item um-item" onClick={handleButton}>{drin}</li>
    <button className="btn btn-primary" onClick={handleButton}>BUY</button>
    
    </>
}
export default Drinks;