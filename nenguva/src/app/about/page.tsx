import React from "react";

const AboutUs = () => {
  return (
    <div className="content sticky-footer__content">
      <div className="about">
        <div className="about__header">
          <div className="container">
            <div className="large-width-10 large-offset-1">
              <h1>About Us</h1>

              <p>
                Parcel Monkey is the simple, low-cost way to send a parcel
                within the UK and to over 250 International destinations.
              </p>

              <button type="button" className="btn about__btn">
                Watch Our Video
              </button>

              <div className="about__img"></div>
            </div>
          </div>
        </div>

        <div className="container container--main">
          <div className="large-width-10 large-offset-1">
            <div className="large-width-7">
              <p>
                When you book with us, it's you who selects which of our many
                partner carriers get to handle your item. Book online and either
                drop your parcel at a local store, Post Office or depot, or we
                can collect it from your home or work. It's that simple!
              </p>

              <h2 className="push-down">How is Parcel Monkey so cost effective?</h2>

              <p>
                As we group together all of our customers' orders and book them
                through one account with our courier partners, this creates
                "buying power" discounts which we are then able to pass on to
                you!
              </p>
            </div>

            <div className="large-width-7 large-offset-1">
              <h2 className="push-down">Why Use Parcel Monkey?</h2>

              <p>
                Thousands of individual customers, businesses, eBay, Amazon, and
                other marketplace sellers save money every day by using Parcel
                Monkey. Anybody can sign up and start benefiting from our great
                discounts right away and below are some of the other reasons why
                our customers choose Parcel Monkey:
              </p>

              <ul className="list--tick push-down">
                <li>We have some of the lowest prices for UK &amp; International deliveries</li>
                <li>FREE collection from your home or work</li>
                <li>We have over 200,000 open and honest reviews - more than anybody else</li>
                <li>Drop off options available at over 10,000 UK locations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="large-offset-1 about__quote">
            <div className="get-quote">
              <h3>Get an Instant Quote</h3>

              <form method="post" action="/quotev3.php" className="form">
                <label htmlFor="origin">Collect from</label>
                <select name="origin" id="origin">
                  <option value="219">United Kingdom</option>
                  <option value="221">USA</option>
                  <option value="12">Australia</option>
                  <option value="36">Canada</option>
                  <option value="230">Zimbabwe</option>
                </select>

                <label htmlFor="destination">Delivering to</label>
                <select name="destination" id="destination">
                  <option value="219">United Kingdom</option>
                  <option value="221">USA</option>
                  <option value="12">Australia</option>
                  <option value="36">Canada</option>
                  <option value="230">Zimbabwe</option>
                </select>

                <button type="submit" className="btn">
                  Get Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
