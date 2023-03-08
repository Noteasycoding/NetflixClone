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
        src="https://www.youtube.com/embed/9ix7TUGVYIo"
        title="The Matrix Resurrections – Official Trailer 1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
