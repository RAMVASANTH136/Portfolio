<template>
    <div style="background-color: #F9FAFB;">
        <div class="header">
            <div style="width: 10%;cursor: pointer;" @click="scrollTo('top')">
                <span class="title">Portfolio</span>
            </div>
            <div class="menu-web">
                <div @click="scrollTo('about')">
                    <span class="menuStyle">About</span>
                </div>
                <div @click="scrollTo('skills')">
                    <span class="menuStyle">Skills</span>
                </div>
                <div @click="scrollTo('experience')">
                    <span class="menuStyle">Experience</span>
                </div>
                <div @click="scrollTo('work')">
                    <span class="menuStyle">Work</span>
                </div>
                <div @click="scrollTo('contact')">
                    <span class="menuStyle">Contact</span>
                </div>
                <div class="downloadButton" @click="downloadCV()">
                    <span class="cvStyle">Download CV</span>
                </div>
            </div>
        </div>
        <div class="component1" id="top">
            <div class="aboutSection">
                <div class="aboutText">
                    <div class="layer1">
                        <div>
                            <span class="hiistyle">Hi, I'm Ramvasanth Mahendran👋</span>
                        </div>
                        <div>
                            <span class="descStyle"> A passionate software engineer with expertise in full-stack development. I specialize in front-end technologies like React, Vue.js, React Native, Angular, and back-end technologies including Node.js, MySQL, and Python. With a strong foundation in cloud computing (AWS Certified), and programming languages like C, C++, and Java, I aim to create scalable and efficient solutions. Currently pursuing a Master's in Computer Science and Engineering, I am always eager to learn and explore new technologies.</span>
                        </div>
                    </div>
                    <div class="layer2">
                        <div style="display: flex;flex-direction: row;gap:8px">
                            <div>
                                <v-icon>mdi-map-marker</v-icon>
                            </div>
                            <div>
                                <span class="aboutStyle">University at Buffalo, New York</span>
                            </div>
                        </div>
                        <div style="display: flex;flex-direction: row;gap:8px">
                            <div>
                                <v-icon color="green" small>mdi-checkbox-blank-circle</v-icon>
                            </div>
                            <div>
                                <span class="aboutStyle">Available for new projects</span>
                            </div>
                        </div>
                    </div>
                    <div class="layer3">
                        <div style="display: flex;flex-direction: row;gap:8px">
                            <div @click="goToGithub()" style="cursor: pointer;">
                                <img :src="require('../../assets/github.svg')"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="filter: drop-shadow(30px 10px 4px #4B5563);" class="imageClass">
                    <img :src="require('../../assets/myimg.jpeg')" class="imgMobile"/>
                </div>
            </div>
        </div>
        <div class="component2" id="about">
            <div style="display: flex;justify-content: center;align-items: center;"> 
                <div class="aboutButton">
                    <span class="aboutMeStyle">About me</span>
                </div>
            </div>
            <div class="descSection">
                <!-- <div style="text-align: center;filter: drop-shadow(30px 10px 4px #4B5563);">
                    <img style="width:50%" :src="require('../../assets/myfavimg.jpeg')" class="imgMobile"/>
                </div> -->
                <div class="curiousSection">
                    <div>
                        <span class="curiousStyle">Curious about me? Here you have it:</span>
                    </div>
                    <div style="display: flex;flex-direction: column;gap:15px">
                        <div class="descStyle">
                            A passionate and driven software engineer with a strong interest in full-stack development. I am currently pursuing my Master’s in Computer Science and Engineering at the University at Buffalo. My journey into software development began with a curiosity about how technology shapes the world, and this curiosity quickly grew into a deep passion for building scalable, efficient, and user-friendly applications. Through my academic and professional experiences, I have developed a versatile skill set in both front-end and back-end technologies.
                        </div>
                        <div class="descStyle">
                            On the front-end, I have extensive experience working with modern frameworks like React, Vue.js, React Native, and Angular. These tools have allowed me to create intuitive, dynamic user interfaces that deliver seamless experiences across web and mobile platforms. I also have strong foundational knowledge of core web technologies such as HTML, CSS, and JavaScript, which enable me to build responsive and interactive web pages. I thrive on the challenge of translating complex requirements into elegant, user-friendly designs.
                        </div>
                        <div class="descStyle">
                            In the back-end, I am proficient in Node.js, MySQL, Python, and cloud technologies such as AWS, where I hold the AWS Cloud Practitioner certification. I have built and maintained scalable, high-performance back-end systems that can handle large datasets and complex business logic. My experience extends to databases like DynamoDB and QLDB, allowing me to design and optimize data structures that meet application needs. I am particularly drawn to designing efficient back-end solutions that can easily scale while ensuring high performance.
                        </div>
                        <div class="descStyle">
                            Throughout my career, I have worked on diverse projects, including full-stack web applications and mobile apps, which have helped me refine my ability to deliver complete software solutions. My time at Codestax.ai gave me valuable experience in mobile app development and working with cutting-edge technologies, while at Novalnet E-Solutions Pvt Ltd, I played an instrumental role in transitioning legacy systems to modern frameworks, improving user interfaces, and implementing payment processing solutions. These experiences have taught me the importance of collaboration, problem-solving, and delivering quality software on time.
                        </div>
                        <div class="descStyle">
                            When I'm not coding, I enjoy exploring new technologies, participating in hackathons, and contributing to open-source projects. I’m always eager to learn more and expand my skill set to stay ahead in the ever-evolving tech industry. Whether it's through exploring new frameworks, diving into cloud computing, or solving complex algorithms, I am motivated by the challenge of continuously improving as a developer. If you’re looking for someone passionate about software engineering and eager to take on new challenges, feel free to connect!
                        </div>
                        <div>
                            Finally, some quick bits about me:
                        </div>
                        <div>
                            <ul>
                                <li class="descStyle">B.Tech in Information Technology from Anna University, Chennai</li>
                                <li class="descStyle">Passionate about full-stack development, mobile apps, and cloud computing</li>
                                <li class="descStyle">Currently pursuing MS in Computer Science and Engineering at University at Buffalo</li>
                                <li class="descStyle">AWS Certified Cloud Practitioner with hands-on experience in cloud solutions</li>
                                <li class="descStyle">Skilled in modern front-end frameworks (React, Vue.js, Angular) and back-end technologies (Node.js, Python, MySQL)</li>
                                <li class="descStyle">Strong problem solver with a love for coding challenges and hackathons</li>
                            </ul>
                        </div>
                        <div class="descStyle">
                            One last thing, I'm available for work, so feel free to reach out and say hello!
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="component3" id="skills">
            <div style="display: flex;justify-content: center;align-items: center;"> 
                <div style="margin-top:20px;display: flex;flex-direction: column;justify-content: center;text-align: center;align-items: center;gap:20px">
                    <div class="skillButton">
                        <span class="skillStyle">Skills</span>
                    </div>
                    <div>
                        <span class="skillDescStyle">The skills, tools and technologies I am really good at:</span>
                    </div>
                </div>
            </div>
            <div class="skillLogoSection">
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img :src="require('../../assets/react.svg')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">React</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img class="imageSize" :src="require('../../assets/vue.png')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">Vue js</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img class="imageSize" :src="require('../../assets/reactnative.png')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">React native</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img class="imageSize" :src="require('../../assets/angular.png')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">Angular</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img class="imageSize" :src="require('../../assets/nodejs.png')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">Node js</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img class="imageSize" :src="require('../../assets/dynamodb.png')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">Dynamo DB</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img class="imageSize" :src="require('../../assets/qldb.jpeg')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">QLDB</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img class="imageSize" :src="require('../../assets/mysql.png')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">MYSQL</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img class="imageSize" :src="require('../../assets/python.jpeg')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">Python</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img class="imageSize" :src="require('../../assets/aws.png')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">AWS</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img class="imageSize" :src="require('../../assets/git.png')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">Git</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img class="imageSize" :src="require('../../assets/html.png')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">HTML</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img class="imageSize" :src="require('../../assets/css.png')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">CSS</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;gap:12px">
                    <div>
                        <img class="imageSize" :src="require('../../assets/js.png')"/>
                    </div>
                    <div>
                        <span class="logoTextStyle">Javascript</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="component4" id="experience">
            <div style="display: flex;justify-content: center;align-items: center;"> 
                <div style="margin-top:20px;display: flex;flex-direction: column;justify-content: center;text-align: center;align-items: center;gap:20px">
                    <div class="experienceButton">
                        <span class="skillStyle">Experience</span>
                    </div>
                    <div>
                        <span class="skillDescStyle">Here is a quick summary of my most recent experiences:</span>
                    </div>
                </div>
            </div>
            <div class="expSection">
                <div class="expBox">
                    <div style="width:15%">
                        <img :src="require('../../assets/codestaxLogo.png')" class="codestaxLogoStyle"/>
                    </div>
                    <div class="aboutExp">
                        <div>
                            <span class="roleStyle">Software Development Engineer 1</span>
                        </div>
                        <div>
                            <ul>
                                <li class="descStyle">Developed Dynamic Web Applications with React and Vue.js: Led the development of responsive and user-friendly web applications utilizing React and Vue.js frameworks, enhancing client engagement and satisfaction.</li>
                                <li class="descStyle">Built Cross-Platform Mobile Applications Using React Native: Engineered high-performance mobile applications with React Native, ensuring seamless functionality across both iOS and Android platforms.</li>
                                <li class="descStyle">At CodeStax.Ai, I led initiatives to enhance engineering excellence by implementing SonarQube for continuous code quality inspection, establishing comprehensive unit testing frameworks, and designing CI/CD pipelines with AWS services for automated deployment. These efforts significantly improved software quality and streamlined deployment processes.</li>
                                <li class="descStyle">Optimized Backend Performance with Node.js and AWS: Improved backend performance by leveraging Node.js and AWS services, optimizing data processing workflows and reducing response times, which led to enhanced user experience and system scalability.</li>
                                <li class="descStyle">Collaborated in Agile Teams for Efficient Project Delivery: Actively contributed to agile sprints and cross-functional teams, collaborating closely with product managers and designers to deliver high-quality features on time, ensuring alignment with business goals and customer requirements.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <span class="descStyle">Mar 2022 - Jun 2024</span>
                    </div>
                </div>
                <div class="expBox">
                    <div style="width:15%">
                        <img :src="require('../../assets/novalnetLogo.png')" class="codestaxLogoStyle"/>
                    </div>
                    <div class="aboutExp">
                        <div>
                            <span class="roleStyle">Software Development Engineer 1</span>
                        </div>
                        <div>
                            <ul>
                                <li class="descStyle">Migrated Legacy Code to Modern Frameworks: Led the migration of legacy systems from PHP Zend Framework to React.js, significantly improving the performance, scalability, and maintainability of the payment service provider admin panel and payment processing systems.</li>
                                <li class="descStyle">Developed Robust Admin Panel and CMS: Designed and developed a comprehensive admin panel and content management system (CMS) for seamless user management, payment tracking, and data reporting, which enhanced internal workflow efficiency and customer satisfaction.</li>
                                <li class="descStyle">Integrated Payment Gateway Solutions: Implemented various payment gateway integrations, ensuring secure, reliable, and scalable payment processing systems for clients, optimizing transaction speed, and improving overall service reliability.</li>
                                <li class="descStyle">Optimized Front-End Performance: Enhanced front-end performance of web applications by utilizing React.js and JavaScript best practices, reducing page load times and ensuring a smooth, responsive user experience across all devices.</li>
                                <li class="descStyle">Collaborated Cross-Functionally for Continuous Improvement: Worked closely with back-end developers, project managers, and clients to ensure that technical requirements were met, contributing to the timely delivery of features and maintaining high software quality standards.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <span class="descStyle">Feb 2021 - Jun 2022</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="component5" id="work">
            <div style="display: flex;justify-content: center;align-items: center;"> 
                <div style="margin-top:20px;display: flex;flex-direction: column;justify-content: center;text-align: center;align-items: center;gap:20px">
                    <div class="workButton">
                        <span class="skillStyle">Work</span>
                    </div>
                    <div>
                        <span class="skillDescStyle">Some of the noteworthy projects I have built:</span>
                    </div>
                </div>
            </div>
            <div class="workSection">
                <div>
                    <img class="bannerStyle" :src="require('../../assets/cbs_banner.png')"/>
                </div>
                <div style="display: flex;flex-direction: column;gap:20px">
                    <div>
                        <span class="roleStyle">Core Banking System (Wallet, Home Loan, and Banking Applications)</span>
                    </div>
                    <div>
                        <span class="descStyle">
                            Developed a comprehensive core banking system, including features like wallet management, home loan processing, and banking operations. The system offers seamless customer experiences by integrating multiple modules such as account management, transactions, and loan approvals. Built using React Native for mobile applications and Vue.js for the front end, with Node.js and QLDB as the back-end technologies. The project is currently in the UAT phase, with proof-of-concept evaluations.
                        </span>
                    </div>
                    <div>
                        <span class="descStyle">Key Technologies: React Native, Vue.js, Node.js, QLDB, AWS</span>
                    </div>
                    <div class="descStyle">
                        Key Features:
                        <ul>
                            <li>Multi-module banking operations (Wallet, Home Loan)</li>
                            <li>Integration with cloud services for data security</li>
                            <li>User-centric mobile and web interfaces</li>
                            <li>Robust back-end APIs and real-time data updates</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="workSection">
                <div>
                    <img class="bannerStyle" :src="require('../../assets/mpay_banner.png')"/>
                </div>
                <div style="display: flex;flex-direction: column;gap:20px">
                    <div>
                        <span class="roleStyle"> mPay: Mobile Payment App for Banking Transactions</span>
                    </div>
                    <div>
                        <span class="descStyle">
                            Developed a mobile application for banking transactions, allowing users to send and receive money securely. The app includes features for managing wallets for both normal and premium users, providing dynamic handling of different user roles. Built using React Native for the mobile front end, with Node.js handling the backend services. The project is in proof-of-concept, focused on enhancing user engagement and secure payment processing.
                        </span>
                    </div>
                    <div>
                        <span class="descStyle">Key Technologies: React Native,Vue js,React js, Node.js, Firebase (for real-time data syncing),Dynamodb</span>
                    </div>
                    <div class="descStyle">
                        Key Features:
                        <ul>
                            <li>Cross-platform mobile app for secure transactions</li>
                            <li>Dynamic wallet management for different user roles</li>
                            <li>Integration with banking services for real-time payments</li>
                            <li>Scalable architecture to support future growth</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="workSection">
                <div>
                    <img class="bannerStyle" :src="require('../../assets/cicd_banner.png')"/>
                </div>
                <div style="display: flex;flex-direction: column;gap:20px">
                    <div>
                        <span class="roleStyle">Continuous Integration and Continuous Deployment (CI/CD) Implementation Using AWS and SonarQube</span>
                    </div>
                    <div>
                        <span class="descStyle">
                            Led the implementation of a CI/CD pipeline to automate the build, test, and deployment processes using AWS services like CodePipeline, CodeBuild, and Lambda. Additionally, integrated SonarQube for continuous code quality inspection, ensuring that the code adhered to high standards of quality and performance. This initiative significantly improved development speed, reduced manual errors, and streamlined the software release process, enhancing the overall engineering workflow.
                        </span>
                    </div>
                    <div>
                        <span class="descStyle">Key Technologies: AWS CodePipeline, AWS CodeBuild, SonarQube, Lambda, Docker</span>
                    </div>
                    <div class="descStyle">
                        Key Features:
                        <ul>
                            <li>Automated build and deployment pipelines using AWS services</li>
                            <li>Integration of SonarQube for continuous code quality checks</li>
                            <li>Optimized the process for faster feedback and issue resolution</li>
                            <li>Decreased manual deployment errors and enhanced system reliability</li>
                            <li>Scalable infrastructure to accommodate growing project demands</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="component6" id="contact">
            <div style="display: flex;justify-content: center;align-items: center;"> 
                <div style="margin-top:20px;display: flex;flex-direction: column;justify-content: center;text-align: center;align-items: center;gap:20px">
                    <div class="contactButton">
                        <span class="skillStyle">Get in touch</span>
                    </div>
                    <div>
                        <span class="skillDescStyle">What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simple want to connect.</span>
                    </div>
                </div>
            </div>
            <div style="display: flex;flex-direction: column;gap:15px">
                <div class="contactDetailsSection">
                    <div>
                        <v-icon>mdi-email-outline</v-icon>
                    </div>
                    <div>
                        <span class="roleStyle">ramv5075@gmail.com</span>
                    </div>
                </div>
                <div class="contactDetailsSection">
                    <div>
                        <v-icon>mdi-phone</v-icon>
                    </div>
                    <div>
                        <span class="roleStyle">+1 908 405 5698</span>
                    </div>
                </div>
            </div>
            <div style="margin-top:20px;display: flex;flex-direction: column;justify-content: center;align-items: center;gap:15px;">
                <div>
                    <span class="skillDescStyle">You may also find me on these platforms!</span>
                </div>
                <div style="display: flex;flex-direction: row;gap:8px">
                    <div @click="goToGithub()" style="cursor: pointer;">
                        <img :src="require('../../assets/github.svg')"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AboutView",
    data(){
        return{
            name:"About"
        }
    },
    methods:{
        goToGithub() {
            window.open("https://github.com/RAMVASANTH136", "_blank");
        },
        scrollTo(divId) {
            const target = document.getElementById(divId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        },
        downloadCV() {
            const pdfUrl = '/files/Ramvasanth_Resume.pdf';
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'Ramvasanth_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
</script>

<style>
.header{
    background-color: #FFFFFF;
    padding-top: 16px;
    padding-left: 80px;
    padding-right: 80px;
    min-height: 68px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1000;
    width: 100%;
    @media (max-width: 768px) {

    }
    @media (max-width: 480px) {
        .menu-web{
            display: none;
        }
        padding-top: 16px;
        padding-left: 16px;
        padding-right: 16px;
    }
}
.menu-web{
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.menuStyle{
    cursor: pointer;
    color: #4B5563;
    font-size: 16px;
}
.downloadButton{
    cursor: pointer;
    min-width: 136px;
    min-height:36px;
    background-color: #111827;
    border-radius: 12px;
    padding:12px;
}
.cvStyle{
    color: #FFFFFF;
    font-size: 16px;
}
.title{
    color: #111287;
    font-weight: bold;
    font-size: 16px;
}
.component1{
    background-color: #FFFFFF;
    @media (max-width: 768px) {

    }
    @media (max-width: 480px) {
        .aboutSection{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding-top: 86px;
            padding-left: 16px;
            padding-right: 16px;
        }
        .imgMobile{
            margin-top:20px;
            width:300px;
        }
    }
}
.aboutSection{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 130px;
    padding-left: 80px;
    padding-right: 80px;
}
.aboutText{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:48px;
    @media (max-width: 480px) {
        width: 100%;
    }
}
.layer1{
    display: flex;
    flex-direction: column;
    gap:8px;
}
.hiistyle{
    color: #111827;
    font-weight:bold;
    font-size: 56px;
}
.aboutStyle{
    color: #4B5563;
    font-weight:regular;
    font-size: 14px;
}
.layer2{
    display: flex;
    flex-direction: column;
    gap:8px;
}
.layer3{
    display: flex;
    flex-direction: row;
    gap:8px;
}
.component2{
    margin-top: 20px;
    background-color: #F9FAFB;
    @media (max-width: 768px) {

    }
    @media (max-width: 480px) {
        .descSection{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding-top: 16px;
            padding-left: 16px;
            padding-right: 16px;
        }
        .imgMobile{
            margin-top:20px;
            width:300px;
        }
    }
}
.aboutButton{
    width: 105px;
    min-height: 28px;
    background-color: #E5E7EB;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.aboutMeStyle{
    color: #4B5563;
    font-weight:regular;
    font-size: 14px;
}
.descSection{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap:4%;
    padding-top: 80px;
    padding-left: 80px;
    padding-right: 80px;
}
.curiousSection{
    display: flex;
    flex-direction: column;
    gap:20px
}
.curiousStyle{
    color: #111827;
    font-weight:bold;
    font-size: 36px; 
}
.descStyle{
    color: #111827;
    font-weight:400;
    font-size: 18px; 
}
.component3{
    margin-top: 20px;
    background-color: #FFFFFF;
    @media (max-width: 768px) {

    }
    @media (max-width: 480px) {
        .skillDescStyle{
            color: #111827;
            font-weight:400;
            font-size: 12px; 
        }
        .skillLogoSection{
            padding:16px;
            display: flex;
            flex-direction: row;
            gap:20px;
            flex-wrap: wrap;
        }
    }
}
.skillButton{
    width: 75px;
    min-height: 28px;
    background-color: #E5E7EB;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.skillStyle{
    color: #4B5563;
    font-weight:regular;
    font-size: 14px;
}
.skillDescStyle{
    color: #111827;
    font-weight:400;
    font-size: 22px; 
}
.skillLogoSection{
    padding:80px;
    display: flex;
    flex-direction: row;
    gap:150px;
    flex-wrap: wrap;
}
.logoTextStyle{
    color: #4B5563;
    font-weight:400;
    font-size: 16px; 
}
.component4{
    margin-top: 20px;
    background-color: #F9FAFB;
    @media (max-width: 768px) {

    }
    @media (max-width: 480px) {
        .skillDescStyle{
            color: #111827;
            font-weight:400;
            font-size: 12px; 
        }
        .skillLogoSection{
            padding:16px;
            display: flex;
            flex-direction: row;
            gap:20px;
            flex-wrap: wrap;
        }
    }
}
.experienceButton{
    width: 115px;
    min-height: 28px;
    background-color: #E5E7EB;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.expSection{
    margin-top:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap:20px;
    @media (max-width: 768px) {

    }
    @media (max-width: 480px) {
        .codestaxLogoStyle{
            width: 100px;
            height: 100px;
        }
        .expBox{
            width: 80%;
            min-height: 100px;
            background-color: #FFFFFF;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding:20px;
        }
        .roleStyle{
            color: #111827;
            font-weight:bold;
            font-size: 18px; 
        }
    }
}
.codestaxLogoStyle{
    width: 100px;
    height: 100px;
}
.expBox{
    width: 80%;
    min-height: 100px;
    background-color: #FFFFFF;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:20px;
}
.aboutExp{
    width: 60%;
    display: flex;
    flex-direction: column;
    gap:16px;
}
.roleStyle{
    color: #111827;
    font-weight:bold;
    font-size: 22px; 
}
.component5{
    margin-top: 20px;
    background-color: #FFFFFF;
    @media (max-width: 768px) {

    }
    @media (max-width: 480px) {
        .skillDescStyle{
            color: #111827;
            font-weight:400;
            font-size: 12px; 
        }
        .workSection{
            margin:20px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap:15%;
            background-color: #FFFFFF;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }
        .bannerStyle{
            width:250px;
        }
    }
}
.workButton{
    width: 75px;
    min-height: 28px;
    background-color: #E5E7EB;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.component6{
    margin-top: 20px;
    background-color: #F9FAFB;
    @media (max-width: 768px) {

    }
    @media (max-width: 480px) {
        .skillDescStyle{
            color: #111827;
            font-weight:400;
            font-size: 12px; 
        }
    }
}
.contactButton{
    width: 122px;
    min-height: 28px;
    background-color: #E5E7EB;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.contactDetailsSection{
    margin-top: 20px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:16px;
}
.imageSize{
    width: 71px;
    height:64px;
}
.workSection{
    margin:20px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap:15%;
    background-color: #FFFFFF;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.bannerStyle{
    width:500px;
}
</style>