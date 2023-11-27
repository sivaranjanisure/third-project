import Content from "./Content";
import Footer from "./Footer";
import Footer1 from "./Footer1";
import Header from "./Header";
import List from "./List";
import Sum from "./Sum";
import { useState } from "react"

function App() {

  const [items,setItems]=useState([
    {  id:1,
      checked:true,
      item:"whishlist"},
      {  id:2,
        checked:true,
        item:"order"},
        {  id:3,
            checked:true,
            item:"coupen"},
            {  id:4,
                checked:true,
                item:"offers"},])
const handleCheck=(id)=>{
const listItems=items.map((item)=>
item.id===id ? {...item,checked:!item.checked}:item)
setItems(listItems)
// localStorage.setitem["ranjani",JSON.stringify(listItems)]

}


const handleDelete=(id)=>{
  const listItems=items.filter((item)=>
  item.id!==id)
  setItems(listItems)
  // localStorage.setitem["ranjani",JSON.stringify(listItems)]

}


  return (
    <div>
      <Header />
      <Content />
     <List items={items}
     handleCheck={handleCheck}
    handleDelete={handleDelete}
 />
       <Sum />
       <Footer1 
       length={items.length}/>
      <Footer />

    </div>
  );
}

export default App;
