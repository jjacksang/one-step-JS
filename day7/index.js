const $app = document.getElementById("app");

const $select = document.createElement("select");
$select.id = "skills";

const $option1 = document.createElement("option");
$option1.value = "javascript";
$option1.textContent = "javascript";

const $option2 = document.createElement("option");
$option2.value = "next";
$option2.textContent = "Next.js";

const $option3 = document.createElement("option");
$option3.value = "react";
$option3.textContent = "React.js";

const $option4 = document.createElement("option");
$option4.value = "typescript";
$option4.textContent = "Typescript";

$select.appendChild($option1);
$select.appendChild($option2);
$select.appendChild($option3);
$select.appendChild($option4);

$app.appendChild($select);

$select.addEventListener("change", (event) => {
    console.log(event.target.value);
});
