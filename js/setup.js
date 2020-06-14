'use strict';

var userDialog = document.querySelector('.setup');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = [];
var RANDOM_NAME;
var WIZARD_SURNAMES = [];
var RANDOM_SURNAME;
var COAT_COLOR = [];
var RANDOM_COAT_COLOR;
var EYES_COLOR = [];
var RANDOM_EYES_COLOR;
var wizards = [];
var wizardElement;

function showBlock() {
  userDialog.classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
}

showBlock();

function renderWizard() {

  for (var i = 0; i < 4; i++) {
    WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    RANDOM_NAME = Math.floor(Math.random() * WIZARD_NAMES.length);

    WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    RANDOM_SURNAME = Math.floor(Math.random() * WIZARD_SURNAMES.length);

    COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    RANDOM_COAT_COLOR = Math.floor(Math.random() * COAT_COLOR.length);

    EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
    RANDOM_EYES_COLOR = Math.floor(Math.random() * EYES_COLOR.length);

    wizards = [
      {
        name: WIZARD_NAMES[RANDOM_NAME] + ' ' + WIZARD_SURNAMES[RANDOM_SURNAME],
        coatColor: COAT_COLOR[RANDOM_COAT_COLOR],
        eyesColor: EYES_COLOR[RANDOM_EYES_COLOR]
      },
      {
        name: WIZARD_NAMES[RANDOM_NAME] + ' ' + WIZARD_SURNAMES[RANDOM_SURNAME],
        coatColor: COAT_COLOR[RANDOM_COAT_COLOR],
        eyesColor: EYES_COLOR[RANDOM_EYES_COLOR]
      },
      {
        name: WIZARD_NAMES[RANDOM_NAME] + ' ' + WIZARD_SURNAMES[RANDOM_SURNAME],
        coatColor: COAT_COLOR[RANDOM_COAT_COLOR],
        eyesColor: EYES_COLOR[RANDOM_EYES_COLOR]
      },
      {
        name: WIZARD_NAMES[RANDOM_NAME] + ' ' + WIZARD_SURNAMES[RANDOM_SURNAME],
        coatColor: COAT_COLOR[RANDOM_COAT_COLOR],
        eyesColor: EYES_COLOR[RANDOM_EYES_COLOR]
      },
    ];

    wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    similarListElement.appendChild(wizardElement);
  }
}

renderWizard();

var renderElement = function (wizard) {
  wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
};

renderElement();

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
