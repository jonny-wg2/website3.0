import React from "react";
import Layout from "@theme/Layout";
import styles from "./technology.module.css";
import common from "../css/common.module.css";
import TechnologyMetricList from "../components/technologymetrics/technologymetrics-list";
import { Check, CheckCircle2 } from "lucide-react";
import CTA from "../components/cta/cta";
import SecurityHeader from "../components/security-header/security-header";
import contact from "./contact.module.css";
import Image from "@theme/IdealImage";

let form = {
  name: React.createRef<HTMLInputElement>(),
  email: React.createRef<HTMLInputElement>(),
  message: React.createRef<HTMLInputElement>(),
  button: React.createRef<HTMLButtonElement>(),
};

function Index() {
  return (
    <Layout title="Security">
      <div className={common.page}>

        <SecurityHeader />
        

        <div className={`${common.section} ${common.sectionDark}`}>
          <div className={`${common.container} ${common.splitContainer}`}>
            <div className={common.text}>
              <div className={common.title}>You still have a question in mind?</div>
              <div className={common.subtitle}>We love to tell you more!</div>
            </div>
            <div className={contact.form}>
              <input ref={form.name} placeholder="Name" />
              <input ref={form.email} placeholder="Email address" />
              <input ref={form.message} placeholder="Message" className={contact.span2} />
              <button
                ref={form.button}
                onClick={() => sendMessage()}
                className={`${common.button} ${common.buttonPrimary} ${contact.span2}`}>
                Submit your message
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function No() {
  return <div></div>;
}

function Yes() {
  return (
    <div className={styles.check}>
      <Check color="#4CAF50" />
    </div>
  );
}

function sendMessage() {
  message(
    `New question from Technology page!\nName: ${form.name.current.value}\nEmail: ${form.email.current.value}\nRepo URL: ${form.message.current.value}`
  );

  form.name.current.disabled = true;
  form.email.current.disabled = true;
  form.message.current.disabled = true;

  form.button.current.innerText = "New Case Study Submitted!";
  form.button.current.disabled = true;
}

export default Index;
