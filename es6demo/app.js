let x=10;
function demo(){
    let y=20;
    if(true){
        let z=30;
    }
//    console.log(z) // 30

}
demo()

let sum = (x,y) => {
    return x+y;
}
console.log(sum(1,2));

// /JSON
// const store={"name":"murthy","x":10,"k":{'a':5},'fn':function(){//code}} 
// // dictionery  (key:value) (string:object)

// const customer={'name':'murthy','sal':4000} //ORM
// //state 
// const store={} //singleton  / Redux store
// store.address="hyderabad";  


// example on scope with fat arrow
        window.age = 12; 
        function Person(){ 
        this.age = 34; 
        setTimeout(() => {
        console.log(this.age); //34
        }, 1000); 

        setTimeout(function(){
        console.log(this.age); //12
        }, 1000); 
        } 
        var p = new Person();