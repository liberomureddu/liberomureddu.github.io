---
layout: none
title: Joy Against the Machine - online version
description: An online, non interactive version of my composition 'Joy Against the Machine'
img: assets/img/projects_gallery/240906_PICTURE_JATM-online_001_600X600.jpg
importance: 3
category: work
og_image: https://liberomureddu.github.io/assets/img/social_media_gallery/2409091604_IMAGE_Jatm_online_version_Social_sharing_1200_630_72.jpg
---
<html lang="en">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Joy Against the Machine - online version</title>
      <style>
         @import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");
         body {
         background-color: black;
         margin: 0;
         padding: 0;
         display: flex;
         align-items: center;
         justify-content: center;
         min-height: 100vh;
         color: green;
         font-size: 2vw;
         font-weight: bold;
         text-align: center;
         font-family: "Inconsolata", monospace;
         }
         .hidden {
         display: none;
         }
         .fade-out {
         opacity: 0;
         transition: opacity 1s ease-out;
         }
         .fade-out-slow {
         opacity: 0;
         transition: opacity 2s ease-out;
         }
         .stripes-container {
         display: none;
         width: 100%;
         }
         .stripe {
	 padding: 0.15rem;
         width: 100%;
         height: 6vh;
         display: flex;
         align-items: center;
         justify-content: center;
         font-size: 2vw;
         font-weight: bold;
         color: black;
         transition: background-color 2s;
         margin-bottom: 1vh;
         }
         /* Adjust font size for smaller screens */
         @media (max-width: 768px) {
         .stripe {
         font-size: 4vw;
         }
         }
         @media (max-width: 480px) {
         .stripe {
         font-size: 6vw;
         }
         }
         #intro,
         #outro {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         padding: 1rem;
         width: 100%;
         text-align: center;
         font-size: 3vw; /* Increase font size */
         }
         /* Adjust font size for smaller screens */
         @media (max-width: 768px) {
         .stripe {
         font-size: 3vw;
         }
         #intro,
         #outro {
         font-size: 4vw;
         }
         }
         @media (max-width: 480px) {
         .stripe {
         font-size: 5vw;
         }
         #intro,
         #outro {
         font-size: 5vw;
         }
         }
         #form-container {
         position: absolute;
         top: 5%;
         left: 50%;
         transform: translateX(-50%);
         text-align: center;
         padding: 1rem;
         width: 80%;
         }
         #form-container input,
         #form-container button,
         #form-container textarea {
         font-size: 2vw;
         padding: 0.5rem;
         margin: 0.5rem;
         background-color: black;
         color: green;
         border: 2px solid green;
         border-radius: 5px;
         font-family: "Inconsolata", monospace;
         }
         #numPlayers,
         #duration {
         background-color: black;
         color: green;
         font-family: "Inconsolata", monospace;
         }
         .input-group {
         display: flex;
         align-items: center;
         justify-content: center;
         width: 100%;
         }
         .input-group label {
         font-size: 1.5vw;
         }
         .input-group button {
         font-size: 2vw;
         padding: 0.5rem;
         margin: 0.5rem;
         background-color: black;
         color: green;
         border: 2px solid green;
         border-radius: 5px;
         font-family: "Inconsolata", monospace;
         }
         #duration {
         width: 5rem;
         }
         .title {
         font-size: 3vw;
         margin-bottom: 1rem;
         text-align: center; /* Ensure title is centered */
         }
         .subtitle {
         font-size: 2.5vw; /* Slightly smaller than the title */
         margin-bottom: 1rem;
         text-align: center; /* Ensure subtitle is centered */
         }
         .instructions {
         font-size: 1.5vw;
         margin-bottom: 2rem;
         text-align: left; /* Left-align the instructions */
         }
         @media (max-width: 768px) {
         #form-container input,
         #form-container button,
         #form-container textarea {
         font-size: 3vw;
         padding: 0.4rem;
         }
         .title {
         font-size: 5vw;
         }
         .subtitle {
         font-size: 4.5vw; /* Slightly smaller than the title */
         }
         .instructions,
         .input-group label {
         font-size: 3vw;
         }
         }
         @media (max-width: 480px) {
         #form-container input,
         #form-container button,
         #form-container textarea {
         font-size: 4vw;
         padding: 0.3rem;
         }
         .title {
         font-size: 6vw;
         }
         .subtitle {
         font-size: 5.5vw; /* Slightly smaller than the title */
         }
         .instructions,
         .input-group label {
         font-size: 4vw;
         }
         }
      </style>
   </head>
   <body>
      <div id="form-container">
         <div class="title">Joy Against the Machine - online version</div>
         <div class="subtitle">Instructions</div>
         <br />
         <div class="instructions">
            Joy Against the Machine is a composition-improvisation framework
            for a variable number of players. On the screen, a number of
            coloured stripes with text will appear. Each player should
            follow a different stripe throughout the piece. The players have
            to follow their changing instructions as quickly as possible.
            However, they are free to interpret the instructions as they
            wish.
            <br /><br />
            The composition already contains ~300 different instructions.
            However, one can use their own set of instructions or, in a
            future version, add their instructions to the existing ones.
         </div>
         <div class="input-group">
            <label for="numPlayers">Enter the number of players:</label>
            <button onclick="changePlayers(-1)">-</button>
            <input
               type="number"
               id="numPlayers"
               min="1"
               max="20"
               value="7"
               />
            <button onclick="changePlayers(1)">+</button>
         </div>
         <div class="input-group">
            <label for="duration">Enter the total duration (mm:ss):</label>
            <button onclick="changeDuration(-1)">-</button>
            <input
               type="text"
               id="duration"
               placeholder="mm:ss"
               pattern="\d{2}:\d{2}"
               value="00:30"
               />
            <button onclick="changeDuration(1)">+</button>
         </div>
         <div class="input-group">
            <label for="userTexts"
               >Enter your instructions (comma-separated):</label
               >
            <textarea
               id="userTexts"
               rows="3"
               placeholder="Text 1, Text 2, Text 3"
               ></textarea>
         </div>
         <button onclick="startAnimation()">Start</button>
      </div>
      <div id="intro" class="hidden">Hello. I am the Machine.</div>
      <div class="stripes-container" id="stripesContainer"></div>
      <div id="outro" class="hidden">That was enough. Thank you.</div>
      <script>
         function startAnimation() {
         const numPlayers = document.getElementById("numPlayers").value;
         const duration = document.getElementById("duration").value.split(":");
         const totalDuration = 1000 * (60 * parseInt(duration[0]) + parseInt(duration[1]));
         const stripesContainer = document.getElementById("stripesContainer");
         const userTexts = document.getElementById("userTexts").value.split(",").map(text => text.trim());
         const textsToUse = userTexts.length > 0 && userTexts[0] !== "" ? userTexts : defaultTexts;
         stripesContainer.innerHTML = "";
         for (let i = 0; i < numPlayers; i++) {
         const stripe = document.createElement("div");
         stripe.className = "stripe";
         stripe.id = `stripe${i + 1}`;
         stripe.style.backgroundColor = colors[i % colors.length];
         stripe.textContent = textsToUse[Math.floor(Math.random() * textsToUse.length)];
         stripesContainer.appendChild(stripe);
         changeText(`stripe${i + 1}`, textsToUse);
         }
         const formContainer = document.getElementById("form-container");
         formContainer.classList.add("fade-out");
         setTimeout(() => {
         formContainer.classList.add("hidden");
         setTimeout(() => {
             document.getElementById("intro").classList.remove("hidden");
             setTimeout(showStripes, 5000);
         }, 1000);
         }, 1000);
         setTimeout(startOutro, totalDuration + 7000);
         }
         function changeText(id, texts) {
         function updateText() {
         const index = Math.floor(Math.random() * texts.length);
         document.getElementById(id).textContent = texts[index];
         const delay = Math.floor(5000 * Math.random()) + 3000;
         setTimeout(updateText, delay);
         }
         updateText();
         }
         function showStripes() {
             document.getElementById("intro").classList.add("hidden");
             document.getElementById("stripesContainer").style.display = "block";
         }
         function startOutro() {
             document.querySelectorAll(".stripe").forEach(stripe => {
                 stripe.style.backgroundColor = "black";
             });
             setTimeout(showOutroText, 2000);
         }
         function showOutroText() {
             document.getElementById("stripesContainer").classList.add("hidden");
             const outro = document.getElementById("outro");
             outro.classList.remove("hidden");
             setTimeout(() => {
                 outro.classList.add("fade-out-slow");
             }, 2000);
         }
         function changeDuration(change) {
             const durationInput = document.getElementById("duration");
             let [minutes, seconds] = durationInput.value.split(":").map(Number);
             let totalSeconds = 60 * minutes + seconds + change;
             if (totalSeconds < 0) totalSeconds = 0;
             minutes = Math.floor(totalSeconds / 60);
             seconds = totalSeconds % 60;
             durationInput.value = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
         }
         function changePlayers(change) {
             const numPlayersInput = document.getElementById("numPlayers");
             let numPlayers = parseInt(numPlayersInput.value) + change;
             if (numPlayers < 1) numPlayers = 1;
             numPlayersInput.value = numPlayers;
         }
         const colors = ["#9DFFFF", "#ECBED7", "#FFF179", "#D4D1FF", "#FF9E9E", "#BCFA60", "#6e9ff6"];
         const defaultTexts = [
         "Play louder", "Play softer", "Play something crazy", "Silence", "Play something funny", "Play only one note",
         "Imitate another player", "Play against the other players", "Sing a song", "You don't know how to play",
         "Make it short", "Repeat yourself", "Don't cry", "Cry", "Jump", "Play sadly", "Play as fast as possible",
         "Disintegrate", "Play fragmented", "Be bossy", "Be egoistic", "Listen", "Whisper", "Mimic playing",
         "Don't play any notes", "Don't think", "Make a pattern", "Reverse", "Breathe with your instrument", "Be heavy",
         "Be light", "Don't listen", "Melt", "Accompany", "Focus on togetherness", "Howl", "Hiss", "Make a round sound",
         "Make contrasts", "Play dead", "Play many notes", "Try to negotiate", "Comment", "Squeak", "Think about colours",
         "Think about shapes", "Think about gestures", "Think about the form", "Make the impossible possible", "Say something",
         "Play the room", "Play staccato", "Play legato", "Play high notes", "Play low notes", "Play your favourite song",
         "Imitate a whale", "Imitate a Formula One car", "Imitate the blackbird", "Imitate the crow", "Bark", "Imagine you are a worm",
         "Play nervous", "Be scared", "Be brave", "Be confident", "Play in time", "Play out of time", "Play in a faster tempo",
         "Make a rhythm", "Groove, babe!", "Play irregular", "Change your subject", "Go on, that's interesting!", "Just continue",
         "Develop your idea", "Keep on rolling...", "Imitate a cat", "Imitate a glass smashing on the floor", "Imitate a drunk person in a disco",
         "Don't be so nervous", "It's enough", "Be polite", "Play like a child", "This is your virtuoso moment", "Be careful",
         "Don't be careful", "Play evenly", "Play smoothly", "Stop rapidly", "Stop gradually", "Diminuendo to silence",
         "Play pointillistic", "Listen to yourself", "Listen to the others", "Listen to the space", "Play something normal",
         "Accelerate", "Slow down", "Play as slow as possible", "Play short notes", "Play long notes", "Play in slower tempo",
         "Play as quiet as possible", "Play as loud as possible", "Imitate a bee", "Imitate a mosquito", "Imitate the wind",
         "Imitate the waves", "Imitate the rain", "Imitate a truck", "Imitate a plane", "Play random notes", "Play random sounds",
         "Play random rhythm", "Play inaudibly", "Play only two notes", "Get stuck", "Think about the blue sky", "Think about your mother",
         "Think about your favorite food", "Don't hesitate", "Hesitate", "Do whatever you want", "Don't move", "Think about swimming",
         "Think about walking", "Think about running", "Be yourself", "Make a move", "Move your body a lot", "Move your hands a lot",
         "Play with minimum movement", "Relax", "Play with one hand", "Play with one finger", "Play with your elbow", "Play in high register",
         "Play in low register", "Stay on a long note", "Make a pedal point", "Ask a question", "Answer", "Shout", "Growl", "Snarl",
         "Rattle", "Bubble", "Contrast another player", "Play in rhythmic unison with someone", "Look at the player next to you",
         "Continue the rhythmic idea", "Play tonal", "Play atonal", "Be sensitive", "Be arrogant", "Conduct yourself", "Make clear movements",
         "Make movements upwards", "Make movements downwards", "Make movements sideways", "Play the first tune you learned", "Swing",
         "Play a chromatic circus waltz", "Play as low as possible", "Play as high as possible", "Only two different notes allowed",
         "Play only 4th and 5th intervals", "Play in slightly different tempo than some other", "Hungry", "Imitate a pompous lawyer in a bad American TV-series",
         "Play a fruit of your choice", "Play what happens in a bumpy street in a big tropical city", "Silence", "Silence", "Silence", "Silence",
         "Silence", "Silence", "Silence", "Silence", "Silence", "Silence", "Silence", "Silence", "Silence", "Silence", "Silence", "Silence",
         "Silence", "Silence", "Silence", "Imitate an elephant", "Be intellectual", "Breathe deeply", "Play a waltz", "Use your index", "Articulate",
         "Think about fresh snow", "Think about the letter R", "C major", "Play one long sound", "Play only two short sounds", "Think about the ice cream van",
         "Imitate a bear scratching his back", "Imitate the sound of a coffee machine", "Play what is missing", "Play what is needed", "Support the other players",
         "Support another player", "Support the player next to you", "Cooperate", "Don't cooperate", "Oppose the player most distant from you", "Choose a partner",
         "Stop and go", "Accompany the person next to you", "Accompany the person most distant from you", "Play sparsely", "Play with the others", "Match with the sound",
         "Match with the rhythm", "Match with the harmony", "Think about the harmony", "Create harmonies"
         ];
      </script>
   </body>
</html>
