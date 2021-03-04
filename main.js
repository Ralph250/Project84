canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_1_width=120;
car_1_height=70;
car_1_image="car_11.png";
car_1_x=10;
car_1_y=10;

car_2_width=120;
car_2_height=70;
car_2_image="car_22.png";
car_2_x=10;
car_2_y=100;

background_image = "racing.jpg"

function add(){
background_imgTag = new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src = background_image;

car1_imgTag = new Image();
car1_imgTag.onload=uploadcar1;
car1_imgTag.src = car_1_image;

car2_imgTag = new Image();
car2_imgTag.onload=uploadcar2;
car2_imgTag.src = car_2_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag,10,10,car_1_height,car_1_width);
    }

    function uploadcar2(){
        ctx.drawImage(car2_imgTag,10,200 ,car_2_height,car_2_width);
        }


        window.addEventListener("keydown", my_keydown);

        function my_keydown(e)
        { 
            keyPressed= e.keyCode;
            console.log(keyPressed);
            if(keyPressed=='38')
            {
                console.log("UP HAS BEEN PRESSED");
                car1up();
                
            }

            if(keyPressed=='40')
            {
                console.log("DOWN HAS BEEN PRESSED");
                car1down();

            }

            if(keyPressed=='37')
            {
                console.log("LEFT HAS BEEN PRESSED");
                car1left();
                
            }

            if(keyPressed=='39')
            {
                console.log("RIGHT HAS BEEN PRESSED");
                car1right();
               
            }




            if(keyPressed=='87')
            {
                console.log("W HAS BEEN PRESSED");
                car2up();
                
            }

            if(keyPressed=='65')
            {
                console.log("A HAS BEEN PRESSED");
                car2down();

            }

            if(keyPressed=='83')
            {
                console.log("S HAS BEEN PRESSED");
                car2left();
                
            }

            if(keyPressed=='68')
            {
                console.log("D HAS BEEN PRESSED");
                car2right();
               
            }





        }