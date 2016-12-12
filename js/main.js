---
---

/* JS for the CareMessage website */
document.addEventListener("DOMContentLoaded", function(event) {
  var feed = new Instafeed({
    clientId: '18a704f2b64f4d1b81416291bdc3bbf5',
    accessToken: '1298762098.18a704f.edf9234b44944402be008dc589c8d9f9',
    get: 'user',
    userId: '1298762098'
  });
  feed.run();
});
