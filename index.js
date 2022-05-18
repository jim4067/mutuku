document.addEventListener('DOMContentLoaded', (event) => {
    console.log("stop snooping!!!");

    const the_quotes = ["I wanna love free even if that freedom hurts me. I want to decide my happiness for myself -  the promised neverland.",
        "If I always blame someone or something, i'll never change - fruits basket"
    ]

    //fetch the commits from this repo to get last_update
    const getLatestCommit = async () => {
        const commitsResp = await fetch("https://api.github.com/repos/jim4067/mutuku/commits");
        return (await commitsResp.json())[0];
    }

    getLatestCommit().then(res => {
        console.log("this is the first commit-> ", res);

        //Awesome Date handling using JavaScript
        const readableDate = new Date(res.commit.author.date);
        console.log("this the readable date -> ", readableDate.toDateString());
        // TODO -> Add this date to html for latest update of CV
    }).catch(err => {
        console.error("Error in trying to get the commits from this repo ->", err);
    });

    //fetch a random page only when we are in the home page
    if (document.URL.includes("index.html")) {
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
        }).catch(err => {
            console.error("encountered this error -> ", err);
        }); //now only one show is being made per refresh
    }
    //function to auto-update current year
    let current_year = () => {
        return new Date().getFullYear();
    }
    let year = document.getElementById("year");
    year.innerHTML = current_year();
});
