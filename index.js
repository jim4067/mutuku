document.addEventListener('DOMContentLoaded', (event) => {

    const the_quotes = ["I wanna love free even if that freedom hurts me. I want to decide my happiness for myself -  the promised neverland.",
        "If I always blame someone or something, i'll never change - fruits basket"
    ]

    //generate random quote
    async function fetch_quote() {
        const res = await fetch("https://animechan.vercel.app/api/random");
        const rand_quote = await res.json();
        return rand_quote
    }

    fetch_quote().then(res => console.log(res));
    let quote = document.getElementById("quote");
    fetch_quote().then(res => { quote.innerHTML = res.quote });
    let show = document.getElementById("show");
    fetch_quote().then(res => { show.innerHTML = res.anime });

    //function to auto-update current year
    let current_year = () => {
        return new Date().getFullYear();
    }
    let year = document.getElementById("year");
    year.innerHTML = current_year();
});

