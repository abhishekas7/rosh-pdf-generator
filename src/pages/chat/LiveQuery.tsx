import React from 'react';
import style from "../styles/HomePage.module.css";

type ChatItem = {
    text: string;
};

type LiveQueryProps = {
    chats: ChatItem[];
    tabContent?: React.ReactNode;
};

const LiveQuery: React.FC<LiveQueryProps> = ({ chats = [], tabContent }) => {
    return (
        <div className="flex flex-wrap min-w-auto bg-Neutral-color-7 rounded-[10px] py-[19px] px-[21px]">
            {/* Chat Grid */}
            {chats.length > 0 ? (
                <div className="grid grid-cols-2 gap-y-[13px] gap-x-[23px] flex-grow">
                    {chats.map((item, index) => (
                        <div
                            key={index}
                            className="cursor-pointer max-w-[350px] px-[14px] py-[12px] rounded-[8px] bg-Neutral-color-6 text-left text-Neutral-color-2 font-medium 
                               border border-transparent hover:border-Secondary-color-1 transition-all"
                        >
                            {item.text}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 flex-grow">No chats available.</div>
            )}
            {/* Tab Content */}
            <div className=" ml-[23px] w-full lg:w-auto">{tabContent}</div>
        </div>
    );
};

export default LiveQuery;
