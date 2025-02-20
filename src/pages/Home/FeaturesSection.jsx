import { MdLocalShipping, MdSupportAgent, MdOutlineAutorenew } from "react-icons/md";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <MdLocalShipping className="text-5xl text-[#1E3A8A]" />,
      title: "Fast & Free Shipping",
      description: "Enjoy free shipping on orders over $140.",
      bg: "bg-[#F0F9FF]", 
      hoverBg: "hover:bg-[#DBEAFE]", 
    },
    {
      id: 2,
      icon: <MdSupportAgent className="text-5xl text-[#065F46]" />,
      title: "24/7 Customer Support",
      description: "We're here for you anytime, anywhere.",
      bg: "bg-[#ECFDF5]", 
      hoverBg: "hover:bg-[#D1FAE5]", 
    },
    {
      id: 3,
      icon: <MdOutlineAutorenew className="text-5xl text-[#9D0208]" />,
      title: "30-Day Money Back",
      description: "Hassle-free returns within 30 days.",
      bg: "bg-[#FFF5F5]", 
      hoverBg: "hover:bg-[#FED7D7]", 
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col items-center p-6 rounded-xl  transition-all duration-300 ease-in-out ${feature.bg} ${feature.hoverBg} hover:shadow-lg`}
            >
              <div className="p-4 bg-white rounded-full shadow-md">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800 uppercase">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
