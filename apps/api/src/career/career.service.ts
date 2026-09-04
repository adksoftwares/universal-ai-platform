import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class CareerService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: string) {
    return this.prisma.careerProfile.findUnique({
      where: { userId },
    });
  }

  async updateProfile(userId: string, data: any) {
    return this.prisma.careerProfile.upsert({
      where: { userId },
      update: data,
      create: { ...data, userId },
    });
  }

  async createSkill(userId: string, data: any) {
    return this.prisma.skill.create({
      data: { ...data, userId },
    });
  }

  async getSkills(userId: string) {
    return this.prisma.skill.findMany({
      where: { userId },
    });
  }

  async updateSkill(userId: string, id: string, data: any) {
    return this.prisma.skill.update({
      where: { id, userId },
      data,
    });
  }

  async deleteSkill(userId: string, id: string) {
    return this.prisma.skill.delete({
      where: { id, userId },
    });
  }

  async createProject(userId: string, data: any) {
    return this.prisma.project.create({
      data: { ...data, userId },
    });
  }

  async getProjects(userId: string) {
    return this.prisma.project.findMany({
      where: { userId },
    });
  }

  async updateProject(userId: string, id: string, data: any) {
    return this.prisma.project.update({
      where: { id, userId },
      data,
    });
  }

  async deleteProject(userId: string, id: string) {
    return this.prisma.project.delete({
      where: { id, userId },
    });
  }
}
