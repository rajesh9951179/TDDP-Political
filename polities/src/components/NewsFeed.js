import React, { useState } from 'react';
import './NewsFeed.css';

const NewsFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState('PRESS RELEASE');
  const [showData, setShowData] = useState(true);

  const categories = ['PRESS RELEASE', 'SPEECHES', 'ARTICLES'];
  
  const pressReleaseData = [
    {
      title: 'Salient points of the press conference: Senior BJP Leader & Former Union Minister Shri Rajeev Chandrasekhar',
      date: 'Friday 02 Aug, 2024',
      link: '/press-release-1',
    },
    {
      title: 'Salient points of the press conference: Senior BJP Leader & Former Union Minister Shri Rajeev Chandrasekhar',
      date: 'Thursday 01 Aug, 2024',
      link: '/press-release-2',
    },
    {
      title: 'Press Release: Former BJP MP Smt Mamata',
      date: 'Wednesday 31 Jul, 2024',
      link: '/press-release-3',
    },
  ];
  const speechesData = [
    "BJP is devoutly committed to building a strong and developed India which is unimaginable without the trust and the unflinching support of the people of India. Join us and be part of the unprecedented transformation that is changing the lives of all sections of society for better. Together, let's build 'Ek Bharat, Shreshtha Bharat' and witness the rise of New India under the charismatic leadership of PM Shri Narendra Modi"
  ];
  const articlesData = [
    "BJP is devoutly committed to building a strong and developed India which is unimaginable without the trust and the unflinching support of the people of India. Join us and be part of the unprecedented transformation that is changing the lives of all sections of society for better. Together, let's build 'Ek Bharat, Shreshtha Bharat' and witness the rise of New India under the charismatic leadership of PM Shri Narendra Modi"
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowData(true);
  };

  const handleShowMoreClick = () => {
    setShowData(true); 
  };

  const renderData = () => {
    switch (selectedCategory) {
      case 'PRESS RELEASE':
        return pressReleaseData.map((item, index) => (
          <div key={index} className="press-release-item">
            <h3 className="press-release-title">{item.title}</h3>
            <p className="press-release-date">{item.date}</p>
            <a href={item.link} className="press-release-link">Read More</a>
          </div>
        ));
      case 'SPEECHES':
        return speechesData.map((item, index) => (
          <div key={index} className="press-release-item">
            <p className="press-release-text">{item}</p>
          </div>
        ));
      case 'ARTICLES':
        return articlesData.map((item, index) => (
          <div key={index} className="press-release-item">
            <p className="press-release-text">{item}</p>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="data-container">
          {showData ? (
            renderData()
          ) : (
            <button onClick={handleShowMoreClick}>View More</button>
          )}
        </div>
      </div>
      <div className="right-panel">
        <div className="right-panel-row">
          <div className="card upcoming-events">
            <div className="card-header">
              Upcoming Events
            </div>
            <div className="card-body">
              <img src="https://th.bing.com/th/id/OIP.TdSc8HPOi0fp2furv8rIggHaFj?w=221&h=180&c=7&r=0&o=5&pid=1.7" className="card-img-top" alt="Upcoming Events"/>

              <div className="card-title">
                As India prepares to mark its 78th Independence Day on August 15th, 2024, here is an opportunity for you to contribute towards nation-building by sharing your valuable ideas and suggestions for PM Narendra Modi's office.
              </div>
              <br />
              <a href="#" className="btn btn-primary">See all Events</a>
            </div>
          </div>

          <div className="card social-stream">
            <div className="card-header">
              Social Stream
            </div>
            <div className="card-body">
              <div className="card-title">
                PM Shri Narendra Modi's remark...
              </div>
              <div className="card-text">
                <iframe width="500" height="197" src="https://www.youtube.com/embed/hhcxprbSLws" title="PM Modi Remark" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="card-title">
                PM Shri Narendra Modi's remarks at the 6th Eastern Economic Forum in Vladivostok, Russia
              </div>
              <div className="video-item">
                <div className="card-title">
                  PM Modi's Address to the Nation
                </div>
                <iframe width="500" height="197" src="https://www.youtube.com/embed/dBpsi6csi68" title="PM Modi Address to the Nation" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="video-item">
                <div className="card-title">
                  PM Modi's Interview on Economic Reforms
                </div>
                <iframe width="500" height="197" src="https://www.youtube.com/embed/-OA7DJz6-BM" title="New Video: Latest Updates" frameBorder="0" allowFullScreen></iframe>

              </div>
            </div>
          </div>
        </div>

        <div className="card bjp-live mt-3">
          <div className="card-header">
            BJP Live
          </div>
          <div className="card-body">
            <img src="https://assets.thehansindia.com/hansindia-bucket/3388_ntr-campaign.jpg" width="100%" className="card-img-top" alt="BJP Live"/>
            <div className="card-title">
              LIVE: Union Health Minister Shri JP Nadda 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;