const INPUT_CODES = [...document.querySelectorAll("input")];

INPUT_CODES.forEach((code) => {
  code.addEventListener("keyup", (e) => {
    if (e.target.value.length >= 1) {
      e.target.value = e.target.value.slice(0, 1);
    }

  if (e.target === INPUT_CODES[0]) {
    if (e.target.value.charAt(0) === "2") {
      INPUT_CODES[0].classList.remove("wrong");
      INPUT_CODES[0].classList.add("correct");
    } else {
      INPUT_CODES[0].classList.remove("correct");
      INPUT_CODES[0].classList.add("wrong");
     }
  }

  if (e.target === INPUT_CODES[1]) {
    if (e.target.value.charAt(0) === "8") {
      INPUT_CODES[1].classList.remove("wrong");
      INPUT_CODES[1].classList.add("correct");
    } else {
      INPUT_CODES[1].classList.remove("correct");
      INPUT_CODES[1].classList.add("wrong");
     }
   }

   if (e.target === INPUT_CODES[2]) {
    if (e.target.value.charAt(0) === "4") {
      INPUT_CODES[2].classList.remove("wrong");
      INPUT_CODES[2].classList.add("correct");
    } else {
      INPUT_CODES[2].classList.remove("correct");
      INPUT_CODES[2].classList.add("wrong");
     }
   }

   if (e.target === INPUT_CODES[3]) {
    if (e.target.value.charAt(0) === "4") {
      INPUT_CODES[3].classList.remove("wrong");
      INPUT_CODES[3].classList.add("correct");
    } else {
      INPUT_CODES[3].classList.remove("correct");
      INPUT_CODES[3].classList.add("wrong");
     }
   }

  if (INPUT_CODES.every(c => c.classList.contains('correct'))) {
    document.querySelector('.message').classList.add('verified')
  } else {
    document.querySelector('.message').classList.remove('verified')
  }
  });
});
