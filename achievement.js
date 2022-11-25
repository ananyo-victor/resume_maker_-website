
function function_Name(){
    return "id of any div or input or label" + t;
    // t is the number of the div
}

const anyIDObject = document.createElement('div / input / anything to be created');
anyIDObject.setAttribute('id', name of the id or id function .... ie function_Name() );
anyIDObject.classList.add('class1');
anyIDObject.classList.add('class2');
anyIDObject.classList.add('class3');


const create_The_Object_Of_The_Div_Before_Which_New_HTML_Are_To_Be_Placed = document.getElementById('id of the div');

const object_of_the_div_in_which_new_HTML_are_to_placed = getElementById('id of the div');
object_of_the_div_in_which_new_HTML_are_to_placed.insertBefore(create_The_Object_Of_The_Div_Before_Which_New_HTML_Are_To_Be_Placed, againAnyIDObject);


const againAnyIDObject = document.getElementById('name of the id' or the function );
againAnyIDObject.appendChild(anyIDObject);

// againAnyIDObject is the name of the div in which other divs are placed and anyIDObject is the object that is to be placed