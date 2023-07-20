import * as React from "react";

function ContactPage() {
  const [fullName, setFullName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [body, setBody] = React.useState<string>("");

  return (
    <>
      <h1>If you will like to tell us anything</h1>
      <form>
        <fieldset>
          <legend>Contact</legend>
          <div>
            <label>
              Full name
              <input />
            </label>
          </div>
          <div>
            <label>
              Subject
              <textarea></textarea>
            </label>
          </div>
          <div>
            <label>
              Email
              <input />
            </label>
          </div>
          <div>
            <label>
              Body
              <input />
            </label>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
export default ContactPage;
