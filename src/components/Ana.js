import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Ana.css';

function Ana() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Marmara Video Portalı</h1>
      <p>Eğitim materyalleri burada.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Kayıt Ol
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('KayıtOl_Log')}
        >
          GİRİŞ
        </Button>
      </div>
    </div>
  );
}

export default Ana;
