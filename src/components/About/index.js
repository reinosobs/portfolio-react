import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About() {
  const getDate = () => {
    var dob = new Date("12/07/1997");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">Sergio Reinoso,</span> a Web
            Enthusiast
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            Graduated with a degree in Computer Engineering from Rey Juan Carlos
            University, where I have obtained the capacity and the appropriate
            knowledge to make them compatible in a field-oriented to technology and
            computer science. I am an agile, outgoing, ambitious person, eager to learn
            and improve. Currently, I am  Full Stack Developer. 
          </p>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            I love listening music, play football and playing games. Also exploring new technologies
            and improve my skills.Between my skills, I have a lot of experience with Vuejs, PHP, MySql, TypeScript, Java
            and some more technologies. I am also looking to collaborate in open-source projects.
            My slogan is <span className="text-yellow-600">"Knowledge can fill a room, but takes up no space"</span>
          </p>
        </div>

        <div
          className="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
              href={require("../../assets/files/Sergio Resume.pdf")}
              download={"Sergio's CV.pdf"}
            >
              Download CV
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
