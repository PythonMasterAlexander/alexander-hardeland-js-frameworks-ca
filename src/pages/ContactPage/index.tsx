import * as ReactHookForm from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  fullName: string;
  subject: string;
  email: string;
  bodyText: string;
}

const schema = yup
  .object({
    fullName: yup.string().min(3).max(10).required(),
  })
  .required();

function ContactPage() {
  const { register, handleSubmit } = ReactHookForm.useForm<FormData>();

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
            </label>
          </div>
          <div>
            <label>
              Subject
              <input {...register("subject")} />
            </label>
          </div>
          <div>
            <label>
              Email
              <input {...register("email")} />
            </label>
          </div>
          <div>
            <label>
              Body
              <input {...register("bodyText")} />
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
