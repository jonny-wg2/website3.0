import React from "react";
import Layout from "@theme/Layout";
import styles from "./product-ecosystem.module.css";
import common from "../css/common.module.css";
import { Check, CheckCircle2 } from "lucide-react";
import CTA from "../components/cta/cta";
import Image from "@theme/IdealImage";

function Index() {
  return (
    <Layout title="Technology">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>Advancing your mobile core. <br></br>Empowering developers.</div>
              <div className={common.subtitle}>
              It’s a turn key solution, fully self serviced, with no need for additional integration.
              </div>
            </div>
          </div>
        </div>
        <div className={common.container}>
          <div className={styles.priceTiers}>
            <div className={styles.priceTier}>
              <div className={styles.priceTierTitle}>Developer Portal</div>
              <div className={styles.priceTierDescription}>
                Developer portal allows ...... lkjsdf lkj sdflkj sdlfkj sdflkj sdflkj sdlfkj sdlfkjsd flkjsdf 
                <Image
                alt="Developer Portal site"
                className={styles.image}
                img={require("../../static/img/developer-portal.png")}
              />
              </div>
              
              <div className={styles.price}>Free</div>
              <a
                style={{ backgroundColor: "#607D8B", border: "0", color: "#fff" }}
                className={common.button}
                href="https://developer.wgtwo.com" target="_self">
                Developer Portal
              </a>
              <div className={styles.priceTierFeatures}>
                <li>
                  <CheckCircle2 /> For 3rd party developers or operators
                </li>
                <li>
                  <CheckCircle2 /> Access to telco APIs including SMS, MMS, Voice
                </li>
              </div>
            </div>

            <div className={styles.priceTier}>
              <a
                className={common.button}
                style={{ backgroundColor: "#2196F3", border: "0", color: "#fff" }}
                href="https://www.wgtwo.com">
                Get Started for Free
              </a>
              <div className={styles.priceTierFeatures}>
                <li>
                  <CheckCircle2 /> For small teams and startups
                </li>
                <li>
                  <CheckCircle2 /> $X / GB of cache transfer over 100 GB
                </li>
                <li>
                  <CheckCircle2 /> Up to 800 cores for remote builds
                </li>
                <li>
                  <CheckCircle2 /> Email support
                </li>
              </div>
            </div>

            <div className={styles.priceTier}>
              <div className={styles.priceTierTitle}>Storefront</div>
              <div className={styles.priceTierDescription}>
                A platform to market your application to customers across wgtwo operators.
                <Image
                alt="wgtwo storefront"
                className={styles.image}
                img={require("../../static/img/storefront.png")}
              />
              </div>
              <div className={styles.price}>Find a new app today</div>
              <a className={`${common.button} ${common.buttonPrimary}`} href="http://storefront.wgtwo.com" target="_self">
                Storefront
              </a>
              <div className={styles.priceTierFeatures}>
                <li>
                  <CheckCircle2 /> Application Market for your telco subscription
                </li>
                <li>
                  <CheckCircle2 /> Approved and secure applications
                </li>
                <li>
                  <CheckCircle2 /> Adding new features to your mobile subscription
                </li>
                <li>
                  <CheckCircle2 /> Cross operators
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className={common.container}>
          <div className={common.centeredText}>
            <div className={common.title}>Questions & Answers</div>
          </div>
        </div>
        <div className={common.container}>
          <div className={styles.questions}>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>What is the product ecosystem?</div>
              <div className={styles.answerAnswer}>
              Up until now, all mobile subscriptions have been the same.
              Going forward, this is going to change. Telecom operators on the wgtwo platform will be able to offer a much richer user experience to their customers – and even let them configure their own subscriptions giving them the freedom to add the products that meet their needs.
              With the wgtwo Developer Portal and APIs, developers will build and launch their great products on the wgtwo platform that will delight both you and your customers.
              Any operator can launch these great products without using any technical or project resources – a huge savings for you. Just use our self-service Operator Console to add the products that will bring value to your business. Want to learn more, or see a live demo? Talk to us here!
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>Do you have an SMS API?</div>
              <div className={styles.answerAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut facilisis velit, ac vehicula justo. Etiam ac nulla eu ex lobortis dignissim. Ut porttitor mi nisl, et lacinia sapien sagittis sit amet. Vestibulum vitae ex odio. Proin at nunc vitae massa ullamcorper vehicula in eu enim. Aliquam erat volutpat. Nulla sapien tellus, condimentum vel est quis, aliquet sagittis felis. Phasellus sagittis leo a posuere bibendum. Cras in aliquam dui, ut porttitor ex. Phasellus convallis ipsum non gravida tincidunt. 
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>What are existing apps??</div>
              <div className={styles.answerAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut facilisis velit, ac vehicula justo. Etiam ac nulla eu ex lobortis dignissim. Ut porttitor mi nisl, et lacinia sapien sagittis sit amet. Vestibulum vitae ex odio. Proin at nunc vitae massa ullamcorper vehicula in eu enim. Aliquam erat volutpat. Nulla sapien tellus, condimentum vel est quis, aliquet sagittis felis. Phasellus sagittis leo a posuere bibendum. Cras in aliquam dui, ut porttitor ex. Phasellus convallis ipsum non gravida tincidunt. 
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>What if I have more questions?</div>
              <div className={styles.answerAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut facilisis velit, ac vehicula justo. Etiam ac nulla eu ex lobortis dignissim. Ut porttitor mi nisl, et lacinia sapien sagittis sit amet. Vestibulum vitae ex odio. Proin at nunc vitae massa ullamcorper vehicula in eu enim. Aliquam erat volutpat. Nulla sapien tellus, condimentum vel est quis, aliquet sagittis felis. Phasellus sagittis leo a posuere bibendum. Cras in aliquam dui, ut porttitor ex. Phasellus convallis ipsum non gravida tincidunt. 
              </div>
            </div>
          </div>
        </div>

        <CTA />
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

export default Index;
