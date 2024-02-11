// Create a new style element
var style = document.createElement('style');
style.type = 'text/css';

// Define your dark theme CSS here
var css = `
    body {
        background-color: #121212; /* Dark background */
        color: #E0E0E0; /* Light text */
    }
    a, a:visited {
        color: #BB86FC; /* Light purple links */
    }
    a:hover {
        color: #3700B3; /* Darker purple on hover */
    }
    .menu, #content, #foot, #paticka2, #hint, .link5, table, td, th {
        background-color: #1E1E1E; /* Darker elements background */
        color: #E0E0E0; /* Light text for better contrast */
        border-radius: 15px; /* Rounded corners */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Optional: adds shadow for depth */
    }
    input, textarea, select {
        background-color: #2C2C2C;
        color: #E0E0E0;
        border: 1px solid #333;
        border-radius: 8px;
    }
    /* Add more custom styles as needed */
`;

// Add the CSS to the style element
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

// Append the style element to the head
document.head.appendChild(style);