function setup() { //設定函數，初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
     createCanvas(windowWidth, windowHeight);
    //畫布的背景顏色為caf0f8(ca為十六進位的值，翻成10進位為202)
     background(202, 240, 248);
   
   }
   
   function draw() {
     background(220);
     //畫布的背景顏色為caf0f8(ca為十六進位的值，翻成10進位為202)
     background(202, 240, 248);
     //畫圓的顏色為#023e8a(02為十六進位的值，翻成10進位為2) 
     fill(2, 62, 138);
     stroke(0,180,216)
     //畫圓的寬度為10
     strokeWeight(10);
     //在視窗的中間畫一個圓，圓的寬高為200 
     //ellipse(windowWidth/2, windowHeight/2, 200, 200);
     //依照上面的圓顏色與框線顏色，從視窗左邊，產生連續的圓，到視窗最右邊
     for (let i = 0; i < windowWidth; i += 200) {
       ellipse(i, windowHeight/2, 200, 200);
     }
   }
   //當視窗的寬高改變時，畫布的寬高也會跟著改變
   function windowResized() {
     resizeCanvas(windowWidth, windowHeight);
   }