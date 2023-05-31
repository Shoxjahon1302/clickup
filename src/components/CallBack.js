import React from 'react';
import Header from './pages/Header';
import Explore from './pages/Explore';
import ToTopScrollBar from './pages/ToTopScrollBar';
import AnimatedCursor from './pages/AnimationCursor';
import Loader from './pages/Loader';

export default function CallBack() {
  return (
    <div>
      <AnimatedCursor />
      <ToTopScrollBar />
      <Header />
      <Explore />
      <Loader />
    </div>
  );
}
