
function getBtn(btn_class, scope_class) {
    const btn_food = document.querySelector(`${scope_class} ${btn_class}`);
    const btn_selected = document.querySelector(`${scope_class} .btn-select`);
    btn_food.classList.toggle('btn-select');
    if (btn_selected !== null) {
        btn_selected.classList.toggle('btn-select');
    }
    first_choice = document.querySelector('.first .btn-select');
    second_choice = document.querySelector('.second .btn-select');
    third_choice = document.querySelector('.third .btn-select');

    n_select = document.querySelectorAll('.btn-select').length;
    btn_finish.innerHTML = `Selecione os ${3 - n_select} itens <br> para fechar o pedido`;

    console.log([first_choice, second_choice, third_choice])
    if (first_choice !== null && second_choice !== null && third_choice !== null) {
        btn_finish.classList.add('btn-active')
        btn_finish.textContent = "Fechar pedido";
        btn_finish.removeAttribute('disabled');
    }
}

function finishOrder(btn) {
    if (btn.classList.contains('btn-active')) {
        confirm_order.classList.toggle('finish');
        const first_selected = document.querySelector('.food-choices .first .btn-select');
        const second_selected = document.querySelector('.food-choices .second .btn-select');
        const third_selected = document.querySelector('.food-choices .third .btn-select');

        confirm_order.querySelector('.first .name').textContent = first_selected.querySelector('.name').textContent;
        confirm_order.querySelector('.second .name').textContent = second_selected.querySelector('.name').textContent;
        confirm_order.querySelector('.third .name').textContent = third_selected.querySelector('.name').textContent;
        confirm_order.querySelector('.first .price').textContent = first_selected.querySelector('.price').textContent;
        confirm_order.querySelector('.second .price').textContent = second_selected.querySelector('.price').textContent;
        confirm_order.querySelector('.third .price').textContent = third_selected.querySelector('.price').textContent;

        dish_price = Number(first_selected.querySelector('.price').textContent.replace(',', '.'));
        drink_price = Number(second_selected.querySelector('.price').textContent.replace(',', '.'));
        dessert_price = Number(third_selected.querySelector('.price').textContent.replace(',', '.'));

        console.log(dish_price)
        console.log(drink_price)
        console.log(dessert_price)

        let sum_prices = dish_price + drink_price + dessert_price
        
        confirm_order.querySelector('.order-total .price').textContent = sum_prices.toFixed(2).replace('.', ',');
    } 
}

function cancelOrder() {
    confirm_order.classList.toggle('finish');

    first_choice = document.querySelector('.first .btn-select');
    second_choice = document.querySelector('.second .btn-select');
    third_choice = document.querySelector('.third .btn-select');

    first_choice.classList.remove('btn-select');
    second_choice.classList.remove('btn-select');
    third_choice.classList.remove('btn-select');

    btn_finish.classList.remove('btn-active');

}

function confirmOrder() {
    order_message = `Olá, gostaria de fazer o pedido:
    - Prato: ${confirm_order.querySelector('.first .name').textContent}
    - Bebida: ${confirm_order.querySelector('.second .name').textContent}
    - Sobremesa: ${confirm_order.querySelector('.third .name').textContent}
    
    Nome: ${prompt('nome')}
    Endereço: ${prompt('endereço')}
    Total: R$ ${confirm_order.querySelector('.order-total .price').textContent}`;
    
    // A test without the tag a
    window.open(`https://wa.me/?text=${encodeURIComponent(order_message)}`);
}

const btn_finish = document.querySelector('.btn-finish');
const confirm_order = document.querySelector('.confirm-order');
