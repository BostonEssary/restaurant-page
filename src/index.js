export function getContentDiv(){
    return document.getElementById("content")
}

export function createHeader(title){
    let header = document.createElement("h1")
    header.textContent = title
    return header

}

export function createButton(label, id) {
    const button = document.createElement("button")
    button.id = id
    button.textContent = label

    return button
}

export function navBar(){
    const navContainer = document.createElement("nav")

    const homeButton = createButton("Home", "home-btn")
    const menuButton = createButton("Menu", "menu-btn")
    const aboutButton = createButton("About", "about-btn")

    navContainer.append(homeButton, menuButton, aboutButton)

    document.body.prepend(navContainer)
}

export function mainPage(){
    const content = getContentDiv();

    content.append(createHeader("Restaurant Name"))
}

export function menuPage(){
    const content = getContentDiv();
    
    content.append(createHeader("Menu Page"))
}

export function aboutPage(){
    const content = getContentDiv()

    content.append(createHeader("About Us"))
}

export function clickEvent(item, pageFunction) {
    item.addEventListener("click", function (e) {
        content.innerHTML = ""
        pageFunction()
      });
}

export function addClickEvents() {
    const content = document.getElementById("content");
    const menu = document.getElementById("menu-btn")
    const home = document.getElementById("home-btn")
    const about = document.getElementById("about-btn")

   clickEvent(menu, menuPage)
   clickEvent(home, mainPage)
   clickEvent(about, aboutPage)
}

navBar()
mainPage()
addClickEvents()