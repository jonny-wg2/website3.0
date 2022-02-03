"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[9428],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),h=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=h(n),m=a,p=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(p,i(i({ref:t},u),{},{components:n})):r.createElement(p,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var h=2;h<o;h++)i[h]=n[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6318:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],s={slug:"metrics-unlimited-thanos",title:"Towards observability nirvana: infinite metric retention with Thanos",date:new Date("2020-01-28T00:00:00.000Z"),tags:["infrastructure","observability","prometheus","thanos","kubernetes"],author:"Holger Ihrig",author_title:"Software Engineer @ wgtwo",author_url:"https://www.linkedin.com/in/hihrig/",author_image_url:"https://media-exp1.licdn.com/dms/image/C5603AQGc3sG-ltGzlA/profile-displayphoto-shrink_400_400/0/1516250699138?e=1648684800&v=beta&t=qpxr39O2hNY54vsUcCbt1wH8fc2lMf07zW1etQD_gxY"},l=void 0,h={permalink:"/blog/metrics-unlimited-thanos",editUrl:"https://github.com/jonny-wg2/website3.0/edit/main/blog/../blog/2020-01-28-Thanos-infinite-metrics.md",source:"@site/../blog/2020-01-28-Thanos-infinite-metrics.md",title:"Towards observability nirvana: infinite metric retention with Thanos",description:"In the current DevOps world, our industry relies on the ability to observe and monitorize our infrastructure and",date:"2020-01-28T00:00:00.000Z",formattedDate:"January 28, 2020",tags:[{label:"infrastructure",permalink:"/blog/tags/infrastructure"},{label:"observability",permalink:"/blog/tags/observability"},{label:"prometheus",permalink:"/blog/tags/prometheus"},{label:"thanos",permalink:"/blog/tags/thanos"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:5.055,truncated:!0,authors:[{name:"Holger Ihrig",title:"Software Engineer @ wgtwo",url:"https://www.linkedin.com/in/hihrig/",imageURL:"https://media-exp1.licdn.com/dms/image/C5603AQGc3sG-ltGzlA/profile-displayphoto-shrink_400_400/0/1516250699138?e=1648684800&v=beta&t=qpxr39O2hNY54vsUcCbt1wH8fc2lMf07zW1etQD_gxY"}],prevItem:{title:"Extending Kubernetes for our needs",permalink:"/blog/extending-k8s/"},nextItem:{title:"We killed the butler: Replacing Jenkins with Concourse",permalink:"/blog/replacing-jenkins-with-concourse"}},u={authorsImageUrls:[void 0]},c=[{value:"Thanos",id:"thanos",children:[{value:"Thanos Sidecar",id:"thanos-sidecar",children:[],level:3},{value:"Thanos Store",id:"thanos-store",children:[],level:3},{value:"Thanos Querier",id:"thanos-querier",children:[],level:3},{value:"Thanos Compactor",id:"thanos-compactor",children:[],level:3},{value:"Thanos Ruler",id:"thanos-ruler",children:[],level:3}],level:2},{value:"Architecture in a Cluster",id:"architecture-in-a-cluster",children:[],level:2},{value:"Is it worth it?",id:"is-it-worth-it",children:[{value:"Pros",id:"pros",children:[],level:3},{value:"Cons",id:"cons",children:[],level:3}],level:2},{value:"What are the biggest benefits for us?",id:"what-are-the-biggest-benefits-for-us",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],d={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the current DevOps world, our industry relies on the ability to observe and monitorize our infrastructure and\nservices. ",(0,o.kt)("strong",{parentName:"p"},"wgtwo")," is no exception here and as we are operating in the TelCo space\nwe wanted to know more about the usage patterns of our platform over days, months and even years."),(0,o.kt)("p",null,"Internally we have been running Prometheus for a long time with a fairly limited retention of 30 days. This did not\nallow us to look far enough back in time to make the observations we wanted to.\nLuckily for us there already was a solution out there that would fill our needs and in addition to that make our\nmonitoring stack more resilient. The solution is called ",(0,o.kt)("a",{parentName:"p",href:"https://thanos.io/"},"Thanos"),"."),(0,o.kt)("h2",{id:"thanos"},"Thanos"),(0,o.kt)("p",null,"Thanos was originally developed by a company called ",(0,o.kt)("a",{parentName:"p",href:"https://improbable.io/"},"Improbable")," to provide long term storage\nfor Prometheus. It evolved into a much more complicated component which wildly improved the scalability of the\nPrometheus monitoring Stack."),(0,o.kt)("p",null,"The basic functionality however is that Thanos will upload the metrics collected by Prometheus onto any service with a\nS3-compatible API or any other storage target supported by the Prometheus remote write feature. For readability we\nwill only refer to it as S3 Storage as this is our storage target."),(0,o.kt)("p",null,"We shall briefly look at all those components before describing how we are leveraging Thanos to obtain a higher metric\nretention and higher reliability."),(0,o.kt)("h3",{id:"thanos-sidecar"},"Thanos Sidecar"),(0,o.kt)("p",null,"The Sidecar runs as the name suggests in the same pod as Prometheus and observes when Prometheus saves new storage\nbuckets on disk, which it does about every 2 hours. If configured to do so, it will upload those storage bucket into S3.\nAnother important feature is that it extends the Prometheus Pod with an API that can be used by Thanos Querier\nas a Store API endpoint to query Prometheus metrics."),(0,o.kt)("h3",{id:"thanos-store"},"Thanos Store"),(0,o.kt)("p",null,"Thanos Store implements the Thanos Store API and makes the metric data stored in the S3 bucket available to the\nThanos Querier. To do that it observes the configured S3 Bucket and reads the metadata of the stored storage buckets\navailable in S3."),(0,o.kt)("h3",{id:"thanos-querier"},"Thanos Querier"),(0,o.kt)("p",null,"Querier implements the Prometheus Query API and understands PromQL. It then sends the query using the aforementioned\nStore API to all known Thanos Stores (discovered using service discovery) and awaits the metric information from the\nstores, be it directly from Prometheus via the sidecar or metrics stored in S3 Object storage via Thanos Store."),(0,o.kt)("h3",{id:"thanos-compactor"},"Thanos Compactor"),(0,o.kt)("p",null,"It does not make a lot of sense to keep old metrics that are scraped every 15 or 30 seconds forever. At some point these\nmetrics would no longer be useful to make sense of your metrics. This is where\nthe Thanos Compactor comes in. It creates aggregates of old metrics based on rules. It will for example\naggregate metrics that are older than 30 days into 5 minute chunks. This saves resources and still gives you\nalmost the same accuracy when looking at longer timespans. After those metrics have been aggregated, they are\nwritten back into the S3 bucket and the metadata gets updated."),(0,o.kt)("h3",{id:"thanos-ruler"},"Thanos Ruler"),(0,o.kt)("p",null,"The Ruler component is the Thanos equivalent of Recording Rules. It can look at all Store APIs and generate new metrics\naccording to the Recording Rules fed into the Ruler component. However since this rule processing is not done against a\nlocal datastore, it is possible that these new metric datapoints will not always be generated as it relies on a reliable\ndata source to do this in the required intervals."),(0,o.kt)("h2",{id:"architecture-in-a-cluster"},"Architecture in a Cluster"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Thanos Architecture",src:n(4753).Z})),(0,o.kt)("p",null,"As we can see, there are quite a few things going on in this architectural view of the system, but on the other hand it\nis fairly simple to understand as the components are nicely decoupled from each other."),(0,o.kt)("p",null,"An interesting thing here is that the drawing has multiple Prometheus instances with multiple sidecars. Thanos actually\nallows for deduplication of timeseries data. The data uploaded from the sidecars contains information about which prometheus\ninstance the metrics are generated from, and adds that. The Querier can then deduplicate this data so that the metrics shown\nin Grafana are consistent and do not come sometimes from Prometheus A and sometimes from Prometheus B."),(0,o.kt)("p",null,"This design also allows for an interesting other Use Case: querying multiple clusters. As\nlong as the storage location used by the sidecars for uploading the metrics is identical, the time series data is\navailable to the Thanos Store and therefor the Querier and Grafana.\nThat even allows to run Grafana, Querier and Store in a completely different part of the world if need be."),(0,o.kt)("h2",{id:"is-it-worth-it"},"Is it worth it?"),(0,o.kt)("h3",{id:"pros"},"Pros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"highly available Prometheus"),(0,o.kt)("li",{parentName:"ul"},"increased reliability (decoupled query component)"),(0,o.kt)("li",{parentName:"ul"},"infinite metric storage"),(0,o.kt)("li",{parentName:"ul"},"query multiple clusters from a single point"),(0,o.kt)("li",{parentName:"ul"},"easy to scale")),(0,o.kt)("h3",{id:"cons"},"Cons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"more complex architecture"),(0,o.kt)("li",{parentName:"ul"},"increased resource usage")),(0,o.kt)("h2",{id:"what-are-the-biggest-benefits-for-us"},"What are the biggest benefits for us?"),(0,o.kt)("p",null,"As stated in the beginning of this article one of our objectives for implementing Thanos was the increased\nmetric retention to be able to look back further in time."),(0,o.kt)("p",null,"The most interesting features for us are to be able to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"analyze trends and identify anomalies within the mobile core network"),(0,o.kt)("li",{parentName:"ul"},"visualize and graph service usage"),(0,o.kt)("li",{parentName:"ul"},"predict service usage on peak days (think New Years Eve)"),(0,o.kt)("li",{parentName:"ul"},"observe behaviour over multiple deployments (regions, customers and cloud providers)")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Even though Thanos comes with an increased architectural and operational complexity, we have to say after running it for a while, we think it is totally worth it. We can make architecture decisions by looking further\nback in time than before. It also has the additional advantage that a misconfiguration of a Prometheus deployment\ndoes not pull down the whole stack as Prometheus is HA and only updates one at a time. If the deployment fails,\nwe can get notified and the deployment can be aborted. Also upgrades of the whole monitoring stack, can\nnow be done gradually, which is also a great advantage for us!"))}m.isMDXComponent=!0},4753:function(e,t,n){t.Z=n.p+"assets/images/thanos_architecture-45a1d9e2b04a1eea265ebeebfde7206f.png"}}]);