const userName = prompt("Quel est votre prénom ?");
const hello = `👋 Bonjour ${userName}`;
document.body.innerHTML += `<h2>${hello}</h2>`;
const birth = prompt("Quel est votre année de naissance ?");
const age = 2023 - birth;
document.body.innerHTML += `<h3>Vous avez ${age} ans</h3>`;
