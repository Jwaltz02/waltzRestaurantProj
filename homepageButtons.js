dessert_menu.style.display = 'none';
alcohol_menu.style.display = 'none';
non_alcoholic_menu.style.display = 'none';
beverage_menu.style.display = 'none';
reservation_form.style.display = 'none';
dropdown_content.style.display = 'none';

var btn_food = document.getElementById("btn_food");
var btn_dessert = document.getElementById("btn_dessert");
var btn_beverage = document.getElementById('btn_beverage');

btn_food.addEventListener('click', btn_food_click);
function btn_food_click(){
    starters_menu.style.display = 'flex';
    mains_menu.style.display = 'flex';
    dessert_menu.style.display = 'none';
    alcohol_menu.style.display = 'none';
    non_alcoholic_menu.style.display = 'none';
    beverage_menu.style.display = 'none';
}

btn_dessert.addEventListener('click', btn_dessert_click);
function btn_dessert_click(){
    dessert_menu.style.display = 'flex';
    starters_menu.style.display = 'none';
    mains_menu.style.display = 'none';
    alcohol_menu.style.display = 'none';
    non_alcoholic_menu.style.display = 'none';
    beverage_menu.style.display = 'none';
}

btn_beverage.addEventListener('click', btn_bev_click);
function btn_bev_click(){
    alcohol_menu.style.display = 'flex';
    beverage_menu.style.display = 'flex';
    non_alcoholic_menu.style.display = 'flex';
    starters_menu.style.display = 'none';
    mains_menu.style.display = 'none';
    dessert_menu.style.display = 'none';
}

reservation_btn.addEventListener('click', reserve_btn_click);
function reserve_btn_click(){
    reserve_btn_container.style.display = 'none';
    reservation_form.style.display = 'block';
}

reservation_close.addEventListener('click', reserve_close);
function reserve_close(){
    reservation_form.style.display = 'none';
    reserve_btn_container.style.display = 'block';
    reservation_close.event.preventDefault();
}

dropdownMenuButton.addEventListener('click', dropdownButtonClick)
function dropdownButtonClick(){
    dropdown_content.style.display = 'block';
}
