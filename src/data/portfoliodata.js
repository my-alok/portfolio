const portfolioData = [{
    title:"JP Morgan Chase & Co.",
    logo: "/images/jp.jpg",
    summary:"Currently working as a Software Engineer II onboarded on Apr 23. Contributing in several banking applications using technologies like AWS, Aurora PGSQL, Spring Boot, Java and ReactJS."
}, {
    title:"Blue Yonder Inc.",
    logo: "/images/by.png",
    type: "work",
    cardItems: [{
        heading: "Warehouse Management System",
        summary: "A cutting-edge warehouse management solution that combines automation, real-time visibility, and intelligent algorithms. It streamlines operations, optimizes inventory, and enhances customer service. By leveraging advanced technology, the project improves efficiency, reduces costs, and ensures accurate inventory management for warehouses.",
        details: [{
            heading: "Role and Responsibilities",
            summary: "Developed and maintained software components, Contributed to system architecture, database design, integration, testing, and continuous improvement initiatives. Collaborated with cross-functional teams to deliver a high-quality solution."
            }, {
                heading: "Technologies",
                summary: "Spring, MOCA, ExtJS, C, Java and MOCA"
            }]
    }]
}, {
    title:"NextGen Invent Corporation",
    logo: "/images/ngi.png",
    type: "work",
    cardItems: [{
        heading: "Dr. Susan Love Research Foundation",
        summary: "An AI based early breast cancer detection mobile application. Which can assist radiologists in detecting affected sectors in breast scans.",
        details: [{
            heading: "Offline service",
            summary: "Application is capable of completely running offile with its own Keras and Tensorflow image processing systems providing services where there is still no/slower mobile services. Also, it has Sync to Cloud mode which can backup all the data into the cloud if enabled and device is connected to the internet."
            }, {
                heading: "Technologies",
                summary: "Android, Python, AWS Lambda, AWS S3, Retrofit, Hockey App, Chaquopy, Keras, Tensorflow"
            }, {
                heading: "Role and Responsibilities",
                summary: "Implemented the Android application from scratch including integration of Keras and Tensorflow models, image processing by laveraging multithreading provided by the android system, and sync to cloud using AWS Lambda functions and S3 Storage."
            }]
    }, {
        heading: "JASCI Web",
        summary: "A Supply Management System used to manage warehouses, inventory, inbound and outboud shipments.",
        details: [{
            heading: "Roles and Responsibilities",
            summary: "Active participation in Implementing and designing multiple solutions for the business problems, Brainstorming possible issues and their solutions."
            }, {
                heading: "Languages and tech",
                summary: "Java, Oracle, Spring, JSP"
            }]
    }, {
        heading: "Shipping Connector",
        summary: "A modular shipping solution implemented for JASCI Web combining multiple shipping service providers across the USA",
        details: [{
            heading: "Roles and Responsibilities",
            summary: "Analysis, design and implementation of the multithreaded module from scratch which can enquire about the shipping rates, generate shipping labels, arrange pickups and returns of the packages from/of all the integrated shipping companies i.e. UPS, USPS, FedEx etc."
            }, {
                heading: "Languages and tech",
                summary: "Java, Spring"
            }]
    }, {
        heading: "SAP Business One Plugin",
        summary: "A Java console application which is invoked using windows services periodically and importing/exporting data to/from SAP Business One application to/from JASCI Web Application.",
        details: [{
            heading: "Roles and Responsibilities",
            summary: "Analysis, design and implementation of a modular application from scratch which can run periodically/scheduled and sync up the data from/to JASCI Web Application and SAP Business One application using SFTP server files."
            }, {
                heading: "Languages and tech",
                summary: "Java, Windows services, SFTP, SAP Business One SDK"
            }]
    }]
},{
    title:"Ajay Kumar Garg Engineering College",
    logo: "/images/akg.png",
    type: "education",
    cardItems : [ {
        heading:"Master of Computer Applications",
        summary: "Joined regular MCA program offered by UPTU in 2015 and completed it in 2018 with 74% Score.",
        details: [{
            heading: "Major",
            summary: "Computer Applications"
            }]
    }]
},{
    title:"Punjab Technical University",
    logo: "/images/PTULogo.gif",
    type: "education",
    cardItems : [ {
        heading:"Bachelor of Computer Applications",
        summary: "Joined Distance Education Program (DEP) offered by NIPS College of IT & Mgmt. Katra Prayagraj in Sep 2011 just after completing my SSE and completed BCA in Mar 2015 with 72% Score.",
        details: [{
            heading: "Major",
            summary: "Computer Applications"
            }]
    }],
    
}];

export default portfolioData;