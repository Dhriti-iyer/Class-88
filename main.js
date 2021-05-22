var canvas= new fabric.Canvas("myCanvas");

var player_x=10;
var player_y=10;
var block_img_height=30;
var block_img_width=30;
var player_object="";
var block_img_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}
function new_img(get_img)
{
    fabric.Image.fromURL(get_img,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height );
        block_img_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_img_object);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey== true && keypressed=='80')
    {
        console.log("shift and p pressed together");
        block_img_width= block_img_width + 10;
        block_img_height= block_img_height + 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(e.shiftKey== true && keypressed=='77')
    {
        console.log("shift and m pressed together");
        block_img_width= block_img_width - 10;
        block_img_height= block_img_height - 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(keypressed=='37')
    {
        console.log("left key is pressed");
        left();
    }
    if(keypressed=='38')
    {
        console.log("up key is pressed");
        up();
    }
    if(keypressed=='39')
    {
        console.log("right key is pressed");
        right();
    }
    if(keypressed=='40')
    {
        console.log("down key is pressed");
        down();
    }
    if(keypressed=='87')
    {
        console.log("w key is pressed");
        new_img('wall.jpg');
    }
    if(keypressed=='71')
    {
        console.log("g key is pressed");
        new_img('ground.png');
    }
    if(keypressed=='76')
    {
        console.log("l key is pressed");
        new_img('light_green.png');
    }
    if(keypressed=='84')
    {
        console.log("t key is pressed");
        new_img('trunk.jpg');
    }
    if(keypressed=='82')
    {
        console.log("r key is pressed");
        new_img('roof.jpg');
    }
    if(keypressed=='89')
    {
        console.log("y key is pressed");
        new_img('yellow_wall.png');
    }
    if(keypressed=='68')
    {
        console.log("d key is pressed");
        new_img('dark_green.png');
    }
    if(keypressed=='85')
    {
        console.log("u key is pressed");
        new_img('unique.png');
    }
    if(keypressed=='67')
    {
        console.log("c key is pressed");
        new_img('cloud.jpg');
    }
}
function up()
{
    if (player_y>=0)
    {
        player_y=player_y -block_img_height;
        console.log("when up arrow key is pressed x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if (player_y<=550)
    {
        player_y=player_y + block_img_height;
        console.log("when down arrow key is pressed x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if (player_x<=900)
    {
        player_x=player_x + block_img_width;
        console.log("when right arrow key is pressed x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if (player_x>=0)
    {
        player_x=player_x - block_img_width;
        console.log("when left arrow key is pressed x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}