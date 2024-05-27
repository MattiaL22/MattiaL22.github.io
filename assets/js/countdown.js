// Definisci la data e l'ora di riferimento per il countdown
const targetDate = new Date('2024-06-08T15:00:00');

// Funzione per calcolare il countdown
function countdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    // Calcola i giorni, le ore, i minuti e i secondi rimanenti
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Aggiorna il contenuto degli elementi HTML con il countdown
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Esegui la funzione di countdown ogni secondo
setInterval(countdown, 1000);