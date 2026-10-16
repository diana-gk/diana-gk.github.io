
(() => {
  "use strict";

  const BOOKING_URL =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1dTINzgza7l3dZs4xkEb1ouigePxSsHW_cU7kVsBx9O9dyPlJUl2rrq09tcJTYly8AOvJ8eMFZ?gv=true";

  function initializeBooking() {
    const target = document.getElementById(
      "google-booking-button"
    );

    if (!target) return;

    // Load Google Calendar styling
    if (!document.getElementById("google-booking-css")) {
      const css = document.createElement("link");
      css.id = "google-booking-css";
      css.rel = "stylesheet";
      css.href =
        "https://calendar.google.com/calendar/scheduling-button-script.css";
      document.head.appendChild(css);
    }

    // Load Google Calendar scheduling popup
    const script = document.createElement("script");

    script.src =
      "https://calendar.google.com/calendar/scheduling-button-script.js";

    script.async = true;

    script.onload = () => {
      if (!window.calendar?.schedulingButton) return;

      window.calendar.schedulingButton.load({
        url: BOOKING_URL,
        color: "#7241e8",
        label: "Book a 30-Minute Meeting",
        target: target
      });
    };

    document.head.appendChild(script);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeBooking
    );
  } else {
    initializeBooking();
  }
})();
