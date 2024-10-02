//Created_by_JaHIN//

// Create a <style> element
const style = document.createElement('style');
style.innerHTML = `
  /* Disable text selection */
  body {
    user-select: none;
    -webkit-user-select: none; /* Chrome, Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE 10+ */
  }
  /* Disable context menu on right-click */
  body {
    -webkit-touch-callout: none; /* Disable text copy on iOS */
  }
`;

// Append the <style> element to the head
document.head.appendChild(style);

// Prevent copying by disabling the copy event
document.addEventListener('copy', (event) => {
  event.preventDefault(); // Disable copying
});

// Prevent right-click (context menu)
document.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // Disable right-click
});
