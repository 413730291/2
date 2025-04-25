function setup() {
  //建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight);
  //設定顏色模式為HSB
  colorMode(HSB);
}

function draw() {
  // 不清除畫布，保留圓的軌跡
  
  //計算圓的顏色，根據滑鼠的水平位置變化色相，範圍從0到360
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  //計算圓的亮度，根據滑鼠的垂直位置變化亮度，範圍從0到100
  let brightness = map(mouseY, 0, windowHeight, 100, 0);
  
  //設定圓的顏色
  fill(hue, 100, brightness);
  //設定圓的框線顏色
  stroke(0, 0, 100); // 白色框線
  strokeWeight(2); // 框線寬度
  
  //在滑鼠位置畫一個圓，圓的寬高為200px
  ellipse(mouseX, mouseY, 200, 200);
}

//當視窗的寬高改變時，畫布的寬高也會跟著改變
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}