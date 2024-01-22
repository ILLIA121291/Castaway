import './jacob-paulaner.css';

function JacobPaulaner() {
  return (
    <section className="app_body_jacob_paulaner">
      <div className="app_body_jacob_paulaner_part_left">
        <div className="app_body_jacob_paulaner_part_left_content">
          <div className="app_body_jacob_paulaner_part_left_content_button">
            <a href="#">
              <img
                src="/image_jacob_paulaner/line_right.png"
                alt="line reight"
              />
            </a>
          </div>
          <span>Meet your host</span>
          <h2 className="app_body_jacob_paulaner_part_left_content_title">
            Jacob Paulaner
          </h2>
          <p className="app_body_jacob_paulaner_part_left_content_text">
            Jacob has a background in audio engineering, and has been podcasting
            since the early days.
          </p>
          <p className="app_body_jacob_paulaner_part_left_content_text">
            He’s here to help you level up your game by sharing everything he’s
            learned along the way.
          </p>
        </div>
      </div>
      <div className="app_body_jacob_paulaner_part_right">
        <img
          src="/image_jacob_paulaner/jacob_paulaner.png"
          alt="Jacob Paulaner"
        />
      </div>
    </section>
  );
}

export default JacobPaulaner;
