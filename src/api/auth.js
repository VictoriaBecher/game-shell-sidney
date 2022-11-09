let initialized = false;

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      /* global google*/
      google.accounts.id.initialize({
        client_id:
          '966665572060-f7las6980vuopicl6bdnuhgn9qd008ed.apps.googleusercontent.com',
        callback: (response) => {
          console.log(response);
        },
      });
      resolve();
      initialized = true;
    });
  });
};
