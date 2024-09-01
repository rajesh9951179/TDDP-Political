// import React, { useState } from 'react';
// import './Navbar1.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

// function Navbar1() {
//   const [language, setLanguage] = useState('English');

//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//   };

//   const navLabels = {
//     English: {
//       home: 'Home',
//       latestEvents: 'Latest Events',
//       model: 'Model',
//       timeline: 'Timeline',
//       achievements: 'Achievements',
//       socialMedia: 'Social Media',
//       party: 'Party',
//       ideology: 'Ideology',
//       history: 'History Of TDPP',
//       organization: 'Organization Structure',
//       representatives: 'Elected Representatives',
//       resources: 'Resources',
//       events: 'Events',
//       media: 'Media',
//       manifesto: 'Election Manifesto',
//       voice: 'Voice to Recover',
//       rights: 'Rights',
//       gallery: 'Gallery',
//       formC7: 'Form C7-General Election 2024',
//       formC2: 'Form C2-General Election 2024',
//       partyName: 'Telangana Dravida Prajala Party',
//     },
//     Tamil: {
//       home: 'முகப்பு',
//       latestEvents: 'சமீபத்திய நிகழ்வுகள்',
//       model: 'மாதிரி',
//       timeline: 'காலவரிசை',
//       achievements: 'சாதனைகள்',
//       socialMedia: 'சமூக ஊடகம்',
//       party: 'கட்சி',
//       ideology: 'தத்துவம்',
//       history: 'டிடிபிபியின் வரலாறு',
//       organization: 'நிறுவல் அமைப்பு',
//       representatives: 'தேர்ந்தெடுக்கப்பட்ட பிரதிநிதிகள்',
//       resources: 'வளங்கள்',
//       events: 'நிகழ்வுகள்',
//       media: 'ஊடகம்',
//       manifesto: 'தேர்தல் அறிக்கை',
//       voice: 'மீட்டெடுக்கும் குரல்',
//       rights: 'உரிமைகள்',
//       gallery: 'காட்சியகம்',
//       formC7: 'படிவம் சி7-பொது தேர்தல் 2024',
//       formC2: 'படிவம் சி2-பொது தேர்தல் 2024',
//       partyName: 'தெலுங்கானா திராவிட மக்களின் கட்சி',
//     },
//     Telugu: {
//       home: 'హోం',
//       latestEvents: 'తాజా ఈవెంట్స్',
//       model: 'మోడల్',
//       timeline: 'కాలక్రమం',
//       achievements: 'సాధనాలు',
//       socialMedia: 'సోషల్ మీడియా',
//       party: 'పార్టీ',
//       ideology: 'సిద్ధాంతం',
//       history: 'టిడిపిపి చరిత్ర',
//       organization: 'సంస్థాకల్పన',
//       representatives: 'ఎన్నికైన ప్రతినిధులు',
//       resources: 'వనరులు',
//       events: 'ఈవెంట్స్',
//       media: 'మీడియా',
//       manifesto: 'ఎన్నికల మేనిఫెస్టో',
//       voice: 'పునఃప్రాప్తి కాంతం',
//       rights: 'హక్కులు',
//       gallery: 'గ్యాలరీ',
//       formC7: 'ఫారమ్ సి7-సాధారణ ఎన్నికలు 2024',
//       formC2: 'ఫారమ్ సి2-సాధారణ ఎన్నికలు 2024',
//       partyName: 'తెలంగాణ ద్రవిడ ప్రజల పార్టీ',
//     },
//     Hindi: {
//       home: 'होम',
//       latestEvents: 'नवीनतम घटनाएँ',
//       model: 'मॉडल',
//       timeline: 'कालक्रम',
//       achievements: 'उपलब्धियाँ',
//       socialMedia: 'सोशल मीडिया',
//       party: 'पार्टी',
//       ideology: 'विचारधारा',
//       history: 'टीडीपीपी का इतिहास',
//       organization: 'संगठन संरचना',
//       representatives: 'निर्वाचित प्रतिनिधि',
//       resources: 'संसाधन',
//       events: 'घटनाएँ',
//       media: 'मीडिया',
//       manifesto: 'चुनाव घोषणा पत्र',
//       voice: 'पुनर्प्राप्त करने के लिए आवाज',
//       rights: 'अधिकार',
//       gallery: 'गैलरी',
//       formC7: 'फॉर्म सी7-लोकसभा चुनाव 2024',
//       formC2: 'फॉर्म सी2-लोकसभा चुनाव 2024',
//       partyName: 'तेलंगाना द्रविड़ प्रजाल पार्टी',
//     }
//   };

//   const labels = navLabels[language];

//   return (
//     <div className="App">
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <img src={images} alt="Logo" />
//           <span>{labels.partyName}</span>
//         </div>
//         <ul className="navbar-menu">
//           <li className="navbar-item">
//             <span>{labels.home}</span>
//             <div className="dropdown">
//               <a href="#home1">{labels.latestEvents}</a>
//               <a href="#home2">{labels.model}</a>
//               <a href="#home3">{labels.timeline}</a>
//               <a href="#home4">{labels.achievements}</a>
//               <a href="#home5">{labels.socialMedia}</a>
//             </div>
//           </li>
//           <li className="navbar-item">
//             <span>{labels.party}</span>
//             <div className="dropdown">
//               <a href="#party1">{labels.ideology}</a>
//               <a href="#party2">{labels.history}</a>
//               <a href="#party3">{labels.organization}</a>
//               <a href="#party4">{labels.representatives}</a>
//             </div>
//           </li>
//           <li className="navbar-item">
//             <a href="#achievements">{labels.achievements}</a>
//           </li>
//           <li className="navbar-item">
//             <span>{labels.resources}</span>
//             <div className="dropdown">
//               <a href="#resources1">{labels.events}</a>
//               <a href="#resources2">{labels.media}</a>
//               <a href="#resources3">{labels.manifesto}</a>
//               <a href="#resources4">{labels.voice}</a>
//               <a href="#resources5">{labels.rights}</a>
//               <a href="#resources6">{labels.gallery}</a>
//               <a href="#resources7">{labels.formC7}</a>
//               <a href="#resources8">{labels.formC2}</a>
//             </div>
//           </li>
//         </ul>
//         <div className="language-dropdown">
//           <button className="language-btn">{language}</button>
//           <div className="language-dropdown-content">
//             <button onClick={() => handleLanguageChange('English')}>English</button>
//             <button onClick={() => handleLanguageChange('Tamil')}>Tamil</button>
//             <button onClick={() => handleLanguageChange('Telugu')}>Telugu</button>
//             <button onClick={() => handleLanguageChange('Hindi')}>Hindi</button>
//           </div>
//         </div>
//         <div className="social-icons">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faFacebook} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faTwitter} />
//           </a>
//           <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar1;