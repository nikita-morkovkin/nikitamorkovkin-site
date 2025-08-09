import React, {useContext} from 'react';
import './_header.scss';
import {ThemeContext} from "../../ThemeContent.jsx";
import {motion} from 'framer-motion';
import buttonVariants from "./buttonVariants.js";
import headerLinkVariants from "./headerLinkVariants.js";

const Header = () => {
  const {toggleTheme} = useContext(ThemeContext);

  return (
    <header className={'header'}>
      <div className="header__inner">
        <motion.a
          initial={headerLinkVariants.initial}
          whileHover={headerLinkVariants.hover}
          transition={{duration: 0.3}}
          className={'header__logo'}
          title={'Go to home'}
          href="/"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#ffffff"
              stroke="none"
            >
              <path
                d="M2466 4770 c-169 -88 -339 -241 -445 -399 -97 -146 -223 -408 -245
-511 -30 -136 -12 -270 52 -396 l20 -40 -230 -115 c-127 -63 -248 -126 -269
-142 -31 -21 -52 -54 -104 -156 l-65 -130 -219 -3 c-241 -3 -245 -4 -295 -72
-21 -27 -21 -36 -24 -936 l-2 -908 -109 -4 c-92 -2 -114 -6 -137 -24 -45 -33
-67 -70 -71 -121 -16 -160 101 -359 255 -437 117 -59 2 -56 1982 -56 1598 0
1823 2 1875 15 186 49 328 205 357 393 13 84 5 132 -29 173 -40 47 -79 59
-188 59 l-95 0 -2 909 c-3 901 -3 910 -24 937 -50 68 -54 69 -295 72 l-219 3
-59 118 c-33 65 -71 131 -84 147 -16 19 -111 72 -275 153 l-250 125 20 40 c66
130 83 270 50 406 -26 102 -153 366 -241 497 -106 159 -279 316 -435 398 -84
44 -125 45 -200 5z m264 -636 c30 -9 84 -31 120 -49 l65 -33 60 -123 c57 -118
60 -127 60 -199 0 -85 -20 -134 -77 -186 -18 -17 -115 -93 -215 -168 l-183
-136 -182 136 c-101 75 -198 151 -216 168 -57 52 -77 101 -77 186 0 72 3 81
59 198 54 111 64 125 104 147 57 32 145 64 207 75 68 12 208 4 275 -16z m-431
-1099 c101 -75 194 -141 205 -145 12 -5 -194 -9 -472 -9 -491 -1 -493 -1 -482
19 13 25 541 291 555 280 6 -4 93 -69 194 -145z m1271 -135 c11 -20 9 -20
-482 -19 -271 1 -486 3 -476 6 9 2 105 71 214 153 l198 148 268 -134 c161 -81
271 -142 278 -154z m590 -1140 l0 -800 -1600 0 -1600 0 0 800 0 800 1600 0
1600 0 0 -800z"
              />
              <path
                d="M1855 2386 c-16 -8 -150 -135 -297 -282 -288 -290 -289 -293 -273
-382 5 -32 44 -75 283 -314 299 -299 301 -300 389 -283 49 9 109 69 118 118
16 85 9 96 -208 315 l-201 202 201 203 c171 171 202 208 208 240 25 132 -101
237 -220 183z"
              />
              <path
                d="M2655 2384 c-66 -34 -68 -39 -246 -571 -188 -564 -187 -560 -134
-629 64 -84 187 -84 249 0 14 18 93 240 191 535 183 551 183 548 130 617 -46
60 -127 81 -190 48z"
              />
              <path
                d="M3135 2386 c-67 -29 -105 -105 -90 -183 6 -32 37 -69 208 -240 l201
-203 -201 -202 c-217 -219 -224 -230 -208 -315 9 -49 69 -109 118 -118 88 -17
90 -16 389 283 239 239 278 282 283 315 16 88 15 91 -273 381 -147 147 -281
274 -299 282 -40 17 -89 17 -128 0z"
              />
            </g>
          </svg>
        </motion.a>

        <ul className="header__menu">
          <motion.li
            initial={headerLinkVariants.initial}
            whileHover={headerLinkVariants.hover}
            transition={{duration: 0.2}}
            className="header__menu-item"
          >
            <a
              className={'header__menu-link'}
              href="#about"
            >About
            </a>
          </motion.li>
          <motion.li
            initial={headerLinkVariants.initial}
            whileHover={headerLinkVariants.hover}
            transition={{duration: 0.2}}
            className="header__menu-item"
          >
            <a
              className={'header__menu-link'}
              href="#skills"
            >Skills
            </a>
          </motion.li>
          <motion.li
            initial={headerLinkVariants.initial}
            whileHover={headerLinkVariants.hover}
            transition={{duration: 0.2}}
            className="header__menu-item"
          >
            <a
              className={'header__menu-link'}
              href="#portfolio"
            >Portfolio
            </a>
          </motion.li>
          <motion.li
            initial={headerLinkVariants.initial}
            whileHover={headerLinkVariants.hover}
            transition={{duration: 0.2}}
            className="header__menu-item"
          >
            <a
              className={'header__menu-link'}
              href="#work-experience"
            >Work Experience
            </a>
          </motion.li>
          <motion.li
            initial={headerLinkVariants.initial}
            whileHover={headerLinkVariants.hover}
            transition={{duration: 0.2}}
            className="header__menu-item"
          >
            <a
              className={'header__menu-link'}
              href="#contacts"
            >Contacts
            </a>
          </motion.li>
        </ul>

        <motion.button
          initial={buttonVariants.initial}
          whileHover={buttonVariants.hover}
          transition={{duration: 0.1}}
          className={'header__switch-theme-button'}
          type="button"
          title={'Change theme'}
          onClick={toggleTheme}
        >
        </motion.button>
      </div>
    </header>
  );
};

export default Header;