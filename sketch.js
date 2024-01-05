var hands = new HandRecognizer();


var myPainter = new Painter()


function setup() {
    createCanvas(400, 300);
  
    frameRate(30);
    fill(153, 102, 0);
  
    ellipse(200, 150, 200, 250);
    fill(255,255,255);
    circle(170, 110, 50);
  
    circle(230, 110, 50);
    fill(0,0,0);
    circle(170, 110, 20);
  
  
  
    circle(230, 110, 20);
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