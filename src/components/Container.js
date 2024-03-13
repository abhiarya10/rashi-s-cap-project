// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
// import vector1 from "../components/vector1.png";
// import vector2 from "../components/vector2.png";
// import { Image } from "react-bootstrap";

// export const Container = () => {
//   const [errors, setErrors] = useState("");
//   const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
//     useDropzone({
//       multiple: false,
//       accept: {
//         "video/mp4": [".mp4"],
//         "video/webm": [".webm"],
//         "video/ogg": [".ogg"],
//       },
//     });

//   const videos = acceptedFiles.map((file) => (
//     <div key={file.path}>
//       <video
//         controls
//         style={{ objectFit: "cover", width: "100%", height: "100%" }}
//       >
//         <source src={URL.createObjectURL(file)} type={file.type} />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   ));

//   return (
//     <div className="m-3 align-items-center">
//       <p style={{ color: "#5096FF", fontWeight: "500" }}>Detect Violence</p>
//       <div
//         className="d-flex flex-column justify-content-center align-items-center position-relative"
//         style={{ color: "orange" }}
//       >
//         <Figure className="position-absolute start-0" style={{ top: "50%", transform: "translateY(-50%)" }}>
//           <Image src={vector1} alt="Vector 1" style={{ height: "50px", width: "auto" }} />
//         </Figure>
//         <Figure className="position-absolute end-0" style={{ top: "50%", transform: "translateY(-50%)" }}>
//           <Image src={vector2} alt="Vector 2" style={{ height: "50px", width: "auto" }} />
//         </Figure>

//         <div
//           className="rounded-4 Box"
//           style={{
//             position: "relative",
//             height: "100%",
//             width: "50%",
//             paddingBlock: "10%",
//             backgroundColor: "#E6E6E6",
//             border: "4px solid #5096FF",
//           }}
//         >
//           <div {...getRootProps({ className: "dropzone" })}>
//             <input className="input-zone" {...getInputProps()} />
//             {isDragActive ? (
//               <p className="dropzone-content">
//                 Release to drop the files here
//                 {errors}
//               </p>
//             ) : (
//               <div className="text-center">
//                 <ArrowUpTrayIcon
//                   style={{
//                     height: "100px",
//                     width: "100px",
//                     zIndex: 1,
//                   }}
//                 />
//               </div>
//             )}
//             <div
//               className="videos-container"
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 bottom: 0,
//                 left: 0,
//                 right: 0,
//               }}
//             >
//               {videos}
//             </div>
//           </div>
//         </div>
//         <p style={{ color: "#858585", fontWeight: "600", marginTop: "20px" }}>
//           Upload Video to identify violent activities in the video
//         </p>
//       </div>
//       <hr style={{ border: "2px solid #000000" }} className="my-5" />
//     </div>
//   );
// };

import React, { useState } from "react";
import "./Container.css";
import { useDropzone } from "react-dropzone";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { Figure, Image } from "react-bootstrap"; // Import Figure and Image from react-bootstrap
import vector1 from "./vector1.png"; // Import the vector images
import vector2 from "./vector2.png";

export const Container = () => {
  const [errors, setErrors] = useState("");
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      multiple: false,
      accept: {
        "video/mp4": [".mp4"],
        "video/webm": [".webm"],
        "video/ogg": [".ogg"],
      },
    });

  const videos = acceptedFiles.map((file) => (
    <div key={file.path}>
      <video
        controls
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      >
        <source src={URL.createObjectURL(file)} type={file.type} />
        Your browser does not support the video tag.
      </video>
    </div>
  ));

  return (
    <div className="container-body">
      <p style={{ color: "#5096FF", fontWeight: "500" }}>Detect Violence</p>
      <div className="inner-div">
        <img src={vector1} />
        <div className="video-input-div">
          <div className="rounded-Box">
            <div {...getRootProps({ className: "dropzone" })}>
              <input className="input-zone" {...getInputProps()} />
              {isDragActive ? (
                <p className="dropzone-content">
                  Release to drop the files here
                  {errors}
                </p>
              ) : (
                <div className="text-center">
                  <ArrowUpTrayIcon
                    style={{
                      height: "100px",
                      width: "100px",
                      zIndex: 1,
                    }}
                  />
                </div>
              )}
              <div
                className="videos-container"
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              >
                {videos}
              </div>
            </div>
          </div>
          <p style={{ color: "#858585", fontWeight: "600", marginTop: "20px" }}>
            Upload Video to identify violent activities in the video
          </p>
        </div>
        <img src={vector2} />
      </div>
      {/* <hr style={{ border: "2px solid #000000" }} className="my-5" /> */}
    </div>
  );
};
