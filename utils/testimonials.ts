interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  testimonial: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elorm Gabby",
    company: "CEO, Smoove Network",
    image: "/elorm.jfif",
    testimonial:
    "DevBros transformed our vision into a reality with the creation of our SEO-friendly web platform and content management system. Our teams now collaborate seamlessly on blogs, projects, and news, making our operations more efficient and our online presence more dynamic." },
  {
    id: 2,
    name: "Selorm Promise Abedu ",
    company: "Co-founder & CEO, Ckodon",
    image: "/selorm.webp",
    testimonial:
      "DevBros has played a pivotal role in helping us fulfill our mission at Ckodon Foundation. Their expert design of our web platform has significantly enhanced our ability to reach and support outstanding students seeking opportunities abroad",
  },
  {
    id: 3,
    name: "Benjamin Boateng Kofi",
    company: "Lead Designer and Architect, Creator Gh Company Ltd",
    image: "/koffie.jpg",
    testimonial:
      "I had the pleasure of working with DevBros on the design and development of my web portfolio, and I couldn't be more thrilled with the results. As an architectural designer, I prioritize aesthetics, functionality, and user experience, and DevBros exceeded my expectations on all fronts",
  },
];
