self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// گوێگرتن لە نامەکان بۆ ناردنی نۆتفیکەیشن
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SCHEDULE_NOTIFICATION') {
        const { title, body, delay } = event.data;
        
        setTimeout(() => {
            self.registration.showNotification(title, {
                body: body,
                icon: 'https://raw.githubusercontent.com/ramiqaladzay0/ramadan-challenge/450380601a15e12a80be482ee5149dd6dc52a0de/D5208D5D-BECD-4A90-9B8F-B7FC0679E5FA.jpeg',
                vibrate: [200, 100, 200],
                badge: 'https://raw.githubusercontent.com/ramiqaladzay0/ramadan-challenge/450380601a15e12a80be482ee5149dd6dc52a0de/D5208D5D-BECD-4A90-9B8F-B7FC0679E5FA.jpeg'
            });
        }, delay);
    }
});
