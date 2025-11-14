const dialogue = [
  {
    character: "Naration",
    text: "A voice cuts through your thoughts — Darwin’s, calm and distant. ‘You chose this path, remember? Your telepathy burns. You remember flashes — the training, the first war, the promise to protect Fatima…",
    portrait: "ace_happy.png",
    nextIndex: 1
  },

 {
    character: "Naration",
    text: "You, look over tired as all hell but this could be the last stand against Darwin, your last stand to fight for Fatima. You crawl over to her side still wounded but your body tries to heal, taken too much damage and it's taking it's time to heal",
    portrait: "ace_happy.png",
    nextIndex: 2
  },

  {
    character: "Narration",
    text: "You limp over she's badly injured, she'll heal but it will take some time. You think to yourself, I can ease her pain.",
    choices: [
      { text: "Use telepathy to ease her pain", nextIndex: 3, karmaChange: 1 },
      { text: "Promise to return-- turn and get up to face Darwin", nextIndex: 5, karmaChange: -1 }
        ]
    },

   { 
    character: "Aaron", 
    text: "Wake up, beautiful",
     nextIndex: 4 
    }, // 2
  { 
    character: "Narration", 
    text: "She moves slightly, a small smile on her lips as she drifts in and out of sleep. You know what you must do now, he has to win, you have to give in as long as you can save her life.", 
    nextIndex: 8 },      // 3

  { 
    character: "Narration", 
    text: "She grunts in pain. you look over one more time not knowing if this time would be your last", 
    nextIndex: 6 
},       // 4

  { 
    character: "Narration", 
    text: "Aaron looked around at the carnage, his friends hurt over this stupid war for himself. Everything he had lost up until now, Aurora, the kids at the base, his mom. He wouldn’t lose his friends now, he was going to save them by any means necessary. Even if it meant making a deal with the devil", 
    nextIndex: 7
    },

    { 
    character: "Darwin", 
    text: "So you’ve come to finish what you started. Was it worth it? Were their lives worth it?",
    choices: [
    { text: "Lunge in anger", nextIndex: 9, karmaChange: -1 },
    { text: "Because I had to. To protect them all.", nextIndex: null, karmaChange: 1 }
    ]
    
    },

    { 
    character: "Aaron", 
    text: "Darwin, you win. I give up. Just save my friends at the end of all this.", 
    nextIndex: 10
    },
    // 5
     { 
    character: "Narrator", 
    text: "You lunge at Darwin, anger and pain fueling your movements. But Darwin is faster, stronger. He dodges your attack easily, a cruel smile on his face as he prepares to strike back.", 
    nextIndex: 9
    },

    { 
    character: "Narration", 
    text:  "Darwin felt the boy in his mind and heard his plea. He smiled, everything that he wanted was moments away. His freedom, he could smell it, he could taste it. Darwin would not be seen as just a man or a parahuman, he would be immortalized, and he would be truly free just as the early parahumans were. He ran towards 13 and grabbed her by her neck, he needed to be swift and strong. Quickly snapping her neck, she would heal he knew that but not before he got what he needed.",
    nextIndex: 10
    
    }


];

let currentIndex = 0;
let karma = 0

function showDialogue(index) {
    const line = dialogue[index];
    document.getElementById("Text_Box").textContent = line.text;
    document.getElementById("Char_Name").textContent = line.character;
}

function showChoices(choicesArray) {
    const container = document.getElementById("choices-container");
    container.innerHTML = ""; // clear any previous buttons

    choicesArray.forEach(choice => {
        const btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.textContent = choice.text;

        btn.addEventListener("click", () => {
            // Apply karma if applicable
            if (choice.karmaChange) {
                karma += choice.karmaChange;
            }

            // Jump to the chosen dialogue line
            currentIndex = choice.nextIndex;

            // Clear choice buttons
            container.innerHTML = "";

            // Show the next dialogue line
            showDialogue(currentIndex);
        });

        container.appendChild(btn);
    });
}

function nextDialogue() {
    const line = dialogue[currentIndex];
    if(line.choices) {
        showChoices(line.choices);
    } else if(line.nextIndex !== null) {
        currentIndex = line.nextIndex;
        showDialogue(currentIndex); // show next line
    } else {
        // End of scene or branching logic
        console.log("End of scene or handle choices here");
    }
}
 

document.addEventListener("DOMContentLoaded", () => {
    showDialogue(currentIndex); // show the first line
    document.getElementById("Text_Box").addEventListener("click", nextDialogue);
});