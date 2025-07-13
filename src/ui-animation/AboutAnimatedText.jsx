import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.css";

function AboutIntro() {
  return (
    <div className="about_module_part1_container_child_introtxt">
      <h1>
        <Typewriter
          words={[
            "Where logic meets imagination:",
            "Building tomorrow's solutions",
            "with today's React components",
          ]}
          loop={0} // 0 = infinite loop, or use a number for finite
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1500}
        />
      </h1>
    </div>
  );
}

export default AboutIntro;
