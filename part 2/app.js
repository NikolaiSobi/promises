
let url = "https://deckofcardsapi.com/api/"
let cards = []

// 1.
$.get(`${url}deck/new/shuffle/?deck_count=1`, res => {
    console.log(res)
}).then(res => {
    $.get(`${url}deck/${res.deck_id}/draw/?count=1`, res => {
        console.log(res.cards[0].value, "of", (res.cards[0].suit))
    })
});

// 2.
$.getJSON(`${url}deck/new/draw/?count=1`)
.then(res => {
    cards.push(res)
    return $.getJSON(`${url}deck/${res.deck_id}/draw/?count=1`)
})
.then(res => {
    cards.push(res)
    for(let i = 0; i < cards.length; i++){
        console.log(cards[i].cards[0].value, "of", cards[i].cards[0].suit)
    }
    })

// 3.
let deck;
let cardImage = $('#card')
$.getJSON(`${url}deck/new/`)
.then(res => {
    deck = res.deck_id
    console.log(deck)
    return $.getJSON(`https://deckofcardsapi.com/api/deck/${res.deck_id}/shuffle/`)
})


$('#btn').click(function(){
    $.getJSON(`${url}deck/${deck}/draw/?count=1`)
    .then(res => {
        if(res.cards[0].value == "10"){
            cardImage.attr("src", `https://deckofcardsapi.com/static/img/0${res.cards[0].suit[0]}.png`)
        } else {
            cardImage.attr("src", `https://deckofcardsapi.com/static/img/${res.cards[0].value[0]}${res.cards[0].suit[0]}.png`)
        }
    })
})


