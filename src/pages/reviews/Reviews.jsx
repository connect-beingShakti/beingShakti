import React, { useRef, useState, useEffect } from 'react';
import "./Reviews.css";
import reviews from './reviews.json';

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const ReviewSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleReviews, setVisibleReviews] = useState(2); // Default for large devices
    const reviewContainerRef = useRef(null);

    const updateVisibleReviews = () => {
        const width = window.innerWidth;

        if (width >= 1024) { // Large devices
            setVisibleReviews(2);
        } else if (width >= 768) { // Medium devices
            setVisibleReviews(3);
        } else { // Mobile devices
            setVisibleReviews(1);
        }
    };

    useEffect(() => {
        updateVisibleReviews(); // Set initial visible reviews based on the current width
        window.addEventListener('resize', updateVisibleReviews); // Update on resize
        return () => window.removeEventListener('resize', updateVisibleReviews);
    }, []);

    const scrollToReview = (index) => {
        const container = reviewContainerRef.current;
        if (container) {
            const cardWidth = container.children[0].offsetWidth; // Get width of one card
            const scrollPosition = index * cardWidth; // Calculate scroll position
            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
            setActiveIndex(index);
        }
    };

    const handleScroll = () => {
        const container = reviewContainerRef.current;
        if (container) {
            const cardWidth = container.children[0].offsetWidth;
            const index = Math.round(container.scrollLeft / cardWidth);
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const container = reviewContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Calculate the number of pagination dots
    const totalPages = Math.ceil(reviews.length / visibleReviews);

    return (

        <div className="relative px-4 py-10 overflow-hidden text-slate-950">

            {/* Decorative Background with Symbols */}
            <div aria-hidden="true" className="absolute inset-0 flex flex-wrap overflow-hidden opacity-30 text-6xl gap-4 -z-10">
                {Array.from({ length: 30 }, (_, i) => (
                    <span
                        key={i}
                        className={`random-symbol ${['text-yellow-500', 'text-blue-500', 'text-purple-500', 'text-red-500'][i % 4]} animate-float`}
                        style={{
                            position: 'absolute',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    >
                        {String.fromCharCode(9728 + Math.floor(Math.random() * (9983 - 9728)))}
                    </span>
                ))}
            </div>

            <h2 className="text-2xl font-semibold mb-6 text-center text-slate-950">Words Of Wonder</h2>

            {/* Review Cards Container */}
            <div
                ref={reviewContainerRef}
                className="flex space-x-4 overflow-x-auto  snap-mandatory scroll-smooth no-scrollbar"
            >
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="flex-none w-[100%] md:w-[30%] lg:w-[45%] sm:h-40 md:h-80 lg:h-56 snap-center bg-white shadow-md rounded-lg p-4 m-2 relative"
                    >
                        <div className="flex items-center mb-2">
                            <h3 className="text-lg font-semibold">{review.name}</h3>
                            <div className="ml-auto flex">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <span
                                        key={i}
                                        className={`h-5 w-5 ${i < review.rating ? 'text-yellow-500' : 'text-slate-950'}`}
                                        aria-hidden="true"
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                        <p className='font-semibold mb-2 '>{review.dateTime}</p>
                        <p className="text-sm overflow-hidden">
                            {truncateText(review.review, 500)}
                        </p>
                    </div>
                ))}
            </div>

            {/* Dots for Pagination */}
            <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToReview(index * visibleReviews)}
                        className={`h-3 w-3 rounded-full transition ${activeIndex === index * visibleReviews ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                        aria-label={`Scroll to review set ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
