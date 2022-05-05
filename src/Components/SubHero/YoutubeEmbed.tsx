import React from "react";
import PropTypes from "prop-types";

export default function YoutubeEmbed(embedId) {
  return (
    <div
      className="video-responsive"
      style={{ width: "100vw", height: "69vw" }}
    >
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/bgLSV98VkAk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
