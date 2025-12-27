// Mobile Menu Toggle logic 
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // আইকন পরিবর্তন (bars থেকে x-mark)
    const icon = menuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.replace('fa-xmark', 'fa-bars');
    } else {
        icon.classList.add('fa-xmark');
        icon.classList.remove('fa-bars');
    }
});

// মেনু লিঙ্ক ক্লিক করলে মেনু বন্ধ হওয়া
const navLinks = mobileMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
    });
});
