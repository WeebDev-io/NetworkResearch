import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import * as Regular from '@fortawesome/free-regular-svg-icons';
import * as Brands from '@fortawesome/fontawesome-free-brands';
const iconList = Object.keys(Icons).filter(key => key !== "far" && key !== "prefix").map(icon => Icons[icon])
const iconList2 = Object.keys(Regular).filter(key => key !== "far" && key !== "prefix").map(regular =>Regular[regular]);
const iconList3 = Object.keys(Brands).filter(key => key !== "fab" && key !== "prefix").map(icon =>Brands[icon]);
library.add(...iconList,...iconList2,...iconList3);
export {FontAwesomeIcon}