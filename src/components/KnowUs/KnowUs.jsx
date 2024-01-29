import "./KnowUs.css"
const KnowUs = () => {
  return (
    <div>
      <h2>
        Get to know <span className="primary">us</span>{" "}
      </h2>
      <div className="grid">
        <div className="flex">
          <img src="/public/assets/teamwork.jpeg" alt="teamwork" />
          <div className="typo">
            <h3 className="mid">
              <span className="primary">Teamwork</span> is the key to <br />our sucess
            </h3>
            <p>
              At TasteNow we make sure that every decision is determined by a
              team of us. Everyone´s opinion matters, and as group, we are
              stronger. We firmly belive that team work, makes the dream work.
            </p>
          </div>
        </div>
        <div className="flex flex-rev">
          <img src="/public/assets/environment.jpeg" alt="environment" />
          <div className="typo">
            <h3 className="mid">
              We are all in for the <br />
              <span className="primary"> enviroment</span>
            </h3>
            <p>
              TasteNow donates $1 penny for every purchase made from the app to
              an organization that takes care of our enviromet. We belive that
              with everyone´s help, we can make a better world.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowUs;
