import { Code, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Modern Development",
    description: "Built with React and TypeScript for robust applications",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Beautiful Design",
    description: "Stunning UI components powered by Tailwind CSS",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Optimized performance for the best user experience",
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-16">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};