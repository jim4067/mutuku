document.addEventListener('DOMContentLoaded', (event) => {

    const the_quotes = ["I wanna love free even if that freedom hurts me. I want to decide my happiness for myself -  the promised neverland."]

    //function to auto-update current year
     let current_year = () => {
        return new Date().getFullYear();
    }
    let year = document.getElementById("year");
    year.innerHTML = current_year();
});

