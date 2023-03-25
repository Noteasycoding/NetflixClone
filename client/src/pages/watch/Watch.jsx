import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      {/* <video
        className="video"
        autoPlay
        progress
        controls
        src="https://youtu.be/2unNl9orV3c"
      /> */}

      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/qEVUtrk8_B4"
        title="John Wick: Chapter 4 (2023 Movie) Official Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
