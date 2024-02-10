// Select the download number
const DOWNLOAD_NUMS = [...document.querySelectorAll(".download")];
const PLAN = document.querySelector('h2');
const PRICE = document.querySelector('span');
let selectedNum = "10";

DOWNLOAD_NUMS.forEach((d) => {
  d.addEventListener("click", (e) => {
    DOWNLOAD_NUMS.forEach((num) => {
      num.classList.remove("selected");
    });

    d.classList.add("selected");

    selectedNum = d.querySelector('.download-num').textContent;

    // Update the plan (icon container) and price
    switch(selectedNum) {
      case "10":
        PLAN.textContent = "BASIC";
        PRICE.textContent = "$25";
        break;
      case "25":
        PLAN.textContent = "BRONZE";
        PRICE.textContent = "$30";
        break;
      case "50":
        PLAN.textContent = "SILVER";
        PRICE.textContent = "$40";
        break;
      case "100":
        PLAN.textContent = "GOLD";
        PRICE.textContent = "$50";
        break;
      default:
        PLAN.textContent = "BASIC";
        PRICE.textContent = "$25";
    }
  });
});

// Click subscribe
const SUBSCRIBE_BTN = document.querySelector('button');
const SUBSCRIPTION_CONTAINER = document.querySelector('.subscription-container');
const SUBSCRIBED_SECTION = document.querySelector('.subscribed');

SUBSCRIBE_BTN.addEventListener("click", () => {
  SUBSCRIPTION_CONTAINER.style.display = "none";

  SUBSCRIBED_SECTION.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg><p>You have successfully subscribed to the <span>${PLAN.textContent}</span> plan!</p>
  <p>You will get <span>${selectedNum}</span> downloads per month.</p>
  `;
  SUBSCRIBED_SECTION.style.display = "flex";

  // Close the message - go back to the main section
  const CLOSE_BTN = document.querySelector('.icon-tabler-x');

  CLOSE_BTN.addEventListener("click", () => {
    SUBSCRIBED_SECTION.style.display = "none";
    SUBSCRIPTION_CONTAINER.style.display = "flex";
  })
})


