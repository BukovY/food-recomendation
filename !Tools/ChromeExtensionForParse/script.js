const getTags =
  '<button id="getTags" style="position: fixed; top: 0px; left: 5vw; z-index: 50000;background-color: white;padding: 10px 10px;font-size: 16px;color: black;">Получить заголовки</button>';
jQuery("body").append(getTags);

jQuery("#getTags").click(function () {
  let obg = {
    id: Math.random().toString(36).substring(7),
    title: getStringFromTag("h1"),
    energyValue: {
      cCal: parseInt(getStringFromItemProp("calories")),
      protein: parseInt(getStringFromItemProp("proteinContent")),
      fat: parseInt(getStringFromItemProp("fatContent")),
      carbohydrate: parseInt(getStringFromItemProp("carbohydrateContent")),
    },
    category: getStringFromItemPropArr("itemListElement"),
    link: window.location.href,
    ingredients: getStringFromItemPropArr("recipeIngredient"),
    time: 15,
    steps: getRecipeSteps(),
    matchRatio: 0,
  };

  copyToClipboard(JSON.stringify(obg));
});

function copyToClipboard(string) {
  navigator.clipboard
    .writeText(string)
    .then(() => {
      alert(`Скопировано!`);
    })
    .catch((error) => {
      alert(`Чтото пошло не так! ${error}`);
    });
}

function getStringFromTag(id) {
  if (jQuery(id)) {
    for (let i of jQuery(id)) {
        return i.innerText;
    }
  }
  return "";
}

function getStringFromItemProp(id) {
  if (jQuery(`[itemprop="${id}"]`)) {
    return jQuery(`[itemprop="${id}"]`)[0].innerText;
  }
  return 0;
}

function getStringFromItemPropArr(id) {
  if (jQuery(`[itemprop="${id}"]`)) {
    let arr = [];
    for (let i of jQuery(`[itemprop="${id}"]`)) {
      arr.push(firstLetterToUpperCase(i.innerText.toLowerCase()));
    }
    return arr;
  }
  return [];
}

function firstLetterToUpperCase(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function getRecipeSteps() {
  let parseArr = jQuery(`[itemprop="recipeInstructions"]`);
  let arr = [];
  for (let i of parseArr) {
    arr.push(cutStep(i.innerText));
  }
  return arr;
}

function cutStep(str) {
  let endIndex = str.indexOf("\n");
  if (endIndex !== -1) {
    str = str.slice(0, endIndex);
  }
  return str.slice(2);
}
