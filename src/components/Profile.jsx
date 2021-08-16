import React from 'react';
import './profile.css';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

const Profile = (props) => {
  const id = props.match.params.id;
  const charData = props.data;
  const pro = charData[id];
  const {
    name,
    img,
    nickname,
    status,
    birthday,
    portrayed,
    occupation,
    appearance,
  } = pro;
  const quotesdata = props.quotes;

  return (
    <div className='main_div'>
      <div className='head_div'>
        <Link className='btn' to={`/`}>
          <Button variant='contained' color='primary'>
            <ArrowBackIosRoundedIcon/> Go Back
          </Button>
        </Link>
        <Typography className="name">{name}</Typography>
      </div>
      <div className='details'>
        <div className='left'>
          <img src={img} alt={name} />
        </div>
        <div className='right'>
          <div className='detailBox'>
            <Typography className='typo'>
              <span>Name</span> : {name}
            </Typography>
            <Typography className='typo'>
              <span>Date Of Birth</span> : {birthday}
            </Typography>
            <Typography className='typo2'>
              <span>Occupation </span> :
              <span>
                {occupation.map((elem, index) => {
                  return (
                    <Typography key={index} className='occu'>
                      {elem}
                    </Typography>
                  );
                })}
              </span>
            </Typography>
            <Typography className='typo'>
              <span>Status</span> : {status}{' '}
            </Typography>
            <Typography className='typo'>
              <span>Portrayed</span> : {portrayed}
            </Typography>
            <Typography className='typo'>
              <span>Nickname</span> : {nickname}
            </Typography>
            <Typography className='typo3'>
              <span>Appeearance In Seasons </span> :
              <span>
                {appearance.map((elem, index) => {
                  return <Typography className='app'>{elem}</Typography>;
                })}
              </span>
            </Typography>
            <Typography className='typo2'>
              <span>Quotes </span> :
              <span>
                {quotesdata
                  .filter((val) => {
                    if (name === val.author) {
                      return val;
                    }
                    return null;
                  })
                  .map((elem, index) => {
                    return (
                      <Typography className='occu' key={index}>
                        ✔ {elem.quote}
                      </Typography>
                    );
                  })}
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
