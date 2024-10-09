export function urlBase64ToUint8Array(base64String) {  
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