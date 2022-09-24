var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);
itemList.addEventListener('click',editItem);

filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefault();
  
    //Get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    
    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
      
    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);

    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    
    li.appendChild(document.createTextNode(newItem));
    var EditBtn = document.createElement('button');
    EditBtn.className = 'btn btn-danger btn-sm float-right delete';
    EditBtn.appendChild(document.createTextNode('y'));
    li.appendChild(EditBtn);
    itemList.appendChild(li);
}

    //Remove item
    function removeItem(e)
    {
        if(e.target.classList.contains('delete')){
            if(confirm('Are you sure?')){
                var li=e.target.parentElement;
                itemList.removeChild(li);
            }
        }
    }

    //edit item
function editItem(e)
{
    console.log(1);
}
   

    //filter Items
    function filterItems(e)
    {
        //convert text to lowercase
        var text =e.target.value.toLowerCase();
        
        var items = itemList.getElementsByTagName('li');
        Array.from(items).forEach(function(item){
            var itemName = item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(text) !=-1){
               item.style.display='block';
              }
               else {
            item.style.display ='none';
              }
        });
    }
