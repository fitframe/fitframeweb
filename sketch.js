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


    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    // We can call both functions to draw all keypoints and the skeletons


    // For one pose only (use a for loop for multiple poses!)
    if (poses.length > 0) {
        const pose = poses[0].pose;

        const leftShoulder = pose.leftShoulder;
        const rightShoulder = pose.rightShoulder;
        const rightElbow = pose.rightElbow;
        const leftWrist = pose.leftWrist;
        const leftElbow = pose.leftElbow;
        const rightWrist = pose.rightWrist;
        const leftAnkle = pose.leftAnkle;
        const leftHip = pose.leftHip;
        const leftKnee = pose.leftKnee;
        const rightHip = pose.rightHip;
        const rightKnee = pose.rightKnee;
        const rightAnkle = pose.rightAnkle;

        // Create a pink ellipse for the nose

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

        ctx.fillStyle = 'rgb(0,0,255)'
        ctx.beginPath();
        ctx.arc(leftWrist.x, leftWrist.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();


        if(angle(leftWrist,leftElbow,leftShoulder)>0){
            ctx.fillStyle = 'rgb(0,255,0)';
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


        ctx.fillStyle = 'rgb(0,0,255)';
        ctx.beginPath();
        ctx.arc(rightWrist.x, rightWrist.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();


        ctx.fillStyle = 'rgb(0,0,255)';
        ctx.beginPath();
        ctx.arc(leftAnkle.x, leftAnkle.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();


        if(angle(leftKnee,leftHip,leftShoulder)>0){
            ctx.fillStyle = 'rgb(0,255,0)';
            console.log(angle(leftKnee,leftHip,leftShoulder))
        }
        else
        {
            ctx.fillStyle = 'rgb(255,0,0)';
            console.log(angle(leftKnee,leftHip,leftShoulder))
        }
        ctx.beginPath();
        ctx.arc(leftHip.x, leftHip.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();


        if(angle(leftAnkle,leftKnee,leftHip)>0){
            ctx.fillStyle = 'rgb(0,255,0)';
            console.log(angle(leftAnkle,leftKnee,leftHip))

        }
        else
        {
            ctx.fillStyle = 'rgb(255,0,0)';
            console.log(angle(leftAnkle,leftKnee,leftHip))
        }
        ctx.beginPath();
        ctx.arc(leftKnee.x, leftKnee.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();


        ctx.fillStyle = 'rgb(0, 0, 255)';
        ctx.beginPath();
        ctx.arc(rightAnkle.x, rightAnkle.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();


        if(angle(rightKnee,rightHip,rightShoulder)>0){
            ctx.fillStyle = 'rgb(255,0,0)';
            console.log(angle(rightKnee,rightHip,rightShoulder))
        }
        else
        {
            ctx.fillStyle = 'rgb(0,255,0)';
            console.log(angle(rightKnee,rightHip,rightShoulder))
        }
        ctx.beginPath();
        ctx.arc(rightHip.x, rightHip.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();


        if(angle(rightAnkle,rightKnee,rightHip)>0){
            ctx.fillStyle = 'rgb(255,0,0)';
            console.log(angle(rightAnkle,rightKnee,rightHip))
        }
        else
        {
            ctx.fillStyle = 'rgb(0,255,0)';
            console.log(angle(rightAnkle,rightKnee,rightHip))
        }
        ctx.beginPath();
        ctx.arc(rightKnee.x, rightKnee.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();


    }


}