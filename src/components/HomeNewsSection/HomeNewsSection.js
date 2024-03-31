import React from 'react';

const HomeNewsSection = () => {
    return (
        <div className='home-news-section'>
            <div className="container">
                <h3 className='mt-3 mb-4'>Recent News</h3>
                <div className="row">
                    <div class="card col-sm-3">
                        <img src="https://i.ytimg.com/vi/bOTx3PrLdIc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4Gc-ydjQD9H1Kgok4GWLexLBtOw" class="card-img-top" alt="..." />
                            <div class="card-body px-1">
                                <h6 class="card-title "><b>হাসিনা ক্যান পন্য বয়কটের বিরুদ্ধে মাঠে নামিলো || Pinaki Bhattacharya</b> </h6>
                                <small class="card-text">বিএনপি'র সিনিয়ার যুগ্ম মহাসচিব রুহুল কবির রিজভী গায়ের চাদর ছুইরা ফেইলা ভারতীয় পণ্য বয়কট আন্দোলনের সাথে সহমর্মিতা ঘোষণা করার পর তার কিছু কর্মী ওই শালটাতে আগুন ধরায়ে দেয়। ...</small>
                                <a href="/news/" class="btn btn-primary mt-3">See Full News</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNewsSection;