'use client';

import FancyRectangle from '@/components/FancyRectangle';
import { useState } from 'react';

export default function ContactForm({ className }: { className?: string }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message }),
            });
            if (!res.ok) {
                setStatus('error');
                return;
            }
            setStatus('success');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className={`${className ?? ''} space-y-6`}>
            <FancyRectangle colour="purple" offset="8" filled={false}>
                <div className="w-fit bg-purple p-2">
                    <h2 className="text-2xl font-bold text-grey md:text-4xl">Send a message</h2>
                </div>
            </FancyRectangle>

            <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full border-4 border-black bg-white p-3 text-black"
                        required
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        type="email"
                        className="w-full border-4 border-black bg-white p-3 text-black"
                        required
                    />
                </div>
                <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    className="w-full border-4 border-black bg-white p-3 text-black"
                    required
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    rows={5}
                    className="w-full border-4 border-black bg-white p-3 text-black"
                    required
                />

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="border-4 border-black bg-yellow px-6 py-3 font-bold text-grey disabled:opacity-60"
                >
                    {status === 'submitting' ? 'Sending…' : 'Send'}
                </button>

                {status === 'success' && (
                    <p className="font-semibold text-green-700">Message sent successfully.</p>
                )}
                {status === 'error' && (
                    <p className="font-semibold text-red-700">Failed to send message.</p>
                )}
            </form>
        </div>
    );
}
