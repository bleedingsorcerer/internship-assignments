import React from 'react';
import Swal from 'sweetalert2';
import QRCode from 'qrcode.react';
import './GatePassCard.css';
import profileImage from '../images/profile.jpg';

const GatePassCard = () => {
  const now = new Date();
  const cutoffTime = new Date();
  cutoffTime.setHours(10, 0, 0, 0); 

  const isOnTime = now <= cutoffTime;
  const message = isOnTime ? "You're on time" : "Oops! You're late";

  const handleQRCodeScan = () => {
    Swal.fire({
      title: message,
      icon: isOnTime ? 'success' : 'error',
    });

    // Use Web Speech API for text-to-speech
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.onend = () => {
      console.log('Speech has finished');
    };
    utterance.onerror = (event) => {
      console.error('Speech synthesis error', event);
    };
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="gate-pass-card">
      <img src={profileImage} alt="Your Name" className="profile-image" />
      <h1>Shreyasi Dutta</h1>
      <p>Email ID: xyz@gmail.com</p>
      <p>Company: XYZ Company</p>
      <p>Position: Full Stack Web Developer</p>
      <div className="qr-code-container">
        <QRCode value={message} onClick={handleQRCodeScan} />
      </div>
    </div>
  );
};

export default GatePassCard;
