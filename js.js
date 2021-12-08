function f(){
    const data = document.getElementById("source").value.split("\n");
    document.getElementById("test").innerHTML = data[Math.floor(Math.random()*data.length)];
}
