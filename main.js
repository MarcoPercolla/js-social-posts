const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// per ogni oggetto nell'array creo un div post con un ciclo forEach
let postCards = ""
posts.forEach((element, i) => {
    if (element.author.image == null) {
        element.author.image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEVTbWT///9SbWT//v9QbmROb2RVbGT7//9DW1NRaWH6+vpMY1x4iYO5vbzr9/RPZV2Aj4r1/vxda2ewvbtabmf/+/9SaGFXcWhYamRHWVNab2hMXlhSZF729vZMamBScWfL2NPl7+xwf3qXpqFhdG5pdHBEYFbN4Npzfnprgnrf7+zV6uS/x8XV2djE0MymtbF9lY2OlpM8UUpMVVJ7hYKmuLG3x8KQoJtZY1+stbKLkpDa5OGdqaWtv7nE2NFwiYCmKQviAAAL2klEQVR4nO2dDWOaOhfHk4DBoJPSKkFAqK1ua9d191m7tXf23vv9v9WTk6D1nUCxVs1/3NvNasgv53ByEklAyMjIyMjIyMjIyMjIyMjIyMjIyMioqgio6E1UqHzB1SpU5gykqPbwa9tuNBoSYb2Q4gvDkoii4Pzk8GNz+VUlzwCVF//bzCgBgZCI2qw5bAQ/iF3FhlByTqhoaz5sKLYBEifaUg2ovzLjVtlbS9lQ9FzbFp6gvOy8+kSvbjpFlrysSO6m0qV2Qji9iMDJNomqd4WhbIiNUkYuGzhyP0ei+BBtLb+SUCgFkFtiDaWtZh/ULNLn8pFROZAwok75FdTP1aTbCOMvWE+dm6AsIZKRgNCmo3mOanJwxDYQCvJufOmANn3aEr+yQM7wqmxvIa8PcbnQpu871i7QZL0d3ykmVBBrJSB7IDz8WpqQItlb0b6/7QzVlVfcwd3NhFQSbju9owjBhkFpQjol3AkgtL6onOVuIaQsjC/z962vBJ556e0NKwk4Z0O8ofg3EkLFgTDcSIjAhooQO1Mp/54e8gUB6t/elI6llJKZl75e66rMufKd6es6x0LUsJR/bSZMOYNYCgg918WDdSHH6lmikcQvbtteWUKkcg7W+nbbcRzXdadesRAtcKlIqwhdSxxQnLJhxDYkpoShyLv+dPd9gLE7a09rIeyJemE8uLy/+DEqP7iQanF2c/PXxWSg6rQcVBUwhA19iWpZg4EihE9G6QZCnhIWJ8n5+eOdaElX/FEnW6iBsO2n/41HSVTFhPIsjHHE+qMXH+NVwoErzlBFrjvAOSGONmZtjNNREIxGSRJu6hZdZ/L1oR8GHuVVCTkXMYrTn2eX0kOWjeiOHx6SJGnpKQHFjxcTH+ctBoRsAyEX7YsoZx7nwdW9v5bQnzz2z0cRJWnl8SzjjJPU5l57uIooDDh+Pg9lbqkzKFS5aJyML4bTXnYLIZyccJk9kvjrZC3h8CwRZkZpZjfSqoCiHbmIqR57ws6yo4q/j0UqAam9Xroth+NREiZnt1i115asDclYp4YiNBypfgEvxrZfHmWEqJHmGyYliBztNCe+CA+9BUIXnwe0xJAJxmOE8iiIKATo7YREjr3VJ1mQTBwZZRYtOfrMkXCxRg2EDeL9chzofpYJSblxoRiVCb9g3svQgTi1lVCNjxviT4r6fzt4ob+CGDdsMhFx7VoIbcKeoC9bsSGbzkWI/4oO9UZRcRGfz79DcVsJ5eBWTXqkWesPXiW884iIMUi1w5umzsRZUHDm+MuhBvJmO3e/4skZko/uBSHnyYvvDFQJGzp8NXyXQQylJHjECzmHCx7wqUVENFLTEWXnaRYEI3EatDtwIS4TKhfWSyjU1Jq4cmDq4ArctIBQTvfB2bM0elzx0oEglIlB4aykDiEFQmcgcuBlG+aEOjOIU78TvTMPx0PVi3c3DXvmK01460x1MAvnB8JaJFuICcIlG8qRgfJSvaTwtdIi/P8eTobDybdRmGh8EHlAuNxd1UWoHH09oYo0pScrBWEwuhqNRt2bJEqKmycntA6IENEoSCLajaJQZ3B+gDZEDHJlkTAxyjSS5kO0ISScqUg7U55pzD8cICGxs5Rkdip+2FlxoD9ALyVz3xRoZCMHacPGLJc7TkI0912LRjZygF46+wZYL986SBsePWHJKhygl5aswqnY8PgJjZdWLt4QGi+toQqnYsPjJzReWrl4Q2i8tIYqnIoNj5/QeGnl4g2h8dIaqnAqNjx+QuOllYs3hMZLa6jCqdjw+AmNl1Yu3hAaL62hCqdiw+MnNF5aufiTJbReCfVuX61+p+uevBT+oQiJXHJRqPz2Gbs85x69VN4jDMuFNW7zttWd7NO7mw+BELv5neySUEPThSdVCd89lqr70KWXIi3CV289EBs6PhDK7SWoxmWolsHkl+PhEAZI7byAYGFtwTErrSrhu3up4+Ak8VoeSGt5XkApU6vRDsWGjnNRRr/aQRQxVOFC3CNhKfnXcRLJrWnKrlLal5fCwhxcYhFw5ynpKhtWJHx3G8I/XRfWw2sSXidJGFFSfqXZ/giFEaevwR4CBYcghA1bqhO+v5fOEVrFwv510g09dFA2BC+18PLa1U2SXvoWG74/YflIE3bfEmn20OOXk/+SJN239BZ77fE/afT4/7SDLj+wHh+yNqVEQ54HK/HekLW9v5fmmbfeItl8W7yDG1tMR0+aJR3Y6Ol1BKxHODdfcyhj/LlZDJ1y3jyLsdeZKJ3FvPahzUQtziZqlPPm2cQ9zuq/04zwPrz0uGf1zXdPNepkbHj8hMZLKxdvCI2X1lCFU7Hh8RMaL61cvCE0XlpDFU7FhsdPaLy0cvGG0HhpDVU4FRseP6Hx0srFG0LjpTVU4VRsePyExksrF28IjZfWUIVTseHxExovrVy8ITReWkMVTsWGx09ovLRy8YbQeGkNVTh+Qj7zUlwDIdyNjeYftmTvm5DYmSBcASxPmN+GPX1ySA5JPgIhqZNw7hFw+atHR2hPAY+TcP7JKPk9y8dFaKv1IfmT4F4Rj4sQqUei5oiIfkxCVxISxFCpB+VKQp7Ez8/PcRyxVPLSGaH1kQhdSchZqUeOy7WPyLv+G/RjhLIlQvxxCOXDlsGGqBwirF9F8cSBx0n7NyyVC37Cj0iIYf3qXbPk6g35xHibdye413MdfMOzj0zoYmvSIuUuQ0nYSM+Gbq8njNiWa5pQuGdCmWYJwqWzuwPsOh5n07doLtsBG7Z++DmhlwHhluvQwmFA9FcFlZNakal66JQnf5QJF1eN/4hHbPqMOqSxwhOe9Ia88cRX2yS0g3xBnbArimKR3MMj5OfKl2tIM2XC1zVNFR9Uv4Yw77+gVq3wZR3hcNxtwbUklBXv42STDCyWXAhbuZYkpGpFXZamKEienGVCgXjW9VQGO7dqqybCWY4lasCin9/dNYT+7ySkJMsAr6GhlJCgO+pIEmVD+bhk+3PGaTe+g4cwL+YUjvM75mS2O9Lbnsm7wje3+xLtPuF1NnT8i7hLGeVROPPWLbJ5MEoeh+oZ6q+EBPEWpcHIhycUu/Pli0gzPIvznGfW6jVxkjz/h+aj4dXEcaUDLRIOcOdinAQiAzs/R8X7VKEkiZ8m8pnnsrHkdQg9fhSM4tG9A4QLgaZnuc7lOKCvq893QCjOz1pnEz9PGRcJRUD1Jy/hc//h4aHfLNb52f0A5gpEd9hThKLmMkntj+9933cWTYh71gAP7n8mcLWiPPLJKY96CNMs5R7zkqT9AwKfjN1LAkssv6Yhy1Ju2mYkS1k3fH4evwyx7yxv75HP7U2eQlEPuT8SI69DrzcrFeHRuxldXd9PHHXuFUCsrAq/XaVfRzZXcUVo25xdXf25m8y2tliD6HS+/2rfXAUB5UgNn+uxoQiQ3PtnOOxsNwbOAfU0/1lJmKatL8MBdtz1iCq8uR2/M/y33aWUq0memkIqY0FftK1lifxjg4VKEy725yJry9Km8M6BiqErhKrkgTCj73faLYq4muSpq9OIwv6lOHUPCNczzjmppUE5zcnkZ0S122kjtQWhK+I0jMbWEOaNJ0w8bCcRZWqOpx4+zqIk/i7GgdsJp0FIdpUFxzRYzQiZnaFmxxlYcsOr3B8WbSg+Il3Iv223glqvQxGXeSu5dFa/rVjvr0VvWJWDr7rCUfr+2jD9WrIyvnP7H+Upms1e1UHIbrz4i+NDO5bd60dP+EoYhcaduTCzRbf/tTgqNdouEme8Ffxb3jQljNhmDHlBR69P/fZXudmEYomxbRREzf7uFLZIZnMv7sc670afeak5r2Jx1KJigKu7u09pRQlkNJlNAphXLB5bihYvOa+nwcgJl1lStoPDFt23nYoBVfaZUp33w6QXr9lPESEaQ6Kqmv/+Quv9NcOpL/nsHRLatr30l/cnVHM0DZjGqP9QI8bprkca798BYb4bkcb0S6VDlm7nzaixWfduAG2YAKJ1zW0tCobt083HdlF+och0P6kddRYoL1xeDjon2QHiDhzDyMjIyMjIyMjIyMjIyMjIyMhI6v+HbnZXjrdYVwAAAABJRU5ErkJggg==";
    };

    let postCard =
        `<div class="post" id="${element.id}">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${element.author.image}" alt="LF">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">${timeCalc(element.created)}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.content}</div>
        <div class="post__image">
            <img src="${element.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${parseInt(element.likes)}</b> persone
                </div>
            </div> 
        </div>            
    </div> `;

    postCards += postCard;

});

document.getElementById("container").innerHTML = postCards;




// creo un evento per ogni post collegato al proprio bottone, questo richiama la proprietà ("like-button--liked")css con un toggle al click e sfrutta
//  un counter diverso per ogni post per sapere se è cliccato o meno ed aggiungere i like nel innerHtml affianco
const btns = document.getElementsByTagName("a");
for (let i = 0; i < btns.length; i++) {
    let element = btns[i];
    let counter = 0;
    let likes = document.getElementsByClassName("js-likes-counter")[i];
    element.addEventListener("click", function () {
        element.classList.toggle("like-button--liked");
        if (counter == 0) {
            likes.innerHTML = parseInt(likes.innerHTML) + 1;
            counter = 1;
        } else {
            likes.innerHTML = parseInt(likes.innerHTML) - 1;
            counter = 0;
        }
    });
}


// funzioni
// element.created va rielaborato in formato americano e in tot mesi fa se creato meno di un anno fa (dopo)
// converto data creazione in "anni fa"
function timeCalc(postDate) {
    let data = new Date();
    data = data.getFullYear();
    let anno = parseInt(postDate);


    data -= anno;

    return `${data} anni fa `;
}



