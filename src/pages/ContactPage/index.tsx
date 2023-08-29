import * as ReactHookForm from "react-hook-form";
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
      <h1>If you will like to tell us anything</h1>
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
    </>
  );
}
export default ContactPage;
