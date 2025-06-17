import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch, trigger } = useForm();

  const totalSteps = 3;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    console.log('Form submitted:', data);
  };

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await trigger(fieldsToValidate);
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getFieldsForStep = (step) => {
    switch (step) {
      case 1:
        return ['name', 'email', 'company'];
      case 2:
        return ['projectType', 'budget', 'timeline'];
      case 3:
        return ['message'];
      default:
        return [];
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} color="var(--color-success)" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4">Message Sent Successfully!</h3>
        <p className="text-text-secondary mb-6">
          Thank you for reaching out. I'll get back to you within 24 hours to discuss your project.
        </p>
        <motion.button
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-accent text-surface rounded-lg font-medium hover:bg-accent-600 transition-colors duration-300"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-text-secondary">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm text-text-secondary">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-primary-200 rounded-full h-2">
          <motion.div
            className="bg-accent h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <motion.div
            key="step1"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-primary mb-6">Let's start with the basics</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
                <label className="block text-sm font-medium text-text-primary">
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-surface"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-error text-sm flex items-center space-x-1"
                  >
                    <Icon name="AlertCircle" size={14} />
                    <span>{errors.name.message}</span>
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
                <label className="block text-sm font-medium text-text-primary">
                  Email Address *
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-surface"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-error text-sm flex items-center space-x-1"
                  >
                    <Icon name="AlertCircle" size={14} />
                    <span>{errors.email.message}</span>
                  </motion.p>
                )}
              </motion.div>
            </div>

            <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
              <label className="block text-sm font-medium text-text-primary">
                Company/Organization
              </label>
              <input
                {...register('company')}
                type="text"
                placeholder="Your Company Name"
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-surface"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Step 2: Project Details */}
        {currentStep === 2 && (
          <motion.div
            key="step2"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-primary mb-6">Tell me about your project</h3>
            
            <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
              <label className="block text-sm font-medium text-text-primary">
                Project Type *
              </label>
              <select
                {...register('projectType', { required: 'Please select a project type' })}
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-surface"
              >
                <option value="">Select project type</option>
                <option value="react-development">React Development</option>
                <option value="animation-implementation">Animation Implementation</option>
                <option value="full-website-build">Full Website Build</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
              </select>
              {errors.projectType && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-error text-sm flex items-center space-x-1"
                >
                  <Icon name="AlertCircle" size={14} />
                  <span>{errors.projectType.message}</span>
                </motion.p>
              )}
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
                <label className="block text-sm font-medium text-text-primary">
                  Budget Range *
                </label>
                <select
                  {...register('budget', { required: 'Please select a budget range' })}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-surface"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-30k">$15,000 - $30,000</option>
                  <option value="30k-plus">$30,000+</option>
                  <option value="discuss">Let's discuss</option>
                </select>
                {errors.budget && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-error text-sm flex items-center space-x-1"
                  >
                    <Icon name="AlertCircle" size={14} />
                    <span>{errors.budget.message}</span>
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
                <label className="block text-sm font-medium text-text-primary">
                  Timeline *
                </label>
                <select
                  {...register('timeline', { required: 'Please select a timeline' })}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-surface"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
                {errors.timeline && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-error text-sm flex items-center space-x-1"
                  >
                    <Icon name="AlertCircle" size={14} />
                    <span>{errors.timeline.message}</span>
                  </motion.p>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Project Description */}
        {currentStep === 3 && (
          <motion.div
            key="step3"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-primary mb-6">Share your vision</h3>
            
            <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
              <label className="block text-sm font-medium text-text-primary">
                Project Description *
              </label>
              <textarea
                {...register('message', { 
                  required: 'Please describe your project',
                  minLength: {
                    value: 50,
                    message: 'Please provide at least 50 characters'
                  }
                })}
                rows={6}
                placeholder="Tell me about your project goals, target audience, key features, and any specific requirements or challenges you're facing..."
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-surface resize-none"
              />
              <div className="flex justify-between items-center">
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-error text-sm flex items-center space-x-1"
                  >
                    <Icon name="AlertCircle" size={14} />
                    <span>{errors.message.message}</span>
                  </motion.p>
                )}
                <span className="text-xs text-text-secondary ml-auto">
                  {watch('message')?.length || 0} characters
                </span>
              </div>
            </motion.div>

            <div className="bg-primary-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="Lightbulb" size={20} color="var(--color-accent)" />
                <div>
                  <h4 className="font-medium text-primary mb-2">Pro Tip</h4>
                  <p className="text-sm text-text-secondary">
                    The more details you provide about your project goals, target audience, and specific requirements, the better I can understand your needs and provide an accurate proposal.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-primary-200">
        <motion.button
          type="button"
          onClick={prevStep}
          disabled={currentStep === 1}
          whileHover={currentStep > 1 ? { scale: 1.05 } : {}}
          whileTap={currentStep > 1 ? { scale: 0.95 } : {}}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            currentStep === 1
              ? 'bg-primary-100 text-primary-400 cursor-not-allowed' :'bg-primary-100 text-primary hover:bg-primary-200'
          }`}
        >
          <Icon name="ChevronLeft" size={20} />
          <span>Previous</span>
        </motion.button>

        {currentStep < totalSteps ? (
          <motion.button
            type="button"
            onClick={nextStep}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 bg-accent text-surface rounded-lg font-medium hover:bg-accent-600 transition-colors duration-300"
          >
            <span>Next Step</span>
            <Icon name="ChevronRight" size={20} />
          </motion.button>
        ) : (
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            className="flex items-center space-x-2 px-8 py-3 bg-accent text-surface rounded-lg font-medium hover:bg-accent-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Icon name="Loader2" size={20} />
                </motion.div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Icon name="Send" size={20} />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;