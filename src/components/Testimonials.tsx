import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    content: "The AI-driven approach revolutionized our video marketing strategy. The results were beyond our expectations."
  },
  {
    name: "Michael Chen",
    role: "Creative Lead",
    company: "Design Studio",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    content: "The speed and quality of delivery are unmatched. Their AI technology truly sets them apart in the industry."
  },
  {
    name: "Emma Williams",
    role: "CEO",
    company: "Startup Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    content: "Working with z1media has transformed how we approach video content. The AI insights are invaluable."
  }
];

export function Testimonials() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Client Success Stories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how our AI-powered video production has helped businesses achieve their goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/30 to-transparent p-6 rounded-lg border border-purple-500/20
            transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}