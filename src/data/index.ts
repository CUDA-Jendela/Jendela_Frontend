import feature1 from "@/assets/images/feature1.jpg";
import feature2 from "@/assets/images/feature2.jpg";
import feature3 from "@/assets/images/feature3.jpg";
import feature4 from "@/assets/images/feature4.jpg";
import feature5 from "@/assets/images/feature5.jpg";
import feature6 from "@/assets/images/feature6.jpg";

import logoPlaceholder from "@/assets/images/logo_placeholder.png";
// import profilePlaceholder from "@/assets/images/profile_placeholder.png";

export const featureCardData = [
  {
    imageSrc: feature1,
    title: "Course List",
    description:
      "Access specialized courses tailored to ex-prisoners' skills, demonstrating their capability beyond past records.",
  },
  {
    imageSrc: feature2,
    title: "Hiring Access",
    description:
      "Enable companies to hire trained and vetted ex-prisoners, fostering inclusivity in the workplace.",
  },
  {
    imageSrc: feature3,
    title: "NGO Participation",
    description:
      "NGOs can offer impactful courses that equip ex-prisoners with essential skills for workplace readiness.",
  },
  {
    imageSrc: feature4,
    title: "AI Recommendations",
    description:
      "Utilize AI to provide personalized training tracks based on individual talents and aptitudes.",
  },
  {
    imageSrc: feature5,
    title: "Tracked Assessment",
    description:
      "Monitor and ensure ex-prisoners' performance during a 1-year post-hire period, guaranteeing commitment and growth.",
  },
  {
    imageSrc: feature6,
    title: "Awareness Increase",
    description:
      "Highlight ex-prisoners' contributions, showcasing their skills and potential for a brighter future.",
  },
];

export const FAQItem = [
  {
    question: "How does Jendela help ex-prisoners develop their skills?",
    answer:
      "Jendela offers specialized courses through partnering NGOs, tailored to enhance skills essential for employment and career advancement.",
  },
  {
    question: "What benefits do companies gain from hiring through Jendela?",
    answer:
      "Companies benefit from a skilled and trained workforce, fostering diversity and inclusion while supporting community rehabilitation efforts.",
  },
  {
    question: "How does Jendela ensure the quality of its training programs?",
    answer:
      "Jendela utilizes AI-driven recommendations and monitors performance post-hire to ensure continuous growth and development of its participants.",
  },
  {
    question: "Can ex-prisoners on Jendela provide products or services?",
    answer:
      "Yes, Jendela promotes awareness of ex-prisoners' skills, enabling them to contribute positively through their products and services.",
  },
  {
    question: "How can NGOs participate in Jendela's mission?",
    answer:
      "NGOs can collaborate with Jendela to provide impactful courses and training, empowering ex-prisoners with the skills needed for successful reintegration into society.",
  },
];

