const API_URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:5000/api/v1/messages'
    : 'https://api.guestm.app/api/v1/messages';

export async function getMessages() {
  const res = await fetch(API_URL);
  const messages = await res.json();
  const haveSeenLocation = {};
  return messages.reduce((all, message) => {
    const key = `${message.latitude.toFixed(3)}${message.longitude.toFixed(3)}`;
    if (haveSeenLocation[key]) {
      haveSeenLocation[key].otherMessages =
        haveSeenLocation[key].otherMessages || [];
      haveSeenLocation[key].otherMessages.push(message);
    } else {
      haveSeenLocation[key] = message;
      all.push(message);
    }
    return all;
  }, []);
}

export function getLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        resolve(
          fetch('https://ipapi.co/json')
            .then((res) => res.json())
            .then((location) => {
              return {
                lat: location.latitude,
                lng: location.longitude,
              };
            })
        );
      }
    );
  });
}

export async function sendMessage(message) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(message),
  });
  return await res.json();
}
