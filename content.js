chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    if (msg?.type !== "GET_PAGE_CONTENT") return;

    const selection = window.getSelection?.().toString() || "";
    const text = (document.body?.innerText || "").replace(/\s+/g, " ").trim();

    sendResponse({
        url: location.href,
        title: document.title,
        selection,
        pageTextSnippet: text.slice(0, 8000),
    });
    return true; // Keep the message channel open for sendResponse
});