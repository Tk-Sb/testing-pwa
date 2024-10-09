'use client'

import { pushNotification, saveUserSubscription } from "@/app/actions/action"
import { urlBase64ToUint8Array } from "@/utils/utils"

export default function SubButton() {

  const subscribeUser = async () => {
    // hashing the public VAPID key
    const applicationServerKey = urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_KEY)
    
    // waiting for the service worker to get ready, then asking the user for notifications permission
    const registration = await navigator.serviceWorker.ready
    const subscription = await registration.pushManager.subscribe({
      applicationServerKey,
      userVisibleOnly: true
    })

    // save endpoint in the users data
    saveUserSubscription(JSON.stringify(subscription))
  }

  return (
    <>
      <button className="w-28 h-fit m-4 bg-slate-700 " onClick={subscribeUser} >
        sub
      </button>
      <button className="w-28 h-fit m-4 bg-slate-700 " onClick={() => pushNotification(1)} >
        send to 1
      </button>
    </>
  )
}