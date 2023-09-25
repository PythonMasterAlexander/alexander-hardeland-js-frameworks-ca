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
          <Styles.InformationContainerHeading>
            You need help?
          </Styles.InformationContainerHeading>
          <Styles.InformationContainerText>
            <strong>We'd love to hear from you!</strong>
            <br /> Please feel free to get in touch with us using the contact
            form below. Whether you have questions, feedback, or just want to
            say hello, we're here to help.
          </Styles.InformationContainerText>
          <Styles.InformationContainerText>
            We value your feedback and will get back to you as soon as possible.
            Thank you for reaching out to us!
          </Styles.InformationContainerText>
        </Styles.ContactPageInformationContainer>
        <Styles.ContactPageDisclaimerInformationContainer>
          <Styles.DisclaimerInformationContainerText>
            <strong>Disclaimer:</strong> By submitting this contact form, you
            acknowledge that the information you provide will be used solely for
            the purpose of responding to your inquiry or feedback. We respect
            your privacy and will not share your information with third parties.
          </Styles.DisclaimerInformationContainerText>
          <Styles.DisclaimerInformationContainerText>
            Please do not include any sensitive or confidential information in
            this form. Communications through this form may not be considered
            privileged or confidential.
          </Styles.DisclaimerInformationContainerText>
        </Styles.ContactPageDisclaimerInformationContainer>
        <Styles.ContactPageFormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Styles.FormContainerFieldsetFlexContainer>
              <Styles.FormContainerHeading>
                Contact us
              </Styles.FormContainerHeading>
              <div>
                <Styles.FormNameInputLabel htmlFor="fullName">
                  Full name
                </Styles.FormNameInputLabel>
                <Styles.FormAsterixSymbol>*</Styles.FormAsterixSymbol>
                <Styles.FormInputField {...register("fullName")} />
                <span>{errors.fullName?.message}</span>
              </div>
              <div>
                <Styles.FormNameInputLabel htmlFor="email">
                  Email
                </Styles.FormNameInputLabel>
                <Styles.FormAsterixSymbol>*</Styles.FormAsterixSymbol>
                <Styles.FormInputField {...register("email")} />
                <span>{errors.email?.message}</span>
              </div>
              <div>
                <Styles.FormNameInputLabel htmlFor="subject">
                  What is it about
                </Styles.FormNameInputLabel>
                <Styles.FormAsterixSymbol>*</Styles.FormAsterixSymbol>
                <Styles.FormInputField {...register("subject")} />
                <span>{errors.subject?.message}</span>
              </div>
              <Styles.FormTextAreaFlexGrowContainer>
                <Styles.FormNameInputLabel htmlFor="bodyText">
                  Anything else?
                </Styles.FormNameInputLabel>
                <Styles.FormAsterixSymbol>*</Styles.FormAsterixSymbol>
                <Styles.FormTextAreaField {...register("bodyText")} />
                <span>{errors.bodyText?.message}</span>
              </Styles.FormTextAreaFlexGrowContainer>
              <Styles.FormButtonContainer>
                <button type="submit">Submit</button>
              </Styles.FormButtonContainer>
            </Styles.FormContainerFieldsetFlexContainer>
          </form>
        </Styles.ContactPageFormContainer>
      </Styles.ContactPageGridContainer>
    </>
  );
}
export default ContactPage;
