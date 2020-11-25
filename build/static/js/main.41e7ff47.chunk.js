(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(11),s=a.n(o),r=(a(37),a(15)),l=a(16),c=a(19),m=a(17),u=a(20);var h=function(e){var t=e.resumeData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#skill"},"Skills")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#work"},"Experience")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#edu"},"Education")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},"Hi, I'm ",t.name," "),i.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",t.role,", who loves to transform ideas into reality using code.",t.roleDescription),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},t.socialLinks&&t.socialLinks.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:e.className})))})),i.a.createElement("br",null),i.a.createElement("a",{href:"/IIT(ISM)_Chirag_Jain.pdf",target:"_blank",rel:"noopener noreferrer",style:{color:"white"}},i.a.createElement("button",{type:"social",style:{color:"white"}},"Download resume \xa0",i.a.createElement("i",{className:"fa fa-external-link"}))))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},i.a.createElement("i",{className:"icon-down-circle"})))))};a(39);var p=function(e){var t=e.resumeData;return i.a.createElement("section",{className:"timeline-container",id:"work"},i.a.createElement("div",{className:"timeline"},i.a.createElement("br",null),i.a.createElement("h3",{style:{color:"white",fontWeight:"bold"}}," ","Work Experience"),i.a.createElement("ul",null,t.work.map(function(e,t){return i.a.createElement("li",{key:t.toString()},i.a.createElement("span",null,e.duration),i.a.createElement("div",{className:"content"},i.a.createElement("a",{href:e.companyLink,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("h3",null,e.companyName," - ",e.position)),i.a.createElement("p",null,e.desc)))}))))};var d=function(e){var t=e.resumeData;return i.a.createElement("section",{id:"edu"},i.a.createElement("div",{className:"row education"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Education"))),i.a.createElement("div",{className:"nine columns main-col"},t.education&&t.education.map(function(e){return i.a.createElement("div",{className:"row item",key:e.duration},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.UniversityName),i.a.createElement("p",{className:"info"},e.specialization,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.duration," ")),i.a.createElement("p",null,e.Achievements)))}))))};a(41);var g=function(e){var t=e.skills;return i.a.createElement("div",{className:"skills-section"},i.a.createElement("div",{className:"skills-container"},t&&t.map(function(e){return i.a.createElement("div",{className:"skills-box",key:e.name},i.a.createElement("div",{className:"skills-title"},i.a.createElement("div",{className:"skills-img"},i.a.createElement("img",{src:e.img,alt:"",className:"skills-icons"})),i.a.createElement("h5",null,e.name)))})))};var f=function(e){var t=e.resumeData;return i.a.createElement("section",{id:"skill",style:{backgroundColor:"#ccc"}},i.a.createElement("div",{className:"row skill"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Skills"))),i.a.createElement("div",{className:"nine columns main-col"},t.skills.map(function(e){return i.a.createElement("div",{key:e.category},i.a.createElement("h4",null,e.category),i.a.createElement(g,{skills:e.list}))}))))},b=a(80),k=a(89),v=a(22),y=a(92),w=a(94),E=a(81),N=a(82),I=a(77),S=a(84),j=a(85),C=a(86),D=a(87),T=a(88),M=a(79),L=(a(43),function(e){var t=e.project,a=e.handleClose,o=function(e){"Escape"===e.key&&a()};return Object(n.useEffect)(function(){return window.addEventListener("keydown",o),function(){return window.removeEventListener("onkeydown",o)}}),i.a.createElement("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",overflow:"auto",margin:"0",zIndex:"100",display:"flex",backgroundColor:"rgba(100, 100, 100, 0.4)"}},i.a.createElement("div",{className:"modal"},i.a.createElement(I.a,{gutterBottom:!0,variant:"h2",component:"h2",style:{display:"flex",justifyContent:"center",alignItems:"center"}},t.title),i.a.createElement(I.a,{gutterBottom:!0,variant:"h5",component:"h5",style:{display:"flex",justifyContent:"center",alignItems:"center",color:"black"}},t.des),t.points?i.a.createElement(I.a,{gutterBottom:!0,variant:"h5",component:"h5",style:{display:"flex",justifyContent:"center",alignItems:"center",color:"black"}},i.a.createElement("ul",null,t.points.map(function(e,t){return i.a.createElement("li",{key:t.toString()}," \u2022 ",e)}))," "):"",i.a.createElement(M.a,{variant:"outlined",color:"primary",onClick:a},"Close")))}),A=(a(57),{largeIcon:{width:35,height:35,color:"black"}});function x(e){var t=e.project,a=i.a.createRef(),o=Object(n.useState)(t.intro),s=Object(v.a)(o,2),r=s[0],l=s[1],c=Object(n.useState)(!1),m=Object(v.a)(c,2),u=m[0],h=m[1],p=function(){l(13*t.intro.length<=10*a.current.offsetWidth?t.intro:t.intro.slice(0,10*a.current.offsetWidth/15).trim()+"...")};Object(n.useEffect)(function(){return p(),window.addEventListener("resize",p),function(){return window.removeEventListener("resize",p)}});return i.a.createElement(b.a,{item:!0,xs:12,sm:6,md:4},i.a.createElement(w.a,null,i.a.createElement(E.a,{component:"img",className:"project-image",alt:t.title,image:t.imgurl,title:t.title}),i.a.createElement(N.a,null,i.a.createElement(I.a,{gutterBottom:!0,variant:"h4",component:"h2",className:"one-line"},t.title),i.a.createElement(I.a,{variant:"body2",component:"p",className:"description",ref:a,gutterBottom:!0,style:{fontSize:"16px"}},r),i.a.createElement("div",{className:"chip-container"},t.techstack.map(function(e,t){return i.a.createElement(y.a,{className:"chip",size:"small",label:e,color:"primary",key:t.toString(),style:{fontSize:"1.30rem",margin:"1px"}})}))),i.a.createElement(S.a,{disableSpacing:!0,className:"card-actions"},i.a.createElement(j.a,{title:"More Info","aria-label":"More Info",onClick:function(){h(!0)},style:A.largeIcon},i.a.createElement(C.a,{fontSize:"large"})),u?i.a.createElement(L,{project:t,handleClose:function(){h(!1)}}):null,i.a.createElement(j.a,{title:"View Live","aria-label":"Launch Application",target:"_blank",href:t.links.launch,style:A.largeIcon},i.a.createElement(D.a,{fontSize:"large"})),i.a.createElement(j.a,{title:"View Source Code","aria-label":"Source Code On Github",target:"_blank",href:t.links.github,style:A.largeIcon},i.a.createElement(T.a,{fontSize:"large"})))))}var z=Object(k.a)({"spacing-xs-4":{width:"inherit",margin:0}});var O=function(e){var t=z(),a=e.resumeData.portfolio;return i.a.createElement("section",{id:"portfolio"},i.a.createElement("h2",{style:{color:"black",fontSize:"2.2rem",marginTop:"-20px"}},"Projects"),i.a.createElement(b.a,{container:!0,spacing:4,style:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},classes:{"spacing-xs-4":t["spacing-xs-4"]}},a&&a.map(function(e,t){return i.a.createElement(x,{project:e,key:t})})))},P=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"contact"},i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",{key:e.url},i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}))),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"}))))))}}]),t}(n.Component),B={name:"Chirag Jain",role:"Fullstack Developer and a Competitive Programmer",linkedinId:"https://www.linkedin.com/in/cjchirag7/",skypeid:"live:cjchirag7",roleDescription:" I'm currently in my final year, pursuing B.Tech in Computer Science and Engineering at IIT(ISM) Dhanbad. I like to learn about new technologies and make technical tutorials in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/cjchirag7/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/cjchirag7",className:"fa fa-github"},{name:"facebook",url:"https://www.facebook.com/profile.php?id=100005981172975",className:"fa fa-facebook"},{name:"mail",url:"mailto:cjchirag7@gmail.com",className:"fa fa-envelope"},{name:"youtube",url:"https://www.youtube.com/channel/UCdREwwNt4CvN9W0Ys9iYTqw",className:"fa fa-youtube"}],aboutme:"I am currently a pre-final year student at the Indian Institute of Technology (ISM) Dhanbad and pursuing my B.Tech in Computer Science and Engineering from here. I am a self taught Full Stack Web Developer, currently diving deeper into Machine Learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",address:"India",website:"https://cjchirag7.github.io",education:[{UniversityName:"Indian Institute of Technology (ISM) Dhanbad",specialization:"B.Tech in Computer Science and Engineering",duration:"July 2018 - May 2022",Achievements:"CGPA - 9.26"},{UniversityName:"Carmel Convent Sr. Sec. School Neemuch",specialization:"PCM with Computer Science",duration:"April 2016 - May 2018",Achievements:"Scored 92.60%"}],work:[{companyName:"Microsoft",position:"Software Engineer Intern",duration:"May 2021 - July 2021",desc:"Developed a loosely coupled component for alerting based on critical touchpoints, that can be identified by monitoring a telemetry or DB.",companyLink:"https://www.microsoft.com/"},{companyName:"CyberLabs",position:"Head of Web Development Division",duration:"July 2020 - March 2021",desc:"CyberLabs is the official programming club of IIT(ISM) Dhanbad. I take regular sessions on web development and collaborate in team projects",companyLink:"https://cyberlabs.club/"},{companyName:"Deepmoth.ai",position:"Software Development Intern",duration:"March 2020 - May 2020",desc:"Developed features for 'PaperVoice', a cross-platform audiobook application. Features developed included bookmark management, audiobook review system and payment gateway integration.",companyLink:"https://www.deepmoth.ai/"},{companyName:"Concetto",position:"Frontend Developer",duration:"Sept 2019 - Oct 2019",desc:"Developed frontend of the website of Concetto, the official techno-management fest of IIT (ISM) Dhanbad, in React JS.",companyLink:"https://cjchirag7.github.io/concetto_front/"}],skillsDescription:"Your skills here",skills:[{category:"Programming Languages",list:[{img:"/images/cpp.png",name:"C++"},{img:"/images/javascript-icon-png-23.jpg",name:"JavaScript"},{img:"/images/python.png",name:"Python"},{img:"/images/c.png",name:"C"},{img:"/images/ts.png",name:"Typescript"}]},{category:"Databases",list:[{img:"/images/mysql.png",name:"MYSQL"},{img:"/images/mongo.png",name:"mongoDB"},{img:"/images/firebase.png",name:"Firebase"}]},{category:"Web Development",list:[{img:"/images/react.png",name:"React"},{img:"http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png",name:"Node.js"},{img:"/images/react-native.png",name:"React_Native"},{img:"/images/flask.png",name:"Flask"},{img:"/images/bootstrap.png",name:"Bootstrap"},{img:"/images/NET_Core_Logo.svg.png",name:".NET Core"},{img:"/images/jquery.png",name:"JQuery"},{img:"/images/html-5-logo-png-transparent.png",name:"HTML"},{img:"https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg",name:"CSS"}]},{category:"Deep Learning",list:[{img:"/images/pytorch.png",name:"PyTorch"},{img:"/images/keras.png",name:"Keras"}]},{category:"Others",list:[{img:"/images/docker.png",name:"Docker"},{img:"/images/git.png",name:"Git"},{img:"/images/postman.svg",name:"Postman"}]}],portfolio:[{title:"Dataset Creation & Model Eval UI",intro:"UI to create a well balanced image dataset with various augmentations and get insights about model failure by visualising various metrics. I received bronze in Inter IIT Tech Meet for this.",des:"A vehicle automation use-case to help vehicles better identify traffic signs. It has the following features : ",points:["Dataset creation UI to allow users to add a series of augmentations to uploaded images, add to the dataset, balance and split the dataset.","Post evaluation UI lets users test their trained model on the test dataset, analyze various metrics and get suggestions on how to improve the model and what to experiment next."],imgurl:"/images/portfolio/bosch_inter_iit.png",techstack:["Python","FastAPI","React","Docker","Node.js"],links:{launch:"https://www.youtube.com/watch?v=__GSd56tybM",github:"https://github.com/NBNARADHYA/bosch-inter-iit/tree/production"}},{title:"Shopping Assistant",intro:"A chatbot which bridges the gap between online and offline shopping. Also provides a virtual trial room for clothes and sunglasses. I secured top-10 rank in Hackon with Amazon, for this project.",des:"A chatbot, which assists consumers in deciding the right product and bridge the gap between online and offline shopping. It has the following features : ",points:["Suggests products to the consumer depending upon his needs, just like a salesperson.","Helps the consumer to virtually experience fashion products. E.g. If a consumer needs to try a T-shirt or a spectacle our shopping assistant gives him real time experience of how that product would look on him/her.","Provides a summary of all the reviews about a product, which prevents users from doing the tedious job of going through hundreds of reviews of that product."],imgurl:"/images/portfolio/shopping_assistant.png",techstack:["Python","NLTK","FastAPI","React","Docker"],links:{launch:"https://www.youtube.com/watch?v=x_BFtcoaTks",github:"https://github.com/cjchirag7/shopping-assistant"}},{title:"Sky Detector",intro:"A cross-platform mobile app for automatically detecting sky pixels in a photograph and calculate the angle of elevation for each vertical column.",des:"The app has the following features : ",points:["The application allows user to upload or capture an image and generates a mask image consisting of sky pixels marked in white colour in the image and other pixels marked in black colour.","Further, using information about camera optics, the application gives angle of elevation of the lowest sky pixel for all pixel columns in the mask image, in the form of a line graph."," The application also keeps tracks of user's history with the help of a MySQL database"],imgurl:"/images/portfolio/sky-detector.png",techstack:["Flask","React Native","MySQL","React","PyTorch"],links:{launch:"https://www.youtube.com/watch?v=Fo4Ay7CXXDU&feature=youtu.be",github:"https://github.com/cjchirag7/sky-detector/"}},{title:"Covid Vaccine Distribution System",intro:"Prioritized vaccine delivery using AI/ML and developed a web interface for the entire distribution system. This was recognized as best project idea in Hackfest 2021, by PhonePe.",des:"It has the following features : ",points:["Allows a user to find the nearest vaccination center from his location.","Uses medical, demographic and socio-economic Covid data to cluster similar regions in India.","Uses regression models on local medical data to allot a fatality score to each registered individual based on which vaccines would be distributed.","Vaccination centers send schedules to the users based on priority score and stock of vaccines.","A Covid chatbot that provides the accurate information regarding Covid, from trusted sources."],imgurl:"/images/portfolio/covid-vaccine.jpeg",techstack:["Flask","React","PostgreSQL","React","PyTorch"],links:{launch:"https://youtu.be/z92IZQF5epA",github:"https://github.com/NBNARADHYA/hackfest-2021"}},{title:"Click ISM",intro:"A campus portal that provides a Market Hub with some unique features of 'unrestricted bidding' and 'product verification'.",des:"It is a buying and selling website where students can sell used items, to other students. It has the following features : ",points:["Once a student uploads a product, the admin verifies that it is not a fake product. And if the verification is successful, then only the product is visible publicly."," Students can also allow bidding on their products to earn maximum profit.","Students can place a bid on these products, so that the owner gets to know the details of the ones interested in buying his product and he can contact them."," For the contact details, the user can set what contact details (like mobile no., email, room no.) should be kept confidential in edit profile option."],imgurl:"/images/portfolio/Click_ism.jpg",techstack:["Node.js","React","AWS S3","mongoDB","Redux"],links:{launch:"https://click-ism.herokuapp.com/",github:"https://github.com/cjchirag7/click-ism"}},{title:"Library Management App",intro:"A web app for the management of books, users, the issuing, returning and fine calculation for books in a library",des:"The website has the following features : ",points:["The admin can add new books, issue books to some existing users and mark return for their pre-issued books.","The admin can also view the stats of library, such as total books present, books not returned yet, number of users, etc.","The students can create their account, search for books, edit their profile and view their issue history."],imgurl:"/images/portfolio/lib_manage.jpg",techstack:["Node.js","React","mongoDB","Express","Redux"],links:{launch:"https://lib-manage.herokuapp.com/",github:"https://github.com/cjchirag7/lib_management"}},{title:"Video Streaming Web App",intro:"A progressive web app to serve as video streaming site for IIT (ISM). It has features to like, share, comment, suggest a video, submit feedback",des:"A website made using react to display the videos of all the cultural and technical fests of IIT (ISM). The data for videos is stored on a firebase DB. Users can sign in via Email, Facebook, GitHub, etc. and can like, comment, suggest a video and submit feedback.",imgurl:"/images/portfolio/ismvid.jpg",techstack:["React","Firebase","Bootstrap"],links:{launch:"https://ismvid-eeeee.firebaseapp.com/",github:"https://github.com/cjchirag7/ismvid"}},{title:"Quizzing Website",intro:"A quizzing website made in vanilla JS. The user gets to know the explanation of each answer that he made wrong, at the end.",des:"The user can either give a timed quiz or a timer-free quiz and select any of the available subjects. The user gets to know the correct answers and explanation of each question, at the end.",imgurl:"/images/portfolio/quiz.jpg",techstack:["JavaScript","HTML","CSS","Bootstrap"],links:{launch:"https://cjchirag7.github.io/quiz/",github:"https://github.com/cjchirag7/quiz"}},{title:"Chatroom Application",intro:"A multi-threaded client-server chat application written in C++ that uses sockets to communicate.",des:"The app has the following features :",points:["Users can send and receive messages simultaneously","Multiple users can send messages simultaneously"],imgurl:"/images/portfolio/chatroom.png",techstack:["C++","Multi-threading","Sockets"],links:{launch:"https://github.com/cjchirag7/chatroom-cpp/blob/main/screenshot.png",github:"https://github.com/cjchirag7/chatroom-cpp"}},{title:"IIT(ISM) Gymkhana website",intro:"Made a responsive website for the cultural clubs of IIT (ISM) Gymkhana.",des:"The website is mading using HTML, CSS, Javascript and Bootstrap.",imgurl:"/images/portfolio/gymkhana.jpg",techstack:["HTML","CSS","Bootstrap","JavaScript"],links:{launch:"https://cjchirag7.github.io/ismClubs/",github:"https://github.com/cjchirag7/ismClubs"}},{title:"My ML Library",intro:"Created my own library for various machine learning algorithms and compared its accuracy with Sci-kit Learn library",des:"Contains modularised implementation of following algorithms: ",points:["Linear Regression","Logistic Regression","Neural Networks Multi-Class Classifier (Multilayer)","K-nearest neighbours","K means Clustering","Decision Trees (using 'gini')"],imgurl:"/images/portfolio/ML_lib.png",techstack:["Python","Numpy","MatPlotlib"],links:{launch:"https://github.com/cjchirag7/My-ML-Library",github:"https://github.com/cjchirag7/My-ML-Library"}},{title:"Brain Opener",intro:"An educational portal software made using C++ using the concept of OOPs and file handling. It has a unique feature of creating the same difficulty level quiz consisting of random questions, each time.",des:"The software has the following features :",points:["There are 2 types of users - students and teachers","Only authorised teachers can log in, create the study material and create or modify the question bank for quiz  (Data-security)","Similarly, a student can also create an account, view the study material and take a quiz on whichever chapters he desires.","A special feature of the quiz is that the teacher can mark the difficulty level of a question as 'Easy', 'Medium' and 'Difficult' so that all the students get the same level of questions, though the questions being randomly selected."],imgurl:"/images/portfolio/edu_portal.jpg",techstack:["C++","OOPs"],links:{launch:"https://youtu.be/NIOP4gkVPJQ",github:"https://github.com/cjchirag7/EDUCATION-PORTAL"}}]},_=(a(59),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,{resumeData:B}),i.a.createElement(O,{resumeData:B}),i.a.createElement(f,{resumeData:B}),i.a.createElement(p,{resumeData:B}),i.a.createElement(d,{resumeData:B}),i.a.createElement(P,{resumeData:B}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.41e7ff47.chunk.js.map