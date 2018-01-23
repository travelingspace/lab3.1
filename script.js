//function called from btn click event to add list item
function addToList() {
    var text = document.getElementById("input-text").value;
    var length = text.length;

    if (text = "") {
        return;
    }
    else if (length > 50) {
        alert("Text must be between 1 and 50 characters. Please try again.");
    } else
        alert("Thank you for your submission");
        var node = document.createElement("li");                 // Create a <li> node
        var textnode = document.createTextNode(document.getElementById("input-text").value);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("list").appendChild(node);     // Append <li> to <ul> with id="myList"
        document.getElementById("input-text").value = "";
}

document.getElementById("btn-add").addEventListener("click", addToList)

