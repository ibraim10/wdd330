const ol = document.getElementById('ol');

const links = [
    {
        label: "Week1 notes",
        url: "w01/index.html"
    },
    {
        label: "Week2 notes",
        url: "w02/index.html"
    },
    {
        label: "Week3 notes",
        url: "w03/index.html"
    },
    {
        label: "Week4 notes",
        url: "w04/index.html"
    },
    {
        label: "Week5 notes",
        url: "w05/index.html"
    },
    {
        label: "Week6 Project",
        url: "todo_project/index.html"
    },
    {
        label: "Week7 notes",
        url: "w07/index.html"
    },
    {
        label: "Week8 notes",
        url: "w08/index.html"
    },
    {
        label: "Week9 notes",
        url: "w09/index.html"
    },
    {
        label: "Week10 notes",
        url: "w10/index.html"
    },
    {
        label: "Final Project",
        url: "final_project/index.html"
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

