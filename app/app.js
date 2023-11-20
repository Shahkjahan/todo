const container = document.querySelector(".container")
const todo = document.querySelector(".todo")
const add =document.querySelector(".add")
const save = document.querySelector(".save-btn")
const lists = document.querySelector(".lists")

save.addEventListener("click",() => {

    const list = document.createElement("li")
    list.style.maxWidth-"400px"
    list.style.display="flex"
    list.style.fontSize="30px"
    list.style.justifyContent="space-around"
    list.style.borderTop = "2px solid grey"
    list.style.padding="10px 0px"
    const checkbox = document.createElement("input")
    checkbox.type="checkbox"
    const text = document.createElement("p")
    text.textContent=add.value
    const del = document.createElement("button")
    del.textContent ="Remove"
    del.style.padding = "10px 15px"
    del.style.background="red"
    del.style.color="white"
    del.style.borderRadius="5px"
    
    checkbox.classList.add("checkbox")
    checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("true")
        if(checkbox.classList.contains("true")) {
            text.style.textDecoration = "line-through"
        } else{
            text.style.textDecoration = "none"
        }
    })

    

    del.addEventListener("click",() => {
        list.remove()
    })

    list.appendChild(checkbox)
    list.appendChild(text)
    list.appendChild(del)
    lists.appendChild(list)
    todo.appendChild(lists)
})