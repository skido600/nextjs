"use client";
import { useState } from "react";

import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";
import { ReactTyped } from "react-typed";
import Loader from "@/components/helper/Loader";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation
    if (!name || !email || !message) {
      toast({
        description: "All fields are required!",
        variant: "destructive",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      toast({
        description: "Please enter a valid email address!",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    emailjs
      .send(
        "service_znrnb8j",
        "template_2b7yn5x",
        {
          name: name,
          email: email,
          message: message,
        },
        "AnP9pHwj192RU5uXH"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast({
            title: "Success!",
            description: "Message sent successfully!",
            variant: "successful",
          });
          setEmail("");
          setMessage("");
          setName("");
        },
        (error) => {
          toast({
            description: `${error.text}  "error"`,
            variant: "destructive",
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <main>
        <section id="cont" className="px-6 md:px-[4.2rem]">
          <div className="text-[#1E293B]">
            <h1 className="md:text-[50px] font-[600] mb-2 md:mb-0 text-[30px] tracking-wide ">
              Contact
            </h1>
            <div className="text-[15px]">
              <ReactTyped
                strings={[
                  "Let’s connect! Whether you’re looking for collaboration, have a question, or just want to chat, feel free to reach out. I’d love to hear from you!",
                ]}
                typeSpeed={50}
                backSpeed={60}
                backDelay={1000}
                loop={false}
              />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-8">
            <div>
              <label htmlFor="name" className="text-[#1E293B]">
                Full Name{" "}
                <span className="text-red-400 font-bold text-[15px]">*</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="placeholder:text-[#BDBDBD] mt-3 placeholder:text-[15px] text-[#1E293B] w-full py-2 px-2 rounded-[5px] border border-[#BDBDBD] focus:outline-none focus:border-[#BDBDBD]"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="email" className="text-[#1E293B]">
                Email{" "}
                <span className="text-red-400 font-bold text-[15px]">*</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                placeholder="Enter Your Email"
                className="placeholder:text-[#BDBDBD] mt-3 placeholder:text-[15px] text-[#1E293B] w-full py-2 px-2 rounded-[5px] border border-[#BDBDBD] focus:outline-none focus:border-[#BDBDBD]"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-[#1E293B]">
                Message{" "}
                <span className="text-red-400 font-bold text-[15px]">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                placeholder="Enter Your Message"
                className="placeholder:text-[#BDBDBD] h-[150px] lg:h-[150px] resize-none mt-3 placeholder:text-[15px] text-[#1E293B] w-full md:py-4 p-2 rounded-[5px] border border-[#BDBDBD] focus:outline-none focus:border-[#BDBDBD]"
                id="message"
              ></textarea>
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="bg-[#018134] px-8 py-3 rounded-lg text-white"
              >
                {loading ? <Loader /> : "Send Message"}
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Contact;
