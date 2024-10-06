'use client'

export default function Home() {

  const requestNotificationPermission = () => {  
    if ('Notification' in window){
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {  
          console.log('Notification permission granted.');  
          subscribeUser()
        } 
        else {  
          console.log('Notification permission denied.');  
        }  
      })
    }
  }

  const subscribeUser = async () => {
    const registration = await navigator.serviceWorker.getRegistration()
    if (registration) {
      generateSubscribeEndPoint(registration)
    }
    else {
      const newRegistration = await navigator.serviceWorker.register('/sw.js')
      generateSubscribeEndPoint(newRegistration)
    }
  }

  const generateSubscribeEndPoint = async (registration) => {
    const applicationServerKey = urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_KEY)
    
    const options = {
      applicationServerKey,
      userVisibleOnly: true
    }

    const subscription = await registration.pushManager.subscribe(options)
    console.log(subscription)
  }
  
  return (
    <>
      <button onClick={requestNotificationPermission} >
        notification
      </button>
      <button onClick={requestNotificationPermission} className="ml-[100px] " >
        remover notification
      </button>
    </>
  );
}


function urlBase64ToUint8Array(base64String) {  
  // Add padding as necessary  
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);  
  
  // Replace URL-safe characters with standard base64 characters  
  const base64 = (base64String + padding)  
    .replace(/-/g, '+') // Corrected to replace '-'  
    .replace(/_/g, '/'); // No change needed here  
  
  // Decode the base64 string  
  const rawData = window.atob(base64);  
  const outputArray = new Uint8Array(rawData.length);  

  // Convert each character to its char code and store it in the Uint8Array  
  for (let i = 0; i < rawData.length; i++) {  
    outputArray[i] = rawData.charCodeAt(i);  
  }  
  
  return outputArray;  
}