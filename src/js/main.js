var rates = {
  modalClose: document.getElementById('modal--close'),
  getElementId: function(idName) {
    return document.getElementById(idName);
  },
  getElementClassName: function(className) {
    return document.getElementsByClassName(className);
  },
  eventHandler: function(element, handler, callback) {
    element.addEventListener(handler, callback, false);
  },
  removeClasses: function(elements, className) {
    var elems = this.getElementClassName(elements);
    console.log(elems);
    for (var i = 0; i < elems.length; i++) {
      elems[i].classList.remove(className);
    }
  },
  addClass: function(element, className) {
    element.classList.add(className);
  },
  toggleClass: function(element, className) {
    element.classList.toggle(className);
  },
  removeAttr: function(elements, attribute, value) {
    var elems = this.getElementClassName(elements);
    console.log(elems);
    for (var i = 0; i < elems.length; i++) {
      elems[i].setAttribute(attribute, value);
    }
  },
  closeModal: function() {
    document.body.classList.remove('modal--open');
    document.getElementById('modal').classList.remove('open');
  },
  openModal: function(modal, elements, className) {
    document.body.classList.add('modal--open');
    this.removeClasses(elements, className);
    document.getElementById('modal').classList.add('open');
    this.addClass(modal, className);
  },
  accordion: function(element, elements, className, toggle) {
    this.removeClasses(elements, className);
    this.removeAttr(toggle, 'aria-hidden', true);
    this.addClass(element, className);
    element.nextElementSibling.setAttribute('aria-hidden', false);
  }
}

var childcare = rates.getElementId('rate--1');
rates.eventHandler(childcare, 'click', function() {
  var modal = rates.getElementId('modal--childcare');
  rates.openModal(modal, 'modal', 'active');
});

var seniorcare = rates.getElementId('rate--2');
rates.eventHandler(seniorcare, 'click', function() {
  var modal = rates.getElementId('modal--seniorcare');
  rates.openModal(modal, 'modal', 'active');
});

var keypoints = rates.getElementClassName('modal__keypoints');
for (var i = 0; i < keypoints.length; i++) {
  var keypoint = keypoints[i];
  rates.eventHandler(keypoint, 'click', function(event) {
    if (!event.target.classList.contains('active')) {
      rates.accordion(event.target, 'modal__keypoints', 'active', 'modal__description');
    } else {
      event.target.classList.remove('active');
      event.target.nextElementSibling.setAttribute('aria-hidden', true);
    }
  });
}

rates.eventHandler(rates.modalClose, 'click', function() {
  rates.removeClasses('modal-service', 'active');
  rates.closeModal();
});
