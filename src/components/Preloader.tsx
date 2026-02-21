'use client';

import { HyperText } from '@/components/ui/hyper-text';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Minimum duration for the preloader
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    // Lock body scroll when loading
    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [loading]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black px-4"
                >
                    <div className="flex w-full max-w-md flex-col items-center">
                        <HyperText
                            text="IGNITE FORUM"
                            className="flex-wrap justify-center text-center text-3xl font-black text-white sm:text-4xl md:text-6xl"
                            animateOnLoad={true}
                        />
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 2.5, ease: 'easeInOut' }}
                            className="mt-4 h-1 w-full max-w-[150px] bg-white md:max-w-[200px]"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
