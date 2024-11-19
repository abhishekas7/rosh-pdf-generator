import React, { useState } from 'react';

type ChatQueryTextFieldProps = {
    query?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};

const ChatQueryTextField: React.FC<ChatQueryTextFieldProps> = ({
    query = "",
    onChange = () => { },
    placeholder = "",
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true); // Set focus state to true
    const handleBlur = () => setIsFocused(false); // Set focus state to false

    return (
        <div className="flex flex-col justify-center items-center px-[108px] py-[24px]">
            {/* Conditional class for border color */}
            <div
                className={`flex w-full py-[10px] px-[10px] rounded-full ${isFocused ? "border-yellow-500" : "border-Neutral-color-2"
                    } border`}
            >
                <input
                    type="text"
                    value={query}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    className="w-full pr-5 pl-5 focus:outline-none text-[16px] text-Neutral-color-2"
                />
                <button className="flex items-center content-center justify-center p-[16px] text-center bg-Primary-color-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M17.9853 12.1442L17.9853 12.1442L13.1581 7.31699L13.0781 7.23697V7.35014V21.1314C13.0781 21.4173 12.9645 21.6915 12.7623 21.8937C12.5601 22.0959 12.2859 22.2095 12 22.2095C11.714 22.2095 11.4398 22.0959 11.2376 21.8937C11.0354 21.6915 10.9218 21.4173 10.9218 21.1314V7.35014V7.237L10.8418 7.31698L6.01276 12.1442L6.01275 12.1442C5.8102 12.3467 5.53548 12.4605 5.24902 12.4605C4.96257 12.4605 4.68785 12.3467 4.48529 12.1442C4.28274 11.9416 4.16895 11.6669 4.16895 11.3804C4.16895 11.094 4.28274 10.8193 4.48529 10.6167L11.2353 3.86672L11.2353 3.86666C11.3355 3.76615 11.4545 3.6864 11.5856 3.63199C11.7166 3.57757 11.8571 3.54956 11.999 3.54956C12.1409 3.54956 12.2814 3.57757 12.4125 3.63199C12.5435 3.6864 12.6625 3.76615 12.7627 3.86666L12.7628 3.86672L19.5128 10.6167L19.5128 10.6168C19.6133 10.7169 19.6931 10.836 19.7475 10.967C19.8019 11.0981 19.8299 11.2386 19.8299 11.3804C19.8299 11.5223 19.8019 11.6628 19.7475 11.7939C19.6931 11.9249 19.6133 12.044 19.5128 12.1441L19.5127 12.1442C19.4125 12.2447 19.2935 12.3245 19.1625 12.3789C19.0314 12.4333 18.8909 12.4613 18.749 12.4613C18.6071 12.4613 18.4666 12.4333 18.3356 12.3789C18.2045 12.3245 18.0855 12.2447 17.9853 12.1442Z" fill="white" stroke="white" stroke-width="0.09375" />
                    </svg>
                </button>
            </div>
            <div className="text-[14px] text-Neutral-color-2 text-center mt-2">
                ROSHN AI Assistant is powered by ChatGPT. Roshn is not responsible for the output generated.
            </div>
        </div>
    );
};

export default ChatQueryTextField;
