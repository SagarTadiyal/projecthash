
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Calendar, Clock, FileText, Users } from "lucide-react";

const Notice = () => {
    const notices = [
        {
            id: 1,
            title: "End Semester Examination Schedule",
            category: "Academic",
            date: "Nov 15, 2023",
            content: "The End Semester Examinations for all departments will commence from December 10, 2023. The detailed schedule is available on the college website. Students are advised to clear all dues before collecting their admit cards.",
            important: true,
        },
        {
            id: 2,
            title: "Annual Technical Symposium - TechFest 2023",
            category: "Event",
            date: "Nov 10, 2023",
            content: "The annual technical symposium 'TechFest 2023' will be held from December 5-7, 2023. Students interested in participating in various competitions should register with their department coordinators by November 25.",
            important: false,
        },
        {
            id: 3,
            title: "Library Timing Change Notice",
            category: "Administrative",
            date: "Nov 8, 2023",
            content: "Due to the upcoming examination period, the central library will remain open from 8:00 AM to 12:00 AM starting from November 20, 2023 until the end of the examination period.",
            important: false,
        },
        {
            id: 4,
            title: "Placement Drive by TechCorp Inc.",
            category: "Placement",
            date: "Nov 5, 2023",
            content: "TechCorp Inc. will be conducting a placement drive for CS, IT and ECE students on November 18, 2023. Eligible students must register with the placement cell by November 15. The company is offering packages ranging from 8-12 LPA.",
            important: true,
        },
    ];

    const getCategoryColor = (category) => {
        switch (category) {
            case "Academic":
                return "bg-blue-100 text-blue-800";
            case "Event":
                return "bg-purple-100 text-purple-800";
            case "Administrative":
                return "bg-gray-100 text-gray-800";
            case "Placement":
                return "bg-green-100 text-green-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-1 container mx-auto px-4 py-8">

                <div className="mb-6">
                    <h2 className="text-2xl font-medium">Notices & Announcements</h2>
                </div>

                <div className="space-y-4">
                    {notices.map(notice => (
                        <Card key={notice.id} className={notice.important ? "border-l-4 border-l-red-500 bg-white border-none" : "bg-white border-none"}>
                            <CardHeader className="pb-2">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <CardTitle className="text-lg">{notice.title}</CardTitle>
                                            {notice.important && (
                                                <Badge variant="destructive" className="flex items-center gap-1">
                                                    <AlertCircle className="h-3 w-3" />
                                                    Important
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-gray-500">
                                            <Badge variant="outline" className={getCategoryColor(notice.category)}>
                                                {notice.category}
                                            </Badge>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {notice.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">{notice.content}</p>
                            </CardContent>
                            <CardFooter className="border-t py-2 text-sm text-gray-500">
                                {notice.category === "Event" && (
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4" />
                                        <span>Registration required</span>
                                    </div>
                                )}
                                {notice.category === "Academic" && (
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-4 w-4" />
                                        <span>View full schedule</span>
                                    </div>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>

        </div>
    );
};

export default Notice;
