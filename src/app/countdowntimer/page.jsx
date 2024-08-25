"use client";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({});
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const currentDate = new Date();

            const month = currentDate.getMonth() + 1;

            const year = currentDate.getFullYear();

            const targetDate = new Date(year, month, 1, 0, 0, 0);

            const difference = targetDate - new Date();

            let timeLeft = {};
            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }

            return timeLeft;
        };

        setTimeLeft(calculateTimeLeft());
        setHasMounted(true);

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <div className="bg-orange-color w-full md:w-3/4 lg:w-1/2 mx-auto py-5 rounded-lg">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center text-center justify-center text-white">
                <div>
                    <span className="font-bold text-4xl sm:text-5xl">
                        {timeLeft.days < 10 ? "0" : ""}
                        {timeLeft.days}
                    </span>
                    <span className="block font-bold text-sm mt-2">Days</span>
                </div>
                <div>
                    <span className="font-bold text-4xl sm:text-5xl">
                        {timeLeft.hours < 10 ? "0" : ""}
                        {timeLeft.hours}
                    </span>
                    <span className="block font-bold text-sm mt-2">Hours</span>
                </div>
                <div>
                    <span className="font-bold text-4xl sm:text-5xl">
                        {timeLeft.minutes < 10 ? "0" : ""}
                        {timeLeft.minutes}
                    </span>
                    <span className="block font-bold text-sm mt-2">Minutes</span>
                </div>
                <div>
                    <span className="font-bold text-4xl sm:text-5xl">
                        {timeLeft.seconds < 10 ? "0" : ""}
                        {timeLeft.seconds}
                    </span>
                    <span className="block font-bold text-sm mt-2">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
