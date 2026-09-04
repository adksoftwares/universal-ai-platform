import { EducationService } from './education.service.js';
export declare class EducationController {
    private readonly educationService;
    constructor(educationService: EducationService);
    private extractUserId;
    getEducationRecords(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        startDate: Date | null;
        endDate: Date | null;
        institution: string;
        qualification: string;
        field: string | null;
        achievements: string | null;
    }[]>;
    getEducationRecordById(userId: string, id: string): import(".prisma/client").Prisma.Prisma__EducationRecordClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        startDate: Date | null;
        endDate: Date | null;
        institution: string;
        qualification: string;
        field: string | null;
        achievements: string | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    createEducationRecord(userId: string, data: any): import(".prisma/client").Prisma.Prisma__EducationRecordClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        startDate: Date | null;
        endDate: Date | null;
        institution: string;
        qualification: string;
        field: string | null;
        achievements: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateEducationRecord(userId: string, id: string, data: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    deleteEducationRecord(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    getCourses(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        status: string;
        provider: string | null;
        code: string | null;
        instructor: string | null;
        credits: number | null;
    }[]>;
    getCourseById(userId: string, id: string): import(".prisma/client").Prisma.Prisma__CourseClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        status: string;
        provider: string | null;
        code: string | null;
        instructor: string | null;
        credits: number | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    createCourse(userId: string, data: any): import(".prisma/client").Prisma.Prisma__CourseClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        status: string;
        provider: string | null;
        code: string | null;
        instructor: string | null;
        credits: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateCourse(userId: string, id: string, data: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    deleteCourse(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    getSubjects(userId: string, courseId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        notes: string | null;
        courseId: string;
    }[]>;
    getSubjectById(userId: string, id: string): import(".prisma/client").Prisma.Prisma__SubjectClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        notes: string | null;
        courseId: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    createSubject(userId: string, courseId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        notes: string | null;
        courseId: string;
    }>;
    updateSubject(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        notes: string | null;
        courseId: string;
    }>;
    deleteSubject(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        notes: string | null;
        courseId: string;
    }>;
    getExams(userId: string, subjectId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        status: string;
        location: string | null;
        topics: string | null;
        subjectId: string;
    }[]>;
    getExamById(userId: string, id: string): import(".prisma/client").Prisma.Prisma__ExamClient<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        status: string;
        location: string | null;
        topics: string | null;
        subjectId: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    createExam(userId: string, subjectId: string, data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        status: string;
        location: string | null;
        topics: string | null;
        subjectId: string;
    }>;
    updateExam(userId: string, id: string, data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        status: string;
        location: string | null;
        topics: string | null;
        subjectId: string;
    }>;
    deleteExam(userId: string, id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        status: string;
        location: string | null;
        topics: string | null;
        subjectId: string;
    }>;
}
