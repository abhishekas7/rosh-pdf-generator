import React from 'react';
import TabComponent from "../components/TabComponent/TabComponent";
import LiveQuery from './LiveQuery';
import ChatQueryTextField from '../components/ChatQueryTextField';
import Link from 'next/link';


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

    const Docdata = [
        { text: "HR: Documents?" },
        { text: "HR: What benefits does the company provide?" },
        { text: "HR: Are there opportunities for career growth?" },
        { text: "HR: Is remote work an option?" },
        { text: "HR: Can you explain the team structure?" },
        { text: "HR: Do you provide any training programs?" },
        { text: "HR: What is the company's policy on overtime?" },
        { text: "HR: What is the dress code at work?" }
    ]


    const limitsData = [
        { limits: "Information provided depends on the quality of documents." },
        { limits: "Model shouldn't be used for the Top Secret and Secret information." },
        { limits: "Model shouldn't be used for unsuitable activities." },
    ];

    const LiveQueryContents: React.FC = () => {
        return (
            <div className="font-NotoSans max-w-[312px] flex flex-col text-left pt-[22px] bg-Neutral-color-6 text-Neutral-color-2 font-medium">
                <div className="grow flex flex-col overflow-y-auto">
                    <ol className="list-decimal list-inside">
                        {limitsData.map((item, index) => (
                            <li key={index} className="mb-[10px] text-Neutral-color-2">
                                {item.limits}
                            </li>
                        ))}
                    </ol>

                </div>
                <div className="pt-5 text-end   ">
                    <Link href={"seemore"} className="cursor-pointer Neutral-color-2 text-decoration-line-through">
                        See more
                    </Link>
                </div>
            </div>

        );
    };


    return (
        <>
            <div className="flex flex-col h-screen font-NotoSans">
                <div className="flex-grow overflow-y-auto">
                    <div className="mx-[149px] my-[31px] mt-[31px] mb-[32px]">
                        <h1 className="text-center font-NotoSans text-color1 font-medium text-[40px] leading-[70px]">
                            Hi 👋<br />
                            This is ROSHN AI Assistant!<br />
                            How can I help you?<br />
                        </h1>
                    </div>
                    <div className="text-center">
                        <span className='text-[16px] font-bold font-NotoSans m-[20px]'>Examples</span>
                        <TabComponent
                            tabs={[
                                {
                                    label: 'Live Query',
                                    content: (
                                        <LiveQuery
                                            chats={chatData}
                                            tabContent={
                                                <div className="max-w-[350px] bg-Neutral-color-6 pb-[20px]  px-[19px] rounded-[8px]" style={{height:"100%"}}>
                                                    <TabComponent
                                                        tabs={[
                                                            { label: 'Limitations', content: <LiveQueryContents /> },
                                                            { label: 'Skills', content: "Skills" },
                                                        ]}
                                                        activeTab={0}
                                                        tabBgColor="rounded-[100px] mt-[16px]"
                                                        tabClass="max-w-[276px] rounded-[100px] font-black cursor-pointer"
                                                        labelClass="text-lg font-medium px-[35px] py-[5px]"
                                                        activeTabClass="w-fill bg-Primary-color-3 rounded-[100px] cursor-pointer"
                                                    />

                                                </div>
                                                
                                            }
                                        />
                                    ),
                                },
                                {
                                    label: 'Documents', content: (
                                        <LiveQuery
                                            chats={Docdata}
                                            tabContent={
                                                <div className="bg-Neutral-color-6 h-100 px-[19px] rounded-[8px]">
                                                    <TabComponent
                                                        tabs={[
                                                            { label: 'Limitations', content: <LiveQueryContents /> },
                                                            { label: 'Skills', content: "Skills" },
                                                        ]}
                                                        activeTab={1}
                                                        tabBgColor="rounded-[100px] mt-[16px]"
                                                        tabClass="max-w-[276px] rounded-[100px] font-black cursor-pointer"
                                                        labelClass="text-lg font-medium px-[35px] py-[5px]"
                                                        activeTabClass="w-fill bg-Primary-color-3 rounded-[100px] cursor-pointer"
                                                    />
                                                </div>
                                            }
                                        />
                                    ),
                                },
                            ]}
                            activeTab={0}
                            tabBgColor="bg-color2 rounded-[100px] p-[5px] mt-[16px]"
                            tabClass="max-w-[auto] bg-color2 rounded-[100px] font-black cursor-pointer"
                            labelClass="px-[35px] py-2 text-lg font-medium"
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