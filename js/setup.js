'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

document.querySelector('.setup-similar').classList.remove('hidden');

var randomName;
var randomSurname;
var randomCoat;
var randomEyes;
var wizard;
var wizards = [];

function generateData() {
  for (var i = 0; i < 4; i++) {

    randomName = Math.floor(Math.random() * WIZARD_NAMES.length);
    randomSurname = Math.floor(Math.random() * WIZARD_SURNAMES.length);
    randomCoat = Math.floor(Math.random() * COAT_COLOR.length);
    randomEyes = Math.floor(Math.random() * EYES_COLOR.length);

    wizard = {
      name: WIZARD_NAMES[randomName] + ' ' + WIZARD_SURNAMES[randomSurname],
      coatColor: COAT_COLOR[randomCoat],
      eyesColor: EYES_COLOR[randomEyes]
    };

    wizards[i] = wizard;
  }
}

generateData();

var wizardElement;

function renderWizard() {
  for (var i = 0; i < 4; i++) {
    wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    similarListElement.appendChild(wizardElement);
  }
}

function render() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
}
render();

userDialog.querySelector('.setup-similar').classList.remove('hidden');
