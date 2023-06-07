function askName() {
  const userName = prompt("Quel est votre prénom ?");
  const hello = `👋 Bonjour ${userName}`;
  document.body.innerHTML += `<h2>${hello}</h2>`;
}

function askBirthYear() {
  const arrOfMonths = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  const birth = prompt("Quel est votre année de naissance ?");
  const month = prompt("Quel est votre mois de naissance ?");

  let age = 2023 - birth;

  if (
    arrOfMonths.includes(month.toLowerCase()) &&
    arrOfMonths.indexOf(month.toLowerCase()) + 1 >= 6
  )
    age--;
  document.body.innerHTML += `<h3>Vous avez ${age} ans</h3>`;
}

askName();
askBirthYear();
