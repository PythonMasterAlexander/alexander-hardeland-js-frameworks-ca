import * as ReactHookForm from "react-hook-form";
import * as Styles from "./index.styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function ContactPage() {
  interface FormData {
    fullName: string;
    subject: string;
    email: string;
    bodyText: string;
  }

  const schema = yup
    .object({
      fullName: yup
        .string()
        .min(3, "Your full name must be at least 3 characters.")
        .required("Please enter your full name"),
      subject: yup
        .string()
        .min(3, "The subject must be at least 3 characters.")
        .required(),
      email: yup.string().email("Must be a valid email address.").required(),
      bodyText: yup.string().min(3, "Must be at least 3 characters").required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = ReactHookForm.useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit: ReactHookForm.SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Styles.ContactPageGridContainer>
        <Styles.ContactPageInformationContainer>
          <h1>Contact us if you need help with our products</h1>
          <p>
            We'd love to hear from you! Please feel free to get in touch with us
            using the contact form below. Whether you have questions, feedback,
            or just want to say hello, we're here to help.
          </p>
          <p>
            We value your feedback and will get back to you as soon as possible.
            Thank you for reaching out to us!
          </p>

          <p>
            Disclaimer: By submitting this contact form, you acknowledge that
            the information you provide will be used solely for the purpose of
            responding to your inquiry or feedback. We respect your privacy and
            will not share your information with third parties.
          </p>

          <p>
            Please do not include any sensitive or confidential information in
            this form. Communications through this form may not be considered
            privileged or confidential.
          </p>
        </Styles.ContactPageInformationContainer>
        <section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <legend>Contact</legend>
              <div>
                <label>
                  Full name
                  <input {...register("fullName")} />
                  <span>{errors.fullName?.message}</span>
                </label>
              </div>
              <div>
                <label>
                  Subject
                  <input {...register("subject")} />
                  <span>{errors.subject?.message}</span>
                </label>
              </div>
              <div>
                <label>
                  Email
                  <input {...register("email")} />
                  <span>{errors.email?.message}</span>
                </label>
              </div>
              <div>
                <label>
                  Body
                  <input {...register("bodyText")} />
                  <span>{errors.bodyText?.message}</span>
                </label>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </fieldset>
          </form>
        </section>
      </Styles.ContactPageGridContainer>
    </>
  );
}
export default ContactPage;
