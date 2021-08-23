var canvas = document.getElementById("my1");
var pen = canvas.getContext("2d");
// Create canvas variable

//Set initial positions for ball and hole images.
ball_x = 0;
ball_y = 0;
hole_x = 800;
hole_y = 400;

block_image_width = 5;
block_image_height = 5;

function load_img() {
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function (Img)) {
		hole_object = Img;
		hole_object.scaleToWidth(50);
		hole_object.scaleToHeight(50);
		hole.obj.set({
				top: hole_y;
				left: hole_x;
			}
		}
		canvas.add(hole_object);
		new_image();
	}

	function new_image() {
		// write code to Upload ball image on canvas
		fabric.Image.fromURL("ball.png", function (Img)) {
			ball_object = Img;
			ball_object.scaleToWidth(50);
			ball_object.scaleToHeight(50);
			ball.obj.set({
					top: hole_y;
					left: hole_x;
				}
			}
			canvas.add(ball_object);
			new_image();
		}
	}

	window.addEventListener("keydown", my_keydown);

	function my_keydown(e) {
		keyPressed = e.keyCode;
		console.log(keyPressed);
		/* Check the coordinates of the ball and hole images to finish the game. 
		And id coordinates matches them remove ball image, 
		display "GAME OVER!!!" 
		and make canvas border 'red'. */
		if(ball_x == hole_x)&&(ball_y == hole_y){
			canvas.remove(ball_object);
			document.getElementById("hd3").innerHTML = "You have hit the goal!";
			document.getElementById("mycanvas").style.borderColor = "red";
		}

		else {
			if (keyPressed == '38') {
				up();
				console.log("up");
			}
			if (keyPressed == '40') {
				down();
				console.log("down");
			}
			if (keyPressed == '37') {
				left();
				console.log("left");
			}
			if (keyPressed == '39') {
				right();
				console.log("right");
			}
		}

		function up() {
			// Write a code to move ball upward.
		}

		function down() {
			// Write a code to move ball downward.
			if(ball_y <=450){
				ball_y += block_image_height;
				canvas.remove(ball_object);
				new_image();
			}
		}

		function left() {
			if (ball_x > 5) {
				// Write a code to move ball left side.
			}
		}

		function right() {
			if (ball_x <= 1050) {
				// Write a code to move ball right side.
			}
		}

	}