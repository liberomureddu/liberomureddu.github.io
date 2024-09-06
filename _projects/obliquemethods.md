---
layout: page
title: Oblique Methods
description: Artistic Research random method picker
img: assets/img/4.jpg
importance: 4
category: work
related_publications: false
permalink: /obliquemethods/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Picker</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100vh;
            margin: 0;
        }
        .card, .clickable-area {
            font-size: 16px;
            padding: 10px;
            border: 1px solid;
            margin: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 300px;
            cursor: pointer;
        }
        .card h2 {
            margin: 0 0 10px 0;
        }
        .card p {
            margin: 5px 0;
        }
        #clickableAreaContainer, #cardContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
    </style>
</head>
<body>
    <div id="clickableAreaContainer">
        <div class="clickable-area" onclick="pickCard()">Click to pick a method</div>
    </div>
    <div id="cardContainer" style="margin-top: 20px;"></div>
    <script>
        const cards = [
            { name: "Survey", description: "Collect data from a predefined group of respondents to gain information and insights on various topics of interest.", author: "John Doe", publication: "Research Journal" },
            { name: "Case Study", description: "An in-depth analysis of a single case or multiple cases within a real-world context.", author: "Jane Smith", publication: "Case Study Weekly" },
            { name: "Experiment", description: "Conduct a controlled test to investigate hypotheses and observe outcomes.", author: "Alice Johnson", publication: "Experimental Reports" },
            { name: "Focus Group", description: "Gather a small group of people to discuss and provide feedback on a specific topic or product.", author: "Bob Brown", publication: "Focus Group Insights" },
            { name: "Interview", description: "Conduct one-on-one conversations to gather detailed information and personal insights.", author: "Carol White", publication: "Interview Digest" },
            { name: "Observation", description: "Watch and record behaviors or events in their natural setting without interference.", author: "David Green", publication: "Observation Studies" },
            { name: "Content Analysis", description: "Analyze textual, visual, or audio content to identify patterns, themes, or biases.", author: "Eve Black", publication: "Content Analysis Quarterly" },
            { name: "Meta-Analysis", description: "Combine data from multiple studies to draw broader conclusions and identify trends.", author: "Frank Blue", publication: "Meta-Analysis Monthly" },
            { name: "Longitudinal Study", description: "Track the same subjects over an extended period to observe changes and developments.", author: "Grace Yellow", publication: "Longitudinal Research" },
            { name: "Cross-Sectional Study", description: "Examine a diverse group of subjects at a single point in time to identify correlations and differences.", author: "Hank Purple", publication: "Cross-Sectional Studies" }
        ];
        function pickCard() {
            const randomIndex = Math.floor(Math.random() * cards.length);
            const card = cards[randomIndex];
            document.getElementById('cardContainer').innerHTML = `
                <div class="card">
                    <h2>${card.name}</h2>
                    <p>${card.description}</p>
                    <p><em>${card.author}, ${card.publication}</em></p>
                </div>
            `;
        }
    </script>
</body>
</html>
