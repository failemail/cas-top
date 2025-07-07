import { useState, useEffect } from 'react';

interface PushNotificationOptions {
  title: string;
  message: string;
  icon?: string;
  url: string;
  delay: number;
}

export const usePushNotification = () => {
  const [hasShown, setHasShown] = useState(false);
  const [permission, setPermission] = useState<NotificationPermission>('default');

  useEffect(() => {
    // Check if notifications are supported
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async (): Promise<NotificationPermission> => {
    if ('Notification' in window) {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result;
    }
    return 'denied';
  };

  const showNotification = async (options: PushNotificationOptions) => {
    if (hasShown) return;

    // Request permission if not granted
    let currentPermission = permission;
    if (currentPermission === 'default') {
      currentPermission = await requestPermission();
    }

    if (currentPermission === 'granted') {
      const notification = new Notification(options.title, {
        body: options.message,
        icon: options.icon || '/favicon.svg',
        badge: '/favicon.svg',
        tag: 'casino-notification',
        requireInteraction: true,
        actions: [
          {
            action: 'open',
            title: 'Открыть'
          },
          {
            action: 'close',
            title: 'Закрыть'
          }
        ]
      });

      notification.onclick = () => {
        window.open(options.url, '_blank');
        notification.close();
      };

      // Auto close after 10 seconds
      setTimeout(() => {
        notification.close();
      }, 10000);

      setHasShown(true);
    } else {
      // Fallback to custom in-page notification
      showCustomNotification(options);
    }
  };

  const showCustomNotification = (options: PushNotificationOptions) => {
    if (hasShown) return;

    const notificationElement = document.createElement('div');
    notificationElement.className = `
      fixed top-4 right-4 z-50 max-w-sm bg-gradient-to-r from-purple-600 to-cyan-600 
      text-white rounded-xl shadow-2xl border border-purple-400/30 backdrop-blur-sm 
      transform translate-x-full transition-transform duration-500 ease-out
    `;
    
    notificationElement.innerHTML = `
      <div class="p-4">
        <div class="flex items-start space-x-3">
          <img src="/irwin.png" alt="IRWIN" class="w-12 h-12 rounded-lg object-contain bg-white/10 p-1">
          <div class="flex-1">
            <h4 class="font-bold text-lg mb-1">${options.title}</h4>
            <p class="text-sm opacity-90 mb-3">${options.message}</p>
            <div class="flex space-x-2">
              <button class="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors" onclick="window.open('${options.url}', '_blank'); this.closest('.fixed').remove();">
                Играть сейчас
              </button>
              <button class="px-3 py-2 bg-black/20 rounded-lg text-sm hover:bg-black/30 transition-colors" onclick="this.closest('.fixed').remove();">
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(notificationElement);

    // Animate in
    setTimeout(() => {
      notificationElement.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 15 seconds
    setTimeout(() => {
      if (notificationElement.parentNode) {
        notificationElement.style.transform = 'translateX(full)';
        setTimeout(() => {
          if (notificationElement.parentNode) {
            notificationElement.remove();
          }
        }, 500);
      }
    }, 15000);

    setHasShown(true);
  };

  const scheduleNotification = (options: PushNotificationOptions) => {
    setTimeout(() => {
      showNotification(options);
    }, options.delay);
  };

  return {
    permission,
    hasShown,
    requestPermission,
    showNotification,
    scheduleNotification
  };
};