const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    var json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Algo salió mal, intenta nuevamente!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

ScrollReveal().reveal('#aboutMe', { delay: 150 });
ScrollReveal().reveal('#aboutMe', { duration: 2000 });
ScrollReveal().reveal('#aboutMe', { origin: 'left' });
ScrollReveal().reveal('#aboutMe', { distance: '50px' });

ScrollReveal().reveal('#about', { delay: 150 });
ScrollReveal().reveal('#about', { duration: 2000 });
ScrollReveal().reveal('#about', { distance: '50px' });

ScrollReveal().reveal('#profile', { delay: 150 });
ScrollReveal().reveal('#profile', { duration: 2000 });
ScrollReveal().reveal('#profile', { distance: '50px' });

ScrollReveal().reveal('#exp', { delay: 150 });
ScrollReveal().reveal('#exp', { duration: 2000 });
ScrollReveal().reveal('#exp', { origin: 'left' });
ScrollReveal().reveal('#exp', { distance: '50px' });

ScrollReveal().reveal('#expList', { delay: 150 });
ScrollReveal().reveal('#expList', { duration: 2000 });
ScrollReveal().reveal('#expList', { distance: '50px' });

ScrollReveal().reveal('#work', { delay: 150 });
ScrollReveal().reveal('#work', { duration: 2000 });
ScrollReveal().reveal('#work', { origin: 'left' });
ScrollReveal().reveal('#work', { distance: '50px' });

ScrollReveal().reveal('#workTarget', { delay: 150 });
ScrollReveal().reveal('#workTarget', { duration: 2000 });
ScrollReveal().reveal('#workTarget', { origin: 'top' });
ScrollReveal().reveal('#workTarget', { distance: '50px' });

ScrollReveal().reveal('#workTarget2', { delay: 150 });
ScrollReveal().reveal('#workTarget2', { duration: 2000 });
ScrollReveal().reveal('#workTarget2', { origin: 'top' });
ScrollReveal().reveal('#workTarget2', { distance: '50px' });

ScrollReveal().reveal('#workTarget3', { delay: 150 });
ScrollReveal().reveal('#workTarget3', { duration: 2000 });
ScrollReveal().reveal('#workTarget3', { origin: 'top' });
ScrollReveal().reveal('#workTarget3', { distance: '50px' });

ScrollReveal().reveal('#workTarget4', { delay: 150 });
ScrollReveal().reveal('#workTarget4', { duration: 2000 });
ScrollReveal().reveal('#workTarget4', { origin: 'top' });
ScrollReveal().reveal('#workTarget4', { distance: '50px' });

ScrollReveal().reveal('#workTarget5', { delay: 150 });
ScrollReveal().reveal('#workTarget5', { duration: 2000 });
ScrollReveal().reveal('#workTarget5', { origin: 'top' });
ScrollReveal().reveal('#workTarget5', { distance: '50px' });

ScrollReveal().reveal('#contact', { delay: 150 });
ScrollReveal().reveal('#contact', { duration: 2000 });
ScrollReveal().reveal('#contact', { origin: 'top' });
ScrollReveal().reveal('#contact', { distance: '50px' });

ScrollReveal().reveal('#listFooter', { delay: 150 });
ScrollReveal().reveal('#listFooter', { duration: 2000 });
ScrollReveal().reveal('#ListFooter', { distance: '50px' });

ScrollReveal().reveal('#footerName', { delay: 150 });
ScrollReveal().reveal('#footerName', { duration: 2000 });
ScrollReveal().reveal('#footerName', { distance: '50px' });

ScrollReveal().reveal('header', { delay: 50 });
ScrollReveal().reveal('header', { duration: 1000 });
ScrollReveal().reveal('header', { origin: 'top' });
ScrollReveal().reveal('header', { distance: '50px' });