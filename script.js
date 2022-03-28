const add = document.getElementById("addNote");
const deleteNotes = document.getElementById("deleteNotes");
const save = document.getElementById("save");
const cancel = document.getElementById("cancel");
const modal = document.querySelector(".modal");
const categories = document.getElementById("categories");
const alertMsg = document.querySelector(".alert");
const textarea = document.getElementById("txtAreaCtx");
const noteCtg = document.querySelector(".noteCategory");
const noteCtx = document.querySelector(".noteContext");
const notes = document.querySelector(".notes");
const myNote = document.querySelector(".myNote");
const deleteSingleNote = document.querySelector(".removeNote");

const colors = {
    blueTop: "rgb(101, 201, 243)",
    blueBottom: "rgb(141, 215, 246)",
    greenTop: "rgb(81, 204, 74)",
    greenBottom: "rgb(117, 215, 112)",
    yellowTop: "rgb(237, 244, 42)",
    yellowBottom: "rgb(242, 247, 100)"
}

function createNote(){
    let clonedNode = myNote.cloneNode(true);
    let selectedCategory = categories.options[categories.selectedIndex].value;

    if(selectedCategory == 'Praca'){
        clonedNode.childNodes[1].style.setProperty('--gora', colors.yellowTop);
        clonedNode.childNodes[3].style.setProperty('--dol', colors.yellowBottom);
    } else if (selectedCategory == 'Zakupy'){
        clonedNode.childNodes[1].style.setProperty('--gora', colors.greenTop);
        clonedNode.childNodes[3].style.setProperty('--dol', colors.greenBottom);
    } else {
        clonedNode.childNodes[1].style.setProperty('--gora', colors.blueTop);
        clonedNode.childNodes[3].style.setProperty('--dol', colors.blueBottom);
    }

    clonedNode.childNodes[1].childNodes[0].textContent = selectedCategory;
    clonedNode.childNodes[3].childNodes[0].textContent = textarea.value;

    notes.appendChild(clonedNode);

    for(let i=1; i<notes.children.length; i++){
        notes.children[i].classList.remove("hiddenNote");
    }

    clonedNode.childNodes[1].childNodes[1].childNodes[0].addEventListener("click", deleteNote);
}

function deleteNote(e){
    let specifiedNote = e.target.parentNode.parentNode.parentNode.parentNode;
    for(let i=0; i<1; i++)
    notes.removeChild(specifiedNote);
}

function deleteAllNotes(){
    for(let i=0; i<notes.children.length; i=0){
        notes.removeChild(notes.children[i]);
    }
}

function checkFields(){
    var value = categories.selectedOptions[0].innerText;

    if(value == "-wybierz kategorię-" || textarea.value == "")
        alertMsg.innerHTML = "Uzupełnij wszystkie pola!";
    else{
        alertMsg.innerHTML = "";
        createNote();
    }
}

add.addEventListener("click", function(){
    modal.style.visibility = 'visible';
});

cancel.addEventListener("click", function(){
    modal.style.visibility = 'hidden';
});

save.addEventListener("click", checkFields);

deleteNotes.addEventListener("click", deleteAllNotes);