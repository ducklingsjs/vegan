function scrapeRestaurant(restaurantInfo, sectionInfo) {
  const name = document.querySelector(
    'h1[class^="VenueHeroBanner__Title"]'
  ).textContent;
  const address = [
    document.querySelector('div[class^="VenueSideInfo-module__primary"]')
      .textContent,
    document.querySelector('div[class^="VenueSideInfo-module__secondary"]')
      .textContent,
  ].join(", ");
  const description = document.querySelector(
    'p[class^="VenueHeroBanner__Description"]'
  ).textContent;

  const mealsPerSection = sectionInfo.map(([number, tags]) => scrapeSection(number, tags));

  return {
    name,
    description,
    address,
    ...restaurantInfo,
    meals: [].concat.apply([], mealsPerSection),
  };
}

function scrapeSection(sectionNumber, sectionTags) {
  const sectionElement = document.querySelector(
    `div[class^="Menu-module__area"] div section:nth-of-type(${sectionNumber})`
  );
  return Array.from(sectionElement.querySelectorAll('div[role="listitem"')).map(
    (element) => getMealInfo(element, sectionTags)
  );
}

function getMealInfo(mealElement, sectionTags) {
  const tags = [];
  const name = mealElement.querySelector(
    'p[data-test-id="menu-item.name"]'
  ).textContent;
  const description = mealElement.querySelector(
    'p[class^="MenuItem-module__description"]'
  ).textContent;
  const price = parseFloat(
    mealElement
      .querySelector('span[class^="MenuItem-module__price"]')
      .textContent.replace("HRK ", "")
  );
  const image = mealElement
    .querySelector('div[class^="ImageWithTransition-module__image"]')
    .style.backgroundImage.split('"')[1];

  if (sectionTags.length) {
    tags.push(...sectionTags);
  }

  if (price < 30) {
    tags.push("CHEAP");
  } else if (price > 50) {
    tags.push("EXPENSIVE");
  } else {
    tags.push("REGULAR");
  }

  if (name.toLowerCase().includes("vege") && !tags.includes("VEGETERIAN")) {
    tags.push("VEGETERIAN");
  }

  if (name.toLowerCase().includes("vegan") && !tags.includes("VEGAN")) {
    tags.push("VEGAN");
  }

  if (
    !tags.includes("WOK") &&
    (name.toLowerCase().includes("wok") ||
      description.toLowerCase().includes("wok"))
  ) {
    tags.push("WOK");
  }

  return { tags, name, description, price, image };
}

copy(scrapeRestaurant(restaurantInfo, sectionInfo));
