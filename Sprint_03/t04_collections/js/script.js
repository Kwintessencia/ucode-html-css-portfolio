// menu Map
// coinCollection Set
// bankVault WeakMap
// guestList WeakSet

class GuestList{
    guestList = new WeakSet();

    add(guest){
        this.guestList.add(guest);
    }
    isInvited(guest){
        return this.guestList.has(guest);
    }
    removeGuest(guest){
        this.guestList.delete(guest);
    }
}

// tests-----------------------
const list = new GuestList();
let tony = {guest: 'Tony'},
    alex = {guest: 'Alex'},
    vasya = {guest: 'Vasya'},
    jose = {guest: 'Jose'},
    alya = {guest: 'Alevtina'};
list.add(tony);
list.add(alex);
list.add(vasya);
list.add(jose);
list.add(alya);
console.log(list.isInvited(tony));
list.removeGuest(tony);
// ------------------------------tests

class Menu{
    menu = new Map();

    add(dish, price) {
        if (!this.menu.has(dish)){
            this.menu.set(dish, price);
        }
    }
    showAll(){
        this.menu.forEach((value, key) => console.log(`${key}, \$${value}`));
        }
    removeDish(dish){
        this.menu.delete(dish);
    }
    clearMenu(){
        this.menu.clear();
    }
}

// tests------------------------------------------
const menu = new Menu();
menu.add('Soup', 5);
menu.add('Salad', 5.5);
menu.add('Juice', 4);
menu.add('Cola', 13);
menu.add('Steak', 12.5);
menu.add('Dessert', 6.99);
menu.showAll();
menu.removeDish('Soup', 5);
menu.clearMenu();
//--------------------------------------------tests

class BankVault{
    bankVault = new WeakMap();

    add(key, box){
        this.bankVault.set(key, box);
    }
    boxContents(key){
       return this.bankVault.get(key);
    }
    removeBox(key){
        this.bankVault.delete(key);
    }
    boxIsPresent(key){
        return this.bankVault.has(key);
    }
}

// tests-----------------------------------------
const bank = new BankVault();
let key1 = {credentials: '1234'},
    key2 = {credentials: '345'},
    key3 = {credentials: 'Ma675985798rk'},
    key4 = {credentials: 'Ant6794679756ony'},
    key5 = {credentials: '9999999'}
bank.add(key1, 'Money');
bank.add(key2, 'Gold');
bank.add(key3, 'Diamonds');
bank.add(key1, 'Documents');
bank.add(key4, 'Silver');
bank.add(key5, 'Papers');
console.log(bank.boxContents(key3));
console.log(bank.boxIsPresent(key1));
//----------------------------------------tests


class CoinCollection{
    coinCollection = new Set();
    add(coin){
        this.coinCollection.add(coin);
    }
    removeAll(){
        this.coinCollection.clear();
    }
    printAll(){
        for (let value of this.coinCollection) console.log((value));
    }
}

// tests----------------------------------
const coins = new CoinCollection();
coins.add('coin1');
coins.add('coin1');
coins.add('coin2');
coins.add('coin3');
coins.add('coin1');
coins.printAll();
coins.removeAll();
//--------------------------------------tests