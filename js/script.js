let form = document.querySelector(".addForm");
let itemList = document.querySelector(".list-group-items");
let delBtns = document.querySelectorAll(".delete");
let filter  = document.querySelector(".search")
//form submit event & add item
form.addEventListener("submit", (e)=>{
    e.preventDefault();
   
    // Get input value
    let  newItem = document.querySelector(".item").value;

    //create new li element
    let li = document.createElement("li");
    //add class
    li.className = "list-group-item";

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    // Create del button 
    let deleteBtn = document.createElement("button");
    //add class to del button
    deleteBtn.className = "delete";
    
    // append textNode
    deleteBtn.appendChild(document.createTextNode('X'));
    // console.log(deleteBtn)

    // append button to li 
    li.appendChild(deleteBtn)

    // append li to the list 
    itemList.appendChild(li);
});
//add event listener to the  list item and function for removing the item
// itemList.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("delete")){
//         if(confirm("Are you sure?")){
//             let li = e.target.parentElement
//             itemList.removeChild(li)
//         }
//     }
// });

for(let i = 0;i < delBtns.length;i++){
    delBtns[i].addEventListener("click",(e)=>{
        if(confirm("Are you sure?")){
            let li = e.target.parentElement;
            // console.log(li)
            itemList.removeChild(li);
        };
    });
};


//filter items
filter.addEventListener("keyup",(e)=>{
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    // console.log(text);

    //get lis
    let items = itemList.getElementsByTagName("li");
    // console.log(items)
    // convert to array 
    Array.from(items).forEach(item =>{
        let itemName = item.firstChild.textContent;
        // console.log(itemName)
        if(itemName.toLowerCase().indexOf(text) != -1 ){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
});
