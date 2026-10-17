 // The function takes a parameter: tabId
function openTab(tabId) {
// 1. Hide all tab contents
document.querySelectorAll('.tab-content').forEach(el => {
    el.style.display = 'none';
});

// 2. Show the selected tab by its ID
    document.getElementById(tabId).style.display = 'block';
}