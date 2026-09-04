"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Plus, Upload, Filter, MoreHorizontal, File, FileCode, Image as ImageIcon, Search } from "lucide-react";

// Mock Documents
const mockDocuments: any[] = [];

export default function DocumentsPage() {
  const [isUploading, setIsUploading] = useState(false);

  const getFileIcon = (filename: string) => {
    if (filename.endsWith('.pdf')) return <FileText className="w-8 h-8 text-red-500" />;
    if (filename.endsWith('.jpg') || filename.endsWith('.png')) return <ImageIcon className="w-8 h-8 text-blue-500" />;
    return <File className="w-8 h-8 text-slate-500" />;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-6 h-6 text-indigo-500" /> Documents
          </h1>
          <p className="text-slate-500 text-sm mt-1">Your secure, intelligent personal vault.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={() => setIsUploading(true)}>
          <Upload className="w-4 h-4 mr-2" /> Upload Document
        </Button>
      </div>

      {/* Upload Overlay Mock */}
      {isUploading && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md shadow-xl border-0 overflow-hidden">
            <div className="bg-indigo-50 p-6 flex flex-col items-center justify-center border-b border-indigo-100">
              <Upload className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="font-semibold text-lg text-slate-800">Upload a Document</h3>
              <p className="text-sm text-slate-500 text-center mt-2">Support for PDF, JPG, PNG up to 10MB.</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <input type="file" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
              <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-slate-100">
                <Button variant="outline" onClick={() => setIsUploading(false)}>Cancel</Button>
                <Button className="bg-indigo-600">Upload & Analyze</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search documents by name, category, or content..." 
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white text-slate-700">
            <Filter className="w-4 h-4 mr-2" /> Categories
          </Button>
        </div>
      </div>

      {/* Document Grid / Empty State */}
      {mockDocuments.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 bg-slate-50 border border-slate-200 border-dashed rounded-xl text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
            <FileText className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">No documents yet</h3>
          <p className="text-slate-500 mb-4">Upload your first document to get started.</p>
          <Button className="bg-indigo-600" onClick={() => setIsUploading(true)}>
            <Upload className="w-4 h-4 mr-2" /> Upload Document
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockDocuments.map(doc => (
            <Link href={`/dashboard/documents/${doc.id}`} key={doc.id}>
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-indigo-300 group h-full flex flex-col">
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-indigo-50 transition-colors">
                      {getFileIcon(doc.filename)}
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-800 -mr-2 -mt-2">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <h3 className="font-semibold text-slate-800 text-sm truncate mb-1 group-hover:text-indigo-700 transition-colors" title={doc.filename}>
                    {doc.filename}
                  </h3>
                  
                  <div className="mt-auto pt-4 flex flex-wrap gap-2 items-center text-xs">
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium">{doc.category}</span>
                    {doc.status === 'processing' ? (
                      <span className="bg-amber-50 text-amber-600 px-2 py-1 rounded-md font-medium flex items-center">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping mr-1.5"></div> Processing
                      </span>
                    ) : (
                      <span className="text-slate-400">{doc.date}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
}
