import React from 'react';

const HomeNewsSection = () => {

    const recentNewsItems = [
        {
            title: "হাসিনা ক্যান পন্য বয়কটের বিরুদ্ধে মাঠে নামিলো || Pinaki Bhattacharya",
            desccipton: "বিএনপি'র সিনিয়ার যুগ্ম মহাসচিব রুহুল কবির রিজভী গায়ের চাদর ছুইরা ফেইলা ভারতীয় পণ্য বয়কট আন্দোলনের সাথে সহমর্মিতা ঘোষণা করার পর তার কিছু কর্মী ওই শালটাতে আগুন ধরায়ে দেয়।",
            thumbnail: "https://i.ytimg.com/vi/bOTx3PrLdIc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4Gc-ydjQD9H1Kgok4GWLexLBtOw",
            link: ""
        },
        {
            title: "ভারতের খবরদারি জয় বাংলা || Pinaki Bhattacharya",
            desccipton: "কামাল আহমেদ লিখেছেন, বৈশ্বিক পরিসরে বয়কট আন্দোলনের ক্ষেত্রে স্পষ্টতই দেখা গেছে, তার অর্থনৈতিক প্রভাব যত সীমিতই হোক না কেন, রাজনৈতিক প্রভাব তার চেয়ে অনেক বেশি।",
            thumbnail: "https://i.ytimg.com/vi/ukHBmXC958E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6PWLn1pv0Z2TuO1b0zpbwMXDnbA",
            link: ""
        },
    ]

    return (
        <div className='home-news-section'>
            <div className="container">
                <h3 className='mt-3 mb-4'>Recent News</h3>
                <div className="row">
                    {
                        recentNewsItems.map((recentNewsItem) =>
                            <div className="col-sm-3">
                                <div class="card">
                                    <img src={recentNewsItem.thumbnail} class="card-img-top" alt="..." />
                                    <div class="card-body px-2">
                                        <h6 class="card-title "><b>{recentNewsItem.title}</b> </h6>
                                        <small class="card-text">{recentNewsItem.desccipton} ...</small><br />
                                        <a href={recentNewsItem.link} class="btn btn-primary mt-3">See Full News</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeNewsSection;