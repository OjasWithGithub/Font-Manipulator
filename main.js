
difference = 0

function setup(){

    video = createCapture(VIDEO)
    video.size(300,400)

    canvas = createCanvas(400,400)
    canvas.position(600,150)

    

    posenet = ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotPoses)
}

function draw(){
    background('#969A97')

    textSize(difference/5)
    
    fill('#FFE787');
    text('Ojas',50,400)

}

function modelloaded(){
   console.log("Posenet Initialized!")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)

        rightWristX = Math.floor(results[0].pose.rightWrist.x)
        leftWristX = Math.floor(results[0].pose.leftWrist.y)

        difference = (leftWristX - rightWristX)
    }
}