'use client'

export default function Home() {

  const requestNotificationPermission = () => {  
    if ('notification' in window) {  
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {  
          console.log('Notification permission granted.');  
        } 
        else {  
          console.log('Notification permission denied.');  
        }  
      })
    }  
  }
  
  return (
    <>
      <button onClick={requestNotificationPermission} >
        notification
      </button>
    </>
  );
}
