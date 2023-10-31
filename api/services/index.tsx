import Environment from "@/config/env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import LocalStorage from "@/lib/localStorage";

const baseUrl = Environment.NEXT_PUBLIC_BASE_URL;
const frontendAPIHeader = {
  "content-type": "application/json",
  authorization: `Bearer ${LocalStorage.get("token")}`,
};

const createRequest = (url: any) => ({ url, headers: frontendAPIHeader });

export const frontendAPI = createApi({
  reducerPath: "frontendAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/users/signup",
        method: "POST",
        body: credentials,
      }),
    }),

    verifyPhone: builder.mutation({
      query: (credentials) => ({
        url: "/users/phone-verification",
        method: "POST",
        body: credentials,
      }),
    }),

    setPassword: builder.mutation({
      query: (credentials) => ({
        url: "/users/set-password",
        method: "POST",
        body: credentials,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),

    initializeResetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/users/initialize-reset-password",
        method: "POST",
        body: credentials,
      }),
    }),

    resetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/users/reset-password",
        method: "POST",
        body: credentials,
      }),
    }),

    // subjects

    getAllSubjects: builder.query({
      query: (params) =>
        createRequest(`/subjects?return_only=${params.returnOnly}`),
    }),

    getSubjectById: builder.query({
      query: (subjectId) => createRequest(`/subjects/${subjectId}`),
    }),

    //  modules
    getAllModules: builder.query({
      query: (params) =>
        createRequest(
          `/modules?return_only=${params.returnOnly}&class=${params.class}`
        ),
    }),

    // Lessons

    getSpecificLesson: builder.query({
      query: (lessonId) => createRequest(`/lessons/${lessonId}`),
    }),

    // classes

    getAllClasses: builder.query({
      query: (params) =>
        createRequest(`/classes?return_only=${params.readOnly}`), // name,grade,query
    }),

    getSpecificClass: builder.query({
      query: (classId) => createRequest(`/classes/${classId}`),
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyPhoneMutation,
  useSetPasswordMutation,
  useLoginMutation,
  useInitializeResetPasswordMutation,
  useResetPasswordMutation,
  useGetAllSubjectsQuery,
  useGetSubjectByIdQuery,
  useGetAllModulesQuery,
  useGetSpecificLessonQuery,
  useGetAllClassesQuery,
  useGetSpecificClassQuery,
} = frontendAPI;
