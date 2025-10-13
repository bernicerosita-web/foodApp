try {
let name = prompt("Enter name:");
if (!name){
    alert("Name not entered.Exiting...");
}
else if (Number(name)){
    alert("Please enter valid username.");
}
else {
    const order = confirm(`Hello ${name}! Do you want to order food?`);

    if (!confirm){
        alert("Goodbye! See you next time!");
    } else{
        const menu ={
            1: {name: "Pizza", price:150},
            2: {name: "Burger", price:100},
            3: {name: "Sandwich",price:80}
        };
        var choice = prompt("Menu:\n1 = Pizza (₹150)\n2 = Burger (₹100)\n3 = Sandwich (₹80)\n\nEnter your choice (1-3):");

        choice = Number(choice);


        if (!menu[choice]){
            alert("Invalid choice!")
        }   

        var quantity = Number(prompt("Enter quantity:"));

        if (isNaN(quantity) || quantity < 1) {
            alert ("Invallid quantity!");
        }



        const billPromise = new Promise ((resolve,reject) =>{
            setTimeout (() =>{
                var total = menu[choice].price*quantity;
                        
                if (total > 0){
                    resolve (
                        `You ordered ${quantity} ${menu[choice].name} .Total = Rs. ${total}`
                    );
                } else {
                    reject (
                        "Error calculating bill!"
                    );
                }
            },1000);
        });
        
        billPromise
            .then((message) => alert(message))
            .catch((error) => alert(error));
    
    }

}


} catch (error1) {
    alert(`try again ${error1}`)

}
