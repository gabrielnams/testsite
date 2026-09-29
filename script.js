// Edit this object to rebrand the page and update its destination list.
const SITE_CONFIG = {
  brand: "Global Career Network",
  monogram: "GCN",
  tagline: "Global opportunities for everyone",
  pageDescription: "Find a clearer route to international work and visa opportunities.",
  contactEmail: "hello@globalcareernetwork.com",
  heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
  destinations: ["USA", "UK", "Canada", "Germany", "Luxembourg", "Netherlands", "Turkey", "Australia", "New Zealand", "Finland"]
};

const destinationGrid = document.querySelector("[data-destination-grid]");
const destinationSelect = document.querySelector("#app-destination");

document.querySelectorAll("[data-brand]").forEach((element) => {
  element.textContent = SITE_CONFIG.brand;
});
document.querySelector("[data-brand-short]").textContent = SITE_CONFIG.brand;
document.querySelectorAll(".brand").forEach((link) => {
  link.setAttribute("aria-label", `${SITE_CONFIG.brand} home`);
});
document.querySelector("[data-monogram]").firstChild.textContent = SITE_CONFIG.monogram;
document.querySelector("[data-tagline]").textContent = SITE_CONFIG.tagline;
document.title = `${SITE_CONFIG.brand} | ${SITE_CONFIG.tagline}`;
document.querySelector('meta[name="description"]').content = SITE_CONFIG.pageDescription;
document.querySelector("[data-hero-image]").src = SITE_CONFIG.heroImage;
document.querySelector("[data-destination-count]").textContent = SITE_CONFIG.destinations.length;
document.querySelector("[data-year]").textContent = new Date().getFullYear();
document.querySelectorAll("[data-contact-link]").forEach((link) => {
  link.href = `mailto:${SITE_CONFIG.contactEmail}`;
});

SITE_CONFIG.destinations.forEach((destination) => {
  const link = document.createElement("a");
  link.className = "destination-link";
  link.href = "#application";
  link.innerHTML = `<span class="destination-name"></span><span class="destination-arrow" aria-hidden="true">↗</span>`;
  link.querySelector(".destination-name").textContent = destination;
  link.addEventListener("click", () => {
    destinationSelect.value = destination;
  });
  destinationGrid.append(link);

  const option = document.createElement("option");
  option.value = destination;
  option.textContent = destination;
  destinationSelect.append(option);
});

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  siteNav.classList.toggle("is-open", !isOpen);
});
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    siteNav.classList.remove("is-open");
  });
});

const applicationDialog = document.querySelector(".application-dialog");
const applicationForm = document.querySelector(".application-form");
document.querySelectorAll("[data-open-application]").forEach((button) => {
  button.addEventListener("click", () => applicationDialog.showModal());
});
document.querySelector(".dialog-close").addEventListener("click", () => applicationDialog.close());
applicationDialog.addEventListener("click", (event) => {
  if (event.target === applicationDialog) applicationDialog.close();
});
applicationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(applicationForm);
  const subject = encodeURIComponent(`Career pathway enquiry from ${formData.get("name")}`);
  const body = encodeURIComponent(`Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nDestination: ${formData.get("destination")}\n\nI would like to learn more about my options.`);
  document.querySelector(".form-status").textContent = "Opening a new email draft. Your details are not stored on this website.";
  window.location.href = `mailto:${SITE_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
});