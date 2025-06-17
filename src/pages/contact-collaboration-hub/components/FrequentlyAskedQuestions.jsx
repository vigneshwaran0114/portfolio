import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FrequentlyAskedQuestions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What is your typical project timeline?',
      answer: `Project timelines vary based on scope and complexity. A simple React component might take 1-2 weeks, while a full website build typically ranges from 4-12 weeks. During our initial consultation, I'll provide a detailed timeline based on your specific requirements and current workload.`
    },
    {
      id: 2,
      question: 'How do you handle project pricing?',
      answer: `I offer both fixed-price projects and hourly consulting. For defined projects, I provide a detailed proposal with fixed pricing after understanding your requirements. Hourly rates start at $150/hour for consultation and technical advisory work. All pricing is transparent with no hidden fees.`
    },
    {
      id: 3,
      question: 'What technologies do you specialize in?',answer: `I specialize in modern React development with TypeScript, Next.js, and advanced animation libraries like GSAP and Framer Motion. I'm also experienced with state management (Redux, Zustand), testing frameworks (Jest, React Testing Library), and modern CSS frameworks like Tailwind CSS.`
    },
    {
      id: 4,
      question: 'Do you provide ongoing support after project completion?',
      answer: `Yes! Every project includes a 30-day support period for bug fixes and minor adjustments. I also offer ongoing maintenance packages for continued support, updates, and feature additions. Support can be provided on a retainer basis or per-incident pricing.`
    },
    {
      id: 5,
      question: 'Can you work with existing development teams?',
      answer: `Absolutely! I frequently collaborate with existing teams as a specialist for React development, animation implementation, or technical consultation. I can integrate seamlessly with your current workflow, tools, and development processes.`
    },
    {
      id: 6,
      question: 'What information do you need to start a project?',
      answer: `To provide an accurate proposal, I need to understand your project goals, target audience, technical requirements, preferred timeline, and budget range. Any existing designs, brand guidelines, or technical specifications are also helpful for scoping the work accurately.`
    }
  ];

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-surface rounded-2xl shadow-card p-6"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2 font-headline">
          Frequently Asked Questions
        </h3>
        <p className="text-text-secondary text-sm">
          Common questions about working together and project processes
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: faq.id * 0.1 }}
            className="border border-primary-200 rounded-lg overflow-hidden"
          >
            <motion.button
              onClick={() => toggleQuestion(faq.id)}
              whileHover={{ backgroundColor: 'var(--color-primary-50)' }}
              className="w-full px-4 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset transition-colors duration-200"
            >
              <span className="font-medium text-primary text-sm pr-4">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openQuestion === faq.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <Icon 
                  name="ChevronDown" 
                  size={20} 
                  color={openQuestion === faq.id ? 'var(--color-accent)' : 'var(--color-text-secondary)'} 
                />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {openQuestion === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-2 border-t border-primary-100 bg-primary-25">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Additional Help */}
      <div className="mt-6 pt-6 border-t border-primary-200">
        <div className="flex items-center space-x-3 p-4 bg-accent-50 rounded-lg">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Icon name="HelpCircle" size={16} color="white" />
          </div>
          <div>
            <h4 className="font-medium text-primary text-sm">Still have questions?</h4>
            <p className="text-text-secondary text-xs">
              Feel free to reach out directly for any specific questions about your project.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FrequentlyAskedQuestions;