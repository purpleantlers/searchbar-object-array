// Array of objects to look for
const names = [
    {
        name: 'River Murray',
        age: '12'
    },
    {
        name: 'Sebastian Briggs',
        age: '22'
    },
    {
        name: 'Rayan Ward',
        age: '10'
    },
    {
        name: 'Kaliyah Ramos',
        age: '31'
    },
    {
        name: 'Cal Munoz',
        age: '23'
    },
    {
        name: 'Faith Ellis',
        age: '54'
    },
    {
        name: 'Aviana Wrighty',
        age: '43'
    },
    {
        name: 'Angel Pena',
        age: '11'
    },
    {
        name: 'Kaylani Newman',
        age: '30'
    },
    {
        name: 'Legacy Cook',
        age: '25'
    },
]

// Get the Search Bar Input
const searchBar = document.getElementById('searchBar');
// Get the section where the objects to look for are
const searchSection = document.getElementById('searchSection');

// Display the objects dynamically when the window loads
window.addEventListener('DOMContentLoaded', () => {
    displayNames(names);
})

// Function to display the objects
const displayNames = (name) => {
    // Loop over the objects and write the html to display them
    let displayName = name.map((object) => {
        return `<h4>${object.name} <span>(${object.age})</span> </h4>`
    }).join(''); // Join all the html that was created
    
    // Return the objects in the section
    searchSection.innerHTML = displayName;
}

// Search everytime we write
searchBar.addEventListener('input', (e) => {
    // Get the value of what is being inputed
    let value = e.target.value;
    // Make everything Lower Case to avoid case sensitivity
    value = value.toLowerCase();

    // Filter through the array of objects
    let filteredNames = names.filter((object) => {
        // Return the name of the object that have the value inputed
        return(
            // Return the names or ages of the objects
            object.name.toLowerCase().includes(value) ||
            object.age.includes(value)
        )
    })

    // Display only the object that match the input
    displayNames(filteredNames)
})