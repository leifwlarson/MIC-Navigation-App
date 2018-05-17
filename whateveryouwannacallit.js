function myCanvas() 
{
    var c = document.createElement("canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("main_map");
    ctx.drawImage(img,0,0);
}