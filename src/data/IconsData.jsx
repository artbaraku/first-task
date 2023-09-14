import {TbWorldWww} from "react-icons/tb";
import {TfiRulerAlt} from "react-icons/tfi";
import {TfiWorld} from "react-icons/tfi";
import {PiMedalLight} from "react-icons/pi";
import {BsSearch} from "react-icons/bs";
import {TfiAnnouncement} from "react-icons/tfi";
import {CiDiscount1} from "react-icons/ci";
import {RxText} from "react-icons/rx";
import {TfiLightBulb} from "react-icons/tfi";

export const IconsData = [
    { 
      id: 1,
      title: 'The TLD', 
      description: 'Does the domain extension match the language of the domain name?',
      icon: <TbWorldWww/>},
    { 
      id: 2,
      title: 'Domain Length', 
      description: 'Is the domain short enough to remember?', 
      icon: <TfiRulerAlt/>},
    { id: 3,
      title: 'Language', 
      description: 'How complex is the actual domain name?', 
      icon: <TfiWorld/>},
    { id: 4,
      title: 'International Recognition', 
      description: 'Can the domain name be used on an international scale?', 
      icon: <PiMedalLight/>},
    { id: 5,
      title: 'Search Engine', 
      description: 'Does the domain follow search engine guidelines?', 
      icon: <BsSearch/>},
    { id: 6,
      title: 'Advertising Potential', 
      description: 'Could the domain be used for advertising campaigns?',
      icon: <TfiAnnouncement/> },
    { id: 7,
      title: 'Sales Opportunities', 
      description: 'Can the domain name be used on an international scale?',
      icon: <CiDiscount1/> },
    { id: 8,
      title: 'Typo Susceptibility', 
      description: 'How high is the risk of mistyping the domain name?',
      icon: <RxText/> },
    { id: 9,
      title: 'Business Potential', 
      description: 'Can the domain be used as your company address?',
      icon: <TfiLightBulb/> },
  ];
    