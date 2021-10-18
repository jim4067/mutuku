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

    let quote = document.getElementById("quote");
    let show = document.getElementById("show");
    fetch_quote().then(res => {
        quote.innerHTML = res.quote;
        show.innerHTML = res.anime
    }); //now only one show is being made per refresh

    //function to auto-update current year
    let current_year = () => {
        return new Date().getFullYear();
    }
    let year = document.getElementById("year");
    year.innerHTML = current_year();
});

