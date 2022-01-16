import emailjs from "@emailjs/browser";
import { sendEmail } from "../emailUtils";

describe("Email Util test", () => {
  it("Send email", () => {
    const sendMock = jest.spyOn(emailjs, "send");
    sendEmail(
      {
        info: {
          image_url: "",
        },
        title: "test",
        year: 2003,
      },
      "test@gmail.com"
    );
    expect(sendMock).toBeCalled();
  });
});
