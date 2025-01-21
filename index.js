// Toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('.main');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-200px';
        main.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0';
        main.style.marginLeft = '200px';
    }
}

// Load content dynamically
function loadPage(page) {
    const content = document.getElementById('content');
    if (page === 'home') {
        content.innerHTML = '<h1>Home Page</h1><p>This is the home page content.</p>';
    } else if (page === 'profile') {
        content.innerHTML = '<h1>Profile Page</h1><p>This is the profile page content.</p>';
    } else if (page === 'settings') {
        content.innerHTML = '<h1>Settings Page</h1><p>This is the settings page content.</p>';
    }
}
