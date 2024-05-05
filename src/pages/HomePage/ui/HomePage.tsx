import React, { Suspense } from 'react';
import { Header } from '../../../widgets/Header';
import { PromoBlock } from '../../../widgets/PromoBlock';
import { FilterBar } from '../../../widgets/FilterBar';
import { GamesList } from '../../../entities/Games/ui/GamesList';
import { Pagination } from '../../../widgets/Pagination';
import { Footer } from '../../../widgets/Footer';
import { Video } from '../../../shared/ui/Video';
import { Loader } from '../../../shared/ui/Loader';

const HomePage = () => {
  return (
    <div>
      <div className="backgroundVideo">
        <Header />
        <div className="promo">
          <PromoBlock />
        </div>
        <Suspense fallback={<Loader />}>
          <Video
            preload="metadata"
            loop
            muted
            autoPlay
            src={`${process.env.PUBLIC_URL}/videoplayback.mp4`}
          />
        </Suspense>
      </div>
      <FilterBar />
      <GamesList />
      <Pagination />
      <Footer />
    </div>
  );
};

export default HomePage;
