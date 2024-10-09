'use server'

import { db } from "../db/db"
import { userTable } from "../db/schema"

export async function saveUserSubscription(subscription) {
  console.log(subscription)
  // try {
  //   await db.insert(userTable).values(subscription)
  // }
  // catch (err) {
  //   console.log(err)
  // }
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