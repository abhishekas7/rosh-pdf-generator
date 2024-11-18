import React from 'react';
import TabComponent from "../components/TabComponent/TabComponent";
import LiveQuery from './LiveQuery';
import ChatQueryTextField from '../components/ChatQueryTextField';


const Chat: React.FC = () => {

    const [query, setQuery] = React.useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const chatData = [
        { text: "HR: Can you tell me what are the regular working hours?" },
        { text: "HR: What benefits does the company provide?" },
        { text: "HR: Are there opportunities for career growth?" },
        { text: "HR: Is remote work an option?" },
        { text: "HR: Can you explain the team structure?" },
        { text: "HR: Do you provide any training programs?" },
        { text: "HR: What is the company's policy on overtime?" },
        { text: "HR: What is the dress code at work?" },

    ];

    const limitsData = [
        { limits: "Information provided depends on the quality of documents." },
        { limits: "Model shouldn't be used for the Top Secret and Secret information." },
        { limits: "Model shouldn't be used for unsuitable activities." },
    ];

    const LiveQueryContents: React.FC = () => {
        return (
            <div className=" font-NotoSans max-w-[312px] flex flex-col text-left pt-[22px] bg-Neutral-color-6 text-Neutral-color-2 font-medium">
                <div className="flex-grow overflow-y-auto">
                    {limitsData.map((item, index) => (
                        <div key={index} className="mb-[10px] flex pb-[10px]">
                            <span>{index + 1}</span>
                            <span className="mr-2">.</span>
                            <span>{item.limits}</span>
                        </div>
                    ))}
                </div>
                <div className="flex-grow-0 text-right">
                    <span className="cursor-pointer Neutral-color-2 text-decoration-underline">see more</span>
                </div>
            </div>
        );
    };


    return (
        <>
            <div className="flex flex-col h-screen font-NotoSans">
                <div className="flex-grow overflow-y-auto">
                    <div className="mx-[149px] my-[31px] mt-[31px] mb-[0px]">
                        <h1 className="text-center font-notoSans text-color1 font-medium text-[40px] leading-[1.75]">
                            Hello, Hi 👋<br />
                            This is ROSHN AI Assistant!<br />
                            How can I help you?<br />
                        </h1>
                    </div>
                    <div className="text-center mt-[15px]">
                        <span className='mb-[15px] mt-[15px]'>Examples</span>
                        <TabComponent
                            tabs={[
                                {
                                    label: 'Live Query',
                                    content: (
                                        <LiveQuery
                                            chats={chatData}
                                            tabContent={
                                                <div className="bg-Neutral-color-6 pb-[60px] px-[19px] rounded-[8px] h-100">
                                                    <TabComponent
                                                        tabs={[
                                                            { label: 'Limitations', content: <LiveQueryContents /> },
                                                            { label: 'Skills', content: "Skills" },
                                                        ]}
                                                        activeTab={0}
                                                        tabBgColor="rounded-[100px] mt-[16px]"
                                                        tabClass="max-w-[276px] rounded-[100px] font-black cursor-pointer px-[35px]"
                                                        labelClass="text-lg font-medium"
                                                        activeTabClass="w-fill bg-Primary-color-3 rounded-[100px] cursor-pointer px-[35px]"
                                                    />
                                                </div>
                                            }
                                        />
                                    ),
                                },
                                { label: 'Documents', content: "Documents" },
                            ]}
                            activeTab={0}
                            tabBgColor="bg-color2 rounded-[100px] p-[5px]"
                            tabClass="max-w-[auto] bg-color2 rounded-[100px] font-black cursor-pointer"
                            labelClass="px-4 py-2 text-lg font-medium"
                            activeTabClass="w-fill bg-color3 rounded-[100px] cursor-pointer"
                        />
                    </div>
                </div>

                {/* Chat Input Box */}
                <div className="sticky bottom-0">
                    <ChatQueryTextField
                        query={query}
                        onChange={handleInputChange}
                        placeholder="list number of sales in each year?"
                    />
                </div>
            </div>
        </>

    );
};

export default Chat;