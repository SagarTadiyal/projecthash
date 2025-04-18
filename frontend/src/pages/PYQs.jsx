import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Search } from "lucide-react";


const PYQs = () => {
  const previousYearQuestions = [
    {
      id: 1,
      title: "Data Structures and Algorithms",
      year: "2023",
      semester: "Odd",
      course: "CS301",
      fileSize: "1.8 MB",
      pages: 6,
      downloads: 423,
    },
    {
      id: 2,
      title: "Database Management Systems",
      year: "2023",
      semester: "Odd",
      course: "CS302",
      fileSize: "2.1 MB",
      pages: 5,
      downloads: 389,
    },
    {
      id: 3,
      title: "Computer Networks",
      year: "2023",
      semester: "Odd",
      course: "CS303",
      fileSize: "1.5 MB",
      pages: 4,
      downloads: 356,
    },
    {
      id: 4,
      title: "Operating Systems",
      year: "2022",
      semester: "Even",
      course: "CS304",
      fileSize: "1.9 MB",
      pages: 5,
      downloads: 512,
    },
    {
      id: 5,
      title: "Theory of Computation",
      year: "2022",
      semester: "Even",
      course: "CS305",
      fileSize: "1.6 MB",
      pages: 4,
      downloads: 298,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 container mx-auto px-4 py-8">


        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium">Previous Year Question Papers</h2>
          <Button className={"bg-white"}>Upload Question Paper</Button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search question papers"
                className="pl-8"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="odd">Odd Semester</SelectItem>
                <SelectItem value="even">Even Semester</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dsa">Data Structures</SelectItem>
                <SelectItem value="dbms">DBMS</SelectItem>
                <SelectItem value="cn">Computer Networks</SelectItem>
                <SelectItem value="os">Operating Systems</SelectItem>
                <SelectItem value="toc">Theory of Computation</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="2023">2023</TabsTrigger>
            <TabsTrigger value="2022">2022</TabsTrigger>
            <TabsTrigger value="2021">2021</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {previousYearQuestions.map(pyq => (
              <Card key={pyq.id} className={"bg-white border-none"}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-100 rounded-md">
                        <FileText className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{pyq.title}</CardTitle>
                        <p className="text-sm text-gray-500">
                          {pyq.course} • {pyq.semester} Semester {pyq.year}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-gray-100">
                      PDF
                    </Badge>
                  </div>
                </CardHeader>
                <CardFooter className="border-t py-3 flex justify-between">
                  <div className="text-sm text-gray-500">
                    {pyq.fileSize} • {pyq.pages} pages • {pyq.downloads} downloads
                  </div>
                  <Button size="sm" variant="outline" className="gap-1">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="2023" className="space-y-4">
            {previousYearQuestions.filter(pyq => pyq.year === "2023").map(pyq => (
              <Card key={pyq.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-100 rounded-md">
                        <FileText className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{pyq.title}</CardTitle>
                        <p className="text-sm text-gray-500">
                          {pyq.course} • {pyq.semester} Semester {pyq.year}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-gray-100">
                      PDF
                    </Badge>
                  </div>
                </CardHeader>
                <CardFooter className="border-t py-3 flex justify-between">
                  <div className="text-sm text-gray-500">
                    {pyq.fileSize} • {pyq.pages} pages • {pyq.downloads} downloads
                  </div>
                  <Button size="sm" variant="outline" className="gap-1">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="2022" className="space-y-4">
            {previousYearQuestions.filter(pyq => pyq.year === "2022").map(pyq => (
              <Card key={pyq.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-100 rounded-md">
                        <FileText className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{pyq.title}</CardTitle>
                        <p className="text-sm text-gray-500">
                          {pyq.course} • {pyq.semester} Semester {pyq.year}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-gray-100">
                      PDF
                    </Badge>
                  </div>
                </CardHeader>
                <CardFooter className="border-t py-3 flex justify-between">
                  <div className="text-sm text-gray-500">
                    {pyq.fileSize} • {pyq.pages} pages • {pyq.downloads} downloads
                  </div>
                  <Button size="sm" variant="outline" className="gap-1">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="2021" className="space-y-4">
            {previousYearQuestions.filter(pyq => pyq.year === "2021").map(pyq => (
              <Card key={pyq.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-100 rounded-md">
                        <FileText className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{pyq.title}</CardTitle>
                        <p className="text-sm text-gray-500">
                          {pyq.course} • {pyq.semester} Semester {pyq.year}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-gray-100">
                      PDF
                    </Badge>
                  </div>
                </CardHeader>
                <CardFooter className="border-t py-3 flex justify-between">
                  <div className="text-sm text-gray-500">
                    {pyq.fileSize} • {pyq.pages} pages • {pyq.downloads} downloads
                  </div>
                  <Button size="sm" variant="outline" className="gap-1">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>

    </div>
  );
};

export default PYQs;
