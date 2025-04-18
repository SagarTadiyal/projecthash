import { Home, BookOpen, MessageSquare, Bell, FileText } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const DashboardSearch = ({ activeTab }) => {

    const tabs = [
        { name: "Dashboard", icon: Home, path: "/dashboard" },
        { name: "Discussion", icon: MessageSquare, path: "/dashboard/discussion" },
        { name: "Study Material", icon: BookOpen, path: "/dashboard/studyMaterial" },
        { name: "Notice", icon: Bell, path: "/dashboard/notice" },
        { name: "PYQ's", icon: FileText, path: "/dashboard/pyqs" },
    ];

    return (
        <div className='w-full md:w-fit md:mx-auto rounded-3xl'>

            <div className="bg-black w-full flex items-center gap-4 flex-wrap text-white rounded-3xl text-sm md:text-md">
                {tabs.map((tab) => (

                    <Link
                        key={tab.name}
                        to={tab.path}
                        className={
                            `flex items-center px-6 py-3 text-sm font-medium transition-all duration-200 rounded-xl border-r
                            ${tab.name === activeTab ? "bg-gradient-to-r from-green-500 to-green-800 text-white shadow-md" : "text-gray-600 hover:text-gray-300 hover:bg-green-500"}  `
                        }
                    >
                        {tab.name === "Dashboard" ? (
                            <div className="flex items-center justify-center w-8 h-8 bg-white text-black bg-opacity-20 rounded-full mr-2">
                                <tab.icon className="h-4 w-4" />
                            </div>
                        ) : (
                            <tab.icon className="mr-2 h-4 w-4" />
                        )}
                        {tab.name}
                    </Link>
                ))}
            </div>


        </div>
    )
}

export default DashboardSearch