export const Courses = [
  {
    id: "dum1",
    image: "course1.jpg",
    title: "Web Development",
    ngoName: "Tech for Good",
    location: "New York",
    startDate: "2024-01-01T12:00:00Z",
    endDate: "2024-03-31T12:00:00Z",
    skills: ["HTML", "CSS", "JavaScript"],
    quota: "20/30",
    description:
      "Embark on a journey to become a proficient web developer with our comprehensive Web Development course. Over three months, you will master the fundamentals of HTML, CSS, and JavaScript, the cornerstone technologies of the web. Our hands-on approach ensures that you not only understand the theory but also apply your knowledge through practical projects. By the end of the course, you will be able to create responsive and interactive websites from scratch, equipped with skills that are highly sought after in the tech industry. Join us in New York and take the first step towards a rewarding career in web development.",
  },
  {
    id: "dum2",
    image: "course2.jpg",
    title: "Data Science",
    ngoName: "Data for All",
    location: "San Francisco",
    startDate: "2024-02-01T12:00:00Z",
    endDate: "2024-04-30T12:00:00Z",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    quota: "15/25",
    description:
      "Unlock the power of data with our Data Science course, designed to transform you into a skilled data scientist. Spanning over three months, this course covers the essential tools and techniques of data science, including Python programming, machine learning algorithms, and data analysis methods. Through real-world examples and projects, you will learn how to extract meaningful insights from complex datasets and use them to drive strategic decisions. Whether you're looking to advance your career or start a new one in the rapidly growing field of data science, this course in San Francisco is your gateway to success.",
  },
  {
    id: "dum3",
    image: "course1.jpg",
    title: "Web Development",
    ngoName: "Tech for Good",
    location: "New York",
    startDate: "2024-01-01T12:00:00Z",
    endDate: "2024-03-31T12:00:00Z",
    skills: ["HTML", "CSS", "JavaScript"],
    quota: "20/30",
    description:
      "Dive into the world of web development with our intensive Web Development course. This program is perfect for beginners who want to gain a solid foundation in HTML, CSS, and JavaScript. Over the course of three months, you will engage in interactive lessons and hands-on projects that teach you how to build functional and visually appealing websites. Our experienced instructors will guide you through the process, ensuring that you develop the confidence and skills needed to tackle real-world web development challenges. Join us in New York and start your journey towards becoming a web development expert.",
  },
  {
    id: "dum4",
    image: "course2.jpg",
    title: "Data Science",
    ngoName: "Data for All",
    location: "San Francisco",
    startDate: "2024-02-01T12:00:00Z",
    endDate: "2024-04-30T12:00:00Z",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    quota: "15/25",
    description:
      "Our Data Science course is meticulously crafted for individuals who aspire to excel in the field of data science. Over three months, you will delve into Python programming, explore machine learning techniques, and master data analysis. The course offers a blend of theoretical knowledge and practical experience, enabling you to handle large datasets and derive actionable insights. Through engaging projects and case studies, you will learn to apply data science methodologies to solve real-world problems. Located in San Francisco, this course is your opportunity to join a community of data enthusiasts and build a future-proof career.",
  },
  // Add more courses here
];

