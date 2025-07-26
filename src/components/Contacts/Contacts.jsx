import React from 'react';
import './_contacts.scss';

const Contacts = () => {
  return (
    <footer className={'contacts'} id="contacts">
        <div className="contacts__container">
          <div className="contacts__text-content">
            <h2 className={'contacts__title'}>Do you want to ask <br/> <span>something interesting?</span></h2>
            <p>Contact me. I am in touch mon-fri from 8 am to 8 pm (gmt).</p>
          </div>
          <div className="contacts__icons-container">
            <ul className="portfolio__icons-list">
              <li className={'contacts__item'}>
                <a href="mailto:nikitamorkovkinwork@gmail.com" title={'Email'} className={'contacts__icon'}>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                       width="32" height="32" viewBox="0 0 512.000000 512.000000"
                       preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                      <path d="M375 4353 c-11 -2 -42 -11 -69 -20 l-48 -15 538 -540 c908 -909 1494
-1481 1548 -1511 134 -74 298 -74 432 0 54 30 640 602 1548 1511 l538 539 -48
19 c-47 18 -120 19 -2234 20 -1202 1 -2194 0 -2205 -3z"/>
                      <path d="M24 4053 c-18 -46 -19 -113 -22 -1463 -2 -1414 -1 -1467 31 -1544
l12 -28 775 770 775 771 -440 441 c-242 243 -591 590 -776 771 l-337 329 -18
-47z"/>
                      <path d="M4299 3331 l-774 -771 774 -771 c576 -572 777 -767 783 -756 4 8 14
41 23 73 13 51 15 238 15 1454 0 1216 -2 1403 -15 1454 -9 32 -19 65 -23 73
-6 11 -207 -184 -783 -756z"/>
                      <path d="M1029 1572 l-774 -769 55 -19 c53 -18 116 -19 2250 -19 2119 0 2197
1 2249 19 l53 18 -438 440 c-242 242 -591 588 -777 770 l-337 331 -138 -134
c-75 -74 -164 -152 -196 -173 -208 -138 -477 -163 -707 -67 -102 43 -173 96
-320 239 -75 72 -139 132 -142 132 -2 0 -353 -346 -778 -768z"/>
                    </g>
                  </svg>
                </a>
              </li>
              <li className={'contacts__item'}>
                <a href="https://github.com/nikita-morkovkin" title={'GitHub'} className={'contacts__icon'}>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                       width="32" height="32" viewBox="0 0 512.000000 512.000000"
                       preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                      <path d="M2384 5060 c-1012 -69 -1891 -738 -2235 -1703 -53 -146 -102 -349
-125 -512 -23 -157 -25 -496 -5 -655 102 -816 575 -1526 1287 -1932 164 -94
418 -200 483 -202 51 -1 94 20 116 57 18 30 19 50 16 267 -1 129 -3 236 -4
236 -1 1 -38 -4 -82 -12 -263 -43 -497 16 -646 165 -58 58 -76 86 -134 206
-94 196 -149 271 -255 348 -78 56 -120 98 -120 119 0 50 121 67 217 30 125
-47 208 -119 299 -258 126 -191 284 -276 485 -261 77 6 233 49 245 68 3 6 13
38 20 71 19 80 68 181 110 228 40 45 44 42 -86 60 -103 14 -282 60 -368 94
-362 143 -571 410 -649 829 -25 134 -25 463 0 567 36 149 103 285 195 398 l43
53 -15 47 c-52 161 -46 370 16 564 20 61 24 67 54 73 107 20 352 -68 576 -206
l98 -61 87 20 c204 47 298 57 553 57 256 0 349 -10 553 -57 l88 -20 77 48
c153 96 304 167 407 193 85 21 159 31 191 25 28 -5 33 -12 52 -72 57 -178 67
-404 23 -542 l-21 -65 20 -25 c98 -121 175 -269 212 -409 26 -98 36 -348 19
-488 -74 -608 -407 -935 -1041 -1023 -120 -16 -118 -15 -83 -53 46 -48 90
-134 115 -223 20 -74 22 -106 27 -529 7 -492 5 -482 66 -507 47 -20 102 -13
200 26 348 135 622 311 884 569 417 410 679 942 752 1527 20 159 18 498 -5
655 -173 1219 -1151 2131 -2373 2215 -161 11 -175 11 -339 0z"/>
                    </g>
                  </svg>
                </a>
              </li>
              <li className={'contacts__item'}>
                <a href="https://t.me/nikitamorkovkin" title={'Telegram'} className={'contacts__icon'}>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                       width="32" height="32" viewBox="0 0 512.000000 512.000000"
                       preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                      <path d="M4770 4666 c-340 -125 -4535 -1736 -4597 -1766 -205 -97 -229 -225
-58 -312 17 -9 300 -99 631 -202 l601 -187 1364 854 c751 469 1380 859 1398
865 47 16 87 15 105 -4 13 -13 14 -19 3 -38 -6 -13 -505 -466 -1107 -1006
-602 -541 -1097 -987 -1099 -992 -2 -5 -22 -275 -45 -600 l-42 -590 46 6 c25
3 64 16 87 29 24 12 180 154 349 315 168 161 312 296 319 298 7 3 275 -187
596 -422 320 -235 607 -438 638 -452 81 -38 171 -41 230 -10 53 28 104 98 126
171 8 28 192 875 407 1882 359 1676 392 1838 392 1925 0 82 -3 102 -25 145
-15 31 -42 62 -68 80 -59 41 -157 46 -251 11z"/>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
            <div>© Nikita Morkovkin, 2025</div>
          </div>
        </div>
    </footer>
  );
};

export default Contacts;