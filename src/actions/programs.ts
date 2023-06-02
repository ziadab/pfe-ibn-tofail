import { request } from "@/helpers/request";

export const getPrograms = () => {
  return request.get<Program[]>("/programs");
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
}
