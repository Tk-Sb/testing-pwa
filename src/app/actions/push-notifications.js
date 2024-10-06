'use server'

import webpush from "web-push"

export async function sendNotification () {
  const vapidKeys = {
    publicKey: process.env.publicKey,
    privateKey: process.env.privateKey,
  }

  webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  )

  await webpush.sendNotification(
    
  )
}