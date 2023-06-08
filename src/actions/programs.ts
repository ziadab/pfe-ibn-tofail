import { request } from "@/helpers/request";

export const getPrograms = (program: string, faculty: number) => {
  return request.get<Program[]>("/programs", { params: { program, faculty } });
};

export const getProgram = (id: number | string) => {
  return request.get<Program>(`/programs/${id}`);
};

export interface Program {
  id: number;
  title: string;
  pdf_link: string;
  created_at: Date;
  img_link: string;
  program: string;
  faculty: number;
}
