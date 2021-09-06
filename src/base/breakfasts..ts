import { nanoid } from "nanoid";

export const breakfasts = [
  {
    id: nanoid(),
    title: "Завтрак для ленивых",
    description:
      "Ленивые вареники — те же галушки, только сладкие и выступающие сольно. Готовятся не дольше любой каши и в отличие от любой каши не вгоняют по утрам своим видом в тоску. Их можно подавать с любимым вареньем, домашним мармеладом, деревенской сметаной или любым сиропом. А можно просто полить растопленным сливочным маслом — все равно будет вкусно.",
    link: "https://eda.ru/recepty/zavtraki/zavtrak-dlja-lenivih-21975",
    ingredients: [
      "Куриное яйцо",
      "Мягкий творог",
      "Пшеничная мука",
      "Сахар",
      "Соль",
    ],
    time: 15,
    steps: [
      "В широкую миску выложить творог, добавить яйцо, сахар и муку и вилкой смешать до однородной консистенции. Если масса получилась слишком липкой, добавить еще муки, но не больше половины столовой ложки.",
      "Посыпать стол небольшим количеством муки и выложить творожную массу. Разделить на две равные части и из каждой скатать колбаски одинаковой толщины.",
      "Острым ножом нарезать колбаски на небольшие одинаковые кусочки. При желании можно слегка приплюснуть затем каждый кусочек и придать ему округлую форму.",
      "В небольшой кастрюле довести до кипения воду. Аккуратно один за другим опустить вареники в кипящую воду. Варить, слегка помешивая шумовкой, пока все вареники не всплывут на поверхность, плюс еще минуту.",
      "Готовые вареники выложить из кастрюли на тарелки и полить вареньем, например абрикосовым. Подавать их можно горячими или теплыми.",
    ],
    matchRatio: 0,
  },
  {
    id: nanoid(),
    title: "Гречневый завтрак",
    description:
      "И без того вкусная гречка оказывается в компании душистых трав: кинзы, петрушки и сельдерея. Оливковое масло, упомянутое в рецепте, должно быть вкусным — как минимум extra virgin.",
    link: "https://eda.ru/recepty/zavtraki/grechnevij-zavtrak-22397",
    ingredients: [
      "Гречневая крупа",
      "Рубленая петрушка",
      "Рубленная кинза (кориандр)",
      "Рубленный стебель сельдерея",
      "Лимон",
      "Оливковое масло",
      "Соевый соус",
    ],
    time: 80,
    steps: [
      "Гречку промыть, залить 2 стаканами кипятка, посолить, накрыть крышкой и укрыть полотенцем. Через 45-60 минут, гречку можно будет есть, не потеряв никакой пищевой ценности. Это лучше сделать на ночь.",
      "Необходимое количество запаренной гречки в порционной тарелке заправить оливковым масло, соевым соусом, лимонным соком или порубленным лимоном и нашинкованной зеленью, перемешать.",
      "Подавать с нарезанными овощами, такими как болгарский перец, морковь, тыква, редис и зеленым коктейлем.",
    ],
    matchRatio: 0,
  },
  {
    id: nanoid(),
    title: "Французский завтрак",
    description: "",
    link: "https://eda.ru/recepty/zavtraki/francuzskij-zavtrak-30669",
    ingredients: ["Белый хлеб", "Молоко", "Кардамон"],
    time: 15,
    steps: [
      "Молоко, кардамон и мякоть банана смешать в блендере.",
      "Кусочки хлеба или булки обмакнуть в получившуюся смесь с обеих сторон и запечь в духовке.",
    ],
    matchRatio: 0,
  },
  {
    id: nanoid(),
    title: "Низкокалорийный завтрак",
    description: "",
    link: "https://eda.ru/recepty/zavtraki/nizkokalorijnij-zavtrak-21255",
    ingredients: [
      "Зеленый салат",
      "Куриное яйцо",
      "Помидоры",
      "Черемша",
      "Российский сыр",
      "Соль",
    ],
    time: 10,
    steps: [
      "Яйцо сварить вкрутую. Сыр и помидоры порезать.",
      "Смешать ингредиенты.",
      "Посолить по вкусу.",
    ],
    matchRatio: 0,
  },
  {
    id: nanoid(),
    title: "Французские гренки к завтраку",
    description: "",
    link: "https://eda.ru/recepty/zavtraki/francuzskie-grenki-k-zavtraku-32744",
    ingredients: [
      "Батон",
      "Молоко",
      "Куриное яйцо",
      "Соль",
      "Растительное масло",
    ],
    time: 10,
    steps: [
      "Смешать яйцо с молоком. Посолить.",
      "Обмакнуть кусочки батона в яичную смесь с двух сторон.",
      "Обжарить на растительном масле с двух сторон.",
    ],
    matchRatio: 0,
  },
  {
    id: nanoid(),
    title: "Полный английский завтрак",
    description: "",
    link: "https://eda.ru/recepty/zavtraki/polnij-anglijskij-zavtrak-20740",
    ingredients: [
      "Куриное яйцо",
      "Свиные сосиски",
      "Кровяная колбаса",
      "Помидоры",
      "Шампиньоны",
      "Фасоль в томатном соусе",
      "Бекон",
      "Молоко",
      "Сливочное масло",
      "Хлеб для тостов",
      "Соль",
      "Растительное масло",
      "Молотый черный перец",
      "Коричневый соус HP",
    ],
    time: 15,
    steps: [
      "Разогреть духовку до 180 градусов, а сковороду-гриль — раскалить.",
      "Плеснуть на сковороду немного растительного масла и обжарить на нем свиные сосиски (сосиски должны быть в натуральной оболочке, начиненной грубоватым фаршем с ароматом шалфея; такие, случается, продают в супермаркетах «Азбука вкуса» и «Глобус Гурмэ», причем именно британского производства или по британской технологии. Если не найдутся сосиски с запахом шалфея, пользуйтесь другими свиными).",
      "Как только сосиски зарумянятся (если так можно сказать о предметах, которые станут коричневеть), их надо переложить на противень, а противень поставить в духовку на десять минут.",
      "А на сковороду бросить тонкие ломтики бекона и жарить их, переворачивая, пока бекон не превратится практически в свиной чипс. Тогда бекон нужно выловить из сковородки и положить на бумажное полотенце, чтобы с бекона стек лишний жир (в общем, щепетильность, конечно, странная, учитывая жировое содержание этого завтрака, но так многие делают, возможно, не столько из-за диетических, сколько из эстетических соображений: чтобы с чипсов из бекона не стекали бурые жироподтеки).",
      "На остатках жира от бекона и сосисок теперь нужно обжарить помидор, с которого срезана та часть, которую в русском народе называют попкой.",
      "В компанию к помидору надо бросить фасоль в томатном соусе, просто зачерпнув ее из банки, на оставшемся месте расположить грибы, нарезанные на половинки, и ломтики кровяной колбасы. Все это жарят, время от времени помешивая или переворачивая.",
      "Параллельно нужно слегка взбить яйца с молоком, солью и молотым черным перцем. Разогреть еще одну сковородку (не гриль, обычную плоскую или неглубокий сотейник) со сливочным маслом и перелить в сковороду яичную смесь. Жарить ее, непрерывно помешивая, чтобы тонкая пленка яйца свора­чи­валась в желтую комковатую массу. Как только не останется жидкости в сковороде и вся смесь станет однородной яичницей-болтуньей, надо снять сковороду с огня.",
      "На большую тарелку выложить яичницу. Извлечь из духовки сосиски и положить их на эту же тарелку. Туда же отправить помидор, фасоль, шампиньоны, ­бекон, кровяную колбасу и ломтик-другой белого хлеба. Налить на тарелку коричневого соуса и подавать. В качестве напитка к такому завтраку, кажется, подходит только эль или портер. По крайней мере во времена королевы Виктории, когда сложился этот канон, утром пили именно их.",
    ],
    matchRatio: 0,
  },
  {
    id: nanoid(),
    title: "Крестьянский завтрак",
    description: "",
    link: "https://eda.ru/recepty/zavtraki/krestjanskij-zavtrak-15153",
    ingredients: [
      "Вареная колбаса",
      "Копченая корейка",
      "Репчатый лук",
      "Куриное яйцо",
      "Молоко",
      "Картофель",
      "Сливочное масло",
      "Соленые огурцы",
      "Зеленый лук",
      "Соль",
    ],
    time: 30,
    steps: [
      "Корейку, колбасу и очищенный лук нарезать кубиками и обжарить.",
      "Отварить картофель, очистить и нарезать ломтиками, обжарить на сливочном масле. Сложить все вместе на сковороду.",
      "Яйца смешать с молоком, слегка взбить, посолить и смесь вылить на сковороду с картофелем и колбасой, поставить в нагретую духовку, запечь.",
      "Подавая на стол, посыпать нарезанным зеленым луком. Отдельно подать соленые огурцы.",
    ],
    matchRatio: 0,
  },
  {
    id: nanoid(),
    title: "Творожные булочки на завтрак",
    description: "",
    link: "https://eda.ru/recepty/zavtraki/tvorozhnie-bulochki-na-zavtrak-36260",
    ingredients: [
      "Куриное яйцо",
      "Сахар",
      "Соль",
      "Ванильный сахар",
      "Разрыхлитель",
      "Молоко",
      "Пшеничная мука",
      "Мягкий творог",
    ],
    time: 20,
    steps: [
      "Творог, яйца, сахар, ванильный сахар и соль размешать венчиком до однородности. Просеять муку с разрыхлителем и замесить мягкое, липучее тесто.",
      "Противень застелить пекарской бумагой и смазать подсолнечным маслом.",
      "Влажными руками сформировать булочки, выложить на противень и запекать в предварительно разогретой духовке при 190 градусах примерно 12 минут.",
      "Потом достать булочки, смазать молоком (кисточкой), кто желает, можно посыпать немного сахаром и опять отправить в духовку на 3–5 минут, до зарумянивания.",
    ],
    matchRatio: 0,
  },
  {
    id: nanoid(),
    title: "Полезный завтрак",
    description: "",
    link: "https://eda.ru/recepty/zavtraki/poleznij-zavtrak-22515",
    ingredients: ["Овес", "Семена льна", "Геркулес", "Клюква"],
    time: 545,
    steps: [
      "Все ингредиенты поместить в термос, залить ½ стакана кипятка и оставить на ночь.",
      "Утром перемолоть запаренные злаки блендером до однородного состояния, при желании добавить банан.",
    ],
    matchRatio: 0,
  },
  {
    id: nanoid(),
    title: "Завтрак со стейком",
    description: "",
    link: "https://eda.ru/recepty/zavtraki/zavtrak-so-steykom-125170",
    ingredients: [
      "Говяжий стейк",
      "Куриное яйцо",
      "Сливочное масло",
      "Растительное масло",
      "Репчатый лук",
      "Авокадо",
      "Кинза",
      "Лечо",
      "Помидоры",
      "Молотый черный перец",
      "Соль",
    ],
    time: 20,
    steps: [
      "Авокадо очистить, удалить косточку и разрезать на 4 дольки. Обжарить на сковороде в растительном масле.",
      "Стейк обжарить с двух сторон на сильном огне, потом довести до готовности в духовке (время будет зависеть от толщины мяса). Лучше взять два стейка потоньше, чтобы приготовить быстрее.",
      "Лук мелко нарезать, обжарить на сливочном масле до золотистого цвета, положить нарезанный помидор, через 1–2 минуты добавить лечо, прогреть. Сделать три «гнезда», выпустить в них яйца, посолить, поперчить и готовить на маленьком огне.",
      "Нарезать стейк и выложить в сковороду, сверху разложить авокадо. Подавать с хлебом и зеленью.",
    ],
    matchRatio: 0,
  },
  {
    id: nanoid(),
    title: "Легкий завтрак",
    description: "",
    link: "https://eda.ru/recepty/zavtraki/legkiyzavtrak-50558",
    ingredients: [
      "Помидоры",
      "Куриное яйцо",
      "Сыр моцарелла",
      "Растительное масло",
      "Морская соль",
      "Прованские травы",
    ],
    time: 20,
    steps: [
      "Помидоры вымыть, срезать верхушку так, чтобы сами помидоры остались целыми. Чайной ложкой вынуть мякоть, вбить в каждый помидор по яйцу.",
      "Заготовки посолить и посыпать специями, положить на каждый по шарику моцареллы. Выложить помидоры на противень и поставить в духовку. Запекать 10 минут в хорошо разогретой духовке. Шпинат слегка поджарить на растительном масле и подать как гарнир.",
    ],
    matchRatio: 0,
  },
];

/*
{
    id: nanoid(),
    title: "",
    description:
      "",
    link: "",
    ingredients: [
      "",
      "",
      "",
      "",
      "",
    ],
    time: 15,
    steps: [
      "",
      "",
      "",
      "",
      "",
    ],
    matchRatio: 0,
  },
 */
