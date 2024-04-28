import { urlBase64ToUint8Array } from '@/lib/utils';

/**
 * Sends a push notification to the user using the provided ServiceWorkerRegistration and appServerKey.
 * Every time SW register/un-register on the same device, a new subscription should be created
 *
 * @param {ServiceWorkerRegistration} r - The ServiceWorkerRegistration object used to send the notification.
 * @param {string} appServerKey - The public key of vapid for push messages.
 * @return {Promise<null | Error>} A Promise that resolves to null if the subscription to push notification service was successful.
 */
export default async function pubSubNotification(
  r: ServiceWorkerRegistration,
  appServerKey: string
) {
  try {
    const sub = await r.pushManager.getSubscription();

    if (sub === null) {
      // create new subscription
      const newSub = await r.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(appServerKey),
      });

      // TODO: store subscription to allow server using paired secret vapid key to call push server
      newSub.toJSON();
    } else {
      // TODO: handle existing subscription
    }

    return null;
  } catch (error) {
    return error;
  }
}
