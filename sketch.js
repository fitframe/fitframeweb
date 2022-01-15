let poseNet;
let poses = [];

let video;
let canvas;
let ctx;

async function setup() {
    // Grab elements, create settings, etc.
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    video.srcObject = stream;
    video.play();
    // Create a new poseNet method with a single detection
    poseNet = await ml5.poseNet(video, modelReady);
    // This sets up an event that fills the global variable "poses"
    // with an array every time new poses are detected
    poseNet.on('pose', function(results) {
        poses = results;
    });

    requestAnimationFrame(draw);
}

setup();

function modelReady() {
    console.log('model loaded!')
}

//THIS IS THE MAIN FITFRAME CODE
//--------------------------------------------------------------------------------------//
//
function angle(a,b,c)                                                                   //
{                                                                                       //
    let theta = Math.tan((a.y-b.y)/(a.x-b.x)) - Math.tan((b.y-c.y)/(b.x-c.x))     //
    let final_out = theta.toFixed(3)*57.2                                    //
    return final_out                                                            //
}                                                                                       //
                                                                                        //
//--------------------------------------------------------------------------------------//

//do whatever the hell you want to do to below code

function draw() {
    requestAnimationFrame(draw);


    ctx.drawImage(video, 0, 0, 640, 480);
    // We can call both functions to draw all keypoints and the skeletons


    // For one pose only (use a for loop for multiple poses!)
    if (poses.length > 0) {
        const pose = poses[0].pose;

        // Create a pink ellipse for the nose
        const leftShoulder = pose.leftShoulder;
        if(angle(leftHip,leftShoulder,leftElbow)>0){
            ctx.fillStyle = 'rgb(0,255,0)'
            console.log("Positive")
        }
        else
        {
            ctx.fillStyle = 'rgb(255,0,0)'
            console.log("Negative")
        }
        ctx.beginPath();
        ctx.arc(leftShoulder.x, leftShoulder.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        // Create a yellow ellipse for the right eye
        const rightShoulder = pose.rightShoulder;
        if(angle(rightHip,rightShoulder,rightElbow)>0){
            ctx.fillStyle = 'rgb(0,255,0)'
            console.log("Positive")
        }
        else
        {
            ctx.fillStyle = 'rgb(255,0,0)'
            console.log("Negative")
        }
        ctx.beginPath();
        ctx.arc(rightShoulder.x, rightShoulder.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        const rightElbow = pose.rightElbow;
        if(angle(rightShoulder,rightElbow,rightWrist)>0){
            ctx.fillStyle = 'rgb(0,255,0)'
            console.log("Positive")
        }
        else
        {
            ctx.fillStyle = 'rgb(255,0,0)'
            console.log("Negative")
        }
        ctx.beginPath();
        ctx.arc(rightElbow.x, rightElbow.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        const leftWrist = pose.leftWrist;
        ctx.beginPath();
        ctx.arc(leftWrist.x, leftWrist.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        const leftElbow = pose.leftElbow;
        if(angle(leftWrist,leftElbow,leftShoulder)>0){
            ctx.fillStyle = 'rgb(255,0,0)';
            console.log("Positive")
        }
        else
        {
            ctx.fillStyle = 'rgb(255, 0, 0)';
            console.log("Negative")
        }
        ctx.beginPath();
        ctx.arc(leftElbow.x, leftElbow.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        const rightWrist = pose.rightWrist;
        ctx.fillStyle = 'rgb(213, 0, 143)';
        ctx.beginPath();
        ctx.arc(rightWrist.x, rightWrist.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        const leftAnkle = pose.leftAnkle;
        ctx.fillStyle = 'rgb(213, 0, 143)';
        ctx.beginPath();
        ctx.arc(leftAnkle.x, leftAnkle.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        const leftHip = pose.leftHip;
        if(angle(leftKnee,leftHip,leftShoulder)>0){
            ctx.fillStyle = 'rgb(213, 0, 143)';
            console.log(angle(leftKnee,leftHip,leftShoulder))
        }
        else
        {
            ctx.fillStyle = 'rgb(255, 255, 255)';
            console.log(angle(leftKnee,leftHip,leftShoulder))
        }
        ctx.beginPath();
        ctx.arc(leftHip.x, leftHip.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        const leftKnee = pose.leftKnee;
        if(angle(leftAnkle,leftKnee,leftHip)>0){
            ctx.fillStyle = 'rgb(213, 0, 143)';
            console.log(angle(leftAnkle,leftKnee,leftHip))

        }
        else
        {
            ctx.fillStyle = 'rgb(255, 255, 255)';
            console.log(angle(leftAnkle,leftKnee,leftHip))
        }
        ctx.fillStyle = 'rgb(213, 0, 143)';
        ctx.beginPath();
        ctx.arc(leftKnee.x, leftKnee.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        const rightAnkle = pose.rightAnkle;
        ctx.fillStyle = 'rgb(213, 0, 143)';
        ctx.beginPath();
        ctx.arc(rightAnkle.x, rightAnkle.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        const rightHip = pose.rightHip;
        if(angle(rightKnee,rightHip,rightShoulder)>0){
            ctx.fillStyle = 'rgb(213, 0, 143)';
            console.log(angle(rightKnee,rightHip,rightShoulder))
        }
        else
        {
            ctx.fillStyle = 'rgb(255, 255, 255)';
            console.log(angle(rightKnee,rightHip,rightShoulder))
        }
        ctx.beginPath();
        ctx.arc(rightHip.x, rightHip.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        const rightKnee = pose.rightKnee;
        if(angle(rightAnkle,rightKnee,rightHip)>0){
            ctx.fillStyle = 'rgb(213, 0, 143)';
            console.log(angle(rightAnkle,rightKnee,rightHip))
        }
        else
        {
            ctx.fillStyle = 'rgb(255, 255, 255)';
            console.log(angle(rightAnkle,rightKnee,rightHip))
        }
        ctx.fillStyle = 'rgb(213, 0, 143)';
        ctx.beginPath();
        ctx.arc(rightKnee.x, rightKnee.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();


    }


}