
var song="";


function preload()
{
song=loadSound("music.mp3");

}

function setup()
{
canvas = createCanvas(750, 550);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function draw()
{
    image(video, 0, 0, 750, 550);
    
    
}

function play()
{
    song.play();
}