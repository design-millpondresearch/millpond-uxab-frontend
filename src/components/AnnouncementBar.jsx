import './AnnouncementBar.css';

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement-bar-container">
        <span>Mill Pond Research is now an IBM Silver Business Partner.</span>
        <a href="https://www.ibm.com/partnerplus/directory/company/10019" className="announcement-link" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
};

export default AnnouncementBar;

