


 function Additem() {
     const itemsDataArr = itemsData.data.items
     
     const [itemVal, setItemVal] = React.useState("") //Input text filed state
     const [allItems, setAllItems] = React.useState(itemsDataArr) //All items added data
     
     const allItemsList = allItems.map((item) => {         
         return <div className="item--list" key={allItems.indexOf(item)}> 
                    <p className="list--item"> {allItems.indexOf(item) + 1}. {item.item} </p> 
                   <span className="cross" onClick={()=>deleteItem(allItems.indexOf(item))}>&nbsp;&nbsp;&nbsp; Remove</span>
                 
                </div>
     })
     
     function deleteItem(id) {
         setAllItems(preVal => (preVal.filter((val, i) => i !== id)))
     }
     
     function addItem() {
         if(!itemVal || itemVal == " ") {
             alert("Item cannot be empty")
         } 
         else {
            const isFound = allItems.some(item => {
                if( item.item.toLowerCase() === itemVal.toLowerCase()) {
                    return true 
                } else {
                    return false
                }
            })
             
            if(!isFound) {
                const newItem = {
                    "item" : itemVal,
                    "id" : (allItems.length) +1
                }
                setAllItems(preVal => ([...preVal, newItem]))
            } else {
                alert("Item already exists in your Shopping list!")
            }
             
         }
     }
     
     function getItem() {
         setItemVal(preVal => event.target.value)
     }
     
    return (
        <div className="container">
            <label htmlFor="item" className="item--labl">Create Your Shopping List</label>
            <input id="item" 
                defaultValue={itemVal}
                className="input--text" 
                type="text" 
                name="inputItem" 
                onChange={getItem}
                placeholder="Eg: Milk, Eggs, Beverages" 
            />
            <input className="input--btn" type="button" name="inputBtn" value="ADD ITEM" onClick={addItem} />
            <div className="list--container">
            {allItemsList}
            </div>
        </div>
        
    ) 
}