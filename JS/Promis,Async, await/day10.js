console.log("Start")

async function orderStatus() {
    console.log("Welcome To App.....!");

    await delay(1000);
    console.log("Order Received....!");

    await delay(1000);
    console.log("Order is being prepared....!");

    await delay(1000);
    console.log("Order is out for delivery....!");

    await delay(1000);
    console.log("Order Completed....!");

    await delay(1000);
    console.log("Order Delivered....!");

    await delay(1000);
    console.log("Rationg : 1 , 2 , 3 , 4 , 5");
}
orderStatus();


        function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
