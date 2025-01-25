const titles = "HBD DEKKK".split('');
const titleElement = document.getElementById('title');
const pesanElement = document.getElementById('pesan');
let index = 0;

function appendTitle() {
    titleElement.style.fontSize = '4rem';
    titleElement.style.lineHeight = '1.2';
    titleElement.style.transform = 'translateY(-15px)';
    if (index < titles.length) {
        const span = document.createElement('span');
        span.textContent = titles[index];
        span.style.setProperty('--delay', `${index * 0.2}s`);
        titleElement.appendChild(span);
        index++;
        setTimeout(appendTitle, 200);
    } else {
        setTimeout(showMessage, 5000);
    }
}

function showMessage() {
    titleElement.style.transition = 'opacity 1s ease';
    titleElement.style.opacity = 0;

    setTimeout(() => {
        titleElement.innerHTML = '';
        pesanElement.style.opacity = 1;
        pesanElement.style.fontSize = '1.1rem';
        const message = "Selamat ulang tahun dek, semoga hal baik selalu beriringan denganmu, semoga semesta senantiasa berpihak padamu, semoga jalanmu untuk mencapai masa depan yang cerah di permudah, teruslah tumbuh, teruslah melangkah & berbahagia, i will always support u from afar";
        typeMessage(message);
    }, 1000);
}

function typeMessage(message, i = 0) {
    if (i < message.length) {
        pesanElement.textContent += message[i];
        setTimeout(() => typeMessage(message, i + 1), 200);
    }
}

document.addEventListener("DOMContentLoaded", appendTitle);
