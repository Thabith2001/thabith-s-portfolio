export const projects = [
  {
    id: 1,
    title: 'E-Commerce App',
    description:
      'An online shopping platform built with Spring Boot providing a secure and scalable backend. Key features include user authentication (JWT-based login/signup), role-based access control, product catalog management, and shopping cart functionality. The system is designed with a modular architecture, using RESTful APIs, Spring Security, and JPA/Hibernate for robust database integration.',
    tags: ['React', 'Spring Boot', 'MySQL'],
    image: '/images/sp1.png', // ✅ correct path (no "public/")
    codeLink: 'https://github.com/Thabith2001/e-commerce',
  },
  {
    id: 2,
    title: 'Music Streaming Application',
    description:
      'A full-featured music streaming platform built using Java Gradle, allowing users to browse, stream, and manage music playlists in real time. The application supports secure user authentication via Google and Facebook OAuth APIs, providing a seamless login experience.',
    tags: ['xml', 'Java Gradle'],
    image: '/images/mob.jpeg', // ✅ correct path
    codeLink: 'https://github.com/Thabith2001/Music-Streaming-Application',
  },
];
