self.addEventListener('push', async (event) => {  
    const options = {  
        body: event.data.text(),  
        icon: '/icon512_rounded.png', // specify your notification icon here  
        vibrate: [100, 50, 100],  
        data: {  
            // Custom data to pass to the notification click event  
        },  
    };  
    event.waitUntil(  
        self.registration.showNotification('New notification', options)  
    );  
});