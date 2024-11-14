'use server'

import { eq } from "drizzle-orm"
import { db } from "../../db/db"
import { userTable } from "../../db/schema"
import webPush from 'web-push';  

export async function saveUserSubscription(subscription) {
  console.log(subscription)
  try {
    await db.update(userTable).set({subscription: subscription}).where(eq(userTable.id, 1))
  }
  catch (err) {
    console.log(err)
  }
}

export async function pushNotification(id) {
  const payload = JSON.stringify({  
    title: "New Notification!",  
    body: "You have a new update.",  
  })
  
  const vapidKeys = {
    publicKey: process.env.NEXT_PUBLIC_VAPID_KEY,
    privateKey: process.env.privateKey,
  }
  
  webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  )

  try {
    const [userSubscription] = await db.select({
      subscription: userTable.subscription
    }).from(userTable).where(eq(userTable.id, id))
    console.log(userSubscription.subscription)

    try {
      await webPush.sendNotification(userSubscription.subscription, payload)
      console.log("sent")
    }
    catch (err) {
      console.log(err)
    }
  }
  catch (err) {
    console.log(err)
  }
}

/*
{
  "endpoint":"https://fcm.googleapis.com/fcm/send/ez__-M8Xn3o:APA91bHh8qf6UsJM7dSgiBP8SblEyJ7kRI5wHKK8LlYcfFMbumo4W0MtDmJui5KfFjp3Dwo4N14btZUzS0V0YAvn_gzpVT7dVA8Vr9m3UnANpMu61n6zbJDoIEbaUevG-XKvxZqkiQrb",
  "expirationTime":null,
  "keys": {
    "p256dh":"BPCf7xBj7USk22xbJ6nEKgJMoJHqWOAX8827E2C_KfWRN1SDdWBT962QL5EgbYjQMxdYxndnRwrw6UCjTp5wJ0g",
    "auth":"QKrIUZj8k9288wBGUOUzfQ"
  }
}
*/
