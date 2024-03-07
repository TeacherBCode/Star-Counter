let count = 0;

$("#inc").on("click",function(){
    count++;
    $("#num").text(count);
});

$("#save").on("click",function(){
    let tempText = count +" - ";
    $("#entry").append(tempText); 
    count = 0;
    $("#num").text(count);
});