// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//         document.getElementById("header").classList.add('scroll-shrink');
//     } else {
//         document.getElementById("header").classList.remove('scroll-shrink');
//     }
// }

function showPopUp(event) {
    event.preventDefault();
    document.body.classList.add('show-popup');
}

function hidePopUp() {
    document.body.classList.remove('show-popup');
}

document.getElementById('modal').addEventListener('click', hidePopUp);

const triggers = document.getElementsByClassName('trigger-popup');
for (let trigger of triggers) {
    trigger.addEventListener('click', showPopUp);
}

