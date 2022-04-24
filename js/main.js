const ol = document.getElementById('ol');

const links = [
    {
        label: "Week1 notes",
        url: "w01/index.html"
    },
    {
        label: "Week2 notes",
        url: "w02/story_editor.html"
    }
];

links.forEach(function displaytable(element){

    let li = document.createElement('li');
    let a = document.createElement('a');

    
    a.textContent = element.label;

    a.setAttribute('href', element.url);
    a.setAttribute('target', '_blank');

    ol.appendChild(li);
    li.appendChild(a);
})

