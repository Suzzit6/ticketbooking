import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ConcertSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const concerts = [
        {
            id: 1,
            title: "Summer Rock Festival",
            artist: "Various Artists",
            venue: "Central Park Arena",
            date: "2024-06-15",
            time: "18:00",
            image: "/assets/images/trending/event4.jpg",
        },
        {
            id: 2,
            title: "Jazz Night",
            artist: "Jazz Ensemble",
            venue: "Blue Note Club",
            date: "2024-06-20",
            time: "20:00",
            image: "/assets/images/trending/event4.jpg",
        },
        // Add more concerts as needed
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === concerts.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full overflow-hidden h-[500px]">
            <div className="absolute w-full h-full">
                {concerts.map((concert, index) => (
                    <motion.div
                        key={concert.id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: index === currentIndex ? 1 : 0,
                            x: index === currentIndex ? 0 : 100,
                        }}
                        transition={{ duration: 0.5 }}
                        className={`absolute top-0 left-0 w-full h-full ${
                            index === currentIndex ? 'z-10' : 'z-0'
                        }`}
                    >
                        <div className="relative w-full h-full">
                            <img
                                src={concert.image}
                                alt={concert.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                                <div className="container mx-auto">
                                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
                                        {concert.title}
                                    </h2>
                                    <p className="text-gray-300 text-xl mb-2">{concert.artist}</p>
                                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-white">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span>{concert.venue}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            <span>{new Date(concert.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            <span>{concert.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {concerts.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ConcertSlider;