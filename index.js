//Created_by_JaHIN//

// Prevent copying by disabling the copy event
document.addEventListener('copy', (event) => {
    event.preventDefault(); // Disable copying
  });
  
  // Prevent right-click (context menu)
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Disable right-click
  });
