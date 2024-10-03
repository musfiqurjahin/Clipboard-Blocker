
  <h1>Text Selection and Copy Blocker</h1>
    <p>This script is designed to block users from selecting and copying text on a webpage. It prevents users from highlighting, right-clicking, or copying content from the site, thereby protecting your text-based content from being easily copied.</p>

  <h2>Features</h2>
    <ul>
        <li><strong>Disable Text Selection:</strong> Prevents users from selecting text on the page, making it difficult to copy or highlight.</li>
        <li><strong>Disable Context Menu (Right-click):</strong> Blocks the right-click menu, which typically allows users to copy text or inspect elements.</li>
        <li><strong>Disable Copy Event:</strong> Even if users manage to highlight text (e.g., via dev tools), the copy function is disabled.</li>
        <li><strong>Cross-browser Compatibility:</strong> The script uses CSS properties with vendor prefixes to ensure compatibility across major browsers like Chrome, Safari, Firefox, and Internet Explorer.</li>
    </ul>

   <h2>How It Works</h2>
    <p>The script performs the following actions:</p>
    <ul>
        <li><strong>Injects a Style Block:</strong> A <code>&lt;style&gt;</code> element is dynamically created and injected into the page's <code>&lt;head&gt;</code>. This style block disables text selection using the <code>user-select</code> CSS property with vendor prefixes for browser compatibility.</li>
        <li><strong>Blocks Copy Event:</strong> The script listens for the "copy" event and prevents its default behavior, stopping users from copying text even if it’s somehow selected.</li>
        <li><strong>Disables Context Menu:</strong> The "contextmenu" event (triggered by right-clicking) is also blocked, preventing users from accessing the right-click options like "Copy" or "Inspect".</li>
    </ul>

  <h2>Usage</h2>
    <p>To use this script on your website:</p>
    <ol>
        <li>Copy the provided JavaScript code.</li>
        <li>Paste it into your HTML file within a <code>&lt;script&gt;</code> tag or link to it from an external JavaScript file.</li>
        <li>Ensure that the script is executed after the page loads to ensure proper functioning.</li>
    </ol>

    
  <h2>Example Code</h2>
    <p>The script should be placed in the <code>&lt;head&gt;</code> or just before the closing <code>&lt;/body&gt;</code> tag. Here is a sample of how to include it:</p>
    <pre>
        &lt;script&gt;
        // Insert the JavaScript code here
        &lt;/script&gt;
    </pre>

    
   <h2>Important Notes</h2>
    <ul>
        <li><strong>Not Foolproof:</strong> This script can discourage casual users from copying content but can be bypassed by more experienced users using developer tools or by disabling JavaScript.</li>
        <li><strong>Non-intrusive:</strong> The script doesn't affect page performance significantly and doesn't interfere with the normal browsing experience (aside from disabling copy and right-click).</li>
        <li><strong>Content Protection:</strong> While this adds a layer of protection to your content, it is important to remember that no method can completely secure text on the web.</li>
    </ul>

</body>
</html>