export const businesses = [
  {
    id: "1",
    logo: logoPlaceholder,
    name: "CUDA Canteen",
    industry: "Food and Beverage",
    address: "Ganesha Street 10",
    city: "Bandung",
    phone: "081234567890",
    description: "A vibrant eatery offering diverse Indonesian and international dishes, perfect for a quick bite or a leisurely meal.",
  },
  {
    id: "2",
    logo: logoPlaceholder,
    name: "Flower Bouquet by CUDA Projects",
    industry: "Floral Design & Gifts",
    address: "Thamrin Street 5",
    city: "Jakarta",
    phone: "081987654321",
    description: "Crafting exquisite floral arrangements for all occasions, from weddings to corporate events. We add a touch of nature's elegance to your special moments.",
  },
  {
    id: "3",
    logo: logoPlaceholder,
    name: "GH Japanese Restaurant",
    industry: "Japanese Cuisine",
    address: "Sudirman Street 22",
    city: "Tangerang",
    phone: "082345678901",
    description: "Experience authentic Japanese flavors in a refined ambiance. Our menu boasts sushi, sashimi, ramen, and more, all made with the freshest ingredients.",
  },
  {
    id: "4",
    logo: logoPlaceholder,
    name: "Garuda Constructions",
    industry: "Construction & Engineering",
    address: "Merdeka Street 15",
    city: "Bekasi",
    phone: "083456789012",
    description: "Your trusted partner for quality construction projects. We specialize in residential, commercial, and infrastructure development, delivering excellence and innovation.",
  },
  {
    id: "5",
    logo: logoPlaceholder,
    name: "Coffee Cafe",
    industry: "Specialty Coffee & Pastries",
    address: "Dago Street 8",
    city: "Bandung",
    phone: "084567890123",
    description: "A cozy haven for coffee enthusiasts, offering a wide selection of artisanal brews and delectable pastries. Perfect for work, socializing, or simply relaxing.",
  },
  {
    id: "6",
    logo: logoPlaceholder,
    name: "Batik Nusantara",
    industry: "Fashion & Retail",
    address: "Malioboro Street 12",
    city: "Yogyakarta",
    phone: "085678901234",
    description: "Preserving Indonesia's rich heritage through exquisite batik creations. Our clothing and accessories showcase traditional craftsmanship with a modern touch.",
  },
  {
    id: "7",
    logo: logoPlaceholder,
    name: "Tech Savvy Solutions",
    industry: "IT Services & Consulting",
    address: "Tunjungan Plaza 5th Floor",
    city: "Surabaya",
    phone: "086789012345",
    description: "Empowering businesses with cutting-edge technology solutions. We offer IT consulting, software development, and cybersecurity services tailored to your needs.",
  },
  {
    id: "8",
    logo: logoPlaceholder,
    name: "Green Thumb Landscaping",
    industry: "Landscaping & Gardening",
    address: "Imam Bonjol Street 33",
    city: "Denpasar",
    phone: "087890123456",
    description: "Transforming outdoor spaces into serene oases. Our expert landscapers design and maintain beautiful gardens that enhance the aesthetics and functionality of your property.",
  },
  {
    id: "9",
    logo: logoPlaceholder,
    name: "Fresh Catch Seafood Market",
    industry: "Food & Retail",
    address: "Pantai Indah Kapuk Boulevard",
    city: "Jakarta",
    phone: "088901234567",
    description: "Your one-stop shop for the freshest seafood in town. We offer a wide variety of fish, shellfish, and other delicacies, sourced directly from local fishermen.",
  },
  {
    id: "10",
    logo: logoPlaceholder,
    name: "Auto Masters",
    industry: "Automotive Repair & Maintenance",
    address: "Jalan Asia Afrika 115",
    city: "Bandung",
    phone: "089012345678",
    description: "Keeping your vehicle running smoothly. Our experienced mechanics provide reliable and affordable repair and maintenance services for all makes and models.",
  },
];

export const People = [
  {
    id: "1",
    profilePicture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
    name: "Michael Leon",
    city: "Magelang City",
    skills: ["Driving", "Cooking"],
  },
  {
    id: "2",
    profilePicture: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    name: "Austin Pardosi",
    city: "Medan",
    skills: ["Photography", "Plumbing", "Computer Repair"],
  },
  {
    id: "3",
    profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", 
    name: "Go Dillon",
    city: "Jakarta",
    skills: ["Baking", "Knitting", "Cooking"],
  },
  {
    id: "4",
    profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Arleen Gunardi",
    city: "Bandung",
    skills: ["Photography", "Hair Styling"],
  },
  {
    id: "5",
    profilePicture: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Dela Garuda",
    city: "Bandung",
    skills: ["Painting", "Sketching"],
  },
  {
    id: "6",
    profilePicture: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Siti Rahayu",
    city: "Surabaya",
    skills: ["Sewing", "Tailoring", "Fashion Design"],
  },
  {
    id: "7",
    profilePicture: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Budi Santoso",
    city: "Yogyakarta",
    skills: ["Carpentry", "Woodworking", "Furniture Making"],
  },
  {
    id: "8",
    profilePicture: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Ayu Ningsih",
    city: "Denpasar",
    skills: ["Massage Therapy", "Aromatherapy"],
  },
  {
    id: "9",
    profilePicture: "https://images.unsplash.com/photo-1614436163996-25cee5f3jpeg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Muhammad Iqbal",
    city: "Makassar",
    skills: ["Electrical Wiring", "Appliance Repair"],
  },
  {
    id: "10",
    profilePicture: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Dewi Lestari",
    city: "Palembang",
    skills: ["Gardening", "Landscaping", "Plant Care"],
  }
];
