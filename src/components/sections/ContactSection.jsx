import { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Section from '../ui/Section';

const initialFormState = {
  name: '',
  email: '',
  message: '',
};

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function ContactSection({ email }) {
  const [formState, setFormState] = useState(initialFormState);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send message right now.');
      }

      setStatus('success');
      setFeedback('Your message was sent successfully. Thank you for reaching out.');
      setFormState(initialFormState);
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || 'Something went wrong while sending your message.');
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Have an idea, a role, or a project in mind?"
      description="I am always happy to connect about meaningful product work, freelance opportunities, or collaborations where thoughtful engineering really matters."
      className="pb-24"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="animate-fade-up">
          <h3 className="text-2xl font-semibold text-neutral-950 dark:text-white">Let's talk</h3>
          <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
            If you have a project you want to launch, improve, or scale, send me a message. I appreciate clear communication, thoughtful products, and teams that care about building things well.
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex text-lg font-medium text-accent-700 transition-colors hover:text-accent-600 dark:text-accent-300 dark:hover:text-accent-200"
          >
            {email}
          </a>
          <div className="mt-10 rounded-[24px] border border-neutral-200/70 bg-neutral-100/80 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Best fit for</p>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <li>Full-stack web application development</li>
              <li>Frontend improvements and polished user interfaces</li>
              <li>Backend APIs, integrations, and product workflows</li>
            </ul>
          </div>
        </Card>

        <Card className="animate-fade-up [animation-delay:120ms]">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none transition focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none transition focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Message
              </span>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full rounded-[24px] border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none transition focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                placeholder="Tell me a little about your project or idea..."
              />
            </label>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button
                as="button"
                type="submit"
                variant="primary"
                icon
                className="min-w-[170px] disabled:cursor-not-allowed disabled:opacity-70"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
              <p className="text-sm text-neutral-500 dark:text-neutral-400" aria-live="polite">
                {feedback || 'Your message will be sent directly to my inbox through the backend email service.'}
              </p>
            </div>
          </form>
        </Card>
      </div>
    </Section>
  );
}

export default ContactSection;
