function outer(){
    let count=0;

    function inner(){
        count++
        console.log(count);
        
    }
    return inner
}
const a=outer()
a();
a();
a();
a();
a();
a();
