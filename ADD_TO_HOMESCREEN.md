<script src="https://cdn.jsdelivr.net/gh/philfung/add-to-homescreen@2.91/dist/add-to-homescreen.min.js"></script>

<script>
    document.addEventListener('DOMContentLoaded', function () {
      window.AddToHomeScreenInstance = window.AddToHomeScreen({
        appName: '시흥-판교 버스 시간표',
        appNameDisplay: 'standalone',
        appIconUrl: 'apple-touch-icon.png',
        assetUrl: 'https://cdn.jsdelivr.net/gh/philfung/add-to-homescreen@2.91/dist/assets/img/',
        maxModalDisplayCount: -1,
        displayOptions:{ showMobile: true, showDesktop: true }
      });
      ret = window.AddToHomeScreenInstance.show();
    });
  </script>