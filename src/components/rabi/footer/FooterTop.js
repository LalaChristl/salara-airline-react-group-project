import tkIcon from "../images/tkblog-icon.webp";
function FooterTop() {
  return (
    <div
      className="footer-top "
      style={{
        height: "58.56px",
        color: "#c3cbd7",
        backgroundColor: "#232b38",
      }}
    >
      <div className="container " style={{ fontSize: "20px" }}>
        <ul className="footer-social-list d-flex justify-content-center cursor-pointer  hvr-pulse ">
          <li className="footer-li px-[10px] py-[15px]">
            <a href="https://www.facebook.com/turkishairlines" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className="footer-li px-[10px] py-[15px]">
            <a href="https://twitter.com/TurkishAirlines" target="_blank">
              <i className="fa fa-twitter "></i>
            </a>
          </li>
          <li className="footer-li px-[10px] py-[15px]">
            <a href="https://www.instagram.com/turkishairlines" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li className="footer-li px-[10px] py-[15px]">
            <a
              href="https://www.youtube.com/channel/UCSK1_qvsEuTNZnvLQvNRLGQ"
              target="_blank"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li className="footer-li px-[10px] py-[15px]">
            <a
              href="https://tr.linkedin.com/company/turkish-airlines"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="footer-li px-[10px] py-[15px]">
            <a href="https://www.turkishairlines.com/theme/img/icons/tkblog-icon.png">
              <img className="fa fa-tkblog" src={tkIcon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterTop;
