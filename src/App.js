import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Earn></Earn>
    </div>
  );
}

const Rectangledate = () => {
  let [left_date, l_d] = useState(28);
  return (
    <div className="rectangle">
      <span className="남은날짜">{left_date}일 남았어요</span>
      <span className="날짜">22.01.01. - 22.01.31.</span>
    </div>
  );
};

const Earn = () => {
  return (
    <div>
      <div className="earn">
        <Rectangledate></Rectangledate>
        <Views></Views>
        <조회수 />
        <Myview />
        <Players />
        <참여자수 />
        <Myplayer />
        <Alarmhover />
        <Notification />
      </div>
    </div>
  );
};

const Views = () => {
  let [view_count, l_d] = useState(20);
  return <div className="횟수">{view_count}회</div>;
};

const 조회수 = () => {
  return (
    <div className="조회수">
      조회수<span className="goalview">250회</span>
    </div>
  );
};

const Myview = () => {
  return (
    <div className="gray">
      <div className="purple"></div>
    </div>
  );
};

const Players = () => {
  let [player_count, l_d] = useState(4);
  return <div className="player">{player_count}명</div>;
};

const 참여자수 = () => {
  return (
    <div className="참여자수">
      플레이 참여자 수<span className="goalplayer">5명</span>
    </div>
  );
};

const Myplayer = () => {
  return (
    <div className="gray_">
      <div className="purple_"></div>
    </div>
  );
};

const Notification = () => {
  return (
    <div className="notification">
      {' '}
      <span>
        {' '}
        • 수익을 창출하고 정산받으려면 30일 이내에{' '}
        <b>500 이상의 조회수와 5명 이상의 게임 참여자수</b>에 도달해야해요.
      </span>
      <span>
        {' '}
        • 기간 내 기준에 도달하지 못하면 다시 초기화된 후 집계됩니다.
      </span>{' '}
    </div>
  );
};

const Alarmhover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const handleHover = () => {
    if (!isToggled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isToggled) {
      setIsHovered(false);
    }
  };
  const handleclick = () => {
    setIsToggled(!isToggled);
    setIsHovered(false);
  };

  const containerClassName = isHovered ? 'alarm hover' : 'alarm';
  const content = isToggled
    ? '수익 창출 자격이 되면 이메일 알람을 드려요'
    : '수익 창출 자격이 되면 이메일 알람을 받을게요';
  const imageSrc = isToggled ? 'done.png' : 'bell.png';
  return (
    <div
      className={`${containerClassName} ${isToggled ? 'toggled' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="alarm-content" onClick={handleclick}>
        <img src={imageSrc} className="bell" />
        <span className="alarmtext">{content}</span>
      </div>
    </div>
  );
};

export default App;
