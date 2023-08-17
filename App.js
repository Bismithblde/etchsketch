let tr = document.getElementById("tr")
let rows = 1
let table = document.getElementById("tbody");
let mouseDown = false
for (let i = 0; i < 16; i++) {
    tr = document.createElement("tr")
    table.appendChild(tr)

    for (let j = 0; j < 16; j++) {
        let td = document.createElement("td")
        td.style.width="52px"
        td.style.height="52px"
        td.classList.add("drag")
        tr.appendChild(td)
        td.addEventListener("click", () => {
            div.style.backgroundColor="blue"
        })
        td.addEventListener("mousedown", () => {mouseDown = true

        console.log("mousedown")
        div.style.backgroundColor="blue"
        })
        td.addEventListener("mouseup", () => {mouseDown = false
        console.log("mouseup")

        })

        td.addEventListener("mouseenter", () => {if (mouseDown == true) {div.style.backgroundColor="blue"}
        console.log(mouseDown)

    })
        let div = document.createElement("div");
    
        div.style.width="52px"
        div.style.height="52px"
        div.classList.add("drag")
        div.setAttribute("draggable", "false")
        td.appendChild(div);


    }
}


