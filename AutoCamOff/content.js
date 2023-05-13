function waitForElement(selector, callback) {
    const element = document.querySelector(selector);
    if (element) {
      callback(element);
    } else {
      setTimeout(() => waitForElement(selector, callback), 100);
    }
  }
  
  function toggleButtonState(element) {
    if (!element.getAttribute('aria-pressed') || element.getAttribute('aria-pressed') === 'false') {
      element.click();
    }
  }
  
  function disableJoinButton() {
    waitForElement('[jsname="Qx7uuf"]', (joinButton) => {
      joinButton.disabled = true;
      autoMuteAndCameraOff();
    });
  }
  
  function enableJoinButton() {
    const joinButton = document.querySelector('[jsname="Qx7uuf"]');
    if (joinButton) {
      joinButton.disabled = false;
    }
  }
  
  function autoMuteAndCameraOff() {
    waitForElement('[data-tooltip*="Turn off microphone"]', (micButton) => {
      toggleButtonState(micButton);
  
      waitForElement('[data-tooltip*="Turn off camera"]', (cameraButton) => {
        toggleButtonState(cameraButton);
  
        enableJoinButton();
      });
    });
  }
  
  window.addEventListener('load', () => {
    disableJoinButton();
  });
  