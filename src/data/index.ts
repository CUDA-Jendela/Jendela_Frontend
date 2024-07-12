import feature1 from "@/assets/images/feature1.jpg";
import feature2 from "@/assets/images/feature2.jpg";
import feature3 from "@/assets/images/feature3.jpg";
import feature4 from "@/assets/images/feature4.jpg";
import feature5 from "@/assets/images/feature5.jpg";
import feature6 from "@/assets/images/feature6.jpg";

import logoPlaceholder from "@/assets/images/logo_placeholder.png";
import profilePlaceholder from "@/assets/images/profile_placeholder.png";

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
    industry: "Food and beverage",
    address: "Ganesha Street 10",
    city: "Bandung",
    phone: "081234567890",
    description:
      "CUDA Canteen offers a variety of delicious and affordable meals that cater to students and professionals alike. Our menu features a mix of local and international cuisines, all prepared with fresh ingredients to ensure the highest quality. Whether you're looking for a quick bite or a hearty meal, CUDA Canteen is the perfect place to satisfy your cravings.",
  },
  {
    id: "2",
    logo: logoPlaceholder,
    name: "Flower Bouquet by CUDA Projects",
    industry: "Art",
    address: "Thamrin Street 5",
    city: "Jakarta",
    phone: "081987654321",
    description:
      "Flower Bouquet by CUDA Projects specializes in creating stunning floral arrangements for all occasions. Our talented florists combine their artistic skills with a passion for flowers to deliver beautiful and unique bouquets. From weddings and anniversaries to corporate events and daily decorations, we bring a touch of nature's elegance to your special moments.",
  },
  {
    id: "3",
    logo: logoPlaceholder,
    name: "GH Japanese Restaurant",
    industry: "Food and beverages",
    address: "Sudirman Street 22",
    city: "Tangerang",
    phone: "082345678901",
    description:
      "GH Japanese Restaurant invites you to experience authentic Japanese cuisine in a serene and elegant setting. Our menu features a wide range of traditional dishes, including sushi, sashimi, ramen, and tempura, all crafted with the finest ingredients. Whether you're dining with family or hosting a business meeting, GH Japanese Restaurant offers a memorable culinary journey.",
  },
  {
    id: "4",
    logo: logoPlaceholder,
    name: "Garuda Constructions",
    industry: "Construction",
    address: "Merdeka Street 15",
    city: "Bekasi",
    phone: "083456789012",
    description:
      "Garuda Constructions is a leading construction company known for its commitment to excellence and innovation. We provide a comprehensive range of construction services, including residential, commercial, and infrastructure projects. Our team of skilled professionals ensures that every project is completed to the highest standards, delivering quality and reliability to our clients.",
  },
  {
    id: "5",
    logo: logoPlaceholder,
    name: "Coffee Cafe",
    industry: "Food and beverages",
    address: "Dago Street 8",
    city: "Bandung",
    phone: "084567890123",
    description:
      "Coffee Cafe is a cozy and inviting spot where coffee lovers can indulge in a variety of specialty brews and delicious pastries. Our baristas are passionate about coffee and are dedicated to providing a warm and welcoming atmosphere for our customers. Whether you're meeting friends, working remotely, or simply enjoying a quiet moment, Coffee Cafe is the perfect place to relax and unwind.",
  },
];

export const People = [
  {
    id: "1",
    profilePicture: profilePlaceholder,
    name: "Michael Leon",
    city: "Bandung",
    skills: ["Driving", "Cooking"],
  },
  {
    id: "2",
    profilePicture: profilePlaceholder,
    name: "Austin Pardosi",
    city: "Medan",
    skills: ["Photography", "Plumbing", "Computer"],
  },
  {
    id: "3",
    profilePicture: profilePlaceholder,
    name: "Go Dillon",
    city: "Jakarta",
    skills: ["Baking", "Knitting", "Cooking"],
  },
  {
    id: "4",
    profilePicture: profilePlaceholder,
    name: "Arleen Gunardi",
    city: "Bandung",
    skills: ["Photography", "Hair Styling"],
  },
  {
    id: "5",
    profilePicture: profilePlaceholder,
    name: "Dela Garuda",
    city: "Bandung",
    skills: ["Painting", "Sketching"],
  },
];
