import SocialMediaLinks from '../../App-general-components/Social-Media-Links/social-media-links';
import './header-body.css';

function HeaderBody() {
  return (
    <article className="header_body">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="68"
        height="74"
        viewBox="0 0 68 74"
        fill="none"
      >
        <g clipPath="url(#clip0_2_78)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.4259 68.5278C16.0259 66.7318 9.32534 65.8258 2.82534 64.9958C1.42534 64.8218 0.125535 65.7928 0.0255345 67.1608C-0.174465 68.5298 0.826121 69.7817 2.12612 69.9557C8.42612 70.7548 14.9255 71.6097 21.0255 73.3387C22.3255 73.7137 23.7261 72.9418 24.1261 71.6138C24.5261 70.2868 23.7259 68.9038 22.4259 68.5278Z"
            fill="#118DA8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.8251 43.0648C31.5251 32.5538 19.9251 23.3958 9.8251 12.6028C8.9251 11.5948 7.3251 11.5408 6.3251 12.4818C5.3251 13.4238 5.22549 15.0078 6.22549 16.0158C16.3255 26.8398 27.9255 36.0278 38.2255 46.5698C39.2255 47.5538 40.8251 47.5678 41.8251 46.5998C42.7251 45.6328 42.8251 44.0488 41.8251 43.0648Z"
            fill="#118DA8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M61.1264 2.63576C61.4264 8.65176 61.7259 14.6678 62.0259 20.6848C62.0259 22.0628 63.2264 23.1268 64.6264 23.0598C66.0264 22.9918 67.0259 21.8188 67.0259 20.4398C66.7259 14.4138 66.4264 8.38876 66.1264 2.36376C66.0264 0.985757 64.8262 -0.0712432 63.4262 0.00375683C62.1262 0.0787568 61.0264 1.25876 61.1264 2.63576Z"
            fill="#118DA8"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_78">
            <rect width="68" height="74" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="header_body_part_left">
        <img src="/image_header_body/image_header_body.jpg" alt="" />
      </div>
      <div className="header_body_part_right">
        <div className="header_body_part_right_titel">
          Take your podcast to the next <span>level</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="104"
            viewBox="0 0 160 104"
            fill="none"
          >
            <g clipPath="url(#clip0_2_71)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M161.952 88.5318C129.845 82.7756 97.196 85.9595 65.0087 84.923C43.7248 84.2296 22.4395 82.5594 1.17106 82.0002C0.533394 81.9853 0.00896029 82.9695 0.000103908 84.2072C-0.00836745 85.4449 0.502216 86.459 1.13949 86.4739C22.4057 87.0331 43.6886 88.7034 64.9702 89.3968C97.0997 90.4332 129.687 87.2419 161.736 92.9906C162.371 93.1025 162.934 92.2003 162.995 90.9701C163.053 89.7398 162.583 88.6511 161.952 88.5318Z"
                fill="#118DA8"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_71">
                <rect width="160" height="104" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="header_body_part_right_links">
          <p className="header_body_part_right_links_text">Listen on</p>
          <SocialMediaLinks/>
        </div>
      </div>
    </article>
  );
}

export default HeaderBody;
