chrome.runtime.sendMessage({}, (response) => {
  var checkReady = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(checkReady);
      console.log("We're in the injected content script!");
    }
  });
});

window.addEventListener("message", function () {
  let elements = document.querySelectorAll("._58nk");

  elements.forEach((element) => {
    element.innerHTML = element.innerHTML.replace(
      "POG",
      "<img src='" +
        "https://cdn.frankerfacez.com/emoticon/210748/2" +
        "' style='height: 30px;'/>"
    );

    element.innerHTML = element.innerHTML.replace(
      "monkaW",
      "<img src='" +
        "https://cdn.frankerfacez.com/emoticon/214681/4" +
        "' style='height: 30px;'/>"
    );
  });
});
