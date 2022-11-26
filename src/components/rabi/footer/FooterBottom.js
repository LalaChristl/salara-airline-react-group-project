import React from "react";

function FooterBottom() {
  return (
    <div
      className="footer-bottom py-[36px] bg-[#181c23] text-[#c3cbd7]  text-center"
      style={{ fontSize: "11px", fontWeight: "300" }}
    >
      <div
        className="footer-bottom flex justify-content-around mx-auto cursor-pointer"
        style={{ maxWidth: "1024px" }}
      >
        <a
          href="https://www.turkishairlines.com/en-de/accessibility/"
          target="_blank"
        >
          Accessibility
        </a>
        <a
          href="https://www.turkishairlines.com/en-de/legal-notice/privacy-policy/"
          target="_blank"
        >
          Privacy &amp; Cookie Policy
        </a>
        <a
          href="https://www.turkishairlines.com/en-de/legal-notice/"
          target="_blank"
        >
          Legal Notice
        </a>
        <a
          href="https://www.turkishairlines.com/en-de/legal-notice/passenger-rights/"
          target="_blank"
        >
          Passenger Rights
        </a>
        <a href="/en-de/legal-notice/gdpr-privacy-notice/" target="_blank">
          EU Data Subjects Rights
        </a>
        <span className="tel">49 69 86 799 849</span>
        <span className="copy">Turkish Airlines Copyright © 1996 - 2022</span>
      </div>
    </div>
  );
}

export default FooterBottom;
