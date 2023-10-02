interface Approach {
  id: number;
  name: string;
  content: string;
}

export const approaches: Approach[] = [
  {
    id: 1,
    name: "Consultation & Strategy",
    content:
      "We begin the journey by understanding your objectives. Through consultations, we create a blueprint, charting a clear path for your project's success.",
  },
  {
    id: 2,
    name: "Design & Development",
    content:
      "This is where we work on your project with precision and passion. We prioritize functionality, and user experience to deliver on a timely manner.",
  },
  {
    id: 3,
    name: "Testing & Refinement",
    content:
      "Quality is paramount. We test and fine-tune every aspect to guarantee a flawless end product that meets your standards and beyond. We are only okay when you are.",
  },
  {
    id: 4,
    name: "Launch & Follow up",
    content:
      "Once your project reaches its pinnacle, we launch it. We don't stop there. We support and monitor your solution post-launch, guaranteeing its sustained peak performance.",
  },
];
