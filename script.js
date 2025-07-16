window.onload = (event) => {
    const footerId = document.getElementById("footer-text");

    const date = new Date();
    const year = date.getFullYear();
    const footerText = '@Arman Ryuga ' + year;

    footerId.textContent = footerText;
}