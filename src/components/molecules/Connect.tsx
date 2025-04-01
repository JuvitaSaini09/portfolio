// "use client"
// import React, { useState } from "react";
// import { Title } from "../atoms/Title";
// import { candidateInfo, socialLinks } from "@/constants/data";
// import Socials from "../atoms/Socials";
// import { sendEmail } from "@/lib/resend";

// const Connect = () => {
//   const [messageDetails, setMessageDetails] = useState({ name: "", email: "", message: "" });
//   const receiveEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (messageDetails.name === "" || messageDetails.email === "" || messageDetails.message === "") {
//       alert("Please fill all the fields");
//       return;
//     }
//     else {
//       sendEmail(messageDetails.email, messageDetails.name, messageDetails.message)
//     }

//   }
//   return (
//     <div className="flex flex-col items-center w-full gap-24">
//       <div>
//         {" "}
//         <Title label="Let's talk" />
//       </div>
//       <div className="flex flex-col gap-4">
//         {/*h3 ->  "Gaegu", sans-serif; */}
//         {/* Email Text */}
//         <a
//           href="mailto:juvitasaini@gmail.com"
//           className="relative text-[38px] font-extralight text-[#474747] group">
//           {candidateInfo.email}
//           <span className="absolute bottom-[13px] block h-[3px] w-0 bg-[#474747] transition-all duration-0 group-hover:w-full"></span>
//         </a>

//         <div className="flex gap-6 justify-center">
//           {socialLinks.map(({ id, url, Icon }, index) => (
//             <Socials key={index} index={index} id={id} url={url} icon={<Icon />} />

//           ))}
//         </div>

//       </div>
//       <form action="" className=" min-w-full  flex flex-col gap-4">
//         <div className=" flex flex-col md:flex-row gap-4">
//           <input className=" focus:outline-violet-500 border-2 border-[#474747] bg-white grow-1 h-12 p-4 rounded-2xl" type="text" placeholder="Your Name" value={messageDetails.name} onChange={(e) => setMessageDetails({ ...messageDetails, name: e.target.value })} />
//           <input className="focus:outline-violet-500 border-2 border-[#474747] bg-white grow-1 h-12 p-4 rounded-2xl" type="email" placeholder="Your Email" value={messageDetails.email} onChange={(e) => setMessageDetails({ ...messageDetails, email: e.target.value })} />
//         </div>
//         <div>
//           <textarea
//             className="focus:outline-violet-500 w-full border-2 border-[#474747] bg-white p-4 rounded-2xl h-[102px] align-top scrollbar-hide"
//             placeholder="Message"
//             value={messageDetails.message}
//             onChange={(e) => setMessageDetails({ ...messageDetails, message: e.target.value })}
//           />
//         </div>
//         <button className="w-full border bg-[#474747] text-white h-10 rounded-2xl cursor-pointer hover:bg-[#3c3c3c]" onClick={(e) => receiveEmail(e)}>Send</button>
//       </form>
//     </div>
//   );
// };

// export default Connect;

"use client"
import React, { useState } from "react";
import { Title } from "../atoms/Title";
import { candidateInfo, socialLinks } from "@/constants/data";
import Socials from "../atoms/Socials";
import { sendEmail } from "@/lib/resend";

interface MessageDetails {
  name: string;
  email: string;
  message: string;
}

const Connect = () => {
  const [messageDetails, setMessageDetails] = useState<MessageDetails>({
    name: "",
    email: "",
    message: ""
  });

  const receiveEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!messageDetails.name || !messageDetails.email || !messageDetails.message) {
      alert("Please fill all the fields");
      return;
    }

    try {
      await sendEmail(messageDetails.email, messageDetails.name, messageDetails.message);
      setMessageDetails({ name: "", email: "", message: "" }); // Reset form
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center w-full gap-24">
      <div>
        <Title label="Let's talk" />
      </div>
      <div className="flex flex-col gap-4">
        <a
          href={`mailto:${candidateInfo.email}`}
          className="relative text-[38px] font-extralight text-[#474747] group"
        >
          {candidateInfo.email}
          <span className="absolute bottom-[13px] block h-[3px] w-0 bg-[#474747] transition-all duration-0 group-hover:w-full"></span>
        </a>

        <div className="flex gap-6 justify-center">
          {socialLinks.map(({ id, url, Icon }, index) => (
            <Socials key={index} index={index} id={id} url={url} icon={<Icon />} />
          ))}
        </div>
      </div>
      <form onSubmit={receiveEmail} className="min-w-full flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            name="name"
            className="focus:outline-violet-500 border-2 border-[#474747] bg-white grow-1 h-12 p-4 rounded-2xl"
            type="text"
            placeholder="Your Name"
            value={messageDetails.name}
            onChange={(e) => setMessageDetails({ ...messageDetails, name: e.target.value })}
            required
          />
          <input
            name="email"
            className="focus:outline-violet-500 border-2 border-[#474747] bg-white grow-1 h-12 p-4 rounded-2xl"
            type="email"
            placeholder="Your Email"
            value={messageDetails.email}
            onChange={(e) => setMessageDetails({ ...messageDetails, email: e.target.value })}
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            className="focus:outline-violet-500 w-full border-2 border-[#474747] bg-white p-4 rounded-2xl h-[102px] align-top scrollbar-hide"
            placeholder="Message"
            value={messageDetails.message}
            onChange={(e) => setMessageDetails({ ...messageDetails, message: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full border bg-[#474747] text-white h-10 rounded-2xl cursor-pointer hover:bg-[#3c3c3c]"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Connect;