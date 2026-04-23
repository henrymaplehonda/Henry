document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav[data-shared]');
  if (nav) {
    nav.innerHTML = `
      <div class="logo">
        <img src="honda-logo.png" alt="Honda Logo">
        <div class="logo-text"><span class="maple-red">Maple</span> Honda</div>
      </div>
      <div class="nav-links">
        <a class="hide-mobile" href="index.html#why">Why Henry</a>
        <a class="hide-mobile" href="index.html#vehicles">Models</a>
        <a href="index.html#blog">Blog</a>
        <a href="tel:6475236878">647-523-6878</a>
      </div>`;
  }

  const footer = document.querySelector('footer[data-shared]');
  if (footer) {
    footer.innerHTML = `Henry Chen - Sales Consultant | Maple Honda | 89 Auto Vaughan Dr, Maple, ON L6A 4A1<br>
      &#128222; 647-523-6878 | henry@maplehonda.com`;
  }
});
