"use client"
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ContactFormData {
    email: string;
    subject: string;
    message: string;
}

interface FormStatus {
    type: 'success' | 'error' | null;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<FormStatus>({
        type: null,
        message: ''
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus({ type: null, message: '' });

        try {
            const templateParams = {
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
            };

            await emailjs.send(
                'service_mef89ia', // Replace with your EmailJS service ID
                'template_59mlkk5', // Replace with your EmailJS template ID
                templateParams,
                '9PGmJIUO3qckc9tGr' // Replace with your EmailJS public key
            );

            // Reset form and show success message
            setFormData({ email: '', subject: '', message: '' });
            setFormStatus({
                type: 'success',
                message: 'Thank you for your message. We will get back to you soon!'
            });
        } catch (error) {
            setFormStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.'
            });
            console.log(error);
            
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="section" className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl md:text-5xl font-bold  tracking-tight text-center text-gray-900 dark:text-white">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </p>

                {formStatus.type && (
                    <Alert className={`mb-6 ${formStatus.type === 'success' ? 'bg-green-50 text-green-900' : 'bg-red-50 text-red-900'}`}>
                        <AlertDescription>
                            {formStatus.message}
                        </AlertDescription>
                    </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="name@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Let us know how we can help you"
                            required
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            value={formData.message}
                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a comment..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="py-3 px-5 text-sm font-medium text-center text-white bg-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Send message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;