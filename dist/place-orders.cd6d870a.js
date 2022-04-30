let navItemList = document.querySelectorAll(".sidebar .nav-item");
switch(window.location.pathname){
    case "/":
    case "/index.html":
        navItemList.item(0).querySelector(".nav-link").classList.add('active');
        break;
    case "/manage-customers.html":
        navItemList.item(1).querySelector(".nav-link").classList.add('active');
        break;
    case "/manage-items.html":
        navItemList.item(2).querySelector(".nav-link").classList.add('active');
        break;
    case "/place-orders.html":
        navItemList.item(3).querySelector(".nav-link").classList.add('active');
        break;
    case "/search-items.html":
        navItemList.item(4).querySelector(".nav-link").classList.add('active');
        break;
    case "/settings.html":
        navItemList.item(4).querySelector(".nav-link").classList.add('active');
        break;
    default:
        navItemList.item(5).querySelector(".nav-link").classList.add('active');
        break;
}
for (const navItem of navItemList)navItem.addEventListener('click', navItemListener);
function navItemListener() {
    switch(this.querySelector(".nav-link p").innerText){
        case "Manage Customers":
            window.location.replace('index.html');
            break;
        case "Manage Items":
            window.location.replace('manage-items.html');
            break;
        case "Manage Items":
            window.location.replace('manage-items.html');
            break;
        case "Place Orders":
            window.location.replace('place-orders.html');
            break;
        case "Search Items":
            window.location.replace('search-items.html');
            break;
        default:
            window.location.replace('settings.html');
    }
}

//# sourceMappingURL=place-orders.cd6d870a.js.map
