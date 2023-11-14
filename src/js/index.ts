import getWeather from "./modules/getWeather";
import showForecast from "./modules/showForecast";
import showInfo from "./modules/showInfo";

const formElement = document.querySelector("#form") as HTMLFormElement;
const homePage = document.querySelector(".main_page_wrapper") as HTMLElement;
const infoPage = document.querySelector("section:last-child") as HTMLElement;
const homePageIcon = document.querySelector(
  "main > section:first-of-type > div"
) as HTMLElement;

homePageIcon.addEventListener("click", () => {
  infoPage.style.display = "none";
  homePage.style.display = "flex";
});

formElement.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault();

  const formData = new FormData(formElement);
  const city: string | undefined = formData.get("city")?.toString().trim();

  if (!city) return;

  const data = await getWeather(city);

  if (data) {
    homePage.style.display = "none";
    infoPage.style.display = "flex";
    const { location, current, forecast } = data;
    showInfo({ location, current });
    showForecast(forecast);
    (document.querySelector("#input") as HTMLInputElement).value = "";
  }
});