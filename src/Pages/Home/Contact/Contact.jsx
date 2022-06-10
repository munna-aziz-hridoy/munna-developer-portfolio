import React from "react";
import Container from "../../../Components/Container/Container";
import Heading from "../../../Components/Heading/Heading";

const Contact = () => {
  return (
    <Container>
      <Heading
        tag="contact"
        subTitle="Contact me for any discussion or question"
      >
        Contact Me
      </Heading>

      <div className="flex flex-col md:flex-row gap-16 my-36">
        <div className="w-full md:w-1/2">
          <h2 className="capitalize title-text text-3xl text-neutral">
            Get in touch
          </h2>
          <p className="text-lg font-medium text-accent w-full  my-5">
            I'm looking for new opportunity. And I'm always here to reach with
            you. If you have any question or enquiry please say me a{" "}
            <span className="text-secondary">hello</span>
          </p>
        </div>
        <div className="w-full md:w-1/2 p-6 flex justify-center items-center">
          <div className="bg-secondary shadow-xl w-full p-6">
            <form action="" className="">
              <div class="form-control w-full my-3">
                <label class="label">
                  <span class="label-text text-primary text-lg font-semibold">
                    Your name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Name here"
                  class="input input-bordered w-full rounded-none"
                />
              </div>
              <div class="form-control w-full my-3">
                <label class="label">
                  <span class="label-text text-primary text-lg font-semibold">
                    Your Email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  class="input input-bordered w-full rounded-none"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-primary text-lg font-semibold">
                    Your message
                  </span>
                </label>
                <textarea
                  class="textarea textarea-bordered h-24 rounded-none"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="btn btn-outline rounded-none border-primary border-2 px-10 mt-6 hover:bg-primary hover:border-primary text-lg text-primary capitalize hover:text-neutral duration-300 hover:-translate-y-2 h-12">
                <span>Say Hello</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
