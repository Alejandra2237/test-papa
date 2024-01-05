var hands = new HandRecognizer();


var myPainter = new Painter()


function setup() {
    createCanvas(windowWidth, windowHeight);
  
    frameRate(30);
    fill(153, 102, 0);
    ellipse(windowWidth/2, windowHeight/2, 300, 400);
  
    fill(255,255,255);
    circle(windowWidth/2-50, windowHeight/2-80, 70);
    circle(windowWidth/2+50, windowHeight/2-80, 70);
  
    fill(0,0,0);
    circle(windowWidth/2-50, windowHeight/2-80, 30);
    circle(windowWidth/2+50, windowHeight/2-80, 30);
}

function draw() {
    hands.predict();
    var thumbTip = hands.getRightLandmark(Landmarks.Thumb_Tip);
    var pointerTip =  hands.getRightLandmark(Landmarks.Pointer_Tip);
  
    var landmarkDist;
    if (hands.rightHandVisible()){
        landmarkDist = dist(thumbTip.x, thumbTip.y, pointerTip.x, pointerTip.y);
    } else{
        landmarkDist = Infinity;
    }
    var threshold = 30;
    if (landmarkDist < threshold) {    
        console.log("Pinched!");
        myPainter.penDown(thumbTip.x,thumbTip.y);
    } else {
        myPainter.penUp();
    }


    
    hands.drawLandmarks(false);

}
