// Create a link element for the Google Fonts import
var link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap';
link.rel = 'stylesheet';

// Append the link element to the head of the document
document.head.appendChild(link);

// Create a new stylesheet
var style = document.createElement('style');
style.type = 'text/css';

// CSS rules for dark theme and rounded corners
var css = `
    body, html {
        background-color: #121212 !important; /* Dark background */
        color: #e0e0e0 !important; /* Light text */
        font-family: 'Roboto', sans-serif; /* Modern font */
    }

    div {
        background-color: #1e1e1e !important; /* Adjusted div background */
        border-radius: 8px !important; /* Rounded corners for div */
        border: 1px solid #373737 !important; /* Subtle border color */
        color: #e0e0e0 !important; /* Light text for contrast */
        font-family: 'Roboto', sans-serif; /* Consistent font */
    }

        /* Override styles for specific elements to fit the dark theme */
        a, a:visited {
            color: #bb86fc !important; /* Purple links for visibility */
        }

        /* Dark theme for inputs and buttons */
        input, button {
            background-color: #333 !important; /* Dark but visible */
            color: #fff !important;
            border: 1px solid #555 !important;
            border-radius: 4px !important; /* Slightly rounded for consistency */
        }

        /* Dark theme for tables */
        table, tr, td, th {
            background-color: #222 !important; /* Distinct from divs */
            color: #e0e0e0 !important;
            border: 1px solid #444 !important;
        }

        /* Update the background and text color for specific IDs and classes */
        #content, .menu, #foot, #paticka2 {
            background-color: #121212 !important; /* Matching the theme */
            color: #e0e0e0 !important;
        }

        /* Styling for .link5 */
        .link5 {
            border-radius: 8px !important; /* Rounded corners */
            color: #00E676 !important; /* Modern neon green for text */
            background-color: #2a2a2a !important; /* Slightly lighter background */
            padding: 5px 10px !important; /* Some padding */
            text-decoration: none !important; /* Remove underline */
            font-family: 'Roboto', sans-serif; /* Modern font */
            border: 1px solid #4A90E2 !important; /* Updated to a more appropriate border color */
            text-align: center; /* Center the text */
            display: block; /* Change display to block to enable text centering */
            font-weight: bold; /* Thicker font */
        }

        /* Styling for classic links */
        a, a:visited {
            color: #00E676 !important; /* Neon green for text */
            text-decoration: none !important; /* Remove underline for a modern look */
            font-family: 'Roboto', sans-serif; /* Consistent font */
            transition: color 0.3s; /* Smooth transition for hover effects */
        }

        /* Hover effect for all links */
        .link5:hover, a:hover {
            color: #AAF255 !important; /* Lighter green on hover */
            text-decoration: underline; /* Underline on hover for distinction */
        }

        /* Make .menu_empty neon green */
        .menu_empty {
            background-color: #00E676 !important; /* Neon green background */
        }

        /* Change background color of #stev_header */
        #stev_header {
            background-color: #007BFF !important; /* Pretty blue background */
            color: #fff !important; /* White text for contrast */
        }

        /* Make #stev_header_bkg background transparent */
        #stev_header_bkg {
            background-color: transparent !important;
            border-color: transparent !important; /* Make border transparent */
        }
    `;


// For IE8 and below
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

// Append the new stylesheet to the head
document.head.appendChild(style);


// Select the element using the provided CSS path
var elementToRemove = document.querySelector('.menu1 > td:nth-child(4)');

// Check if the element exists before attempting to remove it
if (elementToRemove) {
    elementToRemove.parentNode.removeChild(elementToRemove);
}