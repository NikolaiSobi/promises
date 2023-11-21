let favNum = 42
let favNums = [5,59,64]
let promises = []
let facts = []
let url = "http://numbersapi.com/"

// 1.
$.getJSON(`${url}${favNum}?json`, data => {
    console.log(data)
});

// 2.
for(let i = 0; i < favNums.length; i++){
    promises.push($.getJSON(`${url}${favNums[i]}?json`))
}

Promise.all(promises)
    .then(promisesArr => (
        promisesArr.forEach(p => console.log(p.text))
    )
    )
    .catch(err => console.log(err));

// 3.
for(let i = 0; i < 4; i++){
    facts.push($.getJSON(`${url}${favNum}?json`))
}

Promise.all(facts)
    .then(factsArr => (
        factsArr.forEach(f => console.log(f.text))
    ))