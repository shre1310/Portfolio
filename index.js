 // Get the canvas element and its context
 const canvas = document.getElementById('backgroundCanvas');
 const ctx = canvas.getContext('2d');

 // Set canvas dimensions
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 // Background properties
 const bgColor = '#000000';
 const starColor = '#ffffff';
 const numStars = 100;

 // Initialize stars
 let stars = [];

 for (let i = 0; i < numStars; i++) {
     stars.push({
         x: Math.random() * canvas.width,
         y: Math.random() * canvas.height,
         radius: Math.random() * 2 + 1,
         speed: Math.random() * 2
     });
 }

 // Update and draw the stars
 function drawStars() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);

     ctx.fillStyle = bgColor;
     ctx.fillRect(0, 0, canvas.width, canvas.height);

     for (let i = 0; i < numStars; i++) {
         const star = stars[i];

         ctx.beginPath();
         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
         ctx.fillStyle = starColor;
         ctx.fill();

         // Update star position
         star.x -= star.speed;

         // Reset star position if it goes off the screen
         if (star.x < 0) {
             star.x = canvas.width;
         }
     }

     requestAnimationFrame(drawStars);
 }

 // Start animation
 drawStars();

 // Resize canvas when the window is resized
 window.addEventListener('resize', function () {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
 });

 window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Additional logic if needed...
});

