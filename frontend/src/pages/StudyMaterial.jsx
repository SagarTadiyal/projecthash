import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, BookOpen, Video, File, Clock } from "lucide-react";

const StudyMaterial = () => {
    const notes = [
        {
            id: 1,
            title: "Data Structures Comprehensive Notes",
            subject: "Data Structures & Algorithms",
            uploadedBy: "Prof. Sharma",
            uploadDate: "Oct 10, 2023",
            fileSize: "2.4 MB",
            format: "PDF",
            
            downloads: 352,
        },
        {
            id: 2,
            title: "Introduction to Database Systems",
            subject: "DBMS",
            uploadedBy: "Prof. Gupta",
            uploadDate: "Sep 15, 2023",
            fileSize: "3.1 MB",
            format: "PDF",
            downloads: 289,
        },
        {
            id: 3,
            title: "Computer Networks Lecture Notes",
            subject: "Computer Networks",
            uploadedBy: "Prof. Patel",
            uploadDate: "Aug 22, 2023",
            fileSize: "1.8 MB",
            format: "PDF",
            downloads: 412,
        },
    ];

    const videos = [
        {
            id: 1,
            title: "Graph Algorithms Explained",
            subject: "Data Structures & Algorithms",
            duration: "32:45",
            uploadedBy: "Prof. Sharma",
            uploadDate: "Oct 5, 2023",
            views: 1240,
        },
        {
            id: 2,
            title: "SQL Query Optimization Techniques",
            subject: "DBMS",
            duration: "45:12",
            uploadedBy: "Prof. Gupta",
            uploadDate: "Sep 18, 2023",
            views: 856,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-medium">Study Material</h2>
                    <Button className='bg-white'>Upload Material</Button>
                </div>

                <Tabs defaultValue="notes" className="space-y-4">
                    <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
                        <TabsTrigger value="notes" className="cursor-pointer ">Notes</TabsTrigger>
                        <TabsTrigger value="videos" className="cursor-pointer ">Videos</TabsTrigger>
                        <TabsTrigger value="assignments" className="cursor-pointer ">Assignments</TabsTrigger>
                    </TabsList>

                    <TabsContent value="notes" className="space-y-4">
                        {notes.map(note => (
                            <Card key={note.id} className="border-none bg-white">
                                <CardHeader className="pb-2">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-blue-100 rounded-md">
                                                <FileText className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg">{note.title}</CardTitle>
                                                <p className="text-sm text-gray-500">
                                                    {note.subject} • Uploaded by {note.uploadedBy}
                                                </p>
                                            </div>
                                        </div>
                                        <Badge variant="outline" className="bg-gray-100">
                                            {note.format}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardFooter className="border-t py-3 flex justify-between">
                                    <div className="text-sm text-gray-500">
                                        {note.uploadDate} • {note.fileSize} • {note.downloads} downloads
                                    </div>
                                    <Button size="sm" variant="outline" className="gap-1">
                                        <Download className="h-4 w-4" />
                                        Download
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </TabsContent>

                    <TabsContent value="videos" className="space-y-4">
                        {videos.map(video => (
                            <Card key={video.id} className={"bg-white"}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-red-100 rounded-md">
                                            <Video className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg">{video.title}</CardTitle>
                                            <p className="text-sm text-gray-500">
                                                {video.subject} • Uploaded by {video.uploadedBy}
                                            </p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardFooter className="border-t py-3 flex justify-between">
                                    <div className="text-sm text-gray-500 flex items-center gap-2">
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {video.duration}
                                        </span> •
                                        <span>{video.uploadDate}</span> •
                                        <span>{video.views} views</span>
                                    </div>
                                    <Button size="sm" variant="outline">Watch</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </TabsContent>

                    <TabsContent value="assignments" className="p-4 bg-white rounded-lg shadow text-center">
                        <div className="py-8">
                            <File className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium mb-2">No assignments yet</h3>
                            <p className="text-gray-500 mb-4">Check back later for assignments</p>
                            <Button variant="outline">Refresh</Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>

        </div>
    );
};

export default StudyMaterial;
