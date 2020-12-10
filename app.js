const share = document.querySelector('.share-img');
const social = document.querySelector('.social-bar');

share.addEventListener('click', function() {
  social.classList.toggle('active');
});