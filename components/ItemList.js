import { CDN_URL } from "/utils/constants";

const ItemList = ({items}) => {
    console.log(items);
    return(
        <div>
            <ul>
                {
                    items.map(
                        (item =>(
                            <li className="categoryItem" key={item.card.info.id}>
                            <div className= "cateItemDetail">
                            <span className="itemName">{item.card.info.name}</span>
                            <span className="itemPrice">₹ {item.card.info.price ?item.card.info.price/100 : 
                                    item.card.info.defaultPrice/100} </span>
                            <span className="itemRating">{item.card.info.rating}</span>
                             <p className="itemDesc">{item.card.info.description}</p>
                            </div>
                            <div className="image-parent">
                             <img src={CDN_URL + item.card.info.imageId} className="catImgItem"/>
                             <button className="itemAddBtn">Add</button>
                             </div>
                          </li>
                        )
                        )
                    )
                }
            </ul>
        </div>
    );
}

export default ItemList;