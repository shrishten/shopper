import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe and Stay Updated</p>
      <div>
        <input type="email" placeholder="example@mail.com" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
