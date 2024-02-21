const BILLING_DROPDOWN = document.querySelector(".billing h2");
const BILLING_INFO = document.querySelector(".billing-info");
const BILLING_CHEVRON = BILLING_DROPDOWN.querySelector(".icon-tabler");
const INVOICES_DROPDOWN = document.querySelector(".invoices h2");
const INVOICES_LIST = document.querySelector(".invoices-list");
const INVOICES_CHEVRON = INVOICES_DROPDOWN.querySelector(".icon-tabler");
const BREADCRUMBS = [...document.querySelectorAll(".breadcrumbs ul li p")];

function openSection(section, chevron, crumb) {
  BREADCRUMBS.forEach((crumb) => {
    crumb.classList.remove("active");
  });

  if (crumb === "billing" && section.classList.contains("open")) {
    section.classList.toggle("open");
    chevron.classList.toggle("open-chevron");
    document.querySelector(
      `.section-name-${crumb}`
    ).parentElement.style.visibility = "hidden";
    document.querySelector(
      `.section-name-invoices`
    ).parentElement.style.visibility = "hidden";
    document.querySelector(`.section-name-${crumb}`).classList.remove("active");
    document.querySelector(`.section-name-account`).classList.add("active");

    if (INVOICES_LIST.classList.contains('open')) {
      INVOICES_CHEVRON.classList.toggle('open-chevron');
      INVOICES_LIST.classList.toggle('open');
    }
  } else if (crumb === "billing" && !section.classList.contains("open")) {
    section.classList.toggle("open");
    chevron.classList.toggle("open-chevron");
    document.querySelector(`.section-name-${crumb}`).classList.add("active");
    document.querySelector(
      `.section-name-${crumb}`
    ).parentElement.style.visibility = "visible";
    INVOICES_LIST.parentElement.classList.toggle("open");
  }

  if (crumb === "invoices" && section.classList.contains("open")) {
    section.classList.toggle("open");
    chevron.classList.toggle("open-chevron");
    document.querySelector(
      `.section-name-${crumb}`
    ).parentElement.style.visibility = "hidden";
    document.querySelector(
      `.section-name-billing`
    ).parentElement.classList.add('active');
  } else if (crumb === "invoices" && !section.classList.contains("open")) {
    section.classList.toggle("open");
    chevron.classList.toggle("open-chevron");
    document.querySelector(`.section-name-${crumb}`).classList.add("active");
    document.querySelector(
      `.section-name-billing`
    ).parentElement.classList.remove('active');
    document.querySelector(
      `.section-name-${crumb}`
    ).parentElement.style.visibility = "visible";
  }
}

// Open billing section
BILLING_DROPDOWN.addEventListener("click", () =>
  openSection(BILLING_INFO, BILLING_CHEVRON, "billing")
);

// Open invoices section
INVOICES_DROPDOWN.addEventListener("click", () =>
  openSection(INVOICES_LIST, INVOICES_CHEVRON, "invoices")
);
