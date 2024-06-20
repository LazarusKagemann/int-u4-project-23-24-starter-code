// Get the HTML elements
let image = document.querySelector(".image");
let o1 = document.getElementById("o1");
let o2 = document.getElementById("o2");
const textElement = document.getElementById('text');

// Define the choices object  
var choices = {
    AA: {
        message: "Which genre of music are you looking for?",
        options: [
            {
                text: "Rock",
                nextKey: "AB"
            },
            {
                text: "Synthpop",
                nextKey: "AB"
            },
            {
                text: "Industrial",
                nextKey: "AB"
            },
            {
                text: "Ambient",
                nextKey: "AB"
            }
        ]
    },
    AB: {
        message: "How do you feel?",
        image: "harold.jpg",
        options: [
            {
                text: "Up",
                nextKey: "end"
            },
            {
                text: "Down",
                nextKey: "end"
            }
        ]
    },
    end: {
        message: "Thank you for playing!",
        image: "wasteland.png",
        options: []
    }
};

// Function to update the text, image, and options based on the current key
function updateScene(key) {
    var currentChoice = choices[key];
    if (!currentChoice) {
        console.error(`No choice found for key: ${key}`);
        return;
    }
    
    textElement.innerText = currentChoice.message;
    image.src = currentChoice.image;

    if (currentChoice.options.length === 0) {
        o1.style.display = 'none';
        o2.style.display = 'none';
    } else {
        o1.style.display = 'inline-block';
        o2.style.display = 'inline-block';
        o1.textContent = currentChoice.options[0].text;
        o2.textContent = currentChoice.options[1].text;
        
        // Update the click event listeners for the options
        o1.onclick = () => {
            let nextKey = currentChoice.options[0].nextKey;
            if (choices[nextKey]) {
                updateScene(nextKey);
            } else {
                console.error(`No choice found for key: ${nextKey}`);
            }
        };
        
        o2.onclick = () => {
            let nextKey = currentChoice.options[1].nextKey;
            if (choices[nextKey]) {
                updateScene(nextKey);
            } else {
                console.error(`No choice found for key: ${nextKey}`);
            }
        };
    }
}



// Initialize the first scene
updateScene("AA");
