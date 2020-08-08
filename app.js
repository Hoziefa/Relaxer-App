const elements = { container: document.getElementById("container"), text: document.getElementById("text") };

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const breathAnimation = _ => {
    elements.text.textContent = "Breath in!";
    elements.container.className = "container grow";

    setTimeout(_ => {
        elements.text.textContent = "Hold!";

        setTimeout(_ => {
            elements.text.textContent = "Breath out!";

            elements.container.className = "container shrink";
        }, holdTime);
    }, breatheTime);
};
breathAnimation();

setInterval(breathAnimation, totalTime);
