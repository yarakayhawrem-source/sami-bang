self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: 'https://raw.githubusercontent.com/ramiqaladzay0/ramadan-challenge/450380601a15e12a80be482ee5149dd6dc52a0de/D5208D5D-BECD-4A90-9B8F-B7FC0679E5FA.jpeg',
        badge: 'https://raw.githubusercontent.com/ramiqaladzay0/ramadan-challenge/450380601a15e12a80be482ee5149dd6dc52a0de/D5208D5D-BECD-4A90-9B8F-B7FC0679E5FA.jpeg'
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('install', (event) => {
    self.skipWaiting();
});
