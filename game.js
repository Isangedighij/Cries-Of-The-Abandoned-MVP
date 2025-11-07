const dialogue = [
  {
    character: "Ace Bailey",
    text: "We have to find the real culprit!",
    portrait: "ace_happy.png",
    nextIndex: 1
  },
  {
    character: "Narration",
    text: "The courtroom falls silent.",
    choices: [
      { text: "Confront the witness", nextIndex: 2, karmaChange: 1 },
      { text: "Stay quiet", nextIndex: 4, karmaChange: 0 }
        ]
    },

   { character: "Ace Bailey", text: "I confront the witness boldly!", nextIndex: 3 }, // 2
  { character: "Narration", text: "The witness is intimidated.", nextIndex: null },      // 3
  { character: "Ace Bailey", text: "I stay quiet and observe.", nextIndex: 5 },       // 4
  { character: "Narration", text: "The jury murmurs in surprise.", nextIndex: null}    // 5
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