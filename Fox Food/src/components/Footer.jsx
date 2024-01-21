import { Fragment } from "react";
import { footerData } from "../Data/footers";

function Footer() {
  return (
    <>
      <div className="line-bottom"></div>
      <div className="footer">
        {footerData.map((data) => (
          <Fragment key={data.id}>
            <div className="foot-sec-1">
              <ul>
                <img className="footLogo" src={data.logo} alt="" />
                <li>{data.copyright}</li>
                <li>{data.limited}</li>
              </ul>
            </div>
            <div className="foot-sec-2">
              <ul>
                <li>{data.Company.about}</li>
                <li>{data.Company.team}</li>
                <li>{data.Company.careers}</li>
              </ul>
            </div>
            <div className="foot-sec-3">
              <ul>
                <li>{data.contact_us.help}</li>
                <li>{data.contact_us.us}</li>
                <li>{data.contact_us.with}</li>
              </ul>
            </div>
            <div className="foot-sec-4">
              <ul>
                <li>{data.legal.terms}</li>
                <li>{data.legal.Cookie}</li>
                <li>{data.legal.policy}</li>
              </ul>
            </div>
            <div className="foot-sec-5">
              <ul>
                <li>{data.deliver.city_1}</li>
                <li>{data.deliver.city_2}</li>
                <li>{data.deliver.city_3}</li>
                <li>{data.deliver.city_4}</li>
              </ul>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default Footer;
