---
layout: none
title: Joy Against the Machine - online version
description: An online, non interactive version of my composition 'Joy Against the Machine'
img: assets/img/projects_gallery/240906_PICTURE_JATM-online_001_600X600.jpg
importance: 3
category: work
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joy Against the Machine - online version</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
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
            font-family: 'Inconsolata', monospace;
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
            width: 100%;
            height: 5vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2vw;
            font-weight: bold;
            color: black;
            transition: background-color 2s;
            margin-bottom: 1vh; /* Add space between stripes */
        }
        #intro, #outro {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 1rem;
            width: 100%; /* Set width to 100% */
        }
        #form-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            padding: 1rem;
            width: 80%; /* Adjust the width as needed */
        }
        #form-container input, #form-container button {
            font-size: 2vw;
            padding: 0.5rem;
            margin: 0.5rem;
            background-color: black; /* Set background to black */
            color: green; /* Set text color to green */
            border: 2px solid green; /* Add green border */
            border-radius: 5px; /* Add border radius */
            font-family: 'Inconsolata', monospace;
        }
        #numPlayers, #duration {
            background-color: black; /* Set background to black */
            color: green; /* Set text color to green */
            font-family: 'Inconsolata', monospace;
        }
        .input-group {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80%; /* Adjust the width as needed */
        }
        .input-group button {
            font-size: 2vw;
            padding: 0.5rem;
            margin: 0.5rem;
            background-color: black; /* Set background to black */
            color: green; /* Set text color to green */
            border: 2px solid green; /* Add green border */
            border-radius: 5px; /* Add border radius */
            font-family: 'Inconsolata', monospace;
        }
        #duration {
            width: 6rem; /* Set a smaller width for the duration input */
        }

        /* Media queries for responsive button sizes */
        @media (max-width: 768px) {
            #form-container input, #form-container button {
                font-size: 3vw;
                padding: 0.4rem;
            }
        }
        @media (max-width: 480px) {
            #form-container input, #form-container button {
                font-size: 4vw;
                padding: 0.3rem;
            }
        }
    </style>
</head>
<body>
    <div id="form-container">
        <div class="input-group">
            <label for="numPlayers">Enter the number of players:</label>
            <button onclick="changePlayers(-1)">-</button>
            <input type="number" id="numPlayers" min="1" max="20" value="7">
            <button onclick="changePlayers(1)">+</button>
        </div>
        <div class="input-group">
            <label for="duration">Enter the total duration (mm:ss):</label>
            <button onclick="changeDuration(-1)">-</button>
            <input type="text" id="duration" placeholder="mm:ss" pattern="\d{2}:\d{2}" value="00:30">
            <button onclick="changeDuration(1)">+</button>
        </div>
        <button onclick="startAnimation()">Start</button>
    </div>
    <div id="intro" class="hidden">Hello. I am the Machine.</div>
    <div class="stripes-container" id="stripesContainer"></div>
    <div id="outro" class="hidden">That was enough. Thank you.</div>

    <script>
        const colors = ["#9DFFFF", "#ECBED7", "#FFF179", "#D4D1FF", "#FF9E9E", "#BCFA60", "#6e9ff6"];
        const texts = [
            ["Text 1", "Text A", "Text B"],
            ["Text 2", "Text C", "Text D"],
            ["Text 3", "Text E", "Text F"],
            ["Text 4", "Text G", "Text H"],
            ["Text 5", "Text I", "Text J"],
            ["Text 6", "Text K", "Text L"],
            ["Text 7", "Text M", "Text N"]
        ];

        function startAnimation() {
            const numPlayers = document.getElementById('numPlayers').value;
            const duration = document.getElementById('duration').value.split(':');
            const minutes = parseInt(duration[0]);
            const seconds = parseInt(duration[1]);
            const totalDuration = (minutes * 60 + seconds) * 1000; // Convert to milliseconds
            const stripesContainer = document.getElementById('stripesContainer');
            stripesContainer.innerHTML = ''; // Clear any existing stripes

            for (let i = 0; i < numPlayers; i++) {
                const stripe = document.createElement('div');
                stripe.className = 'stripe';
                stripe.id = `stripe${i + 1}`;
                stripe.style.backgroundColor = colors[i % colors.length];
                stripe.textContent = texts[i % texts.length][0];
                stripesContainer.appendChild(stripe);
                changeText(`stripe${i + 1}`, texts[i % texts.length]);
            }

            const formContainer = document.getElementById('form-container');
            formContainer.classList.add('fade-out');
            setTimeout(() => {
                formContainer.classList.add('hidden');
                setTimeout(() => {
                    document.getElementById('intro').classList.remove('hidden');
                    setTimeout(showStripes, 5000);
                }, 1000);
            }, 1000);

            setTimeout(startOutro, totalDuration + 7000); // Add 7 seconds for intro
        }

        function changeText(stripeId, textArray) {
            let currentIndex = 0;
            function updateText() {
                currentIndex = (currentIndex + 1) % textArray.length;
                document.getElementById(stripeId).textContent = textArray[currentIndex];
                const nextInterval = Math.floor(Math.random() * 5000) + 3000; // Random interval between 3000 and 8000 ms
                setTimeout(updateText, nextInterval);
            }
            updateText();
        }

        function showStripes() {
            document.getElementById('intro').classList.add('hidden');
            document.getElementById('stripesContainer').style.display = 'block';
        }

        function startOutro() {
            const stripes = document.querySelectorAll('.stripe');
            stripes.forEach(stripe => {
                stripe.style.backgroundColor = 'black';
            });
            setTimeout(showOutroText, 2000);
        }

        function showOutroText() {
            document.getElementById('stripesContainer').classList.add('hidden');
            const outro = document.getElementById('outro');
            outro.classList.remove('hidden');
            setTimeout(() => {
                outro.classList.add('fade-out-slow');
            }, 2000);
        }

        function changeDuration(seconds) {
            const durationInput = document.getElementById('duration');
            let [minutes, secs] = durationInput.value.split(':').map(Number);
            let totalSeconds = minutes * 60 + secs + seconds;

            if (totalSeconds < 0) totalSeconds = 0;

            minutes = Math.floor(totalSeconds / 60);
            secs = totalSeconds % 60;

            durationInput.value = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }

        function changePlayers(amount) {
            const playersInput = document.getElementById('numPlayers');
            let players = parseInt(playersInput.value) + amount;

            if (players < 1) players = 1;
            if (players > 20) players

            playersInput.value = players;
        }
    </script>
</body>
</html>
