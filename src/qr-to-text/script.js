import jsQR from 'jsqr';

function findQRCodeText() {
  return new Promise((resolve, reject) => {
    navigator.mozGetUserMedia(
      {
        audio: false,
        video: {
          width: 200,
          height: 200,
        },
      },
      (stream) => {
        const video = document.querySelector('video');
        video.srcObject = stream;

        video.onloadedmetadata = () => {
          video.play();

          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;

          const interval = setInterval(() => {
            const context = canvas.getContext('2d');
            const imageWidth = Math.max(1, Math.floor(video.videoWidth));
            const imageHeight = Math.max(1, Math.floor(video.videoHeight));

            context.drawImage(video, 0, 0, imageWidth, imageHeight);
            const imageData = context.getImageData(0, 0, imageWidth, imageHeight);

            const code = jsQR(imageData.data, imageWidth, imageHeight);
            if (code) {
              clearInterval(interval);
              resolve(code.data);
            }
          }, 1000);
        };
      },
      (err) => reject(new Error(`Failed to get code: ${err.message}`))
    );
  });
}

navigator.mozSetMessageHandler('activity', async (activityReq) => {
  const data = await findQRCodeText();
  window.close();
  activityReq.postResult(data);
});
