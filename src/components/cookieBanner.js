import React from "react"
import CookieConsent from 'react-cookie-consent'

const CookieBanner = () => (

  <CookieConsent
    location="bottom"
    buttonText="Accept"
    declineButtonText="Decline"
    enableDeclineButton
    cookieName="gatsby-gdpr-google-analytics"
    // setting two cookies on one click
    // onAccept={() => {
    //   Cookies.set("gatsby-gdpr-google-analytics")
    //   Cookies.set("gatsby-gdpr-facebook-pixel")
    // }}
    buttonStyle={{
      backgroundColor: "#141B24",
      color: "white",
      textShadow: "none",
      fontSize:"1.4rem",
      borderRadius: "2px"
    }}
    declineButtonStyle={{
      backgroundColor: "transparent",
      color: "#141B24",
      textShadow: "none",
      fontSize:"1.4rem",
    }}
    style={{
      background: "#61DBD3",
      textShadow: "none",
      color: "#141B24",
      fontSize:"1.5rem",
    }}
  >
    This website uses cookies to enhance the user experience.
  </CookieConsent>
)


export default CookieBanner
