import React from "react";
import Layout from "@theme/Layout";
import styles from "./technology.module.css";
import common from "../css/common.module.css";
import { Check, CheckCircle2 } from "lucide-react";
import CTA from "../components/cta/cta";

function Index() {
  return (
    <Layout title="Technology">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>One platform to scale your company.</div>
            </div>
          </div>
        </div>
        <div className={common.container}>
          <div className={styles.priceTiers}>
            <div className={styles.priceTier}>
              <div className={styles.priceTierTitle}>Personal</div>
              <div className={styles.priceTierDescription}>
                Helping individual developers, small teams, and open source projects view, debug, analyze, and speed up
                their builds.
              </div>
              <div className={styles.price}>Free</div>
              <a
                style={{ backgroundColor: "#607D8B", border: "0", color: "#fff" }}
                className={common.button}
                href="https://wgtwo.com">
                Get Started for Free
              </a>
              <div className={styles.priceTierFeatures}>
                <li>
                  <CheckCircle2 /> For individuals and open source projects
                </li>
                <li>
                  <CheckCircle2 /> 100 GB of cache transfer
                </li>
                <li>
                  <CheckCircle2 /> Up to 80 cores for remote builds
                </li>
                <li>
                  <CheckCircle2 /> Community support
                </li>
              </div>
            </div>

            <div className={styles.priceTier}>
              <div className={styles.priceTierTitle}>Team</div>
              <div className={styles.priceTierDescription}>Team Description</div>
              <div className={styles.price}>Pay-as-you-go</div>
              <a
                className={common.button}
                style={{ backgroundColor: "#2196F3", border: "0", color: "#fff" }}
                href="https://wgtwo.com">
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
              <div className={styles.priceTierTitle}>Enterprise</div>
              <div className={styles.priceTierDescription}>
                description here
              </div>
              <div className={styles.price}>Suited for your business</div>
              <a className={`${common.button} ${common.buttonPrimary}`} href="/request-demo">
                Request a Quote
              </a>
              <div className={styles.priceTierFeatures}>
                <li>
                  <CheckCircle2 /> Maximize developer productivity
                </li>
                <li>
                  <CheckCircle2 /> SSO/SAML
                </li>
                <li>
                  <CheckCircle2 /> Unlimited Cores of RBE
                </li>
                <li>
                  <CheckCircle2 /> Isolated infrastructure
                </li>
                <li>
                  <CheckCircle2 /> Dedicated support engineer & SLAs
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className={common.container}>
          <div className={common.centeredText}>
            <div className={common.title}>Compare plans & features</div>
          </div>
        </div>
        <div className={common.container}>
          <div className={styles.featureGrid}>
            <div className={styles.featureGridHeader}>Basics</div>
            <div className={styles.featureGridHeader}>Personal</div>
            <div className={styles.featureGridHeader}>Team</div>
            <div className={styles.featureGridHeader}>Enterprise</div>

            <div>Users</div>
            <div>3</div>
            <div>Unlimited</div>
            <div>Unlimited</div>

            <div>Builds</div>
            <div>Unlimited</div>
            <div>Unlimited</div>
            <div>Unlimited</div>

            <div>SSO / SAML</div>
            <No />
            <No />
            <Yes />

            <div>Invoice billing</div>
            <No />
            <No />
            <Yes />

            

            <div className={styles.featureGridHeader}>Support</div>
            <div className={styles.featureGridHeader}>Personal</div>
            <div className={styles.featureGridHeader}>Team</div>
            <div className={styles.featureGridHeader}>Enterprise</div>

            <div>Community support</div>
            <Yes />
            <Yes />
            <Yes />

            <div>Email support</div>
            <No />
            <Yes />
            <Yes />

            <div>Dedicated support engineer</div>
            <No />
            <No />
            <Yes />

            <div>Shared Slack channel</div>
            <No />
            <No />
            <Yes />

            <div>99.9% uptime SLA</div>
            <No />
            <No />
            <Yes />
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
              <div className={styles.questionQuestion}>What happens if I go over my limit?</div>
              <div className={styles.answerAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut facilisis velit, ac vehicula justo. Etiam ac nulla eu ex lobortis dignissim. Ut porttitor mi nisl, et lacinia sapien sagittis sit amet. Vestibulum vitae ex odio. Proin at nunc vitae massa ullamcorper vehicula in eu enim. Aliquam erat volutpat. Nulla sapien tellus, condimentum vel est quis, aliquet sagittis felis. Phasellus sagittis leo a posuere bibendum. Cras in aliquam dui, ut porttitor ex. Phasellus convallis ipsum non gravida tincidunt.
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>Which plan is right for me?</div>
              <div className={styles.answerAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut facilisis velit, ac vehicula justo. Etiam ac nulla eu ex lobortis dignissim. Ut porttitor mi nisl, et lacinia sapien sagittis sit amet. Vestibulum vitae ex odio. Proin at nunc vitae massa ullamcorper vehicula in eu enim. Aliquam erat volutpat. Nulla sapien tellus, condimentum vel est quis, aliquet sagittis felis. Phasellus sagittis leo a posuere bibendum. Cras in aliquam dui, ut porttitor ex. Phasellus convallis ipsum non gravida tincidunt.
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>What are my deployment options?</div>
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
