// ── Google Sheet endpoint ──
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyn60T3ix5GE-uruzMaeFk8MoIlTSFjlmJaRdnyFSnXS94j5roKkjmp347TKSDy_BhpJQ/exec";
// Deployment ID: AKfycbyn60T3ix5GE-uruzMaeFk8MoIlTSFjlmJaRdnyFSnXS94j5roKkjmp347TKSDy_BhpJQ

// ── Form submit ──
document.getElementById("note-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const receiver = document.getElementById("receiver").value;
  const message = document.getElementById("message").value.trim();

  if (!message) {
    return; // don't submit an empty note
  }

  const submitBtn = e.target.querySelector("button[type='submit']");
  const originalLabel = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  const params = new URLSearchParams({
    receiver: receiver,
    message: message
  });

  fetch(SCRIPT_URL + "?" + params.toString(), { method: "GET", mode: "no-cors" })
    .then(() => {
      // "no-cors" mode always returns an opaque response, so we can't
      // actually confirm success/failure from the response itself —
      // if the fetch didn't throw, assume it went through.
      submitBtn.textContent = "Sent! 💌";
      e.target.reset();
      setTimeout(() => {
        submitBtn.textContent = originalLabel;
        submitBtn.disabled = false;
      }, 2500);
    })
    .catch((err) => {
      console.error("Note submission failed:", err);
      submitBtn.textContent = "Something went wrong — try again";
      submitBtn.disabled = false;
    });
});