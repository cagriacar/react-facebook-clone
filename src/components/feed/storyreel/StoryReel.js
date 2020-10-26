import React from "react";
import "./styles/StoryReel.css";
import Story from "../story/Story";

function StoryReel() {
  return (
    <div className="storyReel">
      {/* Story */}
      <Story
        className="storyReel__story"
        image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
        profileSrc="https://scontent.fsaw1-5.fna.fbcdn.net/v/t1.0-9/70409489_192992441722862_7642956988279685120_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=Zp39UaOsv8kAX8Z2j9U&_nc_ht=scontent.fsaw1-5.fna&oh=1d8c03e485fb691b2e2d5f5084ee7751&oe=5FBB8FCB"
        title="Cagri Acar"
      />

      <Story
        className="storyReel__story"
        image="https://i.pinimg.com/originals/e9/f4/5d/e9f45d3b8e4a3f971ccaf829a92d268f.png"
        profileSrc="https://scontent.fsaw1-2.fna.fbcdn.net/v/t1.0-9/119599099_10221947278863973_484382325914398129_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=Re9i0qLzb8cAX_oc2bo&_nc_ht=scontent.fsaw1-2.fna&oh=19b5ec2c12d754ecc907b8b42b0b45fa&oe=5FBB9042"
        title="Blanca Bautista"
      />

      <Story
        className="storyReel__story"
        image="https://i.pinimg.com/474x/0b/76/a3/0b76a35727e6338ffebbd0e95d883975.jpg"
        profileSrc="https://scontent.fsaw1-6.fna.fbcdn.net/v/t1.0-9/13428386_10209256062629681_7569888091573626259_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=H3Jg9_en9AUAX9bnPjD&_nc_ht=scontent.fsaw1-6.fna&oh=f57ad9f9de34f5bd2da95d06f6952795&oe=5FBC7F94"
        title="Ferdi Özbuğutu"
      />
      <Story
        className="storyReel__story"
        image="https://i.pinimg.com/474x/0b/76/a3/0b76a35727e6338ffebbd0e95d883975.jpg"
        profileSrc="https://scontent.fsaw1-6.fna.fbcdn.net/v/t1.0-9/13428386_10209256062629681_7569888091573626259_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=H3Jg9_en9AUAX9bnPjD&_nc_ht=scontent.fsaw1-6.fna&oh=f57ad9f9de34f5bd2da95d06f6952795&oe=5FBC7F94"
        title="Ferdi Özbuğutu"
      />
    
    
    </div>
  );
}

export default StoryReel;
