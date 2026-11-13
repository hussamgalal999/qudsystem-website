import type { Project } from "@/types/project"

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Enterprise Resource Planning System",
    slug: "erp-system",
    description:
      "A comprehensive ERP solution for manufacturing companies to streamline operations and improve efficiency.",
    image: "/assets/img/long-preview/demo-1.jpg",
    categories: ["Enterprise", "Manufacturing", "Cloud"],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Redux"],
    featured: true,
    liveUrl: "https://example.com/erp",
    duration: "18 months",
    teamSize: 12,
    overview:
      "QudSystem developed a comprehensive Enterprise Resource Planning (ERP) system for a leading manufacturing company. The system integrates various business processes including inventory management, production planning, supply chain management, human resources, and financial operations into a unified platform. This solution replaced multiple legacy systems, eliminated data silos, and provided real-time insights for better decision-making.",
    keyFeatures: [
      "Modular architecture allowing clients to use only needed components",
      "Real-time analytics dashboard with customizable KPIs",
      "Automated workflow management across departments",
      "Inventory optimization with predictive analytics",
      "Comprehensive reporting and business intelligence tools",
      "Mobile application for on-the-go management",
    ],
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges: {
      introduction:
        "Implementing an enterprise-wide ERP system presented several significant challenges that required innovative approaches and careful planning.",
      items: [
        {
          title: "Legacy System Integration",
          description:
            "The client had multiple legacy systems with decades of historical data that needed to be migrated and integrated without disrupting ongoing operations.",
        },
        {
          title: "Complex Workflow Requirements",
          description:
            "Manufacturing processes involved complex workflows spanning multiple departments with intricate approval hierarchies and conditional logic.",
        },
        {
          title: "Performance at Scale",
          description:
            "The system needed to handle thousands of concurrent users and process millions of transactions daily while maintaining responsive performance.",
        },
        {
          title: "User Adoption",
          description:
            "Employees were accustomed to the old systems, creating resistance to change and requiring comprehensive training and change management.",
        },
      ],
    },
    solutions: {
      introduction:
        "Our team implemented innovative solutions to address each challenge while ensuring the system met all business requirements.",
      items: [
        {
          title: "Phased Migration Strategy",
          description:
            "We developed a custom ETL pipeline and implemented a phased migration approach, moving one department at a time to minimize disruption while ensuring data integrity.",
          technologies: ["Python", "Apache Airflow", "AWS Glue"],
        },
        {
          title: "Configurable Workflow Engine",
          description:
            "We built a highly configurable workflow engine that allowed business analysts to define and modify complex workflows through a visual interface without requiring code changes.",
          technologies: ["Node.js", "React", "Redux"],
        },
        {
          title: "Microservices Architecture",
          description:
            "We implemented a microservices architecture with horizontal scaling capabilities, caching layers, and database optimization to ensure performance at scale.",
          technologies: ["Docker", "Kubernetes", "Redis", "PostgreSQL"],
        },
        {
          title: "Comprehensive Training Program",
          description:
            "We developed an interactive training program with role-specific modules, created detailed documentation, and established a support team to assist users during the transition period.",
          technologies: ["LMS Platform", "Interactive Tutorials"],
        },
      ],
    },
    results: {
      summary:
        "The ERP implementation delivered significant improvements in efficiency, data accuracy, and decision-making capabilities.",
      metrics: [
        {
          value: "35%",
          label: "Reduction in operational costs",
        },
        {
          value: "40%",
          label: "Improvement in inventory accuracy",
        },
        {
          value: "28%",
          label: "Increase in production efficiency",
        },
      ],
      testimonial: {
        quote:
          "The ERP system developed by QudSystem has transformed our operations. We now have real-time visibility across all departments, enabling faster and more informed decision-making. The system's flexibility has allowed us to adapt to changing business needs without requiring constant IT intervention.",
        author: "Sarah Johnson",
        position: "CIO, Manufacturing Client",
      },
    },
  },
  {
    id: 2,
    title: "Healthcare Management Platform",
    slug: "healthcare-management-platform",
    description:
      "A secure and compliant healthcare management platform for hospitals and clinics to manage patient records, appointments, and billing.",
    image: "/assets/img/long-preview/demo-2.jpg",
    categories: ["Healthcare", "SaaS", "Security"],
    technologies: ["Angular", "Java Spring Boot", "MongoDB", "Azure", "HIPAA Compliance"],
    featured: true,
    liveUrl: "https://example.com/healthcare",
    duration: "14 months",
    teamSize: 8,
    overview:
      "QudSystem developed a comprehensive healthcare management platform that enables hospitals and clinics to efficiently manage patient records, appointments, billing, and reporting while maintaining strict compliance with healthcare regulations. The platform provides a unified interface for healthcare providers to access patient information securely, schedule appointments, manage medical records, process insurance claims, and generate comprehensive reports.",
    keyFeatures: [
      "Electronic Health Records (EHR) management",
      "Appointment scheduling and reminders",
      "Secure patient portal for accessing records and communicating with providers",
      "Insurance verification and claims processing",
      "Billing and payment processing",
      "Analytics and reporting dashboard",
      "Mobile applications for providers and patients",
    ],
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges: {
      introduction:
        "Developing a healthcare management platform presented unique challenges related to security, compliance, and complex workflows.",
      items: [
        {
          title: "HIPAA Compliance",
          description:
            "Ensuring strict compliance with healthcare regulations including HIPAA while maintaining system usability and performance.",
        },
        {
          title: "Data Security",
          description:
            "Implementing robust security measures to protect sensitive patient information from unauthorized access and breaches.",
        },
        {
          title: "Interoperability",
          description:
            "Enabling seamless integration with various healthcare systems, medical devices, and third-party services using different standards and protocols.",
        },
        {
          title: "Complex Clinical Workflows",
          description:
            "Supporting diverse and complex clinical workflows that vary across different departments and healthcare specialties.",
        },
      ],
    },
    solutions: {
      introduction:
        "Our team implemented comprehensive solutions to address the unique challenges of healthcare software development.",
      items: [
        {
          title: "Compliance-First Architecture",
          description:
            "We designed the system architecture with compliance at its core, implementing role-based access control, comprehensive audit logging, data encryption, and automated compliance checks.",
          technologies: ["Azure Security Center", "Encryption", "Audit Logging"],
        },
        {
          title: "Multi-layered Security Framework",
          description:
            "We implemented a multi-layered security approach including encryption at rest and in transit, advanced authentication mechanisms, regular security assessments, and automated threat detection.",
          technologies: ["OAuth 2.0", "JWT", "AES-256", "Intrusion Detection"],
        },
        {
          title: "FHIR-based Interoperability Layer",
          description:
            "We developed a flexible interoperability layer based on FHIR standards that supports various healthcare protocols and enables seamless integration with external systems.",
          technologies: ["FHIR", "HL7", "DICOM", "API Gateway"],
        },
        {
          title: "Configurable Workflow Engine",
          description:
            "We created a highly configurable workflow engine that allows healthcare providers to define and customize clinical workflows according to their specific requirements without code changes.",
          technologies: ["BPMN", "Angular", "Spring Boot", "Workflow Engine"],
        },
      ],
    },
    results: {
      summary:
        "The healthcare management platform has significantly improved operational efficiency, patient care, and regulatory compliance for our clients.",
      metrics: [
        {
          value: "42%",
          label: "Reduction in administrative time",
        },
        {
          value: "30%",
          label: "Decrease in billing errors",
        },
        {
          value: "98%",
          label: "Patient data security compliance",
        },
      ],
      testimonial: {
        quote:
          "QudSystem's healthcare platform has revolutionized how we manage patient care. The system is intuitive, secure, and has streamlined our operations significantly. Our staff can focus more on patient care rather than administrative tasks, and patients appreciate the improved communication and access to their records.",
        author: "Dr. Michael Chen",
        position: "Medical Director, Regional Health Network",
      },
    },
  },
  {
    id: 3,
    title: "Fintech Payment Gateway",
    slug: "fintech-payment-gateway",
    description:
      "A secure, scalable payment processing solution for financial institutions with fraud detection and multi-currency support.",
    image: "/assets/img/long-preview/demo-3.jpg",
    categories: ["Fintech", "Security", "Enterprise"],
    technologies: ["Golang", "Microservices", "Kubernetes", "Machine Learning", "PostgreSQL", "Redis"],
    duration: "12 months",
    teamSize: 10,
    overview:
      "QudSystem developed a high-performance payment gateway for financial institutions that processes transactions securely across multiple payment methods and currencies. The system handles credit card payments, bank transfers, digital wallets, and alternative payment methods while providing robust fraud detection, compliance monitoring, and detailed reporting capabilities.",
    keyFeatures: [
      "Multi-currency and multi-payment method support",
      "Real-time fraud detection using machine learning",
      "PCI DSS Level 1 compliance",
      "Automated reconciliation and settlement",
      "Comprehensive reporting and analytics",
      "High availability architecture (99.99% uptime)",
      "Flexible API for integration with various platforms",
    ],
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges: {
      introduction:
        "Building a payment gateway for financial institutions presented significant challenges related to security, scalability, and regulatory compliance.",
      items: [
        {
          title: "Security and Compliance",
          description:
            "Ensuring the highest level of security while maintaining compliance with various financial regulations including PCI DSS, AML, and KYC requirements.",
        },
        {
          title: "High Performance Requirements",
          description:
            "Building a system capable of processing thousands of transactions per second with sub-second response times and minimal downtime.",
        },
        {
          title: "Fraud Prevention",
          description:
            "Developing effective fraud detection mechanisms that minimize false positives while identifying and preventing fraudulent transactions.",
        },
        {
          title: "Global Payment Infrastructure",
          description:
            "Integrating with diverse payment networks and financial institutions across different countries with varying regulations and technical requirements.",
        },
      ],
    },
    solutions: {
      introduction:
        "Our team implemented innovative solutions to address the complex challenges of building a secure and scalable payment gateway.",
      items: [
        {
          title: "Security-First Architecture",
          description:
            "We implemented a comprehensive security framework including tokenization, end-to-end encryption, secure key management, and regular penetration testing to ensure the highest level of data protection.",
          technologies: ["Tokenization", "HSM", "Encryption", "Security Scanning"],
        },
        {
          title: "Microservices with Horizontal Scaling",
          description:
            "We designed a microservices architecture deployed on Kubernetes that enables horizontal scaling of individual components based on load, ensuring optimal performance during peak transaction periods.",
          technologies: ["Golang", "Kubernetes", "Docker", "Istio", "Prometheus"],
        },
        {
          title: "AI-Powered Fraud Detection",
          description:
            "We developed an advanced fraud detection system using machine learning algorithms that analyze transaction patterns in real-time and adapt to new fraud techniques as they emerge.",
          technologies: ["TensorFlow", "Random Forest", "Anomaly Detection", "Real-time Analytics"],
        },
        {
          title: "Modular Integration Framework",
          description:
            "We created a flexible integration framework with standardized connectors for various payment networks, allowing for rapid integration with new payment providers and financial institutions.",
          technologies: ["API Gateway", "Message Queues", "Protocol Adapters", "Webhooks"],
        },
      ],
    },
    results: {
      summary:
        "The payment gateway has successfully processed billions of dollars in transactions while maintaining high security standards and performance metrics.",
      metrics: [
        {
          value: "99.99%",
          label: "System uptime",
        },
        {
          value: "3,000+",
          label: "Transactions per second",
        },
        {
          value: "65%",
          label: "Reduction in fraud attempts",
        },
      ],
      testimonial: {
        quote:
          "QudSystem delivered a payment solution that exceeded our expectations in terms of security, performance, and reliability. Their expertise in financial technology and commitment to quality were evident throughout the project. The system has significantly improved our transaction processing capabilities while reducing operational costs.",
        author: "Robert Martinez",
        position: "CTO, Global Financial Services",
      },
    },
  },
  {
    id: 4,
    title: "Supply Chain Management System",
    slug: "supply-chain-management",
    description:
      "An end-to-end supply chain management solution with real-time tracking, inventory optimization, and predictive analytics.",
    image: "/assets/img/long-preview/demo-4.jpg",
    categories: ["Logistics", "Enterprise", "IoT"],
    technologies: ["React", "Python", "Django", "PostgreSQL", "IoT", "Blockchain", "AI/ML"],
    duration: "16 months",
    teamSize: 9,
    overview:
      "QudSystem developed a comprehensive supply chain management system for a global logistics company that provides end-to-end visibility and control over the entire supply chain. The system integrates with IoT devices for real-time tracking, uses AI for demand forecasting and inventory optimization, and implements blockchain for transparent and secure record-keeping of transactions and shipments.",
    keyFeatures: [
      "Real-time tracking and monitoring of shipments",
      "Inventory management with automated reordering",
      "Supplier management and performance analytics",
      "Demand forecasting using machine learning",
      "Blockchain-based transaction verification",
      "Mobile applications for field operations",
      "Integration with ERP and accounting systems",
    ],
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges: {
      introduction:
        "Developing a modern supply chain management system presented complex challenges related to integration, data management, and real-time operations.",
      items: [
        {
          title: "Global Supply Chain Visibility",
          description:
            "Creating a unified view of the supply chain spanning multiple countries, suppliers, transportation methods, and warehouses with real-time updates.",
        },
        {
          title: "IoT Integration and Data Volume",
          description:
            "Integrating with thousands of IoT devices and sensors while managing the massive volume of data generated for real-time analytics and decision-making.",
        },
        {
          title: "Demand Forecasting Accuracy",
          description:
            "Developing accurate demand forecasting models that account for seasonal variations, market trends, and unexpected events to optimize inventory levels.",
        },
        {
          title: "Supply Chain Transparency",
          description:
            "Ensuring transparency and traceability across the supply chain while maintaining data security and privacy for sensitive business information.",
        },
      ],
    },
    solutions: {
      introduction:
        "Our team implemented innovative solutions leveraging cutting-edge technologies to address the complex challenges of modern supply chain management.",
      items: [
        {
          title: "Unified Supply Chain Platform",
          description:
            "We developed a centralized platform that integrates data from various sources including suppliers, warehouses, transportation systems, and customers to provide a comprehensive view of the entire supply chain.",
          technologies: ["React", "Django", "GraphQL", "Data Integration"],
        },
        {
          title: "IoT Data Processing Pipeline",
          description:
            "We implemented a scalable data processing pipeline capable of ingesting, processing, and analyzing data from thousands of IoT devices in real-time to provide actionable insights.",
          technologies: ["Apache Kafka", "Spark Streaming", "Time Series Database", "Edge Computing"],
        },
        {
          title: "AI-Powered Demand Forecasting",
          description:
            "We developed advanced machine learning models that analyze historical data, market trends, and external factors to generate accurate demand forecasts and optimize inventory levels.",
          technologies: ["Python", "TensorFlow", "Time Series Analysis", "Ensemble Methods"],
        },
        {
          title: "Blockchain for Supply Chain Verification",
          description:
            "We implemented a private blockchain network to create an immutable record of transactions, shipments, and certifications, ensuring transparency and trust among supply chain participants.",
          technologies: ["Hyperledger Fabric", "Smart Contracts", "Distributed Ledger", "Consensus Algorithms"],
        },
      ],
    },
    results: {
      summary:
        "The supply chain management system has transformed the client's operations, providing unprecedented visibility, efficiency, and predictive capabilities.",
      metrics: [
        {
          value: "32%",
          label: "Reduction in inventory costs",
        },
        {
          value: "24%",
          label: "Improvement in delivery times",
        },
        {
          value: "45%",
          label: "Increase in forecast accuracy",
        },
      ],
      testimonial: {
        quote:
          "QudSystem's supply chain solution has given us visibility and control we never thought possible. We can now track every component from source to delivery, predict demand with remarkable accuracy, and respond quickly to disruptions. The system has paid for itself many times over through cost savings and improved customer satisfaction.",
        author: "Jennifer Williams",
        position: "VP of Operations, Global Logistics Company",
      },
    },
  },
  {
    id: 5,
    title: "E-Learning Platform",
    slug: "e-learning-platform",
    description:
      "A comprehensive e-learning platform with interactive courses, assessment tools, and analytics for educational institutions.",
    image: "/assets/img/long-preview/demo-5.jpg",
    categories: ["Education", "SaaS", "AI"],
    technologies: ["Vue.js", "Node.js", "MongoDB", "WebRTC", "AWS", "Machine Learning"],
    featured: true,
    liveUrl: "https://example.com/elearning",
    duration: "10 months",
    teamSize: 7,
    overview:
      "QudSystem developed a state-of-the-art e-learning platform for educational institutions that provides a comprehensive solution for online education. The platform offers course creation and management, interactive learning experiences, virtual classrooms, assessment tools, and detailed analytics. It supports various content formats including video, interactive exercises, quizzes, and collaborative projects.",
    keyFeatures: [
      "Course creation and management tools",
      "Live virtual classrooms with video conferencing",
      "Interactive content with multimedia support",
      "Automated assessment and grading",
      "Personalized learning paths using AI",
      "Comprehensive analytics and reporting",
      "Mobile applications for learning on the go",
    ],
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges: {
      introduction:
        "Building an effective e-learning platform presented unique challenges related to engagement, scalability, and personalized learning experiences.",
      items: [
        {
          title: "Student Engagement",
          description:
            "Creating an engaging online learning environment that maintains student interest and participation without face-to-face interaction.",
        },
        {
          title: "Content Delivery at Scale",
          description:
            "Developing a system capable of delivering high-quality video content and interactive experiences to thousands of concurrent users across different devices and network conditions.",
        },
        {
          title: "Personalized Learning",
          description:
            "Implementing personalized learning paths that adapt to individual student needs, learning styles, and progress while maintaining educational standards.",
        },
        {
          title: "Assessment Integrity",
          description:
            "Ensuring the integrity and security of online assessments while providing meaningful feedback and fair evaluation of student performance.",
        },
      ],
    },
    solutions: {
      introduction:
        "Our team implemented innovative solutions to create an engaging, scalable, and personalized e-learning experience.",
      items: [
        {
          title: "Interactive Learning Environment",
          description:
            "We developed an interactive learning environment with gamification elements, collaborative tools, and multimedia content to increase student engagement and participation.",
          technologies: ["Vue.js", "WebSockets", "Interactive Content", "Gamification"],
        },
        {
          title: "Optimized Content Delivery",
          description:
            "We implemented an advanced content delivery system with adaptive streaming, content caching, and progressive loading to ensure smooth delivery of educational content regardless of network conditions.",
          technologies: ["AWS CloudFront", "Adaptive Bitrate Streaming", "Content Caching", "Progressive Loading"],
        },
        {
          title: "AI-Powered Learning Paths",
          description:
            "We developed an AI system that analyzes student performance, learning patterns, and preferences to create personalized learning paths and recommend appropriate content and activities.",
          technologies: ["Machine Learning", "Recommendation Algorithms", "Learning Analytics", "Adaptive Learning"],
        },
        {
          title: "Secure Assessment System",
          description:
            "We implemented a comprehensive assessment system with proctoring capabilities, plagiarism detection, and diverse question types to ensure the integrity and effectiveness of online evaluations.",
          technologies: ["Browser Lockdown", "AI Proctoring", "Plagiarism Detection", "Randomized Questions"],
        },
      ],
    },
    results: {
      summary:
        "The e-learning platform has transformed online education for our clients, improving student engagement, learning outcomes, and institutional efficiency.",
      metrics: [
        {
          value: "85%",
          label: "Student engagement rate",
        },
        {
          value: "40%",
          label: "Improvement in course completion",
        },
        {
          value: "92%",
          label: "Student satisfaction score",
        },
      ],
      testimonial: {
        quote:
          "QudSystem's e-learning platform has revolutionized how we deliver education. The interactive features, personalized learning paths, and comprehensive analytics have significantly improved student engagement and outcomes. The platform was especially valuable during the pandemic, allowing us to transition seamlessly to online learning without compromising educational quality.",
        author: "Dr. Emily Rodriguez",
        position: "Dean of Digital Learning, University Client",
      },
    },
  },
  {
    id: 6,
    title: "Smart City Management System",
    slug: "smart-city-management",
    description:
      "An integrated platform for managing urban infrastructure, utilities, and services with IoT sensors and data analytics.",
    image: "/assets/img/long-preview/demo-6.jpg",
    categories: ["IoT", "Government", "Big Data"],
    technologies: ["React", "Python", "IoT", "Big Data", "AI/ML", "Cloud Computing", "GIS"],
    duration: "24 months",
    teamSize: 15,
    overview:
      "QudSystem developed a comprehensive smart city management system for a metropolitan government that integrates data from various urban systems including transportation, utilities, public safety, and environmental monitoring. The platform collects data from thousands of IoT sensors deployed throughout the city, processes it in real-time, and provides actionable insights to improve urban services, reduce costs, and enhance quality of life for citizens.",
    keyFeatures: [
      "Real-time monitoring of urban infrastructure",
      "Intelligent traffic management system",
      "Smart grid and utility management",
      "Environmental monitoring and analysis",
      "Public safety and emergency response coordination",
      "Citizen engagement portal",
      "Predictive maintenance for infrastructure",
    ],
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges: {
      introduction:
        "Developing a smart city platform presented complex challenges related to integration, data management, security, and scalability.",
      items: [
        {
          title: "System Integration",
          description:
            "Integrating diverse urban systems with different technologies, protocols, and data formats into a unified platform.",
        },
        {
          title: "Data Volume and Velocity",
          description:
            "Managing and processing massive volumes of data generated by thousands of sensors in real-time to provide actionable insights.",
        },
        {
          title: "Security and Privacy",
          description:
            "Ensuring robust security and privacy protection for sensitive urban data while complying with regulations and maintaining public trust.",
        },
        {
          title: "Scalability and Reliability",
          description:
            "Building a system that can scale to accommodate growing numbers of devices and data sources while maintaining high reliability for critical urban services.",
        },
      ],
    },
    solutions: {
      introduction:
        "Our team implemented innovative solutions leveraging cutting-edge technologies to address the complex challenges of smart city management.",
      items: [
        {
          title: "Open Standards Integration Platform",
          description:
            "We developed an integration platform based on open standards that enables seamless communication between diverse urban systems regardless of their underlying technologies and protocols.",
          technologies: ["API Gateway", "Protocol Adapters", "Data Transformation", "Event-Driven Architecture"],
        },
        {
          title: "Big Data Processing Pipeline",
          description:
            "We implemented a scalable big data processing pipeline capable of ingesting, processing, and analyzing data from thousands of sensors in real-time to provide actionable insights for city management.",
          technologies: ["Apache Kafka", "Spark Streaming", "Hadoop", "Time Series Database", "Data Lake"],
        },
        {
          title: "Multi-layered Security Framework",
          description:
            "We designed a comprehensive security framework with multiple layers of protection including encryption, authentication, authorization, and anomaly detection to ensure the security and privacy of urban data.",
          technologies: [
            "End-to-End Encryption",
            "OAuth 2.0",
            "RBAC",
            "Intrusion Detection",
            "Privacy-Preserving Analytics",
          ],
        },
        {
          title: "Cloud-Native Architecture",
          description:
            "We implemented a cloud-native architecture with containerization, microservices, and auto-scaling capabilities to ensure the system can grow with the city's needs while maintaining high availability for critical services.",
          technologies: ["Kubernetes", "Docker", "Microservices", "Auto-scaling", "Multi-region Deployment"],
        },
      ],
    },
    results: {
      summary:
        "The smart city management system has transformed urban operations, improving efficiency, sustainability, and quality of life for citizens.",
      metrics: [
        {
          value: "30%",
          label: "Reduction in energy consumption",
        },
        {
          value: "25%",
          label: "Decrease in traffic congestion",
        },
        {
          value: "40%",
          label: "Improvement in emergency response time",
        },
      ],
      testimonial: {
        quote:
          "QudSystem's smart city platform has revolutionized how we manage urban services. We now have real-time visibility across all city systems, allowing us to make data-driven decisions that improve efficiency and quality of life for our citizens. The predictive capabilities have been particularly valuable, enabling us to address issues before they impact city services.",
        author: "Mayor James Wilson",
        position: "Metropolitan Government",
      },
    },
  },
]